"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Ui } from "@/content/types";

type Theme = "light" | "dark";

const NUDGE_SEEN_KEY = "themeNudgeSeen";
const NUDGE_DELAY_MS = 3000;
const NUDGE_VISIBLE_MS = 3000;

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle({ labels }: { labels: Ui["theme"] }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [showNudge, setShowNudge] = useState(false);

  // Marca que a pessoa já interagiu com o tema (clique, tecla ou preferência
  // salva). Uma vez verdadeiro, o balão não deve mais aparecer.
  const interactedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const dismissNudge = useCallback(() => {
    interactedRef.current = true;
    clearTimers();
    setShowNudge(false);
    try {
      window.localStorage.setItem(NUDGE_SEEN_KEY, "1");
    } catch {
      /* localStorage indisponível — segue sem persistir */
    }
  }, [clearTimers]);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    setMounted(true);

    // Só agenda o balão se:
    //  - a pessoa ainda não escolheu um tema manualmente (sem "theme" salvo);
    //  - o balão ainda não foi mostrado nenhuma vez ("themeNudgeSeen").
    // O tema pode ter mudado sozinho (prefers-color-scheme) — ainda assim
    // mostramos, mas uma única vez, garantido pela flag persistida.
    let hasExplicitChoice = false;
    let alreadySeen = false;
    try {
      hasExplicitChoice = window.localStorage.getItem("theme") !== null;
      alreadySeen = window.localStorage.getItem(NUDGE_SEEN_KEY) === "1";
    } catch {
      /* sem localStorage: não insiste com o balão */
      alreadySeen = true;
    }

    if (hasExplicitChoice || alreadySeen) {
      interactedRef.current = true;
      return () => clearTimers();
    }

    const showTimer = setTimeout(() => {
      if (interactedRef.current) return;
      setShowNudge(true);
      try {
        window.localStorage.setItem(NUDGE_SEEN_KEY, "1");
      } catch {
        /* idem */
      }
      const hideTimer = setTimeout(() => setShowNudge(false), NUDGE_VISIBLE_MS);
      timersRef.current.push(hideTimer);
    }, NUDGE_DELAY_MS);
    timersRef.current.push(showTimer);

    return () => clearTimers();
  }, [clearTimers]);

  const toggle = useCallback(() => {
    dismissNudge();
    setTheme((current) => {
      const next: Theme = current === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      try {
        window.localStorage.setItem("theme", next);
      } catch {
        /* localStorage indisponível — segue sem persistir */
      }
      return next;
    });
  }, [dismissNudge]);

  // Atalho de teclado: "T" alterna o tema (ignora campos de texto e combos).
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "t" && event.key !== "T") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const el = document.activeElement as HTMLElement | null;
      if (
        el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.tagName === "SELECT" ||
          el.isContentEditable)
      ) {
        return;
      }

      event.preventDefault();
      toggle();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle]);

  // Rótulo = a ação (para onde o toggle leva).
  const target = mounted && theme === "dark" ? labels.toLight : labels.toDark;
  const activate = labels.activateTemplate.replace("{target}", target);
  const nudge = labels.nudgeTemplate.replace("{target}", target);
  const [hintBefore, hintAfter] = labels.hintTemplate
    .replace("{target}", target)
    .split("{kbd}");

  return (
    <>
      <span className="theme-hint" aria-hidden="true">
        {hintBefore}
        <kbd>T</kbd>
        {hintAfter}
      </span>
      <span className="theme-toggle-wrap">
        <button
          type="button"
          className="icon-button theme-toggle"
          onClick={toggle}
          aria-label={activate}
          title={`${activate} — T`}
        >
          {mounted && theme === "dark" ? (
            <Sun aria-hidden="true" size={18} />
          ) : (
            <Moon aria-hidden="true" size={18} />
          )}
          <span className="tt-label">{target}</span>
        </button>
        {showNudge && (
          <span className="theme-nudge" role="status">
            {nudge}
          </span>
        )}
      </span>
    </>
  );
}
