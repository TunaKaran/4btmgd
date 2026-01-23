import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/features/ContactModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, AlertTriangle, FileText, Building2 } from "lucide-react";

export default function SSSPage() {
  const faqs = [
    {
      question: "Hangi işletmeler TMGD bulundurmak zorundadır?",
      answer: "Yıllık 50 ton ve üzeri tehlikeli madde (akaryakıt, asit, boya, tıbbi atık vb.) ile iştigal eden (gönderen, paketleyen, yükleyen, dolduran, boşaltan, alan) tüm işletmeler TMGD hizmeti almak zorundadır. Ayrıca miktar ne olursa olsun, patlayıcı (Sınıf 1), radyoaktif (Sınıf 7) ve bulaşıcı (Sınıf 6.2) maddelerle çalışanlar için de zorunluluktur."
    },
    {
      question: "TMGD hizmeti almazsam cezası nedir?",
      answer: "2026 yılı itibarıyla Tehlikeli Madde Faaliyet Belgesi (TMFB) almamanın veya TMGD istihdam etmemenin cezası yaklaşık 25.518 TL'dir. Bu ceza, denetimlerde tespit edilen her ay için ayrı ayrı uygulanabilir ve ihlal tekrarında katlanarak artar."
    },
    {
      question: "Sadece danışmanlık hizmeti almak yeterli mi?",
      answer: "Hayır. Danışmanınızın hazırladığı yıllık faaliyet raporlarını uygulamak, personelinize ADR eğitimi aldırmak, araçlarınızın ve depolarınızın mevzuata uygunluğunu sağlamak işletmenin sorumluluğundadır. Biz 4B TMGD olarak bu sürecin tamamını sizin adınıza yönetiyoruz."
    },
    {
      question: "Hastaneler ve Tıp Merkezleri kapsamda mı?",
      answer: "Evet. Tıbbi atık üreten hastaneler, diyaliz merkezleri ve büyük klinikler 'Bulaşıcı Madde (Sınıf 6.2)' kapsamında değerlendirildiği için miktara bakılmaksızın TMGD hizmeti almak zorundadır."
    },
    {
      question: "Patlamadan Korunma Dökümanı (PKD) nedir?",
      answer: "İş yerlerinde parlayıcı ve patlayıcı maddelerin (toz, gaz, buhar) bulunduğu alanlarda, çalışanların güvenliğini sağlamak amacıyla hazırlanması yasal zorunluluk olan teknik bir mühendislik raporudur. ATEX direktiflerine uygun olarak hazırlanır."
    },
    {
      question: "Hizmet bölgeniz nereleri kapsıyor?",
      answer: "Merkezimiz Gaziantep'te olmak üzere; Kahramanmaraş, Kilis, Osmaniye, Şanlıurfa, Adıyaman ve Hatay illerindeki işletmelere aktif olarak saha ziyareti ve danışmanlık hizmeti veriyoruz."
    },
    {
      question: "Denetimlerde neye bakılıyor?",
      answer: "Ulaştırma Bakanlığı denetçileri; Tehlikeli Madde Faaliyet Belgesi (TMFB), Yıllık Faaliyet Raporları, Personel Eğitim Sertifikaları, Araç Uygunluk Belgeleri, Yangın Tüpleri ve Güvenlik Ekipmanlarını (KKD) kontrol eder."
    },
    {
      question: "Süreç ne kadar sürüyor?",
      answer: "Sözleşme imzalandıktan sonra uzmanlarımız 48 saat içinde işletmenizi ziyaret eder, mevcut durum analizi (GAP analizi) yapar ve eksiklerinizi raporlar. TMFB belgelendirme süreci bakanlık yoğunluğuna göre 1-2 hafta sürebilmektedir."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-navy-900 pt-32 pb-20 text-center px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent"></div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
          Sıkça Sorulan Sorular
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg relative z-10">
          ADR Mevzuatı, cezai yaptırımlar ve süreçler hakkında merak ettiğiniz tüm detaylar.
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="container mx-auto px-4 py-16 max-w-4xl -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 md:p-10">
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-100 rounded-lg px-4 bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:border-teal-100 data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left text-navy-900 font-bold hover:text-teal-600 hover:no-underline py-4 text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-4 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* EXTRA HELP BOX */}
          <div className="mt-12 bg-orange-50 rounded-xl p-8 border border-orange-100 text-center">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Başka sorunuz mu var?</h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              İşletmenizin durumuna özel sorularınız için uzmanlarımızla görüşebilirsiniz. Danışmak ücretsizdir.
            </p>
            <ContactModal 
              triggerText="Uzmana Danışın" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 px-8 rounded-full shadow-lg"
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}