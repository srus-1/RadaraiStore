"use client";

import { CircleHelp, Minus, Plus } from "lucide-react";
import { useState } from "react";

type FaqItem = {
	question: string;
	answer?: string;
};

type FaqGroup = {
	title: string;
	items: FaqItem[];
};

const faqGroups: FaqGroup[] = [
	{
		title: "Info",
		items: [
			{
				question: "Berapa lama proses pembuatan undangan?",
				answer:
					"Rata-rata 1-3 hari kerja, tergantung revisi dan kelengkapan data.",
			},
			{
				question: "Apakah bisa custom tema dan warna?",
				answer:
					"Bisa. Kamu bisa pilih template lalu sesuaikan warna, font, dan susunan section sesuai kebutuhan.",
			},
			{
				question: "Bagaimana cara membagikan undangan?",
				answer:
					"Cukup kirim link undangan via WhatsApp, Instagram, atau media sosial lainnya. Link bisa dibuka di semua perangkat.",
			},
			{
				question: "Apakah ada fitur RSVP untuk tamu?",
				answer:
					"Ada. Tamu bisa konfirmasi kehadiran, jumlah tamu, dan meninggalkan ucapan secara langsung di undangan.",
			},
			{
				question: "Bisa ganti nama tamu satu per satu?",
				answer:
					"Bisa. Kamu bisa isi daftar nama tamu, lalu sistem otomatis membuat link personal untuk setiap tamu.",
			},
		],
	},
	{
		title: "Pembayaran",
		items: [
			{
				question: "Apakah ada biaya tahunan?",
				answer:
					"Tidak ada. Pembayaran hanya sekali sesuai paket yang kamu pilih.",
			},
		],
	},
];

export default function Faq() {
	const [openItem, setOpenItem] = useState<string | null>("0-0");

	const toggleItem = (key: string) => {
		setOpenItem((current) => (current === key ? null : key));
	};

	return (
		<section className="bg-white py-24 px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
					<div>
						<span className="inline-flex items-center gap-2 rounded-full border border-[#e6e7ec] bg-white px-3 py-1.5 text-xs font-semibold text-[#4b5563] shadow-[0_4px_10px_rgba(15,23,42,0.05)]">
							<span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#e6e7ec] bg-white">
								<CircleHelp className="h-3.5 w-3.5 text-[#6b7280]" />
							</span>
							F.A.Q
						</span>
						<h2 className="mt-4 text-3xl font-semibold text-[#1f2430] sm:text-4xl">
							Pertanyaan yang Sering Ditanyakan.
						</h2>
						<p className="mt-4 max-w-sm text-sm text-[#9aa0ad]">
							Jawaban singkat untuk hal-hal yang paling sering ditanyakan
							sebelum memesan undangan digital.
						</p>
					</div>

					<div className="space-y-10">
						{faqGroups.map((group, groupIndex) => (
							<div key={group.title}>
								<p className="text-xs font-semibold text-[#9aa0ad]">
									{group.title}
								</p>
								<div className="mt-4 divide-y divide-[#e6e7ec] border-y border-[#e6e7ec]">
									{group.items.map((item, itemIndex) => {
										const itemKey = `${groupIndex}-${itemIndex}`;
										const isOpen = openItem === itemKey;
										const answerId = `faq-answer-${itemKey}`;

										return (
											<div
												key={item.question}
												className="flex items-start justify-between gap-6 py-5"
											>
												<div>
													<p className="text-sm font-semibold text-[#1f2430]">
														{item.question}
													</p>
													{item.answer ? (
														<div
															className={`overflow-hidden transition-[max-height,opacity,transform] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
																isOpen
																	? "max-h-[240px] opacity-100 translate-y-0"
																	: "max-h-0 opacity-0 -translate-y-2"
															}`}
														>
															<p
																id={answerId}
																className="mt-2 text-sm text-[#6b7280]"
															>
																{item.answer}
															</p>
														</div>
													) : null}
												</div>
												<button
													type="button"
													aria-expanded={isOpen}
													aria-controls={answerId}
													onClick={() => toggleItem(itemKey)}
													className="mt-1 inline-flex cursor-pointer items-center justify-center text-[#9aa0ad] transition hover:text-[#1f2430]"
												>
													{isOpen ? (
														<Minus className="h-4 w-4" />
													) : (
														<Plus className="h-4 w-4" />
													)}
												</button>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
