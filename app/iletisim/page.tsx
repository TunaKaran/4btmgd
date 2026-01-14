import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Don't forget to import Footer
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const whatsappLink =
    "https://wa.me/905323370451?text=Merhaba,%20TMGD%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.";

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-navy-900 pt-32 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Bize Ulaşın
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          Tehlikeli madde güvenlik süreçleriniz için profesyonel destek alın.
        </p>
      </section>

      <section className="container mx-auto px-4 py-16 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1: PHONE & WHATSAPP */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Telefon & WhatsApp
            </h3>
            <p className="text-slate-500 mb-6 text-sm">
              7/24 Acil durum hattı.
            </p>

            <a
              href="tel:+905323370451"
              className="text-2xl font-bold text-slate-800 hover:text-orange-600 transition-colors mb-6 block"
            >
              0532 337 04 51
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl font-bold shadow-md shadow-green-200 transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp'tan Yazın
            </a>
          </div>

          {/* CARD 2: EMAIL */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">E-Posta</h3>
            <p className="text-slate-500 mb-6 text-sm">
              Teklif ve işbirlikleri için.
            </p>
            <a
              href="mailto:info@4btmgd.com"
              className="text-xl font-bold text-slate-800 hover:text-teal-600 transition-colors break-all"
            >
              info@4btmgd.com
            </a>
            <div className="mt-6 w-full">
              <a
                href="mailto:info@4btmgd.com"
                className="block w-full py-3 px-4 border-2 border-slate-100 hover:border-teal-500 text-slate-600 hover:text-teal-600 rounded-xl font-bold transition-colors"
              >
                Mail Gönder
              </a>
            </div>
          </div>

          {/* CARD 3: ADDRESS */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Merkez Ofis
            </h3>
            <p className="text-slate-500 mb-4 text-sm">Gaziantep / Şahinbey</p>
            <address className="not-italic text-slate-700 font-medium leading-relaxed text-sm">
              Karatarla Mah. 42005 Nolu Sk.
              <br />
              Güllü Sait İş Merkezi No: 4<br />
              İç Kapı No: 313
            </address>
            <div className="mt-6 w-full">
              <a
                href="https://maps.app.goo.gl/YourGoogleMapsLink"
                target="_blank"
                className="block w-full py-3 px-4 border-2 border-slate-100 hover:border-blue-500 text-slate-600 hover:text-blue-600 rounded-xl font-bold transition-colors"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS SECTION (UPDATED) */}
        <div className="mt-16 bg-white p-4 rounded-3xl shadow-lg border border-slate-100">
          <div className="h-112.5 w-full bg-slate-200 rounded-2xl overflow-hidden relative">
            <iframe
              src="https://maps.google.com/maps?q=4%20B%20TEHL%C4%B0KEL%C4%B0%20MADDE%20G%C3%9CVENL%C4%B0K%20DANI%C5%9EMANLI%C4%9EI%20SAN.%20VE%20T%C4%B0C.%20LTD.%C5%9ET%C4%B0.&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-white flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-navy-900 text-sm">
                  Ofisimiz Burası
                </p>
                <p className="text-xs text-slate-500">Güllü Sait İş Merkezi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
