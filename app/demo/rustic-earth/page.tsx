"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Calendar, Clock, Leaf } from "lucide-react";

export default function RusticEarthPreset() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[#F9F6F0] text-stone-800 font-sans overflow-x-hidden">
      
      {/* 1. COVER SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 border-b border-stone-200/50">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
          <p className="text-sm tracking-[0.4em] uppercase text-amber-700 font-medium">
            Perayaan Cinta
          </p>
          <h1 className="text-6xl sm:text-8xl font-serif text-stone-900 mb-4 tracking-tight">
            Bumi & Senja
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 font-light italic">
            Sabtu, 14 Agustus 2026
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 animate-bounce text-amber-700/60"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        >
          <Leaf className="w-6 h-6 mx-auto mb-2 opacity-70" />
          <div className="w-[1px] h-12 bg-amber-700/30 mx-auto"></div>
        </motion.div>
      </section>

      {/* 2. QUOTE SECTION */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg sm:text-2xl font-serif text-stone-600 leading-relaxed">
            &quot;Seperti akar yang memeluk bumi, begitu pula kami mengikat janji untuk saling bertumbuh dan menopang satu sama lain.&quot;
          </p>
        </motion.div>
      </section>

      {/* 3. EVENT DETAILS SECTION */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card Akad */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#F9F6F0] p-10 rounded-2xl shadow-sm text-center border-t-4 border-amber-700/80"
          >
            <h3 className="text-3xl font-serif text-stone-900 mb-6">Akad Nikah</h3>
            <div className="space-y-4 text-stone-600 mb-8">
              <p className="flex items-center justify-center gap-2"><Calendar className="w-5 h-5 text-amber-700/70" /> Sabtu, 14 Agustus 2026</p>
              <p className="flex items-center justify-center gap-2"><Clock className="w-5 h-5 text-amber-700/70" /> 09:00 WIB</p>
              <p className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-amber-700/70" /> Hutan Pinus Mangunan</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=LAT,LONG" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-stone-800 text-[#F9F6F0] px-8 py-3 rounded-lg text-sm font-medium tracking-widest uppercase hover:bg-amber-800 transition-colors"
            >
              Petunjuk Arah
            </a>
          </motion.div>

          {/* Card Resepsi */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#F9F6F0] p-10 rounded-2xl shadow-sm text-center border-t-4 border-amber-700/80"
          >
            <h3 className="text-3xl font-serif text-stone-900 mb-6">Perayaan</h3>
            <div className="space-y-4 text-stone-600 mb-8">
              <p className="flex items-center justify-center gap-2"><Calendar className="w-5 h-5 text-amber-700/70" /> Sabtu, 14 Agustus 2026</p>
              <p className="flex items-center justify-center gap-2"><Clock className="w-5 h-5 text-amber-700/70" /> 15:30 WIB - Selesai</p>
              <p className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-amber-700/70" /> Hutan Pinus Mangunan</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=LAT,LONG" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-stone-800 text-[#F9F6F0] px-8 py-3 rounded-lg text-sm font-medium tracking-widest uppercase hover:bg-amber-800 transition-colors"
            >
              Petunjuk Arah
            </a>
          </motion.div>

        </div>
      </section>
    </main>
  );
}