"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const benefits = [
	{
		label: "Manage",
		title: "Smart RSVP management",
		desc: "Pantau tamu yang hadir secara real time dengan ringkasan yang jelas dan rapi.",
		link: "Pelajari",
	},
	{
		label: "Share",
		title: "Sebar Undangan Sat-Set",
		desc: "Sebar undangan tinggal sekali klik aja. Tamu kamu bisa langsung buka undangannya lewat WA tanpa perlu nunggu loading lama..",
		link: "Explore",
	},
	{
		label: "Tagline",
		title: "Desain Simpel & Cakep",
		desc: "Tampilan undangannya minimalis dan enak dilihat. Gak rame dan gak norak, pas banget buat kamu yang suka gaya modern.",
		link: "Pilih Desain",
	},
];

export default function Benefit() {
	const initialVisible = 3;
	const [showAll, setShowAll] = useState(false);
	const visibleBenefits = showAll ? benefits : benefits.slice(0, initialVisible);
	const hasExtra = benefits.length > initialVisible;

	return (
		<section className="relative bg-white pb-24">
			<div className="mx-auto w-[100%] px-2 sm:px-2 lg:px-2">
				<div className="relative overflow-hidden rounded-[36px] bg-[#171717] px-6 py-16 text-white shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:px-10 lg:px-10">
					<div className="text-center">
						<span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
							Radarai
						</span>
						<h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
							Customisable landing pages
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
							Choose from our premium preset library and make it yours.
						</p>
					</div>

					<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{visibleBenefits.map((item) => (
							<div
								key={item.title}
								className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#1f1f1f] p-6 transition-transform duration-200 hover:-translate-y-1"
							>
								<div>
									<span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
										{item.label}
									</span>
									<h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
										{item.title}
									</h3>
									<p className="mt-4 text-sm leading-relaxed text-white/60">
										{item.desc}
									</p>
								</div>

								<button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors group-hover:text-white cursor-pointer">
									{item.link}
									<ArrowUpRight className="h-4 w-4" />
								</button>
							</div>
						))}
					</div>

					{hasExtra ? (
						<div className="mt-10 flex justify-center">
							<button
								type="button"
								onClick={() => setShowAll((current) => !current)}
								className="inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition hover:bg-[#2a2a2a] cursor-pointer"
							>
								{showAll ? "Tutup" : "Browse All - Components & Blocks"}
								<span className="text-base">→</span>
							</button>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
