import { motion } from "framer-motion";

const rows = [
  {
    title: "Colecție: Bătălii epice",
    items: [
      { id: "op", title: "One Piece", img: "https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&w=1600&auto=format&fit=crop" },
      { id: "aot", title: "Attack on Titan", img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1600&auto=format&fit=crop" },
      { id: "ds", title: "Demon Slayer", img: "https://images.unsplash.com/photo-1505322022364-8614b6d69fd8?q=80&w=1600&auto=format&fit=crop" },
      { id: "jjk", title: "Jujutsu Kaisen", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop" },
      { id: "op2", title: "One Piece", img: "https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&w=1600&auto=format&fit=crop" },
    ],
  },
  {
    title: "Colecție: Fantezie întunecată",
    items: [
      { id: "aot2", title: "Attack on Titan", img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1600&auto=format&fit=crop" },
      { id: "ds2", title: "Demon Slayer", img: "https://images.unsplash.com/photo-1505322022364-8614b6d69fd8?q=80&w=1600&auto=format&fit=crop" },
      { id: "jjk2", title: "Jujutsu Kaisen", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop" },
      { id: "op3", title: "One Piece", img: "https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&w=1600&auto=format&fit=crop" },
      { id: "aot3", title: "Attack on Titan", img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1600&auto=format&fit=crop" },
    ],
  },
];

function Row({ title, items }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-white/10">
          {items.map((it, i) => (
            <motion.a
              key={it.id}
              href={`/anime/${it.id}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative w-40 sm:w-48 shrink-0 snap-start"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p className="mt-2 text-sm text-white/80 group-hover:text-white transition-colors line-clamp-1">{it.title}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Collections() {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {rows.map((r) => (
          <Row key={r.title} {...r} />
        ))}
      </div>
    </section>
  );
}
