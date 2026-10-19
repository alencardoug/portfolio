// Ciclo de vida da capa "Singularidade" numa caixa da página. Adaptado de github.com/alencardoug/linkedia-magazine
// (src/covers/singularidade/main.ts, licença MIT): o renderer, o movimento e a qualidade adaptativa são os mesmos;
// mudam o espaço (a caixa, não a janela) e o fim — na revista o clique entra em /revista; aqui o buraco engole a
// caixa e nasce de novo. A arte só começa quando a caixa aparece na tela e pausa fora dela. Sem WebGL2 em hardware,
// com cores forçadas ou com falha no primeiro quadro, fica a capa em HTML; com movimento reduzido, um quadro parado.
import {
  BIRTH_DELAY_MS,
  birthScale,
  diskLevel,
  exitState,
  FOLLOW,
  IDLE_AFTER_MS,
  ripple,
  RUSH,
  springStep,
  vividness,
  wander,
  type Vec,
} from "./motion";
import { calibratedScale, createQuality, initialScale, MIN_SCALE, observeFrame, type Quality } from "./quality";
import { Singularity } from "./renderer";
import { bitmapScale, paintCover } from "./snapshot";

const CANVAS_PIXELS = 1_500_000; // orçamento do canvas: é uma caixa, não a tela inteira
const HALF_RATE_AFTER_MS = 20_000; // sem interação: 30 fps…
const FREEZE_AFTER_MS = 90_000; // …depois um quadro parado até a próxima interação
const REBIRTH_MS = 600; // escuro depois de engolir a caixa, antes de nascer de novo
const TAP_SLOP_PX = 12; // além disso, entre pointerdown e click, é arrasto, não toque
/** Raio do buraco em relação à capa original: num quadrado, as bordas ficam perto dele e a lente as empurraria
 * para fora da caixa (o desvio da luz é proporcional ao raio). */
const HOLE = 0.75;
const FONT_WAIT_MS = 1500;

export interface DemoElements {
  box: HTMLElement;
  cover: HTMLElement;
  canvas: HTMLCanvasElement;
  hit: HTMLButtonElement;
  hint: HTMLElement | null;
}

export interface DemoHints {
  loading: string;
  live: string;
  liveTouch: string;
  still: string;
  /** O aparelho ficou lento demais para animar: fica o último quadro. */
  paused: string;
  fallback: string;
}

function canShowArt(): boolean {
  if (matchMedia("(forced-colors: active)").matches) return false;
  if (typeof TextMetrics === "undefined" || !("fontBoundingBoxAscent" in TextMetrics.prototype)) return false;
  return typeof WebGL2RenderingContext !== "undefined";
}

async function fontsReady(): Promise<void> {
  if (!document.fonts) return;
  await Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, FONT_WAIT_MS))]);
}

/** O buraco negro: renderer, movimento, qualidade adaptativa e o laço de quadros. */
class Art {
  live = false;
  private renderer: Singularity | null = null;
  private quality: Quality;
  private home: Vec = [0, 0];
  private hole: Vec = [0, 0];
  private vel: Vec = [0, 0];
  private pointer: Vec | null = null;
  private lastInput = -Infinity;
  private born = 0;
  private exitAt: { t: number; at: Vec; rs0: number; disk0: number; vivid0: number } | null = null;
  private wave: { t: number; at: Vec; amplitude: number } | null = null;
  private raf = 0;
  private last = 0;
  private frames = 0;
  private frozen = false;
  private visible = true;
  readonly still: boolean;
  private resizeTimer = 0;
  private rebirthTimer = 0;

  constructor(
    private readonly el: DemoElements,
    private readonly onFail: () => void,
    private readonly onSlow: () => void,
  ) {
    this.still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const [w, h] = this.size();
    this.quality = createQuality(initialScale(w, h, this.canvasRatio()), performance.now());
  }

