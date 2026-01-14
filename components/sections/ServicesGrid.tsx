import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Truck,
  FlaskConical,
  Anchor,
  FileCheck,
  Flame,
  Syringe,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: <Truck className="w-10 h-10 text-brand-light" />,
    title: "TMGD & ADR/RID Hizmetleri",
    desc: "Karayolu ve Demiryolu taşımacılığında araç uygunluk, saha denetimi ve yasal zorunluluk süreçlerinin tam yönetimi.",
  },
  {
    icon: <Flame className="w-10 h-10 text-brand-light" />,
    title: "Patlamadan Korunma (PKD)",
    desc: "Tesisleriniz için yasal zorunluluk olan Patlamadan Korunma Dökümanı (PKD) hazırlanması ve risk analizi.",
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-brand-light" />,
    title: "MSDS (GBF) Hazırlama",
    desc: "Kimyasalların Kaydı, Değerlendirilmesi (KKDİK) kapsamında sertifikalı uzmanlarımızla Güvenlik Bilgi Formu hazırlığı.",
  },
  {
    icon: <Syringe className="w-10 h-10 text-brand-light" />,
    title: "Tıbbi Atık Yönetimi",
    desc: "Hastaneler ve sağlık kuruluşları için tıbbi atıkların güvenli toplanması, taşınması ve bertaraf danışmanlığı.",
  },
  {
    icon: <Anchor className="w-10 h-10 text-brand-light" />,
    title: "IMDG (Denizyolu)",
    desc: "Mersin Limanı çıkışlı ihracat yüklemelerinizde konteyner, evrak onayı ve liman operasyon danışmanlığı.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-brand-light" />,
    title: "Eğitim & Sertifikalandırma",
    desc: "Personeliniz için Genel Bilinçlendirme, Göreve Özgü Eğitim ve Emniyet Eğitimlerinin verilmesi.",
  },
  {
    icon: <FileCheck className="w-10 h-10 text-brand-light" />,
    title: "U-ETDS Bildirimi",
    desc: "Lojistik süreçlerinizde zorunlu olan U-ETDS veri girişleriniz için yazılım desteği ve operasyonel yönetim.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-brand-light" />,
    title: "Saha Denetimi & Raporlama",
    desc: "İşletmenizdeki tehlikeli madde süreçlerinin yerinde incelenmesi ve aylık faaliyet raporlarının sunulması.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Uçtan Uca Güvenlik Çözümleri
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Gaziantep sanayisinin ihtiyaçlarına yönelik, Ulaştırma Bakanlığı
            mevzuatına %100 uygun profesyonel hizmetler.
          </p>
        </div>

        {/* Updated grid to handle more items gracefully */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card
              key={i}
              className="border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group"
            >
              <CardHeader>
                <div className="mb-4 p-4 bg-teal-50 rounded-2xl w-fit group-hover:bg-teal-100 transition-colors">
                  {s.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
