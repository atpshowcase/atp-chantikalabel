import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteHeader, SiteFooter } from "./reseller";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Chantika Label" },
      { name: "description", content: "Pertanyaan yang sering diajukan tentang produk, pemesanan, pengiriman, dan reseller Chantika Label." },
      { property: "og:title", content: "FAQ Chantika Label" },
      { property: "og:description", content: "Jawaban untuk pertanyaan seputar produk & layanan kami." },
    ],
  }),
  component: FAQPage,
});

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
      { q: "Bahan apa yang digunakan?", a: "Handsock kami menggunakan jersey premium, tencel cloud modal, dan seamless rajut. Khimar menggunakan arabian crepe dengan jatuh kain yang lembut & tidak menerawang." },
      { q: "Apakah warna di foto sama dengan aslinya?", a: "Kami berusaha menampilkan warna seakurat mungkin, namun mungkin ada sedikit perbedaan akibat pencahayaan & layar perangkat." },
      { q: "Apakah produk ready stock?", a: "Sebagian besar produk ready stock. Untuk pre-order, akan ada keterangan jelas di deskripsi produk." },
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

function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Bantuan</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Pertanyaan Umum</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
          Temukan jawaban untuk pertanyaan yang paling sering ditanyakan pelanggan kami.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
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
