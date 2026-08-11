"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

export default function MoxfieldLink({
  href,
  commander,
  className,
  children,
}: {
  href: string;
  commander: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("moxfield_click", { commander })}
      className={className}
    >
      {children}
    </a>
  );
}
