import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import sp1 from "@/assets/ai/p1.jpg";
import sp2 from "@/assets/ai/p2.jpg";
import sp3 from "@/assets/ai/p3.jpg";
import sp4 from "@/assets/ai/p4.jpg";
import sp5 from "@/assets/ai/p5.jpg";
import sp6 from "@/assets/ai/p6.jpg";
import sp7 from "@/assets/ai/p7.jpg";
import sp8 from "@/assets/ai/p8.jpg";
import sp9 from "@/assets/ai/p9.jpg";
import sp10 from "@/assets/ai/p10.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chantika Label — Khimar, Handsock & Kaos Kaki Muslimah" },
      { name: "description", content: "Chantika Label menghadirkan khimar arabian crepe, handsock, dan kaos kaki muslimah berkualitas premium. Nyaman, syar'i, dan timeless." },
      { property: "og:title", content: "Chantika Label — Modest Essentials" },
      { property: "og:description", content: "Khimar, handsock, dan kaos kaki muslimah berkualitas premium." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

const shopeeUrl = "https://shopee.co.id/chantikalabel";

const products = [
  { img: sp1, name: "Handsock Daily Jersey Malay", price: "Rp 19.999", tag: "Bestseller" },
  { img: sp2, name: "Moslema Socks Thumb Basic Polos", price: "Rp 12.399" },
  { img: sp3, name: "Moslema Socks Thumb Polka Telapak Hitam", price: "Rp 11.999" },
  { img: sp4, name: "Inner Bandana by Chantika Label", price: "Rp 14.499", tag: "New" },
  { img: sp5, name: "Basic Handsock by Chantika Label", price: "Rp 20.999", tag: "Bestseller" },
  { img: sp6, name: "Handsock Seamless by Chantika Label", price: "Rp 17.999" },
  { img: sp7, name: "Handsock Basic x Tencel Cloud Modal", price: "Rp 31.999", tag: "Bestseller" },
  { img: sp8, name: "Handsock Thumbhole by Chantika Label", price: "Rp 19.999" },
  { img: sp9, name: "Basic Handsock Malay", price: "Rp 20.999" },
  { img: sp10, name: "Moslema Socks Thumb Basic", price: "Rp 12.399", tag: "New" },
];

const categories = [
  { label: "Handsock", img: sp1 },
  { label: "Inner & Ciput", img: sp4 },
  { label: "Kaos Kaki Muslimah", img: sp2 },
  { label: "Seamless", img: sp6 },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement */}
      <div className="flex items-center justify-between bg-primary px-4 py-2 text-xs text-primary-foreground sm:px-8">
        <button aria-label="prev" className="opacity-70 hover:opacity-100"><ChevronLeft className="h-4 w-4" /></button>
        <p className="tracking-wide">Gratis ongkir untuk pembelian di atas Rp 500.000 — seluruh Indonesia</p>
        <button aria-label="next" className="opacity-70 hover:opacity-100"><ChevronRight className="h-4 w-4" /></button>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-8">
          <nav className="hidden items-center gap-6 text-sm tracking-wide md:flex">
            <a href="#shop" className="hover:text-accent">Koleksi</a>
            <Link to="/reseller" className="hover:text-accent">Reseller</Link>
            <Link to="/faq" className="hover:text-accent">FAQ</Link>
            <Link to="/about" className="hover:text-accent">Tentang</Link>
          </nav>
          <Link to="/" className="font-display text-2xl tracking-tight">Chantika <span className="italic text-accent">Label</span></Link>
          <div className="flex items-center gap-4">
            <Link to="/size-guide" className="hidden text-sm hover:text-accent md:inline">Panduan Ukuran</Link>
            <Link to="/care" className="hidden text-sm hover:text-accent md:inline">Perawatan</Link>
            <Link to="/contact" className="hidden text-sm hover:text-accent md:inline">Kontak</Link>
            <button aria-label="search" className="hover:text-accent"><Search className="h-5 w-5" /></button>
            <button aria-label="wishlist" className="hover:text-accent"><Heart className="h-5 w-5" /></button>
            <button aria-label="account" className="hover:text-accent"><User className="h-5 w-5" /></button>
            <button aria-label="bag" className="hover:text-accent"><ShoppingBag className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <img src={hero} alt="Koleksi Chantika Label" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] opacity-90">Koleksi Musim Ini</p>
          <h1 className="font-display text-5xl italic leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Lembut sebagai <br />pagi di Bogor
          </h1>
          <p className="mt-6 max-w-md text-sm opacity-90 sm:text-base">
            Kain ringan, potongan flowy, palet hangat — busana modest yang dibuat untuk hari-hari Anda.
          </p>
          <a href="#shop" className="mt-8 inline-flex items-center justify-center border border-primary-foreground bg-transparent px-10 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-primary-foreground hover:text-primary">
            Belanja Sekarang
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl italic sm:text-5xl">Kategori</h2>
          <a href="#shop" className="text-xs uppercase tracking-[0.25em] underline-offset-4 hover:underline">Lihat semua</a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {categories.map((c) => (
            <a key={c.label} href="#shop" className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-center font-display text-xl italic">{c.label}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Bestseller</p>
          <h2 className="font-display text-4xl italic sm:text-5xl">Favorit dari Chantika</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                {p.tag && (
                  <span className="absolute left-3 top-3 bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">{p.tag}</span>
                )}
                <button className="absolute right-3 top-3 rounded-full bg-background/90 p-2 text-foreground opacity-0 transition group-hover:opacity-100" aria-label="wishlist">
                  <Heart className="h-4 w-4" />
                </button>
                <a href={shopeeUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-x-3 bottom-3 translate-y-3 bg-primary py-3 text-center text-[11px] uppercase tracking-[0.25em] text-primary-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  Beli di Shopee
                </a>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-lg">{p.name}</h3>
                <span className="text-sm text-muted-foreground">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story / Editorial split */}
      <section id="story" className="bg-secondary">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 md:grid-cols-2">
          <div className="aspect-[4/5] md:aspect-auto">
            <img src={story} alt="Cerita Chantika" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:px-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">Cerita Kami</p>
            <h2 className="font-display text-4xl italic leading-tight sm:text-5xl">Dibuat dengan cinta dari Bogor</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Chantika Label lahir dari kecintaan pada kain yang jatuh sempurna, potongan yang
              memeluk dengan lembut, dan warna-warna yang bicara tanpa berteriak. Setiap helai
              dijahit oleh penjahit lokal kami di Bogor — perlahan, penuh perhatian, dan penuh rasa.
            </p>
            <Link to="/about" className="mt-8 inline-flex w-fit items-center justify-center border border-primary bg-transparent px-10 py-3 text-xs uppercase tracking-[0.25em] text-primary transition hover:bg-primary hover:text-primary-foreground">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-8">
        <h2 className="font-display text-3xl italic sm:text-4xl">Bergabung dengan cerita kami</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Dapatkan akses awal ke koleksi baru, inspirasi gaya, dan penawaran khusus.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md items-center gap-0 border border-border bg-background">
          <input
            type="email"
            required
            placeholder="Email Anda"
            className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button className="bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-accent">
            Daftar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-4 py-16 sm:px-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl">Chantika <span className="italic text-accent">Label</span></p>
            <p className="mt-4 text-sm text-muted-foreground">Modest fashion. Made slow, worn often.</p>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Belanja</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#shop" className="hover:text-foreground">Semua Produk</a></li>
              <li><a href="#shop" className="hover:text-foreground">New In</a></li>
              <li><a href="#shop" className="hover:text-foreground">Bestseller</a></li>
              <li><a href="#shop" className="hover:text-foreground">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Bantuan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/size-guide" className="hover:text-foreground">Panduan Ukuran</Link></li>
              <li><Link to="/care" className="hover:text-foreground">Cara Perawatan</Link></li>
              <li><Link to="/reseller" className="hover:text-foreground">Reseller</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Hubungi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bogor, Indonesia</li>
              <li><a href="https://instagram.com/chantikalabel" className="hover:text-foreground">@chantikalabel</a></li>
              <li><a href="https://shopee.co.id/chantikalabel" className="hover:text-foreground">Shopee Store</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 px-4 py-6 text-center text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Chantika Label. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
