import { Search, PlayCircle, Flame } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0b0b12]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-fuchsia-500/40 rounded-full" />
            <Flame className="relative size-6 text-fuchsia-400" />
          </div>
          <span className="text-white font-extrabold tracking-wide text-lg">
            Ani<span className="text-fuchsia-400">Kami</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 ml-6 text-sm text-white/70">
          <Link to="/" className="hover:text-white transition-colors">Acasă</Link>
          <a href="#trending" className="hover:text-white transition-colors">Trending</a>
          <a href="#genres" className="hover:text-white transition-colors">Genuri</a>
        </nav>

        <form onSubmit={onSubmit} className="ml-auto flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Caută anime, ex: One Piece"
              className="w-full bg-white/5 text-white placeholder:text-white/40 rounded-lg pl-10 pr-4 py-2.5 outline-none ring-1 ring-white/10 focus:ring-fuchsia-500/50 transition"
            />
          </div>
        </form>

        <Link to="/watch/demo" className="hidden sm:inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-lg transition">
          <PlayCircle className="size-4" />
          <span>Începe să urmărești</span>
        </Link>
      </div>
    </header>
  );
}
