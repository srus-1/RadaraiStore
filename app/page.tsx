// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import Benefit from "@/components/benefit";
import Delivery from "@/components/delivery";
import Testimoni from "@/components/testimoni";
import Faq from "@/components/faq";
import Pembatas from "@/components/pembatas";

export default function Home() {
  const headingText = "Undangan Digital";
  const [typedHeading, setTypedHeading] = useState("");

  useEffect(() => {
    let index = 0;
    let direction: 1 | -1 = 1;
    let timeoutId: number | undefined;
    const typeDelay = 70;
    const deleteDelay = 45;
    const pauseDelay = 900;

    const tick = () => {
      index += direction;
      setTypedHeading(headingText.slice(0, index));

      if (index >= headingText.length) {
        direction = -1;
        timeoutId = window.setTimeout(tick, pauseDelay);
        return;
      }

      if (index <= 0) {
        direction = 1;
        timeoutId = window.setTimeout(tick, pauseDelay);
        return;
      }

      timeoutId = window.setTimeout(
        tick,
        direction === 1 ? typeDelay : deleteDelay
      );
    };

    timeoutId = window.setTimeout(tick, typeDelay);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [headingText]);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="mx-auto w-full max-w-6xl py-8 px-4 sm:px-6 lg:px-8">
        <Link
          href="/lp_katalog"
          className="mt-14  mb-2 block w-fit mx-auto sm:mt-12 sm:mb-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e6e7ec] bg-white px-4 py-2 text-xs font-semibold text-[#6b7280] shadow-[0_8px_20px_rgba(17,19,29,0.06)]"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#e6e7ec] bg-[#f7f8fb] text-[#2f3445]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="sm:text-sm">
              <span className="sm:hidden">Solution marriage invitations</span>
              <span className="hidden sm:inline">
                One way your solution for creating beautiful digital invitations.
              </span>
            </span>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto mt-4 max-w-4xl pl-3 text-left sm:mt-10 sm:pl-0 sm:text-center"
        >
          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#11131d] sm:text-5xl lg:text-7xl">
            <span className="inline-block min-h-[1em]" aria-label={headingText}>
              <span aria-hidden="true">{typedHeading}</span>
              <span className="typing-caret" aria-hidden="true" />
            </span>
            <br className="block" />
            {" "}yang Gak Norak. <span className="text-[#5f58f6]">Titik!</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#676d80] sm:text-x">
            Udah gak jaman undangan berat yang loadingnya bikin emosi. Sambut tamu lo dengan platform yang anti-lemot, mobile-first, dan punya estetika minimalis yang bikin mata adem.
          </p>

          <div className="mt-8 flex flex-row flex-wrap items-center gap-3 justify-start sm:justify-center">
            <Link
              href="/lp_katalog"
              className="btn-3d btn-3d-no-outline inline-flex h-12 items-center rounded-xl bg-[#5f58f6] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#4f48ea]"
            >
              Buat Sekarang
            </Link>
            <Link
              href="/lp_katalog"
              className="btn-3d btn-3d-soft inline-flex h-12 items-center rounded-xl border border-[#1f2430]/15 bg-white px-7 text-sm font-semibold text-[#202436] transition-colors hover:bg-[#f7f8fc]"
            >
              Lihat Katalog Preset
            </Link>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-gray-500 sm:rounded-xl sm:border sm:border-[#f4b7aa] sm:bg-[#fff7f5] sm:px-4 sm:py-2 sm:text-sm sm:text-[#f2644d]">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-gray-500 sm:h-5 sm:w-5 sm:rounded-full sm:bg-white sm:text-[#e86855]">
              #2
            </span>
            Product of the Day
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 mx-auto -mt-6 mb-16 w-full max-w-[1400px] px-16 sm:px-8 lg:px-10">
        <img
          src="/svg/Safari%20Dark.svg"
          alt="Safari dark preview"
        />
      </div>

      <Benefit />
      <Pembatas className="my-16" />
      <Delivery />
      <Pembatas className="my-16" />
      <Features />
      <Pembatas className="my-16" />
      <Pricing />
      <Pembatas className="my-16" />
      <Testimoni />
      <Pembatas className="my-16" />
      <Faq />
      <Footer />

    </div>
  );
}