"use client";

import React from "react";
import { 
  Clock, Smartphone, MessageSquare, Share2, PencilLine, Bell, 
  UserPlus, Image, MapPin, Music, MessageCircle, CreditCard, 
  Languages, Heart, Video, Globe, Layers 
} from "lucide-react";
import { useState } from "react";

type FeatureItem = {
  title: string;
  desc: string;
  icon: React.ReactElement<{ className?: string }>;
};

const allFeatures: FeatureItem[] = [
  { title: "Hitungan Mundur", desc: "Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.", icon: <Clock /> },
  { title: "Design Modern dan Responsif", desc: "Say good bye untuk design jadul. biar undanganmu makin wow.", icon: <Smartphone /> },
  { title: "Broadcast via Whatsapp", desc: "Sebarkan langsung banyak dengan fitur Broadcast melalui whatsapp", icon: <MessageSquare /> },
  { title: "Support Native Share", desc: "Kamu bisa share undanganmu secara mudah dengan experience share apps.", icon: <Share2 /> },
  { title: "Smart Realtime Dashboard", desc: "Kamu bisa Mengedit dan melihat aktifitas undanganmu dengan realtime.", icon: <PencilLine /> },
  { title: "Notification Ready", desc: "Kamu bisa mendapat informasi aktifitas undanganmu secara realtime.", icon: <Bell /> },
  { title: "Nama Tamu Spesial", desc: "Bisa juga membuat share dengan nama Teman/Saudara/Keluarga agar lebih eksklusif.", icon: <UserPlus /> },
  { title: "Gallery Foto", desc: "Share moment indah kamu dengan pasanganmu dengan slideshow yang keren.", icon: <Image /> },
  { title: "Navigasi Lokasi", desc: "All in one navigasi lengkap, agar para tamu tidak tersesat saat ke tempat kamu", icon: <MapPin /> },
  { title: "Background Music", desc: "Pilih musik sesuai keinginan kamu agar undanganmu lebih eksklusif dan romantis.", icon: <Music /> },
  { title: "Ucapan & Doa", desc: "Tamu undangan bisa berbagi momen dengan mengirimkan gambar dan ucapan.", icon: <MessageCircle /> },
  { title: "Amplop Digital", desc: "Tamu undangan bisa mengirim amplop secara digital dengan mudah.", icon: <CreditCard /> },
  { title: "Multi Bahasa", desc: "Pilih undangan kamu menggunakan bahasa indonesia/inggris.", icon: <Languages /> },
  { title: "Love Stories", desc: "Ceritakan Kisah Cinta kamu dengan leluasa kepada para tamu.", icon: <Heart /> },
  { title: "Live Streaming", desc: "Temui acara secara virtual agar jarak tidak membuat keterbatasan.", icon: <Video /> },
  { title: "Custom Domain", desc: "Anda bisa menggunakan domain yang anda mau sendiri juga. jadi terlihat lebih eksklusif.", icon: <Globe /> },
  { title: "Custom Time Zone", desc: "Wedding support custom timezone indonesia ataupun diluar negeri sekalipun.", icon: <Clock /> },
  { title: "Versi Undangan", desc: "Beda tamu beda informasi? bisa dong. bayar sekali bisa buat versi tanpa batas!", icon: <Layers /> },
];

export default function Features() {
  const initialVisible = 3;
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? allFeatures : allFeatures.slice(0, initialVisible);
  const hasExtra = allFeatures.length > initialVisible;

  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#e6e7ec] bg-white px-4 py-2 text-xs font-semibold text-[#6b7280] shadow-[0_8px_20px_rgba(17,19,29,0.06)]">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#e6e7ec] bg-[#f7f8fb] text-[#2f3445]">
              {React.cloneElement(allFeatures[0].icon, { className: "h-3.5 w-3.5" })}
            </span>
            Components & Blocks
            <span className="inline-flex items-center rounded-full border border-[#f1b08b] bg-[#fff3ea] px-2 py-0.5 text-[10px] font-bold text-[#e18c54]">
              PRO
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1f2430] sm:text-4xl">
            Elevate your design with premium
            <br />
            components & blocks
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
            Customizable components that seamlessly adapt to your project needs
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allFeatures.map((item, index) => (
            <div
              key={index}
              className={
                index >= initialVisible && !showAll
                  ? "hidden rounded-2xl bg-[#f2f2f2] p-6 text-center lg:block"
                  : "rounded-2xl bg-[#f2f2f2] p-6 text-center"
              }
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(17,19,29,0.08)]">
                {React.cloneElement(item.icon, { className: "h-6 w-6 text-[#5f58f6]" })}
              </div>

              <h3 className="text-sm font-semibold text-[#1f2430]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs text-[#6b7280]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {hasExtra ? (
          <div className="mt-10 flex justify-center lg:hidden">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition hover:bg-[#2a2a2a] cursor-pointer"
            >
              {showAll ? "Tutup" : "Browse All - Components & Blocks"}
              <span className="text-base">→</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}