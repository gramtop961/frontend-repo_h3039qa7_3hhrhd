export const ANIME = [
  {
    id: "one-piece",
    title: "One Piece",
    cover: "https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&w=1600&auto=format&fit=crop",
    rating: 9.1,
    episodes: 1100,
    tag: "Shounen",
    description:
      "Luffy pornește într-o aventură epică alături de echipajul său pentru a găsi comoara supremă, One Piece.",
    genres: ["Aventură", "Acțiune", "Comedie"],
    episodesList: Array.from({ length: 12 }).map((_, i) => ({
      no: i + 1,
      title: `Arcul East Blue — Episodul ${i + 1}`,
      duration: "24m",
      source: "dQw4w9WgXcQ",
    })),
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    cover: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop",
    rating: 8.7,
    episodes: 48,
    tag: "Acțiune",
    description:
      "Un licean devine gazda unui blestem antic și intră în lumea vrăjitorilor Jujutsu.",
    genres: ["Acțiune", "Supranatural"],
    episodesList: Array.from({ length: 12 }).map((_, i) => ({
      no: i + 1,
      title: `Kyoto Goodwill Event — Episodul ${i + 1}`,
      duration: "24m",
      source: "tAGnKpE4NCI",
    })),
  },
  {
    id: "aot",
    title: "Attack on Titan",
    cover: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1600&auto=format&fit=crop",
    rating: 9.0,
    episodes: 87,
    tag: "Dark Fantasy",
    description:
      "Umanitatea luptă pentru supraviețuire într-o lume dominată de titani misterioși.",
    genres: ["Dramă", "Acțiune", "Dark Fantasy"],
    episodesList: Array.from({ length: 12 }).map((_, i) => ({
      no: i + 1,
      title: `Shiganshina — Episodul ${i + 1}`,
      duration: "24m",
      source: "MGRm4IzK1SQ",
    })),
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    cover: "https://images.unsplash.com/photo-1505322022364-8614b6d69fd8?q=80&w=1600&auto=format&fit=crop",
    rating: 8.6,
    episodes: 55,
    tag: "Acțiune",
    description:
      "Tanjiro își croiește drum prin lumea demonilor pentru a-și salva sora.",
    genres: ["Acțiune", "Fantezie"],
    episodesList: Array.from({ length: 12 }).map((_, i) => ({
      no: i + 1,
      title: `Mugen Train — Episodul ${i + 1}`,
      duration: "24m",
      source: "ATJYac_dORw",
    })),
  },
];

export const findAnime = (id) => ANIME.find((a) => a.id === id);
