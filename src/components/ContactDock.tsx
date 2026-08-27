"use client";

import { CalendarDays, Mail, MessageCircle, X, MessageSquare } from "lucide-react";
import { useState } from "react";
import type { ExternalLinks } from "@/content/types";

type Props = {
  links: ExternalLinks;
};

export function ContactDock({ links }: Props) {
  const [open, setOpen] = useState(false);

  const emailHref = links.email
    ? `mailto:${links.email}?subject=${encodeURIComponent(
        "Contato profissional — oportunidade em Dados/IA",
      )}&body=${encodeURIComponent(
        "Olá, Douglas.\n\nEncontrei seu portfólio e gostaria de conversar sobre uma oportunidade profissional na área de Dados/IA.\n\nPodemos agendar uma conversa?\n\nObrigado(a).",
      )}`
    : null;

  const actions = [
    links.calendly
      ? {
          label: "Agendar",
          description: "Agendar uma conversa",
          href: links.calendly,
          icon: CalendarDays,
          external: true,
        }
      : null,
    emailHref
      ? {
          label: "E-mail",
          description: "Enviar e-mail",
          href: emailHref,
          icon: Mail,
          external: false,
        }
      : null,
    links.whatsappUrl
      ? {
          label: "WhatsApp",
          description: "Enviar WhatsApp",
          href: links.whatsappUrl,
          icon: MessageCircle,
          external: true,
        }
      : null,
  ].filter(Boolean) as Array<{
    label: string;
    description: string;
    href: string;
    icon: typeof Mail;
    external: boolean;
  }>;

  if (actions.length === 0) return null;

  return (
    <aside className="contact-dock" aria-label="Contato rápido">
      <button
        className="contact-mobile-trigger"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Fechar opções de contato" : "Abrir opções de contato"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
        <span>Contato</span>
      </button>

      <div className={`contact-actions ${open ? "is-open" : ""}`}>
        {actions.map(({ label, description, href, icon: Icon, external }, index) => (
          <a
            key={label}
            href={href}
            className={index === 0 ? "contact-action primary" : "contact-action"}
            aria-label={description}
            title={description}
            {...(external
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
          >
            <Icon size={19} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
