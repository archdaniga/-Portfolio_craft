import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Note" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="font-display text-lg tracking-tight text-fg">
          Daniel Nigatu
        </a>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Page">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="min-h-11 rounded-full border border-line px-4 text-sm text-fg transition-transform duration-150 ease-out active:scale-[0.96] sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-3 sm:hidden" aria-label="Page">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center font-display text-2xl text-fg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
