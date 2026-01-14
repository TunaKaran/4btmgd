"use client";

import { useState, useEffect } from "react";
import { X, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  triggerText?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  className?: string;
}

export default function ContactModal({
  triggerText = "İletişime Geç",
  variant = "default",
  className,
}: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Numarası
  const whatsappNumber = "905323370451";
  const defaultMessage =
    "Merhaba, TMGD hizmetleriniz hakkında bilgi almak istiyorum.";

  // Modal açıldığında arkadaki sayfanın kaydırılmasını (scroll) engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Tetikleyici Buton */}
      <Button
        variant={variant}
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {triggerText}
      </Button>

      {/* MODAL OVERLAY (Kapsayıcı) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center w-screen h-screen bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            // Sadece siyah alana tıklanırsa kapansın
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* MODAL KUTUSU */}
          <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Üst Kısım (Header) */}
            <div className="bg-slate-50 p-6 border-b border-slate-100 text-center relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors shadow-sm border border-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-slate-900">Bize Ulaşın</h3>
              <p className="text-slate-500 mt-1 text-sm">
                Uzmanlarımız size yardımcı olmaya hazır.
              </p>
            </div>

            {/* İçerik (Body) */}
            <div className="p-6 md:p-8 space-y-4">
              {/* WHATSAPP BUTTON */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl shadow-lg shadow-green-500/20 transition-transform active:scale-95 group"
              >
                <div className="bg-white/20 p-2.5 rounded-full">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-green-50 uppercase tracking-wide opacity-90">
                    WhatsApp Destek
                  </p>
                  <p className="font-bold text-lg leading-tight">
                    Sohbet Başlat
                  </p>
                </div>
              </a>

              <div className="relative flex py-1 items-center">
                <div className="grow border-t border-slate-100"></div>
                <span className="shrink mx-4 text-slate-300 text-[10px] uppercase font-bold tracking-widest">
                  veya
                </span>
                <div className="grow border-t border-slate-100"></div>
              </div>

              {/* TELEFON */}
              <a
                href="tel:+905323370451"
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-colors group"
              >
                <div className="bg-orange-100 text-orange-600 p-2.5 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase group-hover:text-orange-600">
                    Çağrı Merkezi
                  </p>
                  <p className="font-bold text-slate-900 text-lg">
                    0532 337 04 51
                  </p>
                </div>
              </a>

              {/* E-POSTA */}
              <a
                href="mailto:info@4btmgd.com"
                className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-colors group"
              >
                <div className="bg-teal-100 text-teal-600 p-2.5 rounded-full group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase group-hover:text-teal-600">
                    E-Posta
                  </p>
                  <p className="font-bold text-slate-900 text-lg">
                    info@4btmgd.com
                  </p>
                </div>
              </a>
            </div>

            {/* Alt Bilgi (Footer) */}
            <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
              <p className="text-[10px] text-slate-400 font-medium">
                Kişisel verileriniz KVKK kapsamında korunmaktadır.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
