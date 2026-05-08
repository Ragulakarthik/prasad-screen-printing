import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Award, Clock, Phone } from "lucide-react";
import heroCards from "@/assets/hero-cards.jpg";
import sampleWedding from "@/assets/sample-wedding.jpg";
import sampleTshirts from "@/assets/sample-tshirts.jpg";
import sampleVisiting from "@/assets/sample-visiting.jpg";
import sampleId from "@/assets/sample-id.jpg";
import sampleFlags from "@/assets/sample-flags.jpg";
import { site, stats } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prasad Screen Printing — Wedding Cards, T-Shirts & Custom Prints" },
      { name: "description", content: "Handcrafted wedding invitations, visiting cards, custom T-shirts, ID cards, flags & more. Family-run screen printing studio since 1995." },
      { property: "og:title", content: "Prasad Screen Printing" },
      { property: "og:description", content: "Wedding cards, visiting cards, custom T-shirts, ID cards, flags and more." },
      { property: "og:image", content: heroCards },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Wedding Invitations", img: sampleWedding, desc: "Gold foil, embossed, traditional & modern designs.", to: "/services" },
  { title: "Custom Apparel", img: sampleTshirts, desc: "T-shirts, jerseys with names, numbers & logos.", to: "/services" },
  { title: "Visiting Cards", img: sampleVisiting, desc: "Premium business cards with elegant finishes.", to: "/services" },
  { title: "ID Cards & Pads", img: sampleId, desc: "School & corporate IDs, lanyards, writing pads.", to: "/services" },
  { title: "Flags & Pens", img: sampleFlags, desc: "Promotional flags, banners, customized pens.", to: "/services" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="ornament">Since 1995</span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-primary">
              Every print<br />tells a <span className="text-gradient-gold italic">story.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              From the first wedding invitation to the last cricket jersey — {site.owner} and his
              family have been crafting beautiful screen prints for three decades.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-royal text-primary-foreground font-medium shadow-elegant hover:shadow-gold transition-all hover:scale-[1.02]">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors">
                View our work
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> Trusted since 1995</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> Fast turnaround</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gold-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gold/30">
              <img src={heroCards} alt="Luxurious wedding invitation cards with gold foil"
                width={1600} height={1200}
                className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-card border border-border/60 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-primary">10,000+</div>
                  <div className="text-xs text-muted-foreground">Happy customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-gradient-gold">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="ornament"><Sparkles className="w-3 h-3" /> What we craft</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">A press for every occasion</h2>
          <p className="mt-4 text-muted-foreground">From sacred wedding rituals to weekend cricket — we print on almost anything you can imagine.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              to={s.to}
              key={s.title}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 ${
                i === 0 ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img src={s.img} alt={s.title} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-royal p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 opacity-20"
               style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.78 0.13 80) 0%, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.78 0.13 80) 0%, transparent 50%)" }} />
          <div className="relative">
            <span className="ornament">Let's create together</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary-foreground">
              Have a special print in mind?
            </h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
              Tell us what you need — wedding cards, jerseys, ID cards or anything custom. We'll send a quote the same day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-primary font-semibold shadow-gold hover:scale-105 transition-transform">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <Phone className="w-4 h-4" /> Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
