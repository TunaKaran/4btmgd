import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import QuoteForm from "@/components/features/QuoteForm";
import Link from "next/link";
import ContactModal from "../features/ContactModal";

export default function Hero() {
  return (
    // ADDED: bg-slate-900 to ensure dark background
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient ensures text is readable even if image is bright */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/95 to-slate-900/70 z-10" />

        {/* Make sure you have an image named 'hero-bg.jpg' in your 'public' folder */}
        {/* If no image, the bg-slate-900 above handles the color */}
        <img
          src="/hero-bg.jpg"
          alt="Gaziantep Lojistik"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-300 text-sm font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5" />
            Ulaştırma Bakanlığı Onaylı TMGDK
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Gaziantep Sanayisinin <br />
            <span className="text-teal-400">Güvenli Çözüm Ortağı</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            Başpınar, Nizip ve tüm OSB bölgelerinde ADR/RID/IMDG süreçlerinizi
            profesyonelce yönetiyoruz. Cezai riskleri sıfırlayın.
          </p>

          {/* Gerekli Importlar: 
              import Link from "next/link";
              import ContactModal from "../features/ContactModal"; 
          */}

          <div className="flex flex-wrap gap-4">
            {/* 1. BUTON: ContactModal (Popup Açar) */}
            <ContactModal
              triggerText="Ücretsiz Keşif İste"
              className="h-14 px-8 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg shadow-orange-900/20 rounded-xl"
            />

            {/* 2. BUTON: Sayfa Yönlendirmesi (Link) */}
            <Button
              asChild
              variant="outline"
              className="h-14 px-8 border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 bg-transparent text-lg rounded-xl cursor-pointer"
            >
              <Link href="/hizmetler">
                Hizmetlerimiz <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Content: Quote Form */}
        <div className="hidden lg:block relative">
          {/* Added a glow effect behind the form */}
          <div className="absolute -inset-1 bg-linear-to-r from-teal-500 to-orange-500 rounded-2xl blur opacity-20"></div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
