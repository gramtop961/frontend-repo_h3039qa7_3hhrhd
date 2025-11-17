import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a11] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(139,92,246,0.18)_0%,rgba(10,10,17,0)_70%)]" />
      <Navbar />
      <main>
        <Hero />
        <Trending />
      </main>
      <Footer />
    </div>
  );
}

export default App;
