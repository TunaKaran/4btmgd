"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { sendQuoteRequest } from "@/app/actions"; // Import the server action

export default function QuoteForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);

    // Call the server action
    const result = await sendQuoteRequest(null, formData);

    setIsLoading(false);
    setStatus(result);

    if (result.success) {
      (event.target as HTMLFormElement).reset(); // Reset form on success
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 max-w-md ml-auto relative z-10">
      <h3 className="text-2xl font-bold text-navy-900 mb-2">
        Hemen Teklif Alın
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Firmanızın tehlikeli madde kapsamını 2 dakikada analiz edelim.
      </p>

      {/* Success/Error Message Display */}
      {status && (
        <div
          className={`mb-4 p-3 rounded-lg flex items-center gap-3 text-sm ${
            status.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {status.success ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 uppercase">
            Firma Adı
          </label>
          <Input
            name="company"
            required
            placeholder="Örn: ABC Tekstil San. Tic. A.Ş."
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase">
              Yetkili Kişi
            </label>
            <Input
              name="person"
              required
              placeholder="Ad Soyad"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase">
              Telefon
            </label>
            <Input
              name="phone"
              required
              placeholder="05XX..."
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 uppercase">
            Sektör
          </label>
          {/* Note: Shadcn Select doesn't work with native FormData automatically unless we add a hidden input */}
          <Select name="sector" required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Sektör Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tekstil">Tekstil / Halı / İplik</SelectItem>
              <SelectItem value="gida">Gıda / Bakliyat</SelectItem>
              <SelectItem value="kimya">Kimya / Boya / Plastik</SelectItem>
              <SelectItem value="lojistik">Lojistik / Depolama</SelectItem>
              <SelectItem value="saglik">Sağlık / Hastane</SelectItem>
              <SelectItem value="akaryakit">Akaryakıt İstasyonu</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          disabled={isLoading}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 text-lg shadow-lg shadow-orange-500/20 disabled:opacity-70"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" /> Gönderiliyor...
            </span>
          ) : (
            "Sizi Arayalım"
          )}
        </Button>
        <p className="text-xs text-center text-slate-400 mt-2">
          Verileriniz KVKK kapsamında korunmaktadır.
        </p>
      </form>
    </div>
  );
}
