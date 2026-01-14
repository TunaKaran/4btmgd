import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-slate-800 text-slate-400 font-sans">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COLUMN 1: BRAND & INFO */}
          <div className="space-y-6">
            {/* Logo Container (White box for visibility) */}
            <div className="bg-white p-3 rounded-xl w-fit inline-block shadow-lg">
              <Image 
                src="/logo-footer.jpg" 
                alt="4B TMGD Kurumu" 
                width={200} 
                height={80} 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Ulaştırma ve Altyapı Bakanlığı tarafından yetkilendirilmiş TMGDK kuruluşuyuz. 
              Gaziantep ve çevre illerde tehlikeli madde süreçlerinizi yasal mevzuata uygun yönetiyoruz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: SERVICES (SEO Links) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/hizmetler" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  ADR / TMGD Danışmanlığı
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Patlamadan Korunma (PKD)
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Tıbbi Atık Yönetimi
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  IMDG (Denizyolu) Kod
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  MSDS (GBF) Hazırlama
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Kurumsal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Anasayfa</Link></li>
              <li><Link href="/referanslar" className="hover:text-white transition-colors">Referanslar</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim & Ulaşım</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Çerez Politikası</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  Karatarla Mah. 42005 Nolu Sk. <br />
                  Güllü Sait İş Merkezi No:4/313 <br />
                  Şahinbey / GAZİANTEP
                </span>
              </li>
              <li>
                <a href="tel:+905323370451" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                  0532 337 04 51
                </a>
              </li>
              <li>
                <a href="mailto:info@4btmgd.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                  info@4btmgd.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-navy-950">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 4B TMGD San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2 opacity-50">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span>Gaziantep, Türkiye</span>
          </div>
        </div>
      </div>
    </footer>
  );
}