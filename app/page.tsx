// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
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
      <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[550px]">
        <Image
          src="/background/Background-Hero-Section.png"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="pointer-events-none select-none object-cover"
          style={{ objectPosition: "center -95px" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-b from-transparent to-white" />
        <div className="relative z-10 mx-auto w-full max-w-6xl py-4 pl-0 pr-6 sm:pl-0 sm:pr-10 lg:pl-0 lg:pr-[32%]">
          <div className="-ml-16 mt-10 mb- block w-fit sm:mt-12 sm:mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="inline-flex items-center gap-2 backglass rounded-full px-4 py-2 text-xs font-semibold text-[#202436] shadow-[0_6px_18px_rgba(17,19,29,0.04)] shadow-3d-solid"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#e6e7ec] bg-[#f7f8fb] text-[#f97316]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="sm:text-sm">
              <span className="sm:hidden">Solution marriage invitations</span>
              <span className="hidden sm:inline">
                One way your solution for creating beautiful digital invitations.
              </span>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="-ml-16 mt-4 max-w-2xl text-left sm:mt-4"
        >
          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#11131d] sm:text-5xl lg:text-7xl">
            <span className="inline-block min-h-[1em]" aria-label={headingText}>
              <span aria-hidden="true">{typedHeading}</span>
              <span className="typing-caret" aria-hidden="true" />
            </span>
            <br className="block" />
            <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
              <span>yang Gak Norak.</span>
              <span className="italic text-[#76220b]">Titik.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-900 text-[#6b5a52] sm:text-x">
            Rayakan hari spesial mu dengan E-Invitation yang cepat, elegan, dan enak dilihat tanpa loading lama atau desain norak. Undangan digital yang 
            <span className="font-bold italic"> mobile first,</span> minimalis, dan siap bikin tamu langsung impressed sejak klik pertama.
          </p>

          <div className="mt-8 flex w-full flex-col items-start gap-3 lg:flex-row lg:items-center">
            <Link
              href="/lp_katalog"
              className="btn-3d btn-3d-no-outline inline-flex h-12 w-full items-center justify-center !rounded-xl bg-[#1E2121] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#262a2a] lg:w-[200px]"
            >
              Buat Sekarang
            </Link>
            <Link
              href="/lp_katalog"
              className="btn-3d btn-3d-soft inline-flex h-12 w-full items-center justify-center !rounded-xl border border-[#1f2430]/30 bg-white px-7 text-sm font-semibold text-[#202436] transition-colors hover:bg-[#f7f8fc] lg:w-[200px]"
            >
              Lihat Katalog Preset
            </Link>
          </div>

          
          </motion.div>
        </div>

      </section>
        <div className="mx-auto -1mb-16 w-full max-w-[1400px] px-16 sm:px-8">
          <Image
            src="/svg/Safari%20Dark.svg"
            alt="Safari dark preview"
            width={1366}
            height={768}
            className="h-auto w-full"
          />
        </div>

        <section className="bg-transparent pb-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="testimonial-marquee rounded-lg bg-white/60 px-4 py-3 shadow-sm backdrop-blur-sm">
              <div className="testimonial-marquee-track items-center">
                <div className="flex items-center gap-6">
                  <span className="text-sm text-slate-700">“Desainnya simpel & cepet, tamu pada suka.”</span>
                  <span className="text-xs text-slate-500">Rina, pengantin</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-slate-700">“Template-nya elegan, gampang custom.”</span>
                  <span className="text-xs text-slate-500">Dito, event planner</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-slate-700">“Support cepat dan ramah, recommended!”</span>
                  <span className="text-xs text-slate-500">Sari, pengguna</span>
                </div>
                {/* duplicate for seamless loop */}
                <div className="flex items-center gap-6">
                  <span className="text-sm text-slate-700">“Desainnya simpel & cepet, tamu pada suka.”</span>
                  <span className="text-xs text-slate-500">Rina, pengantin</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-slate-700">“Template-nya elegan, gampang custom.”</span>
                  <span className="text-xs text-slate-500">Dito, event planner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Benefit />
      <Pembatas className="my-8" />
      <Delivery />
      <Pembatas className="my-8" />
      <Features />
      <Pembatas className="my-8" />
      <Pricing />
      <Pembatas className="my-8" />
      <Testimoni />
      <Pembatas className="my-8" />
      <Faq />
      <Footer />

    </div>
  );
}