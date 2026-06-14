"use client";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiteHeader, SiteFooter } from '@/components/SiteHeaderFooter';
import story from "@/assets/story.jpg";


export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const storyImgRef = useRef<HTMLImageElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero fade
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
      }

      // Story
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

      // Values stagger
      if (valuesRef.current) {
        gsap.fromTo(
          valuesRef.current.children,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: valuesRef.current, start: "top 80%" }
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
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Our Story</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Tentang Chantika Label</h1>
      </section>

      <section ref={storyRef} className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-4 py-20 sm:px-8 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden aspect-[4/5] w-full">
          <img ref={storyImgRef} src={story.src} alt="Workshop Chantika Label" className="h-full w-full object-cover" />
        </div>
        <div ref={storyTextRef}>
          <h2 className="font-display text-3xl italic sm:text-4xl">Spesialis Sifon Arab Berkualitas</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Chantika Label hadir sebagai solusi bagi muslimah yang mencari khimar dan cadar berkualitas dengan harga yang jujur dan bersahabat. Berdiri dengan dedikasi penuh, kami fokus khusus pada lini pakaian syar'i berbahan dasar Sifon Arab asli.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Bagi kami, menutup aurat harus diiringi dengan kenyamanan. Bahan sifon arab dipilih secara ketat karena sifatnya yang super ringan, jatuh sempurna, tidak kaku, dan yang terpenting: breathable (tidak pengap saat bernafas melalui cadar). Kami memproduksi secara massal dengan efisiensi tinggi agar bisa memberikan harga termurah di pasaran tanpa menurunkan standar kualitas.
          </p>
        </div>
      </section>

      <section className="bg-secondary px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-12 text-center font-display text-3xl italic sm:text-4xl">Nilai kami</h2>
          <div ref={valuesRef} className="grid gap-8 md:grid-cols-3">
            {[
              { t: "Termurah di Kelasnya", d: "Kami memotong biaya perantara, memberikanmu harga pabrik langsung." },
              { t: "Sifon Arab Asli", d: "Material pilihan yang flowy, ringan, dan sangat nyaman bernapas." },
              { t: "Syar'i & Presisi", d: "Pola jahitan yang disesuaikan untuk menutup aurat dengan sempurna." },
            ].map((v) => (
              <div key={v.t} className="text-center">
                <h3 className="font-display text-2xl italic text-accent">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
