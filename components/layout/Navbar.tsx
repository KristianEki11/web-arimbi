"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// === NAV LINKS ===
const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/kamar", label: "Kamar" },
  { href: "/galeri", label: "Galeri" },
  { href: "/booking", label: "Booking" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Detect scroll untuk background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll saat mobile menu terbuka
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-neutral-50/95 backdrop-blur-md shadow-[var(--shadow-warm-md)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* === LOGO === */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsMobileOpen(false)}
          >
            {/* Ornamen batik mini */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-[var(--shadow-warm-sm)] group-hover:shadow-[var(--shadow-warm-md)] transition-shadow duration-300">
              <span className="text-neutral-50 font-display font-bold text-sm sm:text-base">
                A
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-neutral-50"
                }`}
              >
                Arimbi
              </span>
              <span
                className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled
                    ? "text-accent-500"
                    : "text-accent-300"
                }`}
              >
                Resort
              </span>
            </div>
          </Link>

          {/* === DESKTOP NAV LINKS === */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 group ${
                  isScrolled
                    ? "text-foreground-muted hover:text-foreground"
                    : "text-neutral-100 hover:text-neutral-50"
                }`}
              >
                {link.label}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-2/3 rounded-full" />
              </Link>
            ))}
          </div>

          {/* === CTA BUTTON (Desktop) === */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="inline-flex items-center px-5 py-2.5 bg-primary-400 hover:bg-primary-500 text-neutral-50 text-sm font-semibold rounded-sm shadow-[var(--shadow-warm-sm)] hover:shadow-[var(--shadow-warm-md)] transition-all duration-300 tracking-wide"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* === HAMBURGER BUTTON (Mobile) === */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors ${
              isScrolled ? "text-foreground" : "text-neutral-50"
            }`}
            aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileOpen}
          >
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isMobileOpen
                  ? "rotate-45 translate-y-2 bg-foreground"
                  : isScrolled
                  ? "bg-foreground"
                  : "bg-neutral-50"
              }`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isMobileOpen
                  ? "opacity-0 scale-0"
                  : isScrolled
                  ? "bg-foreground"
                  : "bg-neutral-50"
              }`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isMobileOpen
                  ? "-rotate-45 -translate-y-2 bg-foreground"
                  : isScrolled
                  ? "bg-foreground"
                  : "bg-neutral-50"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden fixed inset-0 top-16 bg-neutral-50/98 backdrop-blur-xl z-40 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-2xl font-display font-semibold text-foreground hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="/booking"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex items-center px-8 py-3 bg-primary-400 hover:bg-primary-500 text-neutral-50 text-base font-semibold rounded-sm shadow-[var(--shadow-warm-md)] transition-all duration-300 tracking-wide"
                >
                  Pesan Sekarang
                </Link>
              </motion.div>

              {/* Decorative */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-foreground-muted">
                  Gamplong III, Sleman, Yogyakarta
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
