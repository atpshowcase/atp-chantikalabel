import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "./reseller";
import story from "@/assets/story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Chantika Label" },
      { name: "description", content: "Chantika Label adalah brand modest fashion dari Bogor — khimar, handsock, dan kaos kaki muslimah berkualitas premium." },
      { property: "og:title", content: "Tentang Chantika Label" },
      { property: "og:description", content: "Brand modest fashion dari Bogor, dibuat dengan cinta & perhatian." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Our Story</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Tentang Chantika Label</h1>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-4 py-20 sm:px-8 md:grid-cols-2 md:items-center">
        <img src={story} alt="Workshop Chantika Label" className="aspect-[4/5] w-full object-cover" />
        <div>
          <h2 className="font-display text-3xl italic sm:text-4xl">Dibuat dari Bogor, dengan cinta</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Chantika Label lahir dari kecintaan pada modest fashion yang tidak hanya indah dilihat,
            tetapi juga nyaman dipakai sehari-hari. Berdiri sejak 2020 di Bogor, kami fokus pada
            tiga lini utama: khimar, handsock, dan kaos kaki muslimah.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Setiap produk dirancang dengan teliti — dari pemilihan bahan, jahitan, hingga finishing —
            oleh tim penjahit lokal yang berpengalaman. Kami percaya bahwa busana yang baik bukan
            soal kuantitas, tapi kualitas yang menemani perjalanan ibadah dan keseharianmu.
          </p>
        </div>
      </section>

      <section className="bg-secondary px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-12 text-center font-display text-3xl italic sm:text-4xl">Nilai kami</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { t: "Kualitas Premium", d: "Bahan pilihan dengan jatuh kain yang sempurna & tidak menerawang." },
              { t: "Made Slow", d: "Produksi dalam jumlah terbatas, fokus pada detail & ketahanan." },
              { t: "Worn Often", d: "Desain timeless yang bisa dipakai kapan saja, di mana saja." },
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
