import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "./reseller";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "Cara Perawatan — Chantika Label" },
      { name: "description", content: "Panduan perawatan handsock, khimar, dan kaos kaki agar tetap awet dan nyaman dipakai." },
      { property: "og:title", content: "Cara Perawatan Produk Chantika Label" },
      { property: "og:description", content: "Tips mencuci & merawat agar produk awet." },
    ],
  }),
  component: CarePage,
});

const sections = [
  {
    title: "Handsock",
    tips: [
      "Cuci dengan tangan menggunakan air dingin & detergen lembut.",
      "Jangan diperas terlalu kuat — cukup tekan perlahan.",
      "Jemur di tempat teduh, hindari sinar matahari langsung.",
      "Setrika dengan suhu rendah jika perlu.",
      "Pisahkan dari pakaian berwarna gelap saat dicuci.",
    ],
  },
  {
    title: "Khimar Arabian Crepe",
    tips: [
      "Cuci tangan dengan air dingin (maks 30°C).",
      "Gunakan detergen khusus pakaian halus, hindari pemutih.",
      "Jangan rendam lebih dari 15 menit.",
      "Keringkan dengan cara digantung — tidak perlu diperas.",
      "Setrika suhu rendah-sedang dengan kain pelapis.",
    ],
  },
  {
    title: "Kaos Kaki Muslimah",
    tips: [
      "Bisa dicuci dengan mesin (mode delicate) atau tangan.",
      "Balik bagian dalam keluar sebelum mencuci agar warna awet.",
      "Hindari mengeringkan dengan mesin pengering panas.",
      "Jemur dalam posisi datar untuk menjaga bentuk.",
    ],
  },
];

function CarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Care Guide</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Cara Perawatan</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
          Rawat dengan benar agar produk Chantika Label menemani lebih lama.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
        {sections.map((s, i) => (
          <div key={s.title} className="mb-12">
            <div className="mb-6 flex items-baseline gap-4">
              <span className="font-display text-3xl italic text-accent">0{i + 1}</span>
              <h2 className="font-display text-2xl italic sm:text-3xl">{s.title}</h2>
            </div>
            <ul className="space-y-3 border-l border-border pl-6">
              {s.tips.map((tip) => (
                <li key={tip} className="text-sm leading-relaxed text-muted-foreground">{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
