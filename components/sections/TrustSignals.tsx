import { references } from "@/lib/data";

export default function TrustSignals() {
  return (
    <div className="w-full py-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Gaziantep ve Çevre İllerde{" "}
          <span className="text-orange-600">100+ Mutlu Referans</span>
        </p>
      </div>

      {/* The "mask" ensures the edges fade out nicely.
         The 'flex' container holds two identical lists.
      */}
      <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* First List */}
        <div className="animate-marquee flex gap-12 px-6 min-w-full shrink-0 items-center justify-around">
          {references.map((ref, i) => (
            <span
              key={i}
              className="text-lg font-bold text-slate-400 uppercase whitespace-nowrap"
            >
              {ref.name}
            </span>
          ))}
        </div>

        {/* Second List (Duplicate) - Runs immediately after the first */}
        <div className="animate-marquee flex gap-12 px-6 min-w-full shrink-0 items-center justify-around">
          {references.map((ref, i) => (
            <span
              key={`dup-${i}`}
              className="text-lg font-bold text-slate-400 uppercase whitespace-nowrap"
            >
              {ref.name}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}