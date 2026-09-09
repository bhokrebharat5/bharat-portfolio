import { useState } from "react";
import { ArrowUpRight,  Menu,   X, } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

function Navbar({ theme, setTheme }) {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-5">

        <nav className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-lg backdrop-blur-xl">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--text)] text-xs font-bold text-[var(--background)]">
                BB
              </span>

              <span className="hidden text-sm font-semibold tracking-wide sm:block">
                BHARAT BHOKRE
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">

              <ThemeToggle
                theme={theme}
                setTheme={setTheme}
              />

              <a
                href="#contact"
                className="hidden items-center gap-1 rounded-full bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--background)] sm:flex"
              >
                Let's Talk
                <ArrowUpRight size={14} />
              </a>

              {/* Mobile menu */}
              <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
                aria-label="Toggle menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>

            </div>
          </div>

          {/* Mobile navigation */}
          {open && (
            <div className="border-t border-[var(--border)] pt-4 md:hidden">

              <div className="flex flex-col">

                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="border-b border-[var(--border)] py-4 text-sm text-[var(--text-secondary)]"
                  >
                    {link.name}
                  </a>
                ))}

              </div>

            </div>
          )}

        </nav>

      </div>
    </header>
  );
}

export default Navbar;