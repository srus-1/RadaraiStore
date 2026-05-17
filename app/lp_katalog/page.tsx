"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Data Dummy Preset - Deskripsi dihapus, ditambahin property "badge"
const presets = [
  {
    id: "soft-peony-1",
    name: "Soft Peony",
    badge: "eksklusif",
    imageUrl: "/soft-peony.jpg",
    demoPath: "Soft-Peony",
  },
  {
    id: "rustic-earth-1",
    name: "Rustic Earth",
    badge: "eksklusif",
    imageUrl: "/rustic-earth.jpg",
    demoPath: "rustic-earth",
  },
  {
    id: "clean-white-1",
    name: "Clean White",
    badge: "premium",
    imageUrl: "/clean-white.jpg",
    demoPath: "clean-white",
  },
  {
    id: "ocean-elegance-1",
    name: "Ocean Elegance",
    badge: "premium",
    imageUrl: "/ocean-elegance.jpg",
    demoPath: "ocean-elegance",
  },
  {
    id: "soft-peony-2",
    name: "Soft Peony Bloom",
    badge: "eksklusif",
    imageUrl: "/preset-bloom.svg",
    demoPath: "Soft-Peony",
  },
  {
    id: "rustic-earth-2",
    name: "Rustic Earth Gold",
    badge: "eksklusif",
    imageUrl: "/preset-gold.svg",
    demoPath: "rustic-earth",
  },
  {
    id: "clean-white-2",
    name: "Clean White Luxe",
    badge: "premium",
    imageUrl: "/preset-luxe.svg",
    demoPath: "clean-white",
  },
  {
    id: "ocean-elegance-2",
    name: "Ocean Elegance Sky",
    badge: "premium",
    imageUrl: "/preset-sky.svg",
    demoPath: "ocean-elegance",
  },
  {
    id: "soft-peony-3",
    name: "Soft Peony Classic",
    badge: "eksklusif",
    imageUrl: "/preset-classic.svg",
    demoPath: "Soft-Peony",
  },
];

export default function PresetsCatalog() {
  return (
    <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#3A4F7A] leading-tight mb-4"
        >
          <span className="text-[#F16A8A]">Preset Make easy,</span> Tinggal Pakai langsung jadi!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg text-[#3A4F7A]"
        >
          <span className="font-bold">{presets.length} Presets</span> tersedia. Dengan adanya preset kalian bisa pilih tema sesuai keinginanmu.
        </motion.p>
      </div>

      {/* Grid Katalog Preset - 3 Kolom di Desktop */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {presets.map((preset, index) => (
          <motion.div
            key={preset.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* 🔗 Seluruh area card dibungkus <Link> biar bisa di-klik */}
            <Link 
              href={`/demo/${preset.demoPath}`}
              className="group relative block w-full bg-[#E5E5E5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              {/* 🏷️ Label Nama Preset (Di Atas Tengah) persis kayak referensi */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-[#F5F5F5] px-5 py-1.5 rounded-b-xl shadow-sm">
                <span className="text-slate-800 font-medium text-sm">
                  {preset.name}
                </span>
              </div>

              {/* 🖼️ Container Gambar Mode Landscape (Aspect-Ratio Lebar) */}
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image
                  src={preset.imageUrl}
                  alt={`Preview ${preset.name}`}
                  fill
                  priority={index < 2} // Anti lemot (LCP Fix)
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay tipis pas di-hover biar ketahuan itu tombol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* ⭐ Badge Eksklusif/Premium (Di Kiri Bawah) */}
              <div className="absolute bottom-0 left-0 z-10 bg-[#F4D03F] text-white px-4 py-1.5 rounded-tr-xl rounded-bl-2xl font-semibold text-xs tracking-wide lowercase shadow-sm">
                {preset.badge}
              </div>

            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}