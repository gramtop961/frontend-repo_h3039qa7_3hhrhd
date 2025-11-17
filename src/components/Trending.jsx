import { Play, Star, Flame } from "lucide-react";

const demoAnime = [
  {
    id: "one-piece",
    title: "One Piece",
    cover: "https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&w=1600&auto=format&fit=crop",
    rating: 9.1,
    episodes: 1100,
    tag: "Shounen",
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    cover: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop",
    rating: 8.7,
    episodes: 48,
    tag: "Acțiune",
  },
  {
    id: "aot",
    title: "Attack on Titan",
    cover: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1600&auto=format&fit=crop",
    rating: 9.0,
    episodes: 87,
    tag: "Dark Fantasy",
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    cover: "https://images.unsplash.com/photo-1505322022364-8614b6d69fd8?q=80&w=1600&auto=format&fit=crop",
    rating: 8.6,
    episodes: 55,
    tag: "Acțiune",
  },
];

function Card({ item }) {
  return (
    <a href={`/anime/${item.id}`} className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition">
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
      <div className="absolute top-3 right-3 bg-black/50 text-white/90 px-2 py-1 rounded text-xs inline-flex items-center gap-1">
        <Flame className="size-3 text-fuchsia-300" /> Trending
      </div>
    </a>
  );
}

export default function Trending() {
  return (
    <section id="trending" className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Trending acum</h2>
            <p className="text-white/60">Cele mai urmărite titluri din această săptămână</p>
          </div>
          <a href="#" className="hidden sm:inline text-fuchsia-300 hover:text-fuchsia-200">Vezi tot</a>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {demoAnime.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
