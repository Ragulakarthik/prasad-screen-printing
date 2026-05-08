import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import sampleWedding from "@/assets/sample-wedding.jpg";
import sampleTshirts from "@/assets/sample-tshirts.jpg";
import sampleVisiting from "@/assets/sample-visiting.jpg";
import sampleId from "@/assets/sample-id.jpg";
import sampleFlags from "@/assets/sample-flags.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prasad Screen Printing" },
      { name: "description", content: "Wedding invitations, custom apparel, visiting cards, ID cards, flags, pens and writing pads — printed with care." },
      { property: "og:title", content: "Services — Prasad Screen Printing" },
      { property: "og:description", content: "Everything we print, from wedding cards to cricket jerseys." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Wedding Invitations",
    img: sampleWedding,
    desc: "Traditional Hindu, Muslim, Christian and modern designs. Gold foiling, embossed lettering, custom motifs and matching envelopes.",
    features: ["Gold & silver foil", "Embossed lettering", "Custom designs", "Matching envelopes"],
  },
  {
    title: "Custom T-Shirts & Jerseys",
    img: sampleTshirts,
    desc: "Personalized cricket and football jerseys, school uniforms, group T-shirts. Print any name, number or design on any color.",
    features: ["Names & numbers (e.g. Dhoni 07)", "Sports team kits", "School uniforms", "Bulk orders welcome"],
  },
  {
    title: "Visiting & Business Cards",
    img: sampleVisiting,
    desc: "Premium 300+ GSM stock with matte, glossy or textured finishes. Logo embossing and gold foil available.",
    features: ["Premium card stock", "Matte / glossy finish", "Gold foil & embossing", "100 to 10,000 cards"],
  },
  {
    title: "ID Cards & Writing Pads",
    img: sampleId,
    desc: "School & corporate ID cards with lanyards, custom writing pads and letter heads for offices and institutions.",
    features: ["PVC & paper IDs", "Lanyards included", "School letter pads", "Office stationery"],
  },
  {
    title: "Flags, Banners & Pens",
    img: sampleFlags,
    desc: "Promotional flags, banners, posters and customized pens with logos for corporate gifting and events.",
    features: ["Event flags & banners", "Promotional pens", "Corporate gifting", "Posters & standees"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <span className="ornament">Our craft</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-primary">Everything we print</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
          Three decades of experience across every kind of print — from sacred wedding invitations
          to weekend cricket jerseys. If it can hold ink, we can print on it.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 space-y-20">
        {services.map((s, i) => (
          <div key={s.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-gradient opacity-15 blur-2xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gold/20">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-medium">0{i + 1}</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl text-primary">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
