import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-900/40 via-violet-900/30 to-indigo-900/30 p-6 sm:p-8"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Începe să urmărești acum</h3>
              <p className="text-white/70 mt-1">Creează-ți lista de favorite și primește recomandări inteligente.</p>
            </div>
            <Link to="/watch/demo" className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-lg transition">
              Continuă <ChevronRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
