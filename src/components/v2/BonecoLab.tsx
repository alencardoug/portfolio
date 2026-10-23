"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Ui } from "@/content/types";
import { bonecoManifesto, type BonecoPose } from "@/content/v2";
import { Boneco } from "./Boneco";

/*
 * Laboratório temporário da primeira atividade da V2: o boneco nas duas poses,
 * com a troca automática de rosto e o sorriso no hover, e cada rosto travado
 * para conferência. Sai do ar quando a Tela 1 real ocupar /v2/.
 */

const POSES: { id: BonecoPose; label: string }[] = [
  { id: "em-pe", label: "Em pé · Tela 1" },
  { id: "mesa", label: "À mesa · Tela 6" },
];

function Opcoes<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
}: {
  legend: string;
  name: string;
  value: T;
  options: { id: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="v2-lab-opts">
        {options.map((o) => (
          <label key={o.id} className="v2-lab-opt">
            <input
              type="radio"
              name={name}
              value={o.id}
              checked={value === o.id}
              onChange={() => onChange(o.id)}
            />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function BonecoLab({ themeLabels }: { themeLabels: Ui["theme"] }) {
  const [rosto, setRosto] = useState("auto");
  const [movimento, setMovimento] = useState<"on" | "off">("on");
  const rostoFixo = rosto === "auto" ? undefined : rosto;

  return (
    <main className="v2-lab" data-motion={movimento}>
      <header className="v2-lab-head">
        <div>
          <p className="v2-lab-kicker">Portfólio V2 · laboratório</p>
          <h1>Boneco</h1>
          <p className="v2-lab-lede">
            Figura de palito do mockup + rosto recortado pelo contorno do maxilar. Os
            rostos sérios se alternam a cada 10 segundos; passe o mouse (ou encoste o
            dedo) no boneco para ele sorrir.
          </p>
        </div>
        <div className="v2-lab-theme">
          <ThemeToggle labels={themeLabels} />
        </div>
      </header>

      <form className="v2-lab-controls" onSubmit={(e) => e.preventDefault()}>
        <Opcoes
          legend="Rosto"
          name="rosto"
          value={rosto}
          onChange={setRosto}
          options={[
            { id: "auto", label: "Automático (alterna + sorri no hover)" },
            ...Object.keys(bonecoManifesto.rostos).map((id) => ({ id, label: id })),
          ]}
        />
        <Opcoes
          legend="Movimento"
          name="movimento"
          value={movimento}
          onChange={setMovimento}
          options={[
            { id: "on", label: "Flutuando" },
            { id: "off", label: "Parado" },
          ]}
        />
      </form>

      <div className="v2-lab-grid">
        {POSES.map((p) => (
          <figure key={p.id} className="v2-lab-card v2-lab-pose">
            <div className="v2-lab-stage">
              <div className="v2-flutua">
                <Boneco pose={p.id} rostoFixo={rostoFixo} />
              </div>
            </div>
            <figcaption>{p.label}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
