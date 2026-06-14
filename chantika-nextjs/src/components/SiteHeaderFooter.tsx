import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-8">
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/" className="hover:text-accent">Beranda</Link>
          <Link href="/reseller" className="hover:text-accent">Reseller</Link>
          <Link href="/faq" className="hover:text-accent">FAQ</Link>
          <Link href="/about" className="hover:text-accent">Tentang</Link>
        </nav>
        <Link href="/" className="font-display text-2xl tracking-tight">Chantika <span className="italic text-accent">Label</span></Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/size-guide" className="hover:text-accent">Panduan Ukuran</Link>
          <Link href="/care" className="hover:text-accent">Perawatan</Link>
          <Link href="/contact" className="hover:text-accent">Kontak</Link>
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
          <p className="mt-4 text-sm text-muted-foreground">Pusat Khimar & Cadar Sifon Arab Termurah.</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Belanja</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="https://shopee.co.id/chantikalabel" className="hover:text-foreground">Shopee Store</a></li>
            <li><Link href="/" className="hover:text-foreground">Koleksi</Link></li>
            <li><Link href="/reseller" className="hover:text-foreground">Reseller</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em]">Bantuan</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link href="/size-guide" className="hover:text-foreground">Panduan Ukuran</Link></li>
            <li><Link href="/care" className="hover:text-foreground">Cara Perawatan</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Kontak</Link></li>
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
