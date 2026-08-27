import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {children}
      <ExternalLinkIcon size={14} aria-hidden="true" />
    </a>
  );
}