  /** Cria o renderer e desenha um primeiro quadro; true quando ele foi conferido e a arte está no ar. */
  async start(): Promise<boolean> {
    this.renderer = Singularity.create(this.el.canvas);
    if (!this.renderer) return false;
    await fontsReady();
    if (!this.renderer) return false; // desmontado durante a espera
    this.rebuild();
    this.born = performance.now();
    this.lastInput = this.born;
    this.hole = this.home;
    if (!this.calibrate()) return this.abort();
    this.draw(this.born);
    if (!this.renderer.healthy()) return this.abort();
    this.live = true;
    this.el.box.dataset.art = "live";
    if (this.still) this.drawStill();
    else this.resume();
    return true;
  }

  /** O cursor ou o dedo conduz o buraco; qualquer interação também acorda um quadro parado. */
  steer(x: number, y: number): void {
    this.pointer = [x, y];
    this.wake();
  }

  wake(): void {
    this.lastInput = performance.now();
    if (this.frozen && this.live && !this.still) {
      this.frozen = false;
      this.resume();
    }
  }

  /** Engole a caixa a partir de `at` (px CSS da caixa; null = onde o buraco está) e nasce de novo. */
  exit(at: Vec | null): void {
    if (!this.live || this.still || this.quality.still || this.exitAt) return;
    const now = performance.now();
    const target = at ?? this.hole;
    const age = now - this.born;
    this.exitAt = { t: now, at: target, rs0: HOLE * birthScale(age), disk0: diskLevel(age), vivid0: vividness(age) };
    this.wave = { t: now, at: target, amplitude: 22 };
    this.frozen = false;
    this.resume();
  }

  setVisible(visible: boolean): void {
    this.visible = visible;
    if (visible) this.resume();
    else this.pause();
  }

