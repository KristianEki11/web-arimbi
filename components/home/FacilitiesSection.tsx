"use client";

import { motion } from "framer-motion";

// === DATA FASILITAS ===
const fasilitas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5M10.5 21H3m13.5-18H6.75A2.25 2.25 0 004.5 5.25v13.5" />
      </svg>
    ),
    judul: "Villa Privat",
    deskripsi:
      "Villa eksklusif bergaya joglo Jawa dengan privasi penuh. Rasakan ketenangan tanpa gangguan.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    judul: "Pemandangan Alam",
    deskripsi:
      "Dikelilingi persawahan hijau dan pegunungan. Nikmati udara segar pedesaan Yogyakarta.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    judul: "Taman & Pendopo",
    deskripsi:
      "Taman asri dengan pendopo tradisional Jawa untuk bersantai. Tempat sempurna menikmati udara segar.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    judul: "WiFi Gratis",
    deskripsi:
      "Koneksi internet cepat tersedia di seluruh area villa. Tetap terhubung dengan nyaman.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    judul: "Parkir Luas",
    deskripsi:
      "Area parkir gratis yang aman dan luas. Tersedia untuk mobil maupun motor.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0-8.25a2.25 2.25 0 012.25-2.25h1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H11.25A2.25 2.25 0 019 6.75zM3.75 15h16.5M3.75 15a2.25 2.25 0 01-2.25-2.25V6.75m18 8.25a2.25 2.25 0 002.25-2.25V6.75m-18 0h18M3.75 6.75v8.25m18-8.25v8.25M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25" />
      </svg>
    ),
    judul: "AC & Smart TV",
    deskripsi:
      "Setiap kamar dilengkapi AC dan Smart TV 43 inci. Kenyamanan modern dalam nuansa tradisional.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    judul: "Water Heater",
    deskripsi:
      "Air panas tersedia di setiap kamar mandi. Mandi hangat nyaman kapan saja Anda inginkan.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    judul: "Musala",
    deskripsi:
      "Tempat ibadah yang bersih dan nyaman tersedia di area villa. Beribadah dengan tenang dan khusyuk.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    judul: "Dapur Lengkap",
    deskripsi:
      "Dapur bersama yang lengkap dengan peralatan memasak. Bebas memasak menu favorit Anda sendiri.",
  },
];

// === ANIMATION VARIANTS ===
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function FacilitiesSection() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-3 text-accent-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">
            <span className="w-8 h-px bg-accent-400" />
            Mengapa Memilih Kami
            <span className="w-8 h-px bg-accent-400" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Fasilitas &{" "}
            <span className="text-primary-400">Kenyamanan</span>
          </h2>

          {/* Ornamen divider */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent-400" />
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L10 17.77L3.82 21.02L5 14.14L0 9.27L6.91 8.26L10 2Z" />
            </svg>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent-400" />
          </div>

          <p className="text-foreground-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Setiap detail dirancang untuk memberikan pengalaman menginap
            yang tak terlupakan. Kenyamanan modern dalam balutan keanggunan
            tradisional Jawa.
          </p>
        </motion.div>

        {/* === GRID FASILITAS === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {fasilitas.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-sm p-8 shadow-[var(--shadow-warm-sm)] hover:shadow-[var(--shadow-warm-lg)] transition-all duration-500 border border-neutral-200/60 hover:border-accent-400/30"
            >
              {/* Decorative corner — Javanese ornament touch */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-400/20 rounded-tl-sm group-hover:border-accent-400/50 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-400/20 rounded-br-sm group-hover:border-accent-400/50 transition-colors duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-primary-400/10 to-accent-400/10 flex items-center justify-center text-primary-400 group-hover:from-primary-400 group-hover:to-primary-500 group-hover:text-neutral-50 transition-all duration-500 mb-5">
                {item.icon}
              </div>

              {/* Judul */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary-500 transition-colors duration-300">
                {item.judul}
              </h3>

              {/* Deskripsi */}
              <p className="text-foreground-muted text-sm leading-relaxed">
                {item.deskripsi}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
