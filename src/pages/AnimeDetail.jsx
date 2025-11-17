import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { findAnime } from "../data/anime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AnimeDetail() {
  const { id } = useParams();
  const anime = useMemo(() => findAnime(id), [id]);

  if (!anime) {
    return (
      <div className="min-h-screen bg-[#0a0a11] text-white flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-white/60">Nu am găsit acest anime.</p>
          <Link className="text-fuchsia-300 hover:text-fuchsia-200 mt-2 inline-block" to="/">Înapoi</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a11] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(139,92,246,0.18)_0%,rgba(10,10,17,0)_70%)]" />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-white/10 bg-black/40">
              <img src={anime.cover} alt={anime.title} className="w-full h-full object-cover" />
            </div>
            <h1 className="mt-6 text-3xl font-bold">{anime.title}</h1>
            <p className="mt-2 text-white/70 max-w-3xl">{anime.description}</p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Episoade</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {anime.episodesList.map((ep) => (
                  <Link
                    key={ep.no}
                    to={`/watch/${anime.id}?e=${ep.no}`}
                    className="group p-3 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">Episodul {ep.no} — {ep.title}</p>
                      <p className="text-sm text-white/60">{ep.duration}</p>
                    </div>
                    <span className="text-fuchsia-300 group-hover:text-fuchsia-200">Vezi</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
              <h3 className="font-semibold">Genuri</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {anime.genres.map((g) => (
                  <span key={g} className="text-xs bg-fuchsia-500/10 text-fuchsia-300 px-2 py-1 rounded-full ring-1 ring-fuchsia-500/20">{g}</span>
                ))}
              </div>
              <div className="mt-4 text-sm text-white/70">{anime.episodes} episoade • scor {anime.rating}
              </div>
              <Link to={`/watch/${anime.id}?e=1`} className="mt-4 inline-flex items-center justify-center w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-lg transition">Începe primul episod</Link>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
