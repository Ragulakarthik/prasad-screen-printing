import { createFileRoute, Link } from "@tanstack/react-router";
import workTshirt from "@/assets/work-tshirt-swaggers.jpg";
import workMenuFolders from "@/assets/work-menu-folders.jpg";
import workCapsWhite from "@/assets/work-caps-white.jpg";
import workCapsRed from "@/assets/work-caps-red.jpg";
import workPens from "@/assets/work-pens.jpg";
import workLanyards from "@/assets/work-lanyards.jpg";
import workJuteBags from "@/assets/work-jute-bags.jpg";
import workHospitalKits from "@/assets/work-hospital-kits.jpg";
import sampleWedding from "@/assets/sample-wedding.jpg";
import sampleVisiting from "@/assets/sample-visiting.jpg";
import sampleId from "@/assets/sample-id.jpg";
import sampleFlags from "@/assets/sample-flags.jpg";
import heroCards from "@/assets/hero-cards.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Prasad Screen Printing" },
      { name: "description", content: "Real customer work from Prasad Screen Printing — wedding cards, custom T-shirts, caps, menu folders, pens, lanyards, jute bags and more." },
      { property: "og:title", content: "Gallery — Prasad Screen Printing" },
      { property: "og:description", content: "Real customer work from two decades of screen printing craft." },
      { property: "og:image", content: workTshirt },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: workTshirt, label: "Custom Group T-Shirts", span: "md:col-span-2 md:row-span-2" },
  { src: workCapsRed, label: "Branded Caps — RKTA Kadapa" },
  { src: workMenuFolders, label: "Restaurant Menu Folders" },
  { src: workJuteBags, label: "Wedding Jute Return Gifts" },
  { src: workPens, label: "Promotional Pens" },
  { src: workLanyards, label: "College ID Lanyards" },
  { src: workCapsWhite, label: "Corporate Caps", span: "md:col-span-2" },
  { src: workHospitalKits, label: "Hospital Kit Bags" },
  { src: heroCards, label: "Wedding Cards" },
  { src: sampleWedding, label: "Premium Invitations" },
  { src: sampleVisiting, label: "Visiting Cards" },
  { src: sampleId, label: "ID Cards & Pads" },
  { src: sampleFlags, label: "Flags & Pens", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-24">
      <div className="text-center">
        <span className="ornament">Real customer work</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-primary">Our gallery</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
          Actual orders delivered from our press — T-shirts, caps, bags, pens, lanyards and more.
          Want something similar?
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
    </section>
  );
}
