import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">

        <p className="text-sm font-semibold">
          BHARAT BHOKRE<span className="text-blue-500">.</span>
        </p>

        <div className="flex items-center gap-6">

          <a
            href="#projects"
            className="text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Work
          </a>

          <a
            href="#about"
            className="text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            About
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Contact
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

        </div>

        <p className="text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Bharat Bhokre
        </p>

      </div>
    </footer>
  );
}

export default Footer;