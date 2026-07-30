import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, PhoneCall, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactDetails, navigationLinks, siteMeta } from "@/content/siteContent";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(183,220,235,0.6),_transparent_62%)]" />
      <header className="sticky top-0 z-30 border-b border-line/80 bg-canvas/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[0.40625rem] sm:px-6 lg:relative lg:px-8">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={siteMeta.logoImage}
              alt={`${siteMeta.name} logo`}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight text-brand-950 sm:text-xl">{siteMeta.name}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium text-muted transition hover:text-brand-800",
                    isActive && "text-brand-900",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-600"
            >
              <PhoneCall className="h-4 w-4" />
              Enquire Now
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-brand-900 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-line bg-surface px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-brand-50 hover:text-brand-900",
                      isActive && "bg-brand-50 text-brand-900",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="rounded-2xl bg-accent-500 px-4 py-3 text-sm font-medium text-white"
              >
                Start an enquiry
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-line bg-brand-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={siteMeta.logoImage}
                alt={`${siteMeta.name} logo`}
                className="h-28 w-28 object-contain"
              />
              <div>
                <p className="text-2xl font-semibold text-white">{siteMeta.name}</p>
                <p className="mt-1 text-sm text-brand-200">{siteMeta.tagline}</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-brand-100">{siteMeta.parent}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Explore</p>
            <div className="mt-4 flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-brand-100 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Contact</p>
            <p className="mt-4 text-sm leading-7 text-brand-100">{contactDetails.address}</p>
            <p className="mt-2 text-sm text-brand-200">{contactDetails.note}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
