const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Note" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 md:px-8 md:py-16">
        <div className="md:col-span-6">
          <p className="font-display text-4xl tracking-tight md:text-5xl">Daniel Nigatu</p>
          <p className="mt-4 max-w-sm text-bg/70">
            Architecture studies, interiors, and identity. Drawn in Addis Ababa.
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-xs tracking-widest text-bg/50 uppercase">Index</p>
          <ul className="mt-4 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-bg/85 transition-colors duration-200 hover:text-bg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="text-xs tracking-widest text-bg/50 uppercase">Colophon</p>
          <p className="mt-4 text-sm text-bg/70">
            Set in Fraunces and Outfit. Ivory paper, charcoal ink, one teal.
          </p>
          <p className="mt-4 text-sm text-bg/70">Addis Ababa</p>
        </div>
      </div>
      <div className="border-t border-bg/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-bg/55 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Daniel Nigatu</p>
          <p className="tabular-nums">No. 08 — eight studies in this issue</p>
        </div>
      </div>
    </footer>
  );
}
