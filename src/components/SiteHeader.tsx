import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-royal flex items-center justify-center shadow-gold">
            <span className="font-display text-xl text-gradient-gold font-bold">P</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-primary">{site.business}</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Est. 2004</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors relative ${
                  active ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
                {active && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gold-gradient rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-royal text-primary-foreground text-sm font-medium shadow-elegant hover:shadow-gold transition-all hover:scale-105"
        >
          Get a Quote
        </Link>

        <button className="md:hidden p-2 text-primary" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-full bg-royal text-primary-foreground text-sm font-medium"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
