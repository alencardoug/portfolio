"use client";

import { CalendarDays, Mail, MessageCircle, X, MessageSquare } from "lucide-react";
import { useState } from "react";
import type { ExternalLinks, Ui } from "@/content/types";

type Props = {
  links: ExternalLinks;
  labels: Ui["contactDock"];
};

export function ContactDock({ links, labels }: Props) {
  const [open, setOpen] = useState(false);

  const emailHref = links.email
    ? `mailto:${links.email}?subject=${encodeURIComponent(
        labels.emailSubject,
      )}&body=${encodeURIComponent(labels.emailBody)}`
    : null;

  const actions = [
    links.calendly
      ? {
          label: labels.scheduleLabel,
          description: labels.scheduleDesc,
          href: links.calendly,
          icon: CalendarDays,
          external: true,
        }
      : null,
    emailHref
      ? {
          label: labels.emailLabel,
          description: labels.emailDesc,
          href: emailHref,
          icon: Mail,
          external: false,
        }
      : null,
    links.whatsappUrl
      ? {
          label: labels.whatsappLabel,
          description: labels.whatsappDesc,
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
    <aside className="contact-dock" aria-label={labels.ariaLabel}>
      <button
        className="contact-mobile-trigger"
        type="button"
        aria-expanded={open}
        aria-label={open ? labels.closeTrigger : labels.openTrigger}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
        <span>{labels.trigger}</span>
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
