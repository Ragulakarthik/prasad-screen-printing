import { createFileRoute, Link } from "@tanstack/react-router";
import sampleWedding from "@/assets/sample-wedding.jpg";
import sampleTshirts from "@/assets/sample-tshirts.jpg";
import sampleVisiting from "@/assets/sample-visiting.jpg";
import sampleId from "@/assets/sample-id.jpg";
import sampleFlags from "@/assets/sample-flags.jpg";
import heroCards from "@/assets/hero-cards.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Prasad Screen Printing" },
      { name: "description", content: "Browse samples of wedding cards, custom apparel, visiting cards, ID cards and more from Prasad Screen Printing." },
      { property: "og:title", content: "Gallery — Prasad Screen Printing" },
      { property: "og:description", content: "Sample work from three decades of screen printing craft." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroCards, label: "Wedding Cards", span: "md:col-span-2 md:row-span-2" },
  { src: sampleTshirts, label: "Sports Jerseys" },
  { src: sampleVisiting, label: "Visiting Cards" },
  { src: sampleWedding, label: "Premium Invitations" },
  { src: sampleId, label: "ID Cards & Pads" },
  { src: sampleFlags, label: "Flags & Pens", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-24">
      <div className="text-center">
        <span className="ornament">Sample work</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-primary">Our gallery</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
          A small glimpse of the prints leaving our press every week. Want something similar?
          <Link to="/contact" className="text-gold ml-1 hover:underline">Get in touch</Link>.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
        {items.map((it, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 shadow-card ${it.span ?? ""}`}
          >
            <img src={it.src} alt={it.label} loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 text-primary-foreground font-display text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
              {it.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Real customer photos coming soon — uploaded by Karthik.
      </p>
    </section>
  );
}
