"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
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
  }, []);

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
  const target = mounted && theme === "dark" ? "modo claro" : "modo escuro";

  return (
    <>
      <span className="theme-hint" aria-hidden="true">
        tecle <kbd>T</kbd> para {target}
      </span>
      <button
        type="button"
        className="icon-button theme-toggle"
        onClick={toggle}
        aria-label={`Ativar ${target}`}
        title={`Ativar ${target} — tecla T`}
      >
        {mounted && theme === "dark" ? (
          <Sun aria-hidden="true" size={18} />
        ) : (
          <Moon aria-hidden="true" size={18} />
        )}
        <span className="tt-label">{target}</span>
      </button>
    </>
  );
}
