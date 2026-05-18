"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Delivery() {
	return (
		<section className="relative bg-white py-24">
			<div className="mx-auto w-[100%] px-2">
				<div className="rounded-[32px] border border-[#eef1f4] bg-gradient-to-br from-[#eff7f6] via-white to-[#f9fcff] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
					<div className="mx-auto max-w-6xl">
						<div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
						<div>
							<span className="inline-flex items-center gap-2 rounded-full border border-[#e8edf2] bg-white px-3 py-1 text-xs font-semibold text-[#5b6476]">
								How it works?
							</span>
							<h2 className="mt-4 text-3xl font-semibold leading-tight text-[#11131d] sm:text-4xl">
								Alasan penting kenapa undangan digital perlu rapi.
							</h2>
							<p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
								Kirim undangan dengan tampilan konsisten, cepat dibuka, dan siap dibagikan ke tamu tanpa ribet.
							</p>
						</div>

						<div className="rounded-2xl border border-[#e8edf2] bg-white p-4 text-sm text-[#5b6476] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
							<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a1a6b3]">
								Kualitas
							</span>
							<p className="mt-2 text-sm font-semibold text-[#11131d]">
								Desain premium yang konsisten.
							</p>
							<p className="mt-2 text-xs leading-relaxed text-[#6b7280]">
								Template siap pakai bikin kamu hemat waktu tanpa kompromi estetika.
							</p>
							<div className="mt-4 flex items-center gap-2">
								<Link
									href="/lp_katalog"
									className="inline-flex h-8 items-center rounded-md border border-[#e5e7eb] bg-white px-3 text-xs font-semibold text-[#11131d]"
								>
									Preview
								</Link>
								<Link
									href="/lp_katalog"
									className="inline-flex h-8 items-center rounded-md bg-[#11131d] px-3 text-xs font-semibold text-white"
								>
									Pesan sekarang
								</Link>
							</div>
						</div>
					</div>

						<div className="mt-8 rounded-[24px] border border-[#edf1f6] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
							<div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-[#f6f7f9]">
								<div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#8b91a3]">
									<ArrowRight className="h-5 w-5 -rotate-45" />
								</div>
							</div>
							<div className="mt-5 flex items-center gap-3 text-xs text-[#9aa0ae]">
								<div className="flex -space-x-2">
									{["A", "N", "D", "S", "R"].map((initial) => (
										<span
											key={initial}
											className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-[#f0f2f6] text-[10px] font-semibold text-[#6b7280]"
										>
											{initial}
										</span>
									))}
								</div>
								<span>Dipakai oleh 400+ pasangan dan vendor tepercaya.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
