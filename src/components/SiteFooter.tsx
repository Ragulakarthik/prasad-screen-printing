import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-royal text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-gradient-gold font-semibold">{site.business}</div>
          <p className="mt-3 text-sm text-primary-foreground/70 max-w-sm">
            {site.tagline}. Wedding invitations, visiting cards, custom apparel, ID cards & more —
            handcrafted with care by {site.owner}.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-4">Reach us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> {site.phone}</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> {site.email}</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {site.business}. All rights reserved.</p>
          <p>Designed with love by Karthik for {site.owner}.</p>
        </div>
      </div>
    </footer>
  );
}