  pause(): void {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  resume(): void {
    if (this.raf || !this.live || this.still || this.frozen || !this.visible || document.hidden) return;
    this.last = performance.now();
    this.raf = requestAnimationFrame((t) => this.tick(t));
  }

  /** Mudanças de tamanho da caixa: uma reconstrução depois da rajada. */
  scheduleRebuild(): void {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      if (!this.live) return;
      try {
        this.rebuild();
        if (this.still) this.drawStill();
        else if (this.frozen || !this.raf) this.draw(performance.now());
      } catch {
        this.fail();
      }
    }, 150);
  }

  fail(): void {
    this.dispose();
    this.onFail();
  }

  dispose(): void {
    this.pause();
    clearTimeout(this.resizeTimer);
    clearTimeout(this.rebirthTimer);
    this.renderer?.dispose();
    this.renderer = null;
    if (this.live) delete this.el.box.dataset.art;
    this.live = false;
  }

  /** Um nascimento novo, depois de engolir a caixa. */
  private reborn(): void {
    if (!this.live || !this.renderer) return;
    if (!this.renderer.healthy()) return this.fail();
    this.exitAt = null;
    this.wave = null;
    this.pointer = null;
    this.born = performance.now();
    this.lastInput = this.born;
    this.hole = this.home;
    this.vel = [0, 0];
    this.frozen = false;
    this.draw(this.born);
    this.resume();
  }

  private size(): [number, number] {
    return [this.el.box.clientWidth, this.el.box.clientHeight];
  }

  private abort(): false {
    this.renderer?.dispose();
    this.renderer = null;
    return false;
  }

  /**
   * Mede um quadro na escala mínima (depois de um aquecimento que absorve a compilação preguiçosa dos shaders) e
   * escolhe a escala inicial; false quando nem esse quadro é rápido o bastante para animar.
   */
  private calibrate(): boolean {
    const renderer = this.renderer;
    if (!renderer) return false;
    const [w, h] = this.size();
    renderer.setSize(w, h, this.canvasRatio(), MIN_SCALE);
    this.draw(this.born);
    renderer.finish();
    const t0 = performance.now();
    this.draw(this.born);
    renderer.finish();
    const scale = calibratedScale(performance.now() - t0, this.quality.scale);
    if (scale === null || !renderer.healthy()) return false;
    this.quality = createQuality(scale, performance.now());
    renderer.setSize(w, h, this.canvasRatio(), scale);
    return true;
  }

  private canvasRatio(): number {
    const [w, h] = this.size();
    return Math.min(devicePixelRatio || 1, 2, Math.sqrt(CANVAS_PIXELS / Math.max(w * h, 1)));
  }

  /** Pinta a capa em HTML na textura e dimensiona o canvas e os alvos para a caixa atual. */
  private rebuild(): void {
    const renderer = this.renderer;
    if (!renderer) return;
    const [w, h] = this.size();
    const side = renderer.maxTexture / Math.max(w, h);
    const bitmap = paintCover(this.el.cover, this.el.box, Math.min(bitmapScale(w, h, devicePixelRatio || 1), side));
    renderer.setCover(bitmap.canvas);
    bitmap.canvas.width = 0; // libera a cópia na CPU
    this.home = bitmap.anchor;
    renderer.setSize(w, h, this.canvasRatio(), this.quality.scale);
  }

  private tick(now: number): void {
    this.raf = 0;
    try {
      const interval = now - this.last;
      this.last = now;
      const before = this.quality.scale;
      this.quality = observeFrame(this.quality, interval, now);
      if (this.quality.still && !this.exitAt) return this.onSlow(); // aparelho lento demais: fica o último quadro
      if (this.quality.scale !== before) {
        const [w, h] = this.size();
        this.renderer?.setSize(w, h, this.canvasRatio(), this.quality.scale);
      }
      const idle = now - this.lastInput;
      if (!this.exitAt && idle > FREEZE_AFTER_MS) {
        this.frozen = true;
        return;
      }
      this.frames += 1;
      const skip = !this.exitAt && idle > HALF_RATE_AFTER_MS && this.frames % 2 === 1;
      if (!skip) this.draw(now, Math.min(interval, 50) / 1000);
      if (this.frames % 120 === 0 && !this.renderer?.healthy()) return this.fail();
      if (this.exitAt && exitState(now - this.exitAt.t).done) {
        this.rebirthTimer = window.setTimeout(() => this.reborn(), REBIRTH_MS);
        return;
      }
      this.raf = requestAnimationFrame((t) => this.tick(t));
    } catch {
      this.fail();
    }
  }

  private draw(now: number, dt = 0): void {
    const renderer = this.renderer;
    if (!renderer) return;
    const [, h] = this.size();
    let rs: number, fade = 1, disk: number, vivid: number, target: Vec;
    if (this.exitAt) {
      // A saída pode começar no meio do nascimento: parte de onde ele estava, sem saltar para o tamanho cheio.
      const { t, at, rs0, disk0, vivid0 } = this.exitAt;
      const state = exitState(now - t);
      const blend = Math.min(1, (now - t) / 150);
      rs = state.rs - 1 + rs0 + (1 - rs0) * blend;
      fade = state.fade;
      disk = disk0 + (1 - disk0) * blend;
      vivid = vivid0 + (1 - vivid0) * blend;
      target = at;
    } else {
      const age = now - this.born;
      rs = HOLE * birthScale(age);
      disk = diskLevel(age);
      vivid = vividness(age);
      if (!this.wave && age > BIRTH_DELAY_MS) this.wave = { t: this.born + BIRTH_DELAY_MS, at: this.home, amplitude: 10 };
      const steering = this.pointer && now - this.lastInput < IDLE_AFTER_MS;
      target =
        steering && this.pointer
          ? this.pointer
          : wander(this.home, Math.max(0, (now - this.lastInput - IDLE_AFTER_MS) / 1000), h);
    }
    [this.hole, this.vel] = springStep(this.hole, this.vel, target, this.exitAt ? RUSH : FOLLOW, dt);
    const wave = this.wave ? ripple(now - this.wave.t, this.wave.amplitude) : { radius: 0, amplitude: 0 };
    const at = this.wave?.at ?? [0, 0];
    renderer.render({
      hole: this.hole,
      rs,
      time: (now - this.born) / 1000,
      vivid,
      disk,
      fade,
      ripple: [at[0], at[1], wave.radius, wave.amplitude],
    });
  }

  /** Movimento reduzido: o estado final composto, uma vez (de novo depois de mudar de tamanho). */
  private drawStill(): void {
    const [, h] = this.size();
    this.hole = [this.home[0], this.home[1] + 0.2 * h];
    this.born = performance.now() - 10_000;
    this.renderer?.render({ hole: this.hole, rs: HOLE, time: 4, vivid: 1, disk: 1, fade: 1, ripple: [0, 0, 0, 0] });
  }
}

