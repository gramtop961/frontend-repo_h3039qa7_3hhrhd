import { motion } from "framer-motion";

export default function Spotlight() {
  return (
    <section className="relative py-8 sm:py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-950 via-violet-950 to-indigo-950"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8">
              <p className="text-fuchsia-300 font-semibold">Spotlight</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Recomandarea săptămânii</h3>
              <p className="text-white/70 mt-2">Un shounen plin de energie, cu lupte spectaculoase și umor.</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="/anime/jjk" className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-lg transition">Vezi detalii</a>
                <a href="#trending" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition">Mai multe</a>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop" alt="jjk" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
