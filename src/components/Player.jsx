import { Play } from "lucide-react";

export default function Player() {
  // Demo player: YouTube embed placeholder
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/10 bg-black/40">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="AniKami Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="mt-4 text-white/80">
          <h3 className="text-lg font-semibold">Episod demo</h3>
          <p className="text-sm text-white/60">Player de previzualizare. În versiunea live, aici vor fi sursele reale.</p>
        </div>
      </div>
    </section>
  );
}