/** Liga a capa à caixa; devolve a limpeza (listeners, observadores e contexto WebGL). */
export function mountSingularity(el: DemoElements, hints: DemoHints): () => void {
  const listeners = new AbortController();
  const { signal } = listeners;
  const setHint = (text: string): void => {
    if (el.hint) el.hint.textContent = text;
  };
  const idle = (text: string): void => {
    el.hit.disabled = true; // sem arte animada, o botão não teria o que fazer
    setHint(text);
  };

  let art: Art | null = null;
  let disposed = false;
  let down: { x: number; y: number; moved: boolean } | null = null;
  const local = (e: { clientX: number; clientY: number }): Vec => {
    const r = el.box.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };

  el.box.addEventListener(
    "pointerdown",
    (e) => {
      down = { x: e.clientX, y: e.clientY, moved: false };
      art?.steer(...local(e));
    },
    { signal },
  );
  el.box.addEventListener(
    "pointermove",
    (e) => {
      if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > TAP_SLOP_PX) down.moved = true;
      if (e.pointerType === "mouse" || e.buttons !== 0) art?.steer(...local(e));
    },
    { signal },
  );
  el.box.addEventListener("pointercancel", () => (down = null), { signal });
  el.hit.addEventListener(
    "click",
    (e) => {
      const dragged = e.detail > 0 && down?.moved;
      down = null;
      if (dragged) return; // um arrasto conduz o buraco; não engole a caixa
      art?.wake();
      art?.exit(e.detail > 0 ? local(e) : null);
    },
    { signal },
  );
  document.addEventListener("visibilitychange", () => (document.hidden ? art?.pause() : art?.resume()), { signal });

  const start = async (): Promise<void> => {
    if (disposed) return;
    art?.dispose();
    art = null;
    if (!canShowArt()) return idle(hints.fallback);
    setHint(hints.loading);
    const current = new Art(
      el,
      () => idle(hints.fallback),
      () => idle(hints.paused),
    );
    art = current;
    try {
      const ok = await current.start();
      if (disposed || art !== current) return current.dispose(); // desmontado ou reiniciado durante a espera
      if (!ok) {
        current.dispose();
        return idle(hints.fallback);
      }
      if (current.still) {
        idle(hints.still); // movimento reduzido: um quadro parado, sem saída animada
      } else {
        el.hit.disabled = false;
        setHint(matchMedia("(hover: none)").matches ? hints.liveTouch : hints.live);
      }
      current.setVisible(visible);
    } catch {
      if (disposed || art !== current) current.dispose();
      else current.fail();
    }
  };

  el.canvas.addEventListener(
    "webglcontextlost",
    (e) => {
      e.preventDefault(); // permite restaurar
      art?.fail();
    },
    { signal },
  );
  el.canvas.addEventListener("webglcontextrestored", () => void start(), { signal });

  // Movimento reduzido ou cores forçadas ligados (ou desligados) com a página aberta: recomeça no modo certo.
  for (const query of ["(prefers-reduced-motion: reduce)", "(forced-colors: active)"]) {
    matchMedia(query).addEventListener("change", () => begun && void start(), { signal });
  }

  let visible = false;
  let begun = false;
  const io = new IntersectionObserver(
    ([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      if (visible && !begun) {
        begun = true;
        void start();
      }
      art?.setVisible(visible);
    },
    { rootMargin: "120px 0px" },
  );
  io.observe(el.box);

  let sized = false;
  const ro = new ResizeObserver(() => {
    if (sized) art?.scheduleRebuild();
    sized = true;
  });
  ro.observe(el.box);

  return () => {
    disposed = true;
    listeners.abort();
    io.disconnect();
    ro.disconnect();
    art?.dispose();
    art = null;
  };
}
