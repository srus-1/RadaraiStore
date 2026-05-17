"use client";

import { Check, Users } from "lucide-react";

// Data paket sesuai referensi foto lu
const pricingData = [
  {
    name: "BASIC",
    price: "50.000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    features: [
      "Preset/Design Standar", "Quotes", "Detail Info Acara", 
      "Profil Pasangan", "Catatan Khusus Tamu", "Gallery Foto (max 2)",
      "Background Music (list)", "Navigasi Lokasi", "Masa Aktif Selamanya", "Edit Tanpa Batas"
    ],
    color: "bg-[#008080]", // Tosca
  },
  {
    name: "PREMIUM",
    price: "110.000",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop",
    features: [
      "Semua Fitur BASIC", "Amplop Digital (nomor rekening)", "Kirim Ucapan", 
      "Gallery Foto (max 10)", "Love Stories", "Buku Tamu", 
      "Share Eksklusif - Nama Tamu (max 100)", "Custom Domain (additional)"
    ],
    color: "bg-[#f3455a]", // Red/Pink
  },
  {
    name: "EKSKLUSIF",
    price: "180.000",
    image: "/background_katalog/bckgrnd1.jpg",
    features: [
      "Semua Fitur PREMIUM & BASIC", "Gallery (max 20)", "Share Eksklusif - Unlimited", 
      "Bisa Membeli Preset Luxury", "Support Prioritas", "Live Streaming", 
      "Custom Background Layout"
    ],
    color: "bg-[#ffb703]", // Yellow/Gold
    bestDeal: true,
  },
  {
    name: "LUXURY",
    price: "280.000",
    image: "/background_katalog/bckgrnd2.jpg",
    features: [
      "Semua Fitur Lengkap", "Cover Video Background", "Versi Undangan Per Tamu", 
      "Eksklusif Link URL (tanpa kode unik)", "Free Pengaktifan Custom Domain", 
      "Masa Aktif Selamanya", "Edit Tanpa Batas"
    ],
    color: "bg-[#7b008a]", // Purple
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#e6e7ec] bg-white px-4 py-2 text-xs font-semibold text-[#6b7280] shadow-[0_8px_20px_rgba(17,19,29,0.06)]">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#e6e7ec] bg-[#f7f8fb] text-[#2f3445]">
              <Users className="h-3.5 w-3.5" />
            </span>
            Community
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1f2430] sm:text-4xl">
            Join our community
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
            Connect, learn, and grow with fellow designers and developers.
          </p>
        </div>

        {/* Grid Responsive: 1 Kolom (HP), 2 Kolom (Tablet), 4 Kolom (Laptop) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: any }) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-[32px] border border-[#eaecf3] bg-white transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]`}>
      
      {/* 1. Header Foto (Gaya Foto Kiri) */}
      <div className="relative h-44 w-full overflow-hidden">
        <img 
          src={plan.image} 
          alt={plan.name} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>

      <div className="flex flex-col p-6 flex-grow">
        <div className="text-sm font-bold text-[#11131d] tracking-tight">
          {plan.name}
        </div>
        {/* 2. Harga (Gaya Foto Kanan) */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-3xl font-black text-[#11131d] tracking-tight">Rp. {plan.price}</span>
        </div>

        {/* 3. Fitur */}
        <ul className="mt-6 space-y-3 border-t border-gray-100 py-5 text-sm">
          {plan.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-[13px] text-[#676d80] leading-tight">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* 5. CTA Button */}
        <button className="btn-3d btn-3d-no-outline mt-auto inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#111827] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#0b0f1a]">
          Pilih Paket {plan.name}
        </button>
      </div>
    </div>
  );
}