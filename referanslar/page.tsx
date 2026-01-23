import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Footer'ı da ekleyelim
import { references } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function ReferencesPage() {
  // Sektör listesi
  const sectors = [
    "Tekstil",
    "Gıda",
    "Kimya",
    "Sağlık",
    "Lojistik",
    "Ambalaj",
    "Enerji",
    "Diğer",
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* DÜZELTME BURADA YAPILDI: 
         "py-20" yerine "pt-40 pb-20" kullanıldı.
         Navbar yüksekliği (yaklaşık 100px) + boşluk için üstten 40 birim (160px) ittik.
      */}
      <div className="bg-navy-900 pt-40 pb-20 text-center border-b border-slate-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Referanslarımız
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Gaziantep ve çevre illerde tehlikeli madde süreçlerini güvenle
            yönettiğimiz iş ortaklarımız.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grow">
        <div className="grid gap-16">
          {sectors.map((sector) => {
            // Sektöre göre filtreleme
            const sectorRefs = references.filter((r) => r.sector === sector);

            // Eğer o sektörde referans yoksa gösterme
            if (sectorRefs.length === 0) return null;

            return (
              <div key={sector} id={sector.toLowerCase()}>
                <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
                  <h2 className="text-2xl font-bold text-navy-900">
                    {sector} Sektörü
                  </h2>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 font-bold px-3 py-1"
                  >
                    {sectorRefs.length} Firma
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {sectorRefs.map((item, i) => (
                    <Card
                      key={i}
                      className="p-5 border-l-4 border-l-teal-500 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                    >
                      <p className="font-bold text-slate-700">{item.name}</p>
                      {/* Şehir bilgisi varsa ekleyebiliriz, yoksa silebilirsiniz */}
                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                        GAZİANTEP
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
