"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";

export default function DemoPreset() {
  // Animasi standar biar sat-set dan nggak perlu nulis ulang
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-rose-50 text-slate-800 font-sans overflow-x-hidden">
      
      {/* 1. COVER SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-6"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-rose-400 font-semibold">
            The Wedding Of
          </p>
          <h1 className="text-6xl sm:text-8xl font-serif text-slate-900 mb-4">
            Romeo & Juliet
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-light">
            Minggu, 28 Mei 2026
          </p>
        </motion.div>
        
        {/* Dekorasi Scroll */}
        <motion.div 
          className="absolute bottom-10 animate-bounce text-rose-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-xs tracking-widest uppercase mb-2">Scroll</p>
          <div className="w-[1px] h-12 bg-rose-300 mx-auto"></div>
        </motion.div>
      </section>

      {/* 2. QUOTE SECTION */}
      <section className="py-24 px-6 bg-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <Heart className="w-8 h-8 mx-auto text-rose-300 mb-6" />
          <p className="text-lg sm:text-2xl font-serif italic text-slate-700 leading-relaxed">
            &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya...&quot;
          </p>
        </motion.div>
      </section>

      {/* 3. EVENT DETAILS SECTION */}
      <section className="py-24 px-6 bg-rose-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card Akad */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white p-10 rounded-3xl shadow-sm text-center border border-rose-100"
          >
            <h3 className="text-3xl font-serif text-slate-900 mb-6">Akad Nikah</h3>
            <div className="space-y-4 text-slate-600 mb-8">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-rose-400" />
                Minggu, 28 Mei 2026
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-rose-400" />
                08:00 WIB - Selesai
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-rose-400" />
                Masjid Raya Al-A&apos;zhom
              </p>
            </div>
            {/* Tombol Navigasi Sat-Set */}
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=LAT,LONG" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-900 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-rose-800 transition-colors"
            >
              Buka Google Maps
            </a>
          </motion.div>

          {/* Card Resepsi */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white p-10 rounded-3xl shadow-sm text-center border border-rose-100"
          >
            <h3 className="text-3xl font-serif text-slate-900 mb-6">Resepsi</h3>
            <div className="space-y-4 text-slate-600 mb-8">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-rose-400" />
                Minggu, 28 Mei 2026
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-rose-400" />
                11:00 WIB - 15:00 WIB
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-rose-400" />
                Ballroom Hotel Mulia
              </p>
            </div>
            {/* Tombol Navigasi Sat-Set */}
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=LAT,LONG" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-900 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-rose-800 transition-colors"
            >
              Buka Google Maps
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}