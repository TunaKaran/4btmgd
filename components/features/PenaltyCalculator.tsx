"use client";
import { useState } from "react";

// Ceza verilerini yönetilebilir bir liste haline getirdik
const violationData = [
  {
    id: "tmgd",
    label: "TMGD İstihdam Etmeme / Hizmet Almama",
    party: "İşletme (Firma)",
    price: 25518,
  },
  {
    id: "tmfb",
    label: "TMFB (Faaliyet Belgesi) Almama",
    party: "İşletme (Firma)",
    price: 25518,
  },
  {
    id: "sender",
    label: "Gönderen Yükümlülüklerine Uymama",
    party: "Gönderen",
    price: 25518,
  },
  {
    id: "src5-company",
    label: "SRC-5 Belgesiz Sürücü Çalıştırma",
    party: "İşletme (Firma)",
    price: 25518,
  },
  {
    id: "packaging",
    label: "Paketleme / Etiketleme Hataları",
    party: "Paketleyen",
    price: 11604,
  },
  {
    id: "docs",
    label: "Taşıma Evrakı Eksikliği / Hatalı Evrak",
    party: "Gönderen / Taşımacı",
    price: 5791,
  },
  {
    id: "src5-driver",
    label: "SRC-5 Belgesi Olmadan Araç Kullanma",
    party: "Sürücü",
    price: 4733,
  },
];

export default function PenaltyCalculator() {
  const [selectedViolation, setSelectedViolation] = useState<
    (typeof violationData)[0] | null
  >(null);

  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
          <span className="text-teal-400">❖</span> Ceza Risk Hesaplayıcı
        </h3>
        <p className="text-slate-300 text-sm mb-5">
          2026 yılı tahmini verilerine göre; işletmeniz, çalışanlarınız veya
          operasyonel süreçleriniz için risk oluşturan maddeyi seçin:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
          {violationData.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedViolation(item)}
              className={`text-left p-4 rounded-lg text-sm font-medium transition-all duration-200 border group flex flex-col justify-center ${
                selectedViolation?.id === item.id
                  ? "bg-teal-500/10 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                  : "bg-slate-800/50 text-slate-300 border-white/5 hover:bg-slate-700 hover:border-white/20"
              }`}
            >
              <span
                className={`block mb-1 ${selectedViolation?.id === item.id ? "text-teal-300" : "text-white"}`}
              >
                {item.label}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wide">
                Muhatap: {item.party}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sonuç Alanı */}
      <div className="mt-6 pt-6 border-t border-white/10 text-center relative overflow-hidden min-h-35 flex flex-col justify-center">
        {selectedViolation ? (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <span className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
              {selectedViolation.party} İçin Tahmini Ceza (2026)
            </span>
            <span className="text-5xl font-bold text-teal-400 drop-shadow-lg tracking-tight">
              {selectedViolation.price.toLocaleString("tr-TR")} ₺
            </span>
            <div className="mt-4 text-md text-red-300 bg-red-500/10 py-2 px-3 rounded-lg border border-red-500/20 inline-block mx-auto">
              ⚠️ Bu tutar her bir ihlal tespiti için ayrı ayrı uygulanır ve
              katlanarak artabilir.
            </div>
          </>
        ) : (
          <div className="text-slate-500 text-sm italic">
            Risk tutarını görmek için yukarıdan bir ihlal maddesi seçiniz.
          </div>
        )}
      </div>
    </div>
  );
}
