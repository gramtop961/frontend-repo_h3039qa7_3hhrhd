import { ShieldCheck, Sparkles, Tv, Zap } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Sparkles, title: "Interfață modernă", desc: "Dark theme cu accente violet și micro-animații fluide." },
  { icon: Tv, title: "Catalog bogat", desc: "Titluri populare, colecții și recomandări personalizate." },
  { icon: Zap, title: "Rapid și responsiv", desc: "Optimizat pentru mobil și desktop, încărcare rapidă." },
  { icon: ShieldCheck, title: "Experiență curată", desc: "Fără distrageri, doar conținutul care contează." },
];

export default function Benefits() {
  return (
    <section className="relative py-8 sm:py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-4 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 blur-md bg-fuchsia-500/30 rounded-full" />
                  <it.icon className="relative size-5 text-fuchsia-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">{it.title}</p>
                  <p className="text-sm text-white/60 mt-1">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
