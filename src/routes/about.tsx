import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import workshop from "@/assets/about-workshop.jpg";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prasad Screen Printing" },
      { name: "description", content: "Meet Ragula Prasad — three decades of craft, generations of trust. Family-run screen printing studio." },
      { property: "og:title", content: "About — Prasad Screen Printing" },
      { property: "og:description", content: "The story behind Prasad Screen Printing." },
      { property: "og:image", content: workshop },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Crafted with love", desc: "Every print is checked by hand before it leaves our press." },
  { icon: Award, title: "Trusted since 2004", desc: "Two decades of weddings, celebrations and events." },
  { icon: Sparkles, title: "Quality first", desc: "Premium inks, premium paper, premium finishes — always." },
  { icon: Users, title: "Family-run", desc: "Personal service from a family who knows your name." },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="ornament">Our story</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-primary leading-tight">
            Three decades.<br /><span className="text-gradient-gold italic">One family.</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {site.business} began in 1995 in a small workshop with a single screen, a squeegee, and
            a promise: every print would leave the press only if it was perfect. Three decades later,
            that promise still holds.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded and run by <span className="text-primary font-medium">{site.owner}</span>, our
            studio has grown to serve thousands of families across weddings, schools, sports teams
            and businesses — but the philosophy is the same as day one. Hand-checked. Heart-felt.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gold-gradient opacity-15 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gold/20">
            <img src={workshop} alt="Screen printing in action" loading="lazy"
              className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-card p-6 border border-border/60 shadow-card hover:shadow-elegant transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg text-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <span className="ornament">A note from the founder</span>
        <blockquote className="mt-6 font-display italic text-2xl md:text-3xl text-primary leading-relaxed">
          "When you place an order with us, you're not just buying a print —
          you're trusting us with a moment in your life. We never forget that."
        </blockquote>
        <div className="mt-6 text-sm text-muted-foreground">— {site.owner}, Founder</div>
      </section>
    </>
  );
}
