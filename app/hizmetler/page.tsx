import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Flame,
  FileText,
  Syringe,
  Ship,
  GraduationCap,
  ShieldCheck,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "tmgd",
      icon: <Truck className="w-12 h-12 text-teal-600" />,
      title: "TMGD Danışmanlığı (ADR/RID)",
      description:
        "Tehlikeli maddelerin karayolu (ADR) ve demiryolu (RID) ile taşınması süreçlerinde, işletmenizin yasal sorumluluklarını eksiksiz yönetiyoruz.",
      features: [
        "Yıllık Faaliyet Raporlarının Hazırlanması",
        "Araç ve Ekipman Uygunluk Denetimi",
        "Yükleme/Boşaltma Prosedürlerinin Oluşturulması",
        "Acil Durum Eylem Planları",
      ],
    },
    {
      id: "pkd",
      icon: <Flame className="w-12 h-12 text-teal-600" />,
      title: "Patlamadan Korunma (PKD)",
      description:
        "İş yerlerinizde oluşabilecek patlayıcı ortamların tehlikelerinden çalışanları korumak için zorunlu olan PKD dökümanını mühendislik hesaplamalarıyla hazırlıyoruz.",
      features: [
        "EN 60079 Standartlarına Uygunluk",
        "Zone (Bölge) Haritalandırması",
        "Risk Analizi ve Derecelendirme",
        "Ekipman (Ex-Proof) Uygunluk Kontrolü",
      ],
    },
    {
      id: "imdg",
      icon: <Ship className="w-12 h-12 text-teal-600" />,
      title: "IMDG Kod (Denizyolu)",
      description:
        "Mersin ve İskenderun limanları çıkışlı ihracatlarınızda, tehlikeli yüklerin denizyolu kurallarına (IMDG Code) uygunluğunu denetliyor ve belgelendiriyoruz.",
      features: [
        "Konteyner Yükleme Sertifikası",
        "MSDS Kontrol ve Onay",
        "Liman Operasyon Danışmanlığı",
        "Tehlikeli Yük Deklarasyonu",
      ],
    },
    {
      id: "msds",
      icon: <FileText className="w-12 h-12 text-teal-600" />,
      title: "MSDS (GBF) Hazırlama",
      description:
        "Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması (KKDİK) yönetmeliğine uygun, TÜRKAK onaylı uzmanlarımızca Güvenlik Bilgi Formu hazırlıyoruz.",
      features: [
        "27 Dilde MSDS Hazırlama",
        "GBF Güncelleme ve Doğrulama",
        "Etiketleme Mevzuatına Uyum",
        "Tedariçi Bilgi Formu Yönetimi",
      ],
    },
    {
      id: "tibbi",
      icon: <Syringe className="w-12 h-12 text-teal-600" />,
      title: "Tıbbi Atık Yönetimi",
      description:
        "Hastaneler, diyaliz merkezleri ve klinikler için tıbbi atıkların kaynağında ayrıştırılması, taşınması ve bertaraf süreçlerinde tam kapsamlı danışmanlık.",
      features: [
        "Atık Yönetim Planı Oluşturma",
        "Personel Hijyen ve Güvenlik Eğitimi",
        "MoTAT Kayıt İşlemleri",
        "Tıbbi Atık Beyanları",
      ],
    },
    {
      id: "egitim",
      icon: <GraduationCap className="w-12 h-12 text-teal-600" />,
      title: "Sertifikalı Eğitimler",
      description:
        "Tehlikeli maddelerle iştigal eden personellerinizin yasal zorunluluk olan bilinçlendirme ve göreve özgü eğitimlerini veriyor, sertifikalandırıyoruz.",
      features: [
        "ADR Genel Bilinçlendirme Eğitimi",
        "Emniyet ve Güvenlik Eğitimi",
        "Dökülme ve Sızıntı Müdahale Tatbikatı",
        "Kişisel Koruyucu Donanım (KKD) Kullanımı",
      ],
    },
    {
      id: "uetds",
      icon: <Database className="w-12 h-12 text-teal-600" />,
      title: "U-ETDS Bildirim Yönetimi",
      description:
        "Lojistik firmaları için zorunlu olan Ulaştırma Elektronik Takip ve Denetim Sistemi veri girişlerinizi hatasız ve cezai risk oluşmadan yönetiyoruz.",
      features: [
        "Anlık Sefer Bildirimi",
        "Sürücü ve Plaka Kayıtları",
        "Cezai Durum Analizi",
        "Sistem Entegrasyon Desteği",
      ],
    },
    {
      id: "audit",
      icon: <ShieldCheck className="w-12 h-12 text-teal-600" />,
      title: "3. Taraf Saha Denetimi",
      description:
        "İşletmenizin mevcut durumunu bağımsız bir gözle denetliyor, eksikleri raporluyor ve Bakanlık denetimlerine %100 hazır hale getiriyoruz.",
      features: [
        "Mock (Sahte) Bakanlık Denetimi",
        "GAP (Boşluk) Analizi",
        "Yasal Mevzuat Uyumluluk Raporu",
        "Düzeltici Faaliyet Takibi",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-navy-900 py-24 md:py-32 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-400 text-sm font-bold mb-6">
            ULAŞTIRMA BAKANLIĞI YETKİLİ KURULUŞU
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Uzmanlık Alanlarımız
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Gaziantep sanayisinden Mersin Limanı'na kadar tüm tehlikeli madde
            süreçlerinizde, cezai riskleri ortadan kaldıran mühendislik
            çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-teal-500/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-6 bg-teal-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-100">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="bg-navy-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-teal-900/20 to-transparent pointer-events-none"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              İşletmeniz Mevzuata Uygun Mu?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg relative z-10">
              Ücretsiz ön inceleme ile firmanızın tehlikeli madde kapsamındaki
              yükümlülüklerini belirleyelim, ceza riskini raporlayalım.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 px-10 text-lg rounded-full shadow-lg shadow-orange-900/20">
                Ücretsiz Keşif Talep Et
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-white/10 h-14 px-10 text-lg rounded-full bg-transparent"
              >
                Bize Ulaşın <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
