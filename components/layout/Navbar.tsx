"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import ContactModal from "../features/ContactModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy-900/95 backdrop-blur-md border-b border-slate-800 shadow-2xl transition-all">
      <div className="container mx-auto px-6 h-28 flex items-center justify-between">
        {/* LOGO ALANI */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-white p-2 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-3d.png"
              alt="4B TMGDK Logo"
              width={220} // Logo biraz daha büyütüldü
              height={90}
              className="object-contain h-14 w-auto" // Yükseklik artırıldı
              priority
            />
          </div>
        </Link>

        {/* Desktop Links (BÜYÜTÜLDÜ VE GÜZELLEŞTİRİLDİ) */}
        <div className="hidden md:flex items-center gap-10 text-base font-bold text-slate-200">
          <Link
            href="/hizmetler"
            className="hover:text-teal-400 transition-colors duration-300 hover:-translate-y-0.5"
          >
            Hizmetler
          </Link>
          <Link
            href="/egitimler"
            className="hover:text-teal-400 transition-colors duration-300 hover:-translate-y-0.5"
          >
            Eğitimler
          </Link>
          <Link
            href="/referanslar"
            className="hover:text-teal-400 transition-colors duration-300 hover:-translate-y-0.5"
          >
            Referanslar
          </Link>
          <Link
            href="/iletisim"
            className="hover:text-teal-400 transition-colors duration-300 hover:-translate-y-0.5"
          >
            İletişim
          </Link>
        </div>

        {/* CTA Button (DAHA BÜYÜK VE DİKKAT ÇEKİCİ) */}
        <div className="hidden md:flex items-center gap-4">
          <ContactModal
            triggerText="Hızlı Teklif Al"
            className="h-12 px-8 text-base bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all hover:scale-105 active:scale-95"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobil Menü İçeriği */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-t border-slate-800 p-6 absolute w-full left-0 top-28 flex flex-col gap-6 shadow-2xl">
          <Link
            href="/hizmetler"
            className="text-lg font-semibold text-slate-200 border-b border-slate-800 pb-2"
          >
            Hizmetler
          </Link>
          <Link
            href="/egitimler"
            className="text-lg font-semibold text-slate-200 border-b border-slate-800 pb-2"
          >
            Eğitimler
          </Link>
          <Link
            href="/referanslar"
            className="text-lg font-semibold text-slate-200 border-b border-slate-800 pb-2"
          >
            Referanslar
          </Link>
          <Link
            href="/iletisim"
            className="text-lg font-semibold text-slate-200 border-b border-slate-800 pb-2"
          >
            İletişim
          </Link>
          <ContactModal
            triggerText="Hızlı Teklif Al"
            className="w-full h-12 text-lg bg-orange-600 rounded-xl"
          />
        </div>
      )}
    </nav>
  );
}
