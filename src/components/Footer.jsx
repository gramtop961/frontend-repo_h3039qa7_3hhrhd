export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/5 bg-[#0b0b12]/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} AniKami. Toate drepturile rezervate.</p>
        <div className="text-white/60 text-sm flex items-center gap-4">
          <a href="#" className="hover:text-white">Termeni</a>
          <a href="#" className="hover:text-white">Confidențialitate</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
