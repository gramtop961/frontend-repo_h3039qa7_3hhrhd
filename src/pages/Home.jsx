import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import AnimeGrid from "../components/AnimeGrid";
import Footer from "../components/Footer";

export default function Home() {
  const q = new URLSearchParams(window.location.search).get("q") || "";
  return (
    <div className="min-h-screen bg-[#0a0a11] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(139,92,246,0.18)_0%,rgba(10,10,17,0)_70%)]" />
      <Navbar />
      <main>
        {!q && <Hero />}
        {!q && <Trending />}
        <AnimeGrid query={q} heading={q ? `Rezultate pentru “${q}”` : "Toate anime-urile"} />
      </main>
      <Footer />
    </div>
  );
}
