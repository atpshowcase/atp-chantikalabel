import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "./reseller";

export const Route = createFileRoute("/size-guide")({
  head: () => ({
    meta: [
      { title: "Panduan Ukuran — Chantika Label" },
      { name: "description", content: "Panduan ukuran handsock, khimar, dan kaos kaki Chantika Label untuk membantu memilih size yang pas." },
      { property: "og:title", content: "Panduan Ukuran Chantika Label" },
      { property: "og:description", content: "Pilih ukuran yang tepat untuk kenyamanan maksimal." },
    ],
  }),
  component: SizeGuidePage,
});

const tables = [
  {
    title: "Handsock",
    headers: ["Size", "Lingkar Lengan", "Panjang"],
    rows: [
      ["All Size", "18–24 cm", "45 cm"],
      ["XL", "24–28 cm", "48 cm"],
    ],
    note: "Bahan elastis, mengikuti bentuk lengan dengan nyaman.",
  },
  {
    title: "Khimar Vora",
    headers: ["Size", "Lebar", "Panjang Depan", "Panjang Belakang"],
    rows: [
      ["Short", "140 cm", "75 cm", "90 cm"],
      ["Reguler", "150 cm", "85 cm", "105 cm"],
      ["Shoulder", "160 cm", "70 cm", "75 cm"],
    ],
    note: "Pilih sesuai panjang yang diinginkan & tinggi badan.",
  },
  {
    title: "Kaos Kaki Muslimah",
    headers: ["Size", "Ukuran Sepatu", "Tinggi Kaos Kaki"],
    rows: [
      ["All Size", "36–40", "35 cm"],
    ],
    note: "Bahan rajut yang elastis, fit untuk semua ukuran sepatu wanita dewasa.",
  },
];

function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-secondary px-4 py-20 text-center sm:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Size Guide</p>
        <h1 className="font-display text-4xl italic sm:text-6xl">Panduan Ukuran</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
          Tabel ukuran untuk membantumu memilih size yang tepat.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
        {tables.map((t) => (
          <div key={t.title} className="mb-12">
            <h2 className="mb-4 font-display text-2xl italic text-accent">{t.title}</h2>
            <div className="overflow-x-auto border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>{t.headers.map((h) => <th key={h} className="px-4 py-3 text-left text-xs uppercase tracking-[0.15em]">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {t.rows.map((r, i) => (
                    <tr key={i} className="border-t border-border">
                      {r.map((c, j) => <td key={j} className="px-4 py-3">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs italic text-muted-foreground">{t.note}</p>
          </div>
        ))}
        <div className="mt-10 border border-border bg-secondary p-6 text-center text-sm text-muted-foreground">
          Masih ragu memilih ukuran? <a href="https://wa.me/6281234567890" className="text-accent underline">Tanya ke CS</a> untuk rekomendasi personal.
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
