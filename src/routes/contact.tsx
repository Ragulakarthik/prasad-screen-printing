import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Check } from "lucide-react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prasad Screen Printing" },
      { name: "description", content: "Get a quote for wedding cards, T-shirts, visiting cards or any custom print. WhatsApp, call or email Prasad Screen Printing." },
      { property: "og:title", content: "Contact — Prasad Screen Printing" },
      { property: "og:description", content: "Reach us via WhatsApp, phone, email or fill the quote form." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(5, "Tell us a bit more").max(800),
});

const services = [
  "Wedding Invitations",
  "Custom T-Shirts / Jerseys",
  "Visiting Cards",
  "ID Cards / Writing Pads",
  "Flags / Banners / Pens",
  "Other",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Hi ${site.business}!\n\nName: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nService: ${parsed.data.service}\n\n${parsed.data.message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-24">
      <div className="text-center">
        <span className="ornament">Let's talk</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-primary">Get in touch</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
          Tell us what you'd like printed. We'll respond the same day with a quote and design ideas.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-5 gap-8">
        {/* Contact details */}
        <div className="lg:col-span-2 space-y-4">
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"
             className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-elegant hover:border-gold/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-[oklch(0.7_0.18_145)] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
              <div className="mt-1 font-display text-lg text-primary">Chat with us</div>
              <div className="text-sm text-muted-foreground">Fastest way to reach us</div>
            </div>
          </a>

          <a href={`tel:${site.phone.replace(/\s/g, "")}`}
             className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-elegant hover:border-gold/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-royal text-primary-foreground flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
              <div className="mt-1 font-display text-lg text-primary">{site.phone}</div>
              <div className="text-sm text-muted-foreground">Speak directly with {site.owner}</div>
            </div>
          </a>

          <a href={`mailto:${site.email}`}
             className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-elegant hover:border-gold/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-gold-gradient text-primary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="mt-1 font-display text-lg text-primary break-all">{site.email}</div>
            </div>
          </a>

          <a href={site.googleMapsUrl} target="_blank" rel="noreferrer"
             className="block p-5 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-elegant hover:border-gold/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit · Tap for directions</div>
                <div className="mt-1 text-sm text-foreground">{site.address}</div>
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {site.hours}
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-elegant">
            {sent ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-primary">Opening WhatsApp…</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                  Your message is ready in WhatsApp. Hit send there and we'll reply shortly.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-gold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" placeholder="Karthik" error={errors.name} />
                  <Field label="Phone" name="phone" placeholder="+91 9XXXX XXXXX" error={errors.phone} />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Service
                  </label>
                  <select name="service" defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition">
                    <option value="" disabled>Choose what you need</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea name="message" rows={5} placeholder="Tell us about quantity, design ideas, deadline…"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition resize-none" />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <button type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-royal text-primary-foreground font-medium shadow-elegant hover:shadow-gold transition-all hover:scale-[1.01]">
                  Send via WhatsApp <Send className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Submitting opens WhatsApp with your message ready to send.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, error }: { label: string; name: string; placeholder: string; error?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input name={name} placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
