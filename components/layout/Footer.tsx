import Link from "next/link";

const footerLinks = {
  navigasi: [
    { href: "/", label: "Beranda" },
    { href: "/kamar", label: "Kamar & Villa" },
    { href: "/galeri", label: "Galeri" },
    { href: "/booking", label: "Booking" },
  ],
  informasi: [
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontak", label: "Kontak" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-neutral-200">
      {/* Ornamen border atas */}
      <div className="h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* === BRAND === */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center">
                <span className="text-primary-700 font-display font-bold text-lg">
                  A
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl text-neutral-50">
                  Arimbi
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-accent-400">
                  Resort
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-xs">
              Nikmati ketenangan alam dan keanggunan tradisional Jawa.
              Private villa dengan pemandangan sawah di Sleman,
              Yogyakarta.
            </p>
          </div>

          {/* === NAVIGASI === */}
          <div>
            <h4 className="font-display font-semibold text-neutral-50 mb-4 text-sm uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === INFORMASI === */}
          <div>
            <h4 className="font-display font-semibold text-neutral-50 mb-4 text-sm uppercase tracking-wider">
              Informasi
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.informasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === KONTAK === */}
          <div>
            <h4 className="font-display font-semibold text-neutral-50 mb-4 text-sm uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <address className="not-italic space-y-2.5 text-sm text-neutral-300">
              <p>
                Gamplong III, Sumberrahayu,
                <br />
                Moyudan, Sleman
                <br />
                Yogyakarta 55563
              </p>
              <p>
                <a
                  href="tel:+6287839561661"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  +62 878-3956-1661
                </a>
              </p>
              {/* TODO: Ganti dengan email yang benar */}
              <p>
                <a
                  href="mailto:dangocece.101@gmail.com"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  dangocece.101@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="mt-12 pt-8 border-t border-primary-500/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Arimbi Resort. Hak Cipta
            Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/arimbi_resort?igsh=Z201bGFqcnJ6Mmd6"
              className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
