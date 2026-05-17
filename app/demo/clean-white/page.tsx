"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function CleanWhitePreset() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }, // Animasi lebih pelan & cinematic
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-hidden">
      
      {/* 1. COVER SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-8">
          <h1 className="text-5xl sm:text-7xl font-light tracking-tighter text-black">
            Bara & Cinta.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 tracking-[0.2em] uppercase">
            10 . 10 . 2026
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-12 text-zinc-300"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        >
          <div className="w-[1px] h-20 bg-zinc-300 mx-auto"></div>
        </motion.div>
      </section>

      {/* 2. QUOTE SECTION */}
      <section className="py-32 px-6 bg-zinc-50 text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}
          className="max-w-xl mx-auto"
        >
          <p className="text-xl sm:text-3xl font-light text-zinc-800 leading-snug">
            "Sederhana, selamanya."
          </p>
        </motion.div>
      </section>

      {/* 3. EVENT DETAILS SECTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-24">
          
          {/* Card Akad */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center"
          >
            <h3 className="text-2xl font-light tracking-widest uppercase mb-8 border-b border-zinc-200 pb-4 inline-block">
              Holy Matrimony
            </h3>
            <div className="space-y-3 text-zinc-500 font-light mb-8">
              <p>Sabtu, 10 Oktober 2026</p>
              <p>10:00 AM</p>
              <p className="text-zinc-900 font-medium pt-2">Katedral Jakarta</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=LAT,LONG" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 px-6 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-zinc-900 hover:text-white transition-all"
            >
              <MapPin className="w-4 h-4" /> Buka Peta
            </a>
          </motion.div>

          {/* Card Resepsi */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center"
          >
            <h3 className="text-2xl font-light tracking-widest uppercase mb-8 border-b border-zinc-200 pb-4 inline-block">
              Wedding Reception
            </h3>
            <div className="space-y-3 text-zinc-500 font-light mb-8">
              <p>Sabtu, 10 Oktober 2026</p>
              <p>19:00 PM</p>
              <p className="text-zinc-900 font-medium pt-2">Glasshouse, Ritz-Carlton</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=LAT,LONG" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 px-6 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-zinc-900 hover:text-white transition-all"
            >
              <MapPin className="w-4 h-4" /> Buka Peta
            </a>
          </motion.div>

        </div>
      </section>
    </main>
  );
}