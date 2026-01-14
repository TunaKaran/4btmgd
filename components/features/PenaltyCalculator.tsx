"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PenaltyCalculator() {
  const [fine, setFine] = useState(0);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  const checkFine = (violation: string) => {
    // 2026 yılı güncel idari para cezaları (YDO %25,49 artışlı)
    // Kaynak: Ulaştırma ve Altyapı Bakanlığı / Tehlikeli Madde Taşıma Yönetmeliği
    const fines: { [key: string]: number } = {
      // TMGD veya TMFB Belgesi Almama Cezası (İşletme)
      "no-advisor": 25518,

      // Etiketleme ve İşaretleme Eksikliği (Gönderen/Yükleyen)
      "label-error": 9473,

      // Taşıma Evrakı Düzenlememe veya Eksiklik (Gönderen)
      "doc-missing": 9473,

      // Uygun Olmayan Araç/Tanker Kullanımı (Yükleyen/Dolduran)
      "unsafe-vehicle": 9473,
    };
    setFine(fines[violation] || 0);
    setSelectedRisk(violation);
  };

  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
      <div className="mb-6">
        <p className="text-slate-300 text-sm mb-4">
          Aşağıdaki ihlal türlerinden birini seçerek 2026 yılı potansiyel
          riskinizi hesaplayın:
        </p>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => checkFine("no-advisor")}
            className={`text-left p-3 rounded-lg text-sm transition-all ${
              selectedRisk === "no-advisor"
                ? "bg-orange-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            TMGD Danışmanı Yok
          </button>

          <button
            onClick={() => checkFine("label-error")}
            className={`text-left p-3 rounded-lg text-sm transition-all ${
              selectedRisk === "label-error"
                ? "bg-orange-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Hatalı/Eksik Etiket
          </button>

          <button
            onClick={() => checkFine("doc-missing")}
            className={`text-left p-3 rounded-lg text-sm transition-all ${
              selectedRisk === "doc-missing"
                ? "bg-orange-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Taşıma Evrakı Eksik
          </button>

          <button
            onClick={() => checkFine("unsafe-vehicle")}
            className={`text-left p-3 rounded-lg text-sm transition-all ${
              selectedRisk === "unsafe-vehicle"
                ? "bg-orange-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Araç Uygunsuzluğu
          </button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
          Tahmini Taban İdari Para Cezası
        </span>
        <span className="text-4xl font-bold text-orange-500">
          {fine > 0 ? `${fine.toLocaleString("tr-TR")} ₺` : "0 ₺"}
        </span>
        {fine > 0 && (
          <p className="text-xl text-red-400 mt-2 animate-pulse">
            *Cezalar ihlal sayısına göre katlanarak artabilir.
          </p>
        )}
      </div>
    </div>
  );
}
