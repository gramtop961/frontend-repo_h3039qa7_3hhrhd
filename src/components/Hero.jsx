import { Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(217,70,239,0.25)_0%,rgba(17,24,39,0)_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-500/10 px-3 py-1 rounded-full text-xs mb-4">
              <Sparkles className="size-3" /> Nou pe AniKami
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Anime oricând, oriunde.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400">Fără griji.</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Explorează un catalog stilizat de anime, episoade și trailere. Design modern, dark mode, mișcări fluide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/watch/demo" className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-lg transition">
                <Play className="size-4" /> Vezi un demo
              </Link>
              <a href="#trending" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition">
                Descoperă trending
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-20 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(217,70,239,0.12),rgba(139,92,246,0.12),transparent)] blur-2xl" />
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-fuchsia-950 via-violet-950 to-indigo-950 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-fuchsia-300 font-semibold">AniKami UI Preview</p>
                <p className="text-white/60 mt-2 max-w-sm">Player demo, carduri anime, grid responsiv, căutare — totul pregătit fără backend.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
