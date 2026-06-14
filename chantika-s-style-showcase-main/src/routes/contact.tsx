import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, MessageCircle, ShoppingBag, MapPin } from "lucide-react";
import { SiteHeader, SiteFooter } from "./reseller";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Chantika Label" },
      { name: "description", content: "Hubungi Chantika Label via WhatsApp, Instagram, atau Shopee untuk pertanyaan produk & pesanan." },
      { property: "og:title", content: "Hubungi Chantika Label" },
      { property: "og:description", content: "Kami siap membantu pertanyaanmu." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Halo Chantika Label,%0A%0ANama: ${form.name}%0AEmail: ${form.email}%0ASubjek: ${form.subject}%0A%0A${form.message}`);
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Get in Touch</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Hubungi Kami</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
          Tim customer service kami aktif Senin–Sabtu, 09.00–17.00 WIB.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16 sm:px-8">
        <div className="mb-14 grid gap-4 md:grid-cols-4">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
            { icon: Instagram, label: "Instagram", value: "@chantikalabel", href: "https://instagram.com/chantikalabel" },
            { icon: ShoppingBag, label: "Shopee", value: "chantikalabel", href: "https://shopee.co.id/chantikalabel" },
            { icon: MapPin, label: "Workshop", value: "Bogor, Jawa Barat", href: "#" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="border border-border bg-background p-6 text-center transition hover:border-accent">
              <c.icon className="mx-auto mb-3 h-6 w-6 text-accent" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</p>
              <p className="mt-2 text-sm">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center font-display text-3xl italic">Kirim Pesan</h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">Isi form, pesan akan diteruskan ke WhatsApp kami.</p>
          <form onSubmit={submit} className="space-y-4">
            <input required maxLength={100} placeholder="Nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-accent" />
            <input required type="email" maxLength={255} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-accent" />
            <input required maxLength={150} placeholder="Subjek" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-accent" />
            <textarea required maxLength={1000} rows={5} placeholder="Pesan" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-accent" />
            <button className="w-full bg-primary px-6 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-accent">Kirim Pesan</button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
