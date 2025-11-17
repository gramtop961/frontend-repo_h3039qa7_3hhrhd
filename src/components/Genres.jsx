import { motion } from "framer-motion";

const tags = [
  "Acțiune","Aventură","Comedie","Dramă","Fantezie","Sci‑Fi","Slice of Life","Romance","Isekai","Horror","Mister","Sport"
];

export default function Genres() {
  return (
    <section id="genres" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Genuri populare</h2>
            <p className="text-white/60">Alege un stil și descoperă recomandări</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {tags.map((t, i) => (
            <motion.a
              key={t}
              href={`/?genre=${encodeURIComponent(t)}`}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative inline-flex items-center rounded-full px-4 py-2 text-sm ring-1 ring-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              <span className="relative z-10">{t}</span>
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-fuchsia-600/0 via-fuchsia-600/10 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
