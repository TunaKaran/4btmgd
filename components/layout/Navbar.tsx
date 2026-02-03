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
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all">
      {/* GÜNCELLEME 1: Konteyner Yüksekliği
         Mobilde h-20 (80px), Masaüstünde h-24 (96px) yapıldı. 
         Eski h-28 değeri 720p ekranlarda çok büyüktü.
      */}
      <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* LOGO ALANI */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo-3d.png"
            alt="4B TMGDK Logo"
            width={240}
            height={100}
            // GÜNCELLEME 2: Logo Boyutu
            // h-24 navbar içine h-20 logo sığmaz.
            // Logo mobilde h-12, masaüstünde h-16 (64px) yapıldı.
            className="object-contain h-12 md:h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Desktop Links */}
        {/* GÜNCELLEME 3: Menü Aralığı (Gap)
           gap-10 yerine gap-8 yapıldı. 1366px genişlikteki ekranlarda 
           menünün sağa taşmasını veya alt satıra inmesini engeller.
        */}
        <div className="hidden md:flex items-center gap-8 text-base font-bold text-slate-600">
          <Link
            href="/hizmetler"
            className="hover:text-teal-600 transition-colors duration-300 hover:-translate-y-0.5"
          >
            Hizmetler
          </Link>
          <Link
            href="/egitimler"
            className="hover:text-teal-600 transition-colors duration-300 hover:-translate-y-0.5"
          >
            Eğitimler
          </Link>
          <Link
            href="/referanslar"
            className="hover:text-teal-600 transition-colors duration-300 hover:-translate-y-0.5"
          >
            Referanslar
          </Link>
          <Link
            href="/iletisim"
            className="hover:text-teal-600 transition-colors duration-300 hover:-translate-y-0.5"
          >
            İletişim
          </Link>
          <Link
            href="/sss"
            className="hover:text-teal-600 transition-colors duration-300 hover:-translate-y-0.5"
          >
            S.S.S.
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <ContactModal
            triggerText="Hızlı Teklif Al"
            // GÜNCELLEME 4: Buton Yüksekliği
            // Navbar küçüldüğü için butonu da h-12'den h-11'e çektik (Daha orantılı durur).
            className="h-11 px-6 text-sm bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-100 hover:shadow-orange-200 transition-all hover:scale-105 active:scale-95"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobil Menü İçeriği */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 absolute w-full left-0 top-20 flex flex-col gap-6 shadow-xl">
          <Link
            href="/hizmetler"
            className="text-lg font-bold text-slate-700 border-b border-slate-100 pb-3"
          >
            Hizmetler
          </Link>
          <Link
            href="/egitimler"
            className="text-lg font-bold text-slate-700 border-b border-slate-100 pb-3"
          >
            Eğitimler
          </Link>
          <Link
            href="/referanslar"
            className="text-lg font-bold text-slate-700 border-b border-slate-100 pb-3"
          >
            Referanslar
          </Link>
          <Link
            href="/iletisim"
            className="text-lg font-bold text-slate-700 border-b border-slate-100 pb-3"
          >
            İletişim
          </Link>
          <Link
            href="/sss"
            className="text-lg font-bold text-slate-700 border-b border-slate-100 pb-3"
          >
            Sıkça Sorulan Sorular
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
