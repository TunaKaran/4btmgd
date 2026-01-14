import Navbar from "@/components/layout/Navbar";
import { references } from "@/lib/data";
import { Badge } from "@/components/ui/badge"; // Ensure you have Badge component
import { Card } from "@/components/ui/card";

export default function ReferencesPage() {
  // Group by sector
  const sectors = ["Tekstil", "Gıda", "Kimya", "Sağlık", "Lojistik", "Ambalaj", "Enerji"];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Referanslarımız</h1>
        <p className="text-slate-400">Gaziantep sanayisinin önde gelen kuruluşları tehlikeli madde süreçlerinde bizi tercih ediyor.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12">
          {sectors.map((sector) => {
            const sectorRefs = references.filter(r => r.sector === sector || (sector === "Kimya" && r.sector === "Ambalaj")); // Combine if needed
            if (sectorRefs.length === 0) return null;

            return (
              <div key={sector}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">{sector} Sektörü</h2>
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800 font-bold">
                    {sectorRefs.length} Firma
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectorRefs.map((item, i) => (
                    <Card key={i} className="p-4 border-l-4 border-l-teal-500 shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-semibold text-slate-700">{item.name}</p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}