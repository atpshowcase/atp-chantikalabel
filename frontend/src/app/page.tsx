
"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Search, Heart, User, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import sp1 from "@/assets/ai/sp1.png";
import sp2 from "@/assets/ai/sp2.png";
import sp4 from "@/assets/ai/sp4.png";
import sp6 from "@/assets/ai/sp6.png";


const shopeeUrl = "https://shopee.co.id/chantikalabel";

const products = [
  { img: sp1, name: "Khimar Sifon Arab Jetblack", price: "Rp 65.000", tag: "Bestseller" },
  { img: sp2, name: "Cadar Tali Sifon Arab 2 Layer", price: "Rp 15.000" },
  { img: sp2, name: "Niqab Bandana Poni Sifon Arab", price: "Rp 25.000" },
  { img: sp4, name: "French Khimar Sifon Premium", price: "Rp 85.000", tag: "New" },
  { img: sp1, name: "Khimar Sifon Arab 2 Layer", price: "Rp 70.000", tag: "Bestseller" },
  { img: sp6, name: "Cadar Elang Sifon Arab", price: "Rp 20.000" },
  { img: sp6, name: "Khimar Instan Jumbo Sifon", price: "Rp 75.000", tag: "Bestseller" },
  { img: sp1, name: "Cadar Tali Kerut Sifon", price: "Rp 18.000" },
  { img: sp1, name: "Niqab Butterfly Sifon Arab", price: "Rp 35.000" },
  { img: sp2, name: "Paket Khimar & Cadar", price: "Rp 80.000", tag: "New" },
];

const categories = [
  { label: "Khimar", img: sp1 },
  { label: "French Khimar", img: sp4 },
  { label: "Cadar Tali", img: sp2 },
  { label: "Niqab Bandana", img: sp6 },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const storyImgRef = useRef<HTMLImageElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero fade up
      if (heroContentRef.current) {
        gsap.fromTo(
          heroContentRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );
      }

      // Hero image parallax
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Categories stagger
      if (categoryRef.current) {
        gsap.fromTo(
          categoryRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: categoryRef.current, start: "top 80%" }
          }
        );
      }

      // Products stagger
      if (productsRef.current) {
        gsap.fromTo(
          productsRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
            scrollTrigger: { trigger: productsRef.current, start: "top 85%" }
          }
        );
      }

      // Story Parallax & Text fade
      if (storyRef.current && storyImgRef.current && storyTextRef.current) {
        gsap.fromTo(
          storyImgRef.current,
          { scale: 1.1 },
          { 
            scale: 1, duration: 1.5, ease: "power2.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 70%" }
          }
        );
        gsap.fromTo(
          storyTextRef.current.children,
          { y: 30, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 60%" }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

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
            <Link href="/reseller" className="hover:text-accent">Reseller</Link>
            <Link href="/faq" className="hover:text-accent">FAQ</Link>
            <Link href="/about" className="hover:text-accent">Tentang</Link>
          </nav>
          <Link href="/" className="font-display text-2xl tracking-tight">Chantika <span className="italic text-accent">Label</span></Link>
          <div className="flex items-center gap-4">
            <Link href="/size-guide" className="hidden text-sm hover:text-accent md:inline">Panduan Ukuran</Link>
            <Link href="/care" className="hidden text-sm hover:text-accent md:inline">Perawatan</Link>
            <Link href="/contact" className="hidden text-sm hover:text-accent md:inline">Kontak</Link>
            
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 h-full w-full">
          <img src={hero.src} alt="Koleksi Chantika Label" className="h-full w-full object-cover" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
        <div ref={heroContentRef} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] opacity-90">Koleksi Sifon Arab</p>
          <h1 className="font-display text-5xl italic leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Syar'i Elegan, <br />Harga Teman
          </h1>
          <p className="mt-6 max-w-md text-sm opacity-90 sm:text-base">
            Pusat khimar dan cadar bahan Sifon Arab berkualitas. Jatuh sempurna, tidak pengap, dan termurah.
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
        <div ref={categoryRef} className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {categories.map((c) => (
            <a key={c.label} href="#shop" className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={c.img.src} alt={c.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
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
        <div ref={productsRef} className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={p.img.src} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
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
      <section id="story" ref={storyRef} className="bg-secondary">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden md:aspect-auto">
            <img ref={storyImgRef} src={story.src} alt="Cerita Chantika" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div ref={storyTextRef} className="flex flex-col justify-center px-8 py-16 md:px-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">Cerita Kami</p>
            <h2 className="font-display text-4xl italic leading-tight sm:text-5xl">Kualitas Premium, Termurah di Kelasnya</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Berawal dari keinginan untuk menghadirkan pakaian syar'i yang terjangkau namun berkualitas tinggi, Chantika Label mendedikasikan diri khusus pada material Sifon Arab asli. Khimar dan cadar kami dirancang agar sangat ringan, *breathable*, dan elegan, membantumu istiqomah tanpa mengorbankan kenyamanan.
            </p>
            <Link href="/about" className="mt-8 inline-flex w-fit items-center justify-center border border-primary bg-transparent px-10 py-3 text-xs uppercase tracking-[0.25em] text-primary transition hover:bg-primary hover:text-primary-foreground">
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
            <p className="mt-4 text-sm text-muted-foreground">Pusat Khimar & Cadar Sifon Arab Termurah.</p>
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
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="/size-guide" className="hover:text-foreground">Panduan Ukuran</Link></li>
              <li><Link href="/care" className="hover:text-foreground">Cara Perawatan</Link></li>
              <li><Link href="/reseller" className="hover:text-foreground">Reseller</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Kontak</Link></li>
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
