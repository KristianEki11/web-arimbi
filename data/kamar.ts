// ============================================
// DATA KAMAR — Arimbi Resort
// ============================================
// Data statis untuk development. Nanti bisa
// diganti dengan data dari Supabase.
// ============================================

export interface Kamar {
  slug: string;
  nama: string;
  deskripsi: string;
  harga: number; // per malam, dalam Rupiah
  kapasitas: number;
  ukuran: string;
  fasilitas: string[];
  foto: string[]; // TODO: Ganti dengan foto asli villa
}

// === FORMAT HARGA RUPIAH ===
export function formatRupiah(harga: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(harga);
}

// === DATA KAMAR ===
export const daftarKamar: Kamar[] = [
  {
    slug: "joglo-deluxe",
    nama: "Joglo Deluxe",
    deskripsi:
      "Villa bergaya joglo tradisional Jawa dengan sentuhan modern. Nikmati ruang tamu terbuka dengan ukiran kayu jati asli, kamar tidur luas dengan tempat tidur king-size, dan pemandangan sawah yang menenangkan dari beranda pribadi Anda.",
    harga: 850000,
    kapasitas: 4,
    ukuran: "45 m²",
    fasilitas: [
      "King-size bed",
      "AC",
      "Hot & cold shower",
      "Smart TV 43\"",
      "WiFi gratis",
      "Mini bar",
      "Beranda privat",
      "Pemandangan sawah",
      "Parkir gratis",
    ],
    foto: [
      // TODO: Ganti dengan foto asli villa Arimbi Resort
      "https://images.unsplash.com/photo-1590490360182-c33d955c4644?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    ],
  },
];
