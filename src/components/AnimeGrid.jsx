import { Star } from "lucide-react";
import { ANIME } from "../data/anime";

export default function AnimeGrid({ query = "", heading = "Recomandări" }) {
  const q = query.trim().toLowerCase();
  const list = ANIME.filter(
    (a) => !q || a.title.toLowerCase().includes(q) || a.genres.join(" ").toLowerCase().includes(q)
  );

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{heading}</h2>
          <p className="text-white/60 text-sm">{list.length} titluri</p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((item) => (
            <a key={item.id} href={`/anime/${item.id}`} className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition">
              <img src={item.cover} alt={item.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs text-yellow-300 bg-yellow-500/20 px-2 py-0.5 rounded">
                    <Star className="size-3" /> {item.rating}
                  </span>
                  <span className="text-xs text-white/70">{item.episodes} ep</span>
                  <span className="text-xs text-fuchsia-300">{item.tag}</span>
                </div>
                <h3 className="text-white font-semibold drop-shadow">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
