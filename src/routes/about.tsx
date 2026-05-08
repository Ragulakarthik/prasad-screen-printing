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
            Two decades.<br /><span className="text-gradient-gold italic">One family.</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {site.business} began in 2004 in a small workshop with a single screen, a squeegee, and
            a promise: every print would leave the press only if it was perfect. Two decades later,
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

      {/* Founder portrait */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid md:grid-cols-[260px_1fr] gap-8 items-center rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-3 bg-gold-gradient opacity-20 blur-2xl rounded-full" />
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold/40 shadow-gold bg-secondary flex items-center justify-center">
              {/* Replace /founder.jpg with Karthik's father's photo (place file in public/founder.jpg) */}
              <img
                src="/founder.jpg"
                alt={`${site.owner}, founder of ${site.business}`}
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <span className="absolute font-display text-5xl text-primary/40 select-none">RP</span>
            </div>
          </div>
          <div>
            <span className="ornament">Meet the founder</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary">{site.owner}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              For over twenty years, {site.owner} has personally overseen every order that leaves the
              studio — from the first sketch to the final pack. His eye for detail and care for each
              customer is the heartbeat of {site.business}.
            </p>
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
