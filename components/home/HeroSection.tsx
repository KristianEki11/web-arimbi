"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* === BACKGROUND IMAGE === */}
      <Image
        src="/villa-hero.jpg"
        alt="Arimbi Resort — Villa dengan pemandangan alam Yogyakarta"
        fill
        className="object-cover object-center"
        priority
      />

      {/* === GRADIENT OVERLAY === */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-700/70 via-primary-600/50 to-primary-700/80" />

      {/* === SUBTLE TEXTURE OVERLAY (batik pattern feel) === */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(201, 168, 76, 0.5) 10px,
            rgba(201, 168, 76, 0.5) 11px
          )`,
        }}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ornamen atas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3 text-accent-300 text-sm tracking-[0.3em] uppercase font-medium">
            <span className="w-8 h-px bg-accent-400" />
            Sleman, Yogyakarta
            <span className="w-8 h-px bg-accent-400" />
          </div>
        </motion.div>

        {/* Tagline utama */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 leading-[1.1] mb-6"
        >
          Ketenangan Alam,
          <br />
          <span className="text-accent-400">Keanggunan Jawa</span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          Private villa dengan arsitektur tradisional Jawa, dikelilingi
          pemandangan sawah dan pegunungan. Tempat sempurna untuk melepas
          penat dan menemukan kedamaian.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <Link
            href="/booking"
            className="group inline-flex items-center px-8 py-4 bg-primary-400 hover:bg-primary-500 text-neutral-50 font-semibold text-base rounded-sm shadow-[var(--shadow-warm-lg)] hover:shadow-[var(--shadow-warm-xl)] transition-all duration-300 tracking-wide"
          >
            Pesan Sekarang
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/kamar"
            className="inline-flex items-center px-8 py-4 border-2 border-neutral-50/30 hover:border-accent-400 text-neutral-50 hover:text-accent-300 font-semibold text-base rounded-sm transition-all duration-300 tracking-wide backdrop-blur-sm"
          >
            Lihat Kamar
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-neutral-300/60"
          >
            <span className="text-xs tracking-widest uppercase">
              Scroll
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
