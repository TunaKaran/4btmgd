import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/features/ContactModal";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Users,
  ShieldAlert,
  Award,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EgitimPage() {
  const trainingModules = [
    {
      title: "Genel Bilinçlendirme Eğitimi",
      desc: "Tehlikeli maddelerin taşınmasıyla ilgili genel kurallar, risk sınıfları ve etiketleme standartları hakkında temel eğitim.",
      duration: "2 Saat",
      target: "Tüm Personel",
    },
    {
      title: "Göreve Özgü Eğitim",
      desc: "Personelin yaptığı işe (paketleme, yükleme, şoför vb.) özel olarak, mevzuattaki sorumluluklarını kapsayan teknik eğitim.",
      duration: "4 Saat",
      target: "Operasyonel Personel",
    },
    // YENİ EKLENEN EĞİTİM:
    {
      title: "Patlamadan Korunma (PKD) Eğitimi",
      desc: "Çalışanların patlayıcı ortamların tehlikelerinden korunması, ATEX direktifleri, Zone hesaplamaları ve güvenlik tedbirleri üzerine teknik eğitim.",
      duration: "4 Saat",
      target: "Mühendisler ve İSG Ekipleri",
    },
    {
      title: "Emniyet ve Güvenlik Eğitimi",
      desc: "Kaza, sızıntı veya yangın durumunda acil müdahale, kişisel koruyucu donanım kullanımı ve risk azaltma yöntemleri.",
      duration: "3 Saat",
      target: "Acil Durum Ekipleri",
    },
    {
      title: "Uygulamalı Saha Eğitimi",
      desc: "Teorik bilgilerin sahada pekiştirilmesi, araç başı kontroller ve dökülme kitlerinin kullanımı üzerine pratik tatbikatlar.",
      duration: "Yarım Gün",
      target: "Saha Çalışanları",
    },
  ];

  // 10 Adet Fotoğraf İçin Dizi
  const galleryImages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/school.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-500/30 px-4 py-1.5 rounded-full text-teal-400 font-bold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4">
            <GraduationCap className="w-5 h-5" />
            4B AKADEMİ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sertifikalı ADR ve Güvenlik Eğitimleri
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            ADR Bölüm 1.3 uyarınca yasal zorunluluk olan personel eğitimlerini,
            işletmenize özel programlarla veriyor ve belgelendiriyoruz.
          </p>
        </div>
      </section>

      {/* WHY TRAINING SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">
              Neden Eğitim Almalısınız?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Tehlikeli Malların Karayolu ile Taşınması Yönetmeliği gereğince,
              tehlikeli maddelerle işlem yapan (gönderen, taşıyan, alıcı,
              yükleyen, paketleyen) işletmelerin personelleri{" "}
              <strong>ADR Farkındalık Eğitimi</strong> almak zorundadır.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-orange-500 shrink-0" />
                <span className="text-slate-700">
                  İş kazalarını ve çevresel riskleri minimize eder.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-teal-500 shrink-0" />
                <span className="text-slate-700">
                  Bakanlık denetimlerinde cezai işlem uygulanmasını engeller.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-slate-700">
                  Personelinize "ADR Eğitim Sertifikası" kazandırır.
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {/* Buraya ana eğitim fotoğrafı gelecek - egitim-1.jpg kullanıldı */}
            <Image
              src="/egitim-1.jpeg"
              alt="4B TMGD Eğitim Sınıfı"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* TRAINING MODULES GRID */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">
              Eğitim Müfredatımız
            </h2>
            <p className="text-slate-500 mt-2">
              Teorik ve pratik uygulamalı eğitim modülleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainingModules.map((module, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase">
                    {module.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-slate-500 mb-4">{module.desc}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-teal-600">
                  <Users className="w-4 h-4" />
                  Hedef Kitle: {module.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY (10 PHOTOS) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">
              Eğitimlerimizden Kareler
            </h2>
            <p className="text-slate-500 mt-2">
              Gaziantep OSB'de gerçekleştirdiğimiz saha ve sınıf eğitimleri
            </p>
          </div>

          {/* Masonry-like Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((num, idx) => (
              <div
                key={num}
                className={`relative rounded-xl overflow-hidden shadow-md group ${
                  // Bazı fotoları büyük yaparak modern görünüm sağlıyoruz
                  idx === 0 || idx === 7 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={`/egitim-${num}.jpeg`}
                  alt={`4B TMGD Eğitim Fotoğrafı ${num}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold border border-white px-4 py-2 rounded-full">
                    İncele
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION CTA */}
      <section className="py-20 bg-navy-900 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Eğitim Takviminizi Planlayalım
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Eğitimler firmanızın toplantı salonunda veya bizim eğitim
            merkezimizde yapılabilmektedir. Uygun tarihleri belirlemek için
            hemen iletişime geçin.
          </p>

          <div className="flex justify-center gap-4">
            <ContactModal
              triggerText="Eğitim Talep Et"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-orange-900/20"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
