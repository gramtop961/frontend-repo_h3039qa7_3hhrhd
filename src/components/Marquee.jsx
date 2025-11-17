import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const sponsors = [
  "Crunchyroll", "Aniplex", "MAPPA", "Toei", "Ufotable", "WIT Studio", "Bones"
];

export default function Marquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) controls.start({ x: [0, -600], transition: { repeat: Infinity, duration: 18, ease: "linear" } });
  }, [inView, controls]);

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative rounded-xl ring-1 ring-white/10 bg-white/5 p-3">
          <motion.div ref={ref} animate={controls} className="flex gap-10 whitespace-nowrap">
            {sponsors.map((s) => (
              <span key={s} className="text-white/60">{s}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
