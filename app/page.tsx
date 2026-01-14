import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Navbar from "@/components/layout/Navbar";
import PenaltyCalculator from "@/components/features/PenaltyCalculator";
import TrustSignals from "@/components/sections/TrustSignals"; // NEW: The scrolling marquee
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section (with Quote Form) */}
      <Hero />

      {/* 3. Trust Signals (The 100+ References Marquee) */}
      <TrustSignals />

      {/* 4. Services Grid (ADR, IMDG, etc.) */}
      <ServicesGrid />

      {/* 5. Penalty Calculator Section (Dark Background for Contrast) */}
      <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            Risk Analizi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Riskinizin Farkında Mısınız?
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg">
            2026 yılı denetimlerinde karşılaşabileceğiniz idari para cezaları,
            bir yıllık danışmanlık ücretinden çok daha yüksektir. Aşağıdaki
            butonlara tıklayarak riskinizi hesaplayın.
          </p>

          <div className="max-w-3xl mx-auto bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm shadow-2xl">
            <PenaltyCalculator />
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action (Teal Background) */}
      <section className="py-24 bg-teal-700 text-white text-center relative overflow-hidden">
        {/* Dekoratif arka plan */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Denetimden Önce Biz Gelelim.
          </h2>
          <p className="text-teal-100 text-xl mb-10 max-w-2xl mx-auto">
            Gaziantep içi 45 dakikada hızlı servis garantisi ve Ulaştırma
            Bakanlığı onaylı yetki belgemiz ile işletmenizi güvene alın.
          </p>

          {/* İkonları import etmeyi unutmayın: import { MessageCircle, Phone } from "lucide-react"; */}

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* 1. BUTON: Whatsapp (Direkt Link) */}
            <Button
              asChild
              className="bg-white text-teal-900 hover:bg-slate-100 font-bold h-16 px-12 text-lg rounded-full shadow-xl transition-transform hover:scale-105 border-0 cursor-pointer"
            >
              <a
                href="https://wa.me/905323370451?text=Merhaba,%20TMGD%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                Whatsapp'tan Ulaşın
              </a>
            </Button>

            {/* 2. BUTON: Arama (Direkt Link) */}
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-bold h-16 px-12 text-lg rounded-full shadow-lg cursor-pointer"
            >
              <a href="tel:+905323370451" className="flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Hemen Arayın: 0532 337 04 51
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
