import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/reseller")({
  head: () => ({
    meta: [
      { title: "Reseller — Chantika Label" },
      { name: "description", content: "Bergabung menjadi reseller resmi Chantika Label. Dapatkan harga khusus, support marketing, dan akses koleksi terbaru." },
      { property: "og:title", content: "Reseller Chantika Label" },
      { property: "og:description", content: "Jadi reseller resmi & dapatkan harga spesial." },
    ],
  }),
  component: ResellerPage,
});

const benefits = [
  { title: "Harga Spesial", desc: "Diskon hingga 30% dari harga retail untuk semua koleksi." },
  { title: "Tanpa Minimum Order", desc: "Mulai dari 1 pcs untuk member, fleksibel sesuai kebutuhanmu." },
  { title: "Support Marketing", desc: "Akses foto produk, katalog digital, dan materi promosi siap pakai." },
  { title: "Update Koleksi", desc: "Info pertama untuk launching produk dan restock bestseller." },
  { title: "Komunitas Reseller", desc: "Grup WA aktif untuk sharing tips jualan & promo eksklusif." },
  { title: "Dropship Friendly", desc: "Bisa dropship dengan nama toko kamu sendiri, tanpa modal stok." },
];

const tiers = [
  { name: "Member", min: "1 pcs", disc: "10%", note: "Untuk pemula" },
  { name: "Reseller", min: "5 pcs", disc: "20%", note: "Paling populer", featured: true },
  { name: "Agen", min: "20 pcs", disc: "30%", note: "Untuk volume besar" },
];

function ResellerPage() {
  const [form, setForm] = useState({ name: "", city: "", phone: "", platform: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Chantika Label, saya tertarik jadi reseller.%0A%0ANama: ${form.name}%0AKota: ${form.city}%0AHP: ${form.phone}%0APlatform jualan: ${form.platform}%0APesan: ${form.message}`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Reseller Program</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Tumbuh bersama Chantika</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
          Bagikan keindahan modest fashion sambil membangun bisnismu sendiri.
          Bergabunglah dengan ratusan reseller Chantika Label di seluruh Indonesia.
        </p>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8">
        <h2 className="mb-12 text-center font-display text-3xl italic sm:text-4xl">Keuntungan jadi reseller</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={b.title} className="border border-border bg-background p-8">
              <p className="mb-3 font-display text-3xl italic text-accent">0{i + 1}</p>
              <h3 className="mb-2 font-display text-xl">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-secondary px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-12 text-center font-display text-3xl italic sm:text-4xl">Pilih level kamu</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`relative border bg-background p-10 text-center ${t.featured ? "border-accent shadow-lg" : "border-border"}`}>
                {t.featured && <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-accent px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-primary-foreground">Recommended</span>}
                <h3 className="font-display text-2xl">{t.name}</h3>
                <p className="my-6 font-display text-5xl italic text-accent">{t.disc}</p>
                <p className="text-sm text-muted-foreground">Minimum {t.min}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="daftar" className="mx-auto max-w-2xl px-4 py-20 sm:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Daftar Sekarang</p>
          <h2 className="font-display text-3xl italic sm:text-4xl">Form pendaftaran reseller</h2>
          <p className="mt-4 text-sm text-muted-foreground">Isi form di bawah, tim kami akan menghubungimu via WhatsApp.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Nama Lengkap" required>
            <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
          </Field>
          <Field label="Kota" required>
            <input required maxLength={80} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="input-field" />
          </Field>
          <Field label="No. WhatsApp" required>
            <input required type="tel" maxLength={20} pattern="[0-9+\s-]+" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field" placeholder="08xxxxxxxxxx" />
          </Field>
          <Field label="Platform Jualan">
            <input maxLength={100} value={form.platform} onChange={(e) => setForm({ ...form, platform: e.target.value })} className="input-field" placeholder="Shopee / Instagram / Offline / dll" />
          </Field>
          <Field label="Pesan Tambahan">
            <textarea maxLength={500} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" />
          </Field>
          <button type="submit" className="w-full bg-primary px-6 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-accent">
            Kirim via WhatsApp
          </button>
          <p className="text-center text-xs text-muted-foreground">Atau hubungi langsung <a href="https://instagram.com/chantikalabel" className="underline">@chantikalabel</a></p>
        </form>
      </section>

      <SiteFooter />
      <style>{`.input-field{width:100%;background:transparent;border:1px solid hsl(var(--border));padding:.75rem 1rem;font-size:.875rem;outline:none;transition:border-color .2s}.input-field:focus{border-color:hsl(var(--accent))}`}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}{required && " *"}</span>
      {children}
    </label>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-8">
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link to="/" className="hover:text-accent">Beranda</Link>
          <Link to="/reseller" className="hover:text-accent">Reseller</Link>
          <Link to="/faq" className="hover:text-accent">FAQ</Link>
          <Link to="/about" className="hover:text-accent">Tentang</Link>
        </nav>
        <Link to="/" className="font-display text-2xl tracking-tight">Chantika <span className="italic text-accent">Label</span></Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link to="/size-guide" className="hover:text-accent">Panduan Ukuran</Link>
          <Link to="/care" className="hover:text-accent">Perawatan</Link>
          <Link to="/contact" className="hover:text-accent">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-4 py-16 sm:px-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-2xl">Chantika <span className="italic text-accent">Label</span></p>
          <p className="mt-4 text-sm text-muted-foreground">Modest fashion. Made slow, worn often.</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Belanja</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="https://shopee.co.id/chantikalabel" className="hover:text-foreground">Shopee Store</a></li>
            <li><Link to="/" className="hover:text-foreground">Koleksi</Link></li>
            <li><Link to="/reseller" className="hover:text-foreground">Reseller</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Bantuan</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/size-guide" className="hover:text-foreground">Panduan Ukuran</Link></li>
            <li><Link to="/care" className="hover:text-foreground">Cara Perawatan</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Hubungi</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Bogor, Indonesia</li>
            <li><a href="https://instagram.com/chantikalabel" className="hover:text-foreground">@chantikalabel</a></li>
            <li><a href="https://shopee.co.id/chantikalabel" className="hover:text-foreground">Shopee</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Chantika Label. All rights reserved.
      </div>
    </footer>
  );
}
