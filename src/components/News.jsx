import { motion } from "framer-motion";

const news = [
  { id: 1, title: "Sezon nou pentru Jujutsu Kaisen anunțat", date: "Iul 2025" },
  { id: 2, title: "Demon Slayer: film nou confirmat", date: "Iun 2025" },
  { id: 3, title: "One Piece depășește 1100 de episoade", date: "Mai 2025" },
];

export default function News() {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Știri & noutăți</h2>
            <p className="text-white/60">Rămâi la curent cu anunțurile importante</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {news.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition p-4"
            >
              <p className="text-white font-medium">{n.title}</p>
              <p className="text-sm text-white/50 mt-1">{n.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
