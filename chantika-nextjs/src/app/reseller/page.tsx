"use client";
import { SiteHeader, SiteFooter } from '@/components/SiteHeaderFooter';
import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


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

export default function ResellerPage() {
  const [form, setForm] = useState({ name: "", city: "", phone: "", platform: "", message: "" });
  const heroRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero fade up
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
      }

      // Benefits stagger
      if (benefitsRef.current) {
        gsap.fromTo(
          benefitsRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
            scrollTrigger: { trigger: benefitsRef.current, start: "top 80%" }
          }
        );
      }

      // Tiers stagger
      if (tiersRef.current) {
        gsap.fromTo(
          tiersRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: tiersRef.current, start: "top 80%" }
          }
        );
      }

      // Form fade up
      if (formRef.current) {
        gsap.fromTo(
          formRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out",
            scrollTrigger: { trigger: formRef.current, start: "top 80%" }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

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
      <section ref={heroRef} className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Reseller Program</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Tumbuh bersama Chantika</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
          Bagikan kenyamanan berhijab syar'i dengan Sifon Arab berkualitas tinggi.
          Raih untung maksimal berkat harga pabrik termurah kami. Bergabunglah dengan ratusan agen dan reseller Chantika Label.
        </p>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8">
        <h2 className="mb-12 text-center font-display text-3xl italic sm:text-4xl">Keuntungan jadi reseller</h2>
        <div ref={benefitsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <div ref={tiersRef} className="grid gap-6 md:grid-cols-3">
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
      <section id="daftar" ref={formRef} className="mx-auto max-w-2xl px-4 py-20 sm:px-8">
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

