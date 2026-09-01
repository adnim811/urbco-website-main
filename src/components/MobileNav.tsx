"use client";

import { useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/f26rush", label: "F26 Rush" },
  { href: "/about", label: "About Us" },
];

export default function MobileNav() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <details ref={menuRef} className="group md:hidden">
      <summary
        aria-label="Toggle navigation menu"
        aria-controls="mobile-navigation"
        className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-foreground transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urb-maize [&::-webkit-details-marker]:hidden"
      >
        <Menu aria-hidden="true" className="group-open:hidden" />
        <X aria-hidden="true" className="hidden group-open:block" />
      </summary>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="absolute inset-x-0 top-full border-b border-white/10 bg-background/95 px-4 py-5 shadow-2xl backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-4 py-3 text-base text-muted transition-colors hover:bg-white/10 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-urb-maize px-4 py-3 font-medium text-urb-blue"
          >
            Apply Now →
          </Link>
        </div>
      </nav>
    </details>
  );
}
