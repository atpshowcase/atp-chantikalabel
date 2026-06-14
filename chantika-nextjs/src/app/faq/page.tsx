"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiteHeader, SiteFooter } from '@/components/SiteHeaderFooter';


const faqs = [
  {
    cat: "Pemesanan",
    items: [
      { q: "Bagaimana cara order di Chantika Label?", a: "Semua pesanan diproses melalui Shopee resmi kami di shopee.co.id/chantikalabel. Pilih produk, masukkan ke keranjang, lalu checkout seperti biasa." },
      { q: "Apakah bisa COD (bayar di tempat)?", a: "Ya, untuk wilayah yang didukung kurir Shopee. Pilih opsi COD saat checkout di Shopee." },
      { q: "Apakah ada minimum order?", a: "Tidak ada minimum order untuk pembelian retail. Untuk reseller, minimum mulai dari 1 pcs." },
    ],
  },
  {
    cat: "Pengiriman",
    items: [
      { q: "Berapa lama pesanan diproses?", a: "Pesanan diproses dalam 1-2 hari kerja setelah pembayaran terkonfirmasi. Estimasi pengiriman tergantung kurir & lokasi tujuan (rata-rata 2-5 hari kerja)." },
      { q: "Apakah ada gratis ongkir?", a: "Ya, untuk pembelian di atas Rp 500.000 ke seluruh Indonesia (S&K berlaku). Voucher gratis ongkir Shopee juga bisa digunakan." },
      { q: "Dikirim dari mana?", a: "Semua pesanan dikirim dari workshop kami di Bogor, Jawa Barat." },
    ],
  },
  {
    cat: "Produk",
    items: [
      { q: "Bahan apa yang digunakan?", a: "Kami menggunakan bahan Sifon Arab / Arabian Chiffon khusus (seperti Sifon Jetblack atau Hareer) yang karakteristiknya sangat jatuh, ringan, breathable (tidak pengap untuk bernafas), dan elegan." },
      { q: "Apakah warnanya menerawang?", a: "Untuk material sifon, kami menggunakan desain 2 layer atau lebih pada khimar dan cadar agar tetap syar'i dan tidak menerawang saat dikenakan." },
      { q: "Apakah produk ready stock?", a: "Mayoritas koleksi khimar dan cadar sifon kami ready stock. Jika pre-order, akan ada keterangan jelas." },
    ],
  },
  {
    cat: "Pengembalian",
    items: [
      { q: "Bagaimana kebijakan return?", a: "Produk dapat di-return maksimal 3 hari setelah diterima, jika ada cacat produksi atau salah kirim. Produk harus dalam kondisi belum dipakai & kemasan utuh." },
      { q: "Apakah bisa tukar ukuran?", a: "Bisa, selama stok tersedia dan dalam masa garansi 3 hari. Biaya pengiriman tukar ditanggung pembeli." },
    ],
  },
  {
    cat: "Reseller",
    items: [
      { q: "Bagaimana cara jadi reseller?", a: "Daftar melalui halaman Reseller kami, isi form pendaftaran, dan tim akan menghubungi via WhatsApp untuk proses selanjutnya." },
      { q: "Berapa diskon untuk reseller?", a: "Diskon mulai dari 10% (Member), 20% (Reseller), hingga 30% (Agen) tergantung volume pembelian." },
      { q: "Bisa dropship?", a: "Ya, kami mendukung sistem dropship. Pengiriman menggunakan nama toko kamu tanpa label Chantika di luar paket." },
    ],
  },
];

export default function FAQPage() {
  const heroRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
      }
      if (faqRef.current) {
        gsap.fromTo(
          faqRef.current.children,
          { y: 30, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: faqRef.current, start: "top 85%" }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section ref={heroRef} className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Bantuan</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Pertanyaan Umum</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
          Temukan jawaban untuk pertanyaan yang paling sering ditanyakan pelanggan kami.
        </p>
      </section>

      <section ref={faqRef} className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
        {faqs.map((group) => (
          <div key={group.cat} className="mb-12">
            <h2 className="mb-6 font-display text-2xl italic text-accent">{group.cat}</h2>
            <div className="space-y-3">
              {group.items.map((item) => <FAQItem key={item.q} {...item} />)}
            </div>
          </div>
        ))}
        <div className="mt-12 border-t border-border pt-10 text-center">
          <p className="text-sm text-muted-foreground">Masih ada pertanyaan?</p>
          <a href="https://wa.me/6281234567890" className="mt-4 inline-block border border-primary px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground">Hubungi Kami</a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border bg-background">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}
