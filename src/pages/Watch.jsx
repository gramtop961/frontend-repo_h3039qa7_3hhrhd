import { useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { findAnime } from "../data/anime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Watch() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const epNo = Number(params.get("e") || 1);
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

  const current = anime.episodesList.find((e) => e.no === epNo) || anime.episodesList[0];

  return (
    <div className="min-h-screen bg-[#0a0a11] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(139,92,246,0.18)_0%,rgba(10,10,17,0)_70%)]" />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/10 bg-black/40">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${current.source}?rel=0`}
            title={`${anime.title} — Episodul ${current.no}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">{anime.title}</h1>
            <p className="text-white/70">Episodul {current.no} — {current.title}</p>
          </div>
          <div className="flex gap-2 overflow-auto">
            {anime.episodesList.map((ep) => (
              <Link
                key={ep.no}
                to={`/watch/${anime.id}?e=${ep.no}`}
                className={`px-3 py-1.5 rounded-lg text-sm ring-1 transition ${ep.no === current.no ? "bg-fuchsia-600 ring-fuchsia-400" : "bg-white/5 hover:bg-white/10 ring-white/10"}`}
              >
                Ep {ep.no}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
