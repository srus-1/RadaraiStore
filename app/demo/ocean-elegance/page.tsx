"use client";

import { motion } from "framer-motion";
import { MapPin, Gift, Clock, Camera, HeartHandshake } from "lucide-react";

export default function ModernBluePreset() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E3A8A] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="w-full max-w-md">
          <p className="tracking-[0.3em] text-sm uppercase mb-6 text-blue-800">The Wedding Of</p>
          <h1 className="text-5xl font-serif text-[#1E3A8A] mb-2">OLIVIA</h1>
          <p className="text-xl italic font-serif text-blue-700 mb-2">and</p>
          <h1 className="text-5xl font-serif text-[#1E3A8A] mb-10">RALPH</h1>
          
          {/* Foto Prewed Placeholder (Bisa diganti pakai Next/Image nanti) */}
          <div className="w-full aspect-[3/4] bg-blue-100 rounded-t-full mb-10 overflow-hidden border-4 border-white shadow-xl relative">
             <div className="absolute inset-0 flex items-center justify-center text-blue-300">
                <span className="text-8xl font-serif opacity-30">O&R</span>
             </div>
          </div>

          <div className="border-y-2 border-[#1E3A8A] py-4 mb-8 inline-block px-8">
            <h2 className="text-xl font-bold tracking-widest">MAY <span className="text-4xl">18</span> 2025</h2>
          </div>

          <p className="text-xs tracking-widest text-blue-800 uppercase max-w-xs mx-auto leading-relaxed">
            "Isaiah 60:22 When the time is right, I, the Lord, will make it happen"
          </p>
        </motion.div>
      </section>

      {/* 2. WEDDING PROGRAM (Arch Design) */}
      <section className="py-20 px-6 flex flex-col items-center bg-white">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="border-2 border-[#1E3A8A] rounded-t-full pt-16 pb-12 px-10 w-full max-w-sm text-center relative"
        >
          <h3 className="text-2xl font-serif italic mb-8">The Wedding Program</h3>
          <div className="text-5xl font-serif text-[#1E3A8A] mb-10">O&R</div>
          
          <ul className="space-y-4 text-left inline-block">
            <li className="flex items-center gap-4"><Clock className="w-5 h-5 opacity-70" /> 2:00 PM Ceremony</li>
            <li className="flex items-center gap-4"><Clock className="w-5 h-5 opacity-70" /> 4:00 PM Reception</li>
            <li className="flex items-center gap-4"><Clock className="w-5 h-5 opacity-70" /> 5:00 PM Dinner</li>
            <li className="flex items-center gap-4"><Camera className="w-5 h-5 opacity-70" /> 6:00 PM Photo</li>
          </ul>
        </motion.div>
      </section>

      {/* 3. LOVE STORY */}
      <section className="py-20 px-6 text-center bg-[#F0F5FA]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-4xl font-serif italic mb-8">Our love story</h3>
          <p className="text-sm leading-loose max-w-md mx-auto text-blue-900/80">
            In a coastal town, Emily, a marine biologist, and Jack, a fisherman, met when Jack rescued Emily after her boat broke down. Their shared love for the ocean quickly sparked a deep connection. Exploring coves and studying marine life together, they fell in love. One sunset, Jack confessed his feelings, and Emily joyfully reciprocated. Their love story, rooted in their passion for the sea, became a cherished legend in their town.
          </p>
        </motion.div>
      </section>

      {/* 4. THE DETAILS (Dress Code & Colors) */}
      <section className="py-20 px-6 flex flex-col items-center bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full max-w-md text-center">
          <h3 className="text-4xl font-serif italic mb-10">The Details</h3>
          
          <div className="mb-12">
            <h4 className="text-lg italic mb-4">Dress code:</h4>
            <p className="font-bold tracking-widest uppercase mb-4">Formal Attire</p>
            {/* Ikon Baju */}
            <div className="flex justify-center gap-4 text-[#1E3A8A]">
               <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L8 6H4V22H20V6H16L12 2M12 5.5L14.5 8H9.5L12 5.5Z"/></svg>
               <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2M12 11L9.5 8.5L10.92 7.08L12 8.16L15.08 5.08L16.5 6.5L12 11Z"/></svg>
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-lg italic mb-4">Color guide:</h4>
            <p className="text-sm mb-4">Blue</p>
            <div className="flex justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0F172A]"></div>
              <div className="w-8 h-8 rounded-full bg-[#1E3A8A]"></div>
              <div className="w-8 h-8 rounded-full bg-[#3B82F6]"></div>
              <div className="w-8 h-8 rounded-full bg-[#93C5FD]"></div>
              <div className="w-8 h-8 rounded-full bg-[#DBEAFE]"></div>
            </div>
          </div>

          <div>
            <h4 className="text-lg italic mb-4 flex justify-center items-center gap-2"><Gift className="w-5 h-5"/> Gift guide:</h4>
            <p className="text-sm leading-relaxed text-blue-900/80">
              With all that we have, we've been truly blessed. Your presence and prayers are all that we request. But if you desire to give nonetheless, A monetary gift is one we request.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 5. THE VENUES */}
      <section className="py-20 px-6 text-center bg-[#F0F5FA]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-md mx-auto">
          <h3 className="text-4xl font-serif italic mb-10">The Venues</h3>
          
          <div className="bg-white rounded-t-full p-2 pb-8 shadow-lg">
            <div className="w-full aspect-[4/3] bg-blue-200 rounded-t-full mb-6 flex items-center justify-center">
              <span className="text-blue-500 font-medium">Church Photo</span>
            </div>
            <h4 className="text-2xl font-bold tracking-widest text-[#1E3A8A] uppercase mb-4">CEREMONY</h4>
            <p className="text-xs leading-relaxed px-4 text-blue-800">
              The ceremony will be held at<br/>
              Our Lady of Lourdes Parish Church at 2:00 PM<br/><br/>
              Reception will follow at<br/>
              <span className="font-bold">The Farm @ Carpenter Hill, Marbel</span>
            </p>
            
            <a href="https://www.google.com/maps/dir/?api=1&destination=LAT,LONG" target="_blank" rel="noreferrer" className="btn-3d mt-6 inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm hover:bg-blue-900 transition">
              <MapPin className="w-4 h-4" /> Open in Maps
            </a>
          </div>
        </motion.div>
      </section>

      {/* 6. RSVP & CLOSING */}
      <section className="py-20 px-6 flex flex-col items-center text-center bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-4xl font-serif italic mb-6">R.S.V.P</h3>
          <p className="text-sm mb-8 max-w-sm mx-auto text-blue-900/80">
            We will exchange our wedding vows on May 18, 2025 at 2:00 PM in Our Lady of Lourdes Parish. Kindly reserve by May 1, 2025 to secure your seat on our special day.
          </p>
          
          <button className="btn-3d bg-transparent border border-[#1E3A8A] text-[#1E3A8A] px-10 py-3 font-serif tracking-widest hover:bg-[#1E3A8A] hover:text-white transition duration-300">
            R.S.V.P
          </button>

          <div className="mt-20">
            <h4 className="text-2xl font-serif italic mb-4">Gentle reminder</h4>
            <p className="text-xs leading-relaxed max-w-xs mx-auto text-blue-900/60">
              Hope you can make it and God bless to you!
              <br/><br/>
              <HeartHandshake className="w-6 h-6 mx-auto mb-2 text-[#1E3A8A]" />
              <strong>Olivia & Ralph</strong><br/>
              May 18, 2025
            </p>
          </div>
        </motion.div>
      </section>

    </main>
  );
}