import HeroSection from "@/components/home/HeroSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Fasilitas */}
      <FacilitiesSection />

      {/* Kamar Preview */}
      <section className="py-20 sm:py-28 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground ornament-border ornament-border-center mb-6">
            Pilihan Kamar
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Villa bergaya tradisional Jawa dengan kenyamanan modern.
            Setiap kamar memiliki pemandangan alam yang menenangkan.
          </p>
        </div>
      </section>
    </>
  );
}
