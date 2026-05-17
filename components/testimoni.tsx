import { Star } from "lucide-react";

type TestimoniItem = {
	name: string;
	date: string;
	quote: string;
	imageUrl: string;
};

const testimonials: TestimoniItem[] = [
	{
		name: "Rangga & Ratih",
		date: "Jumat, 27 Oktober 2023",
		quote:
			"Harga yang oke dibanding banyak kompetitor lain yang tidak memberikan fasilitas lengkap di harga yang sama.",
		imageUrl:
			"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Dimas & Sandra",
		date: "Selasa, 23 Mei 2023",
		quote:
			"Banyak jenis templatenya dan semuanya bisa disesuaikan dengan yang diinginkan. Templatenya juga keren dan cantik.",
		imageUrl:
			"https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Rifai & Mega",
		date: "Senin, 10 April 2023",
		quote:
			"Desainnya simpel tapi aesthethic, pengerjaan juga cepat. Kalo kita kurang ngerti juga dikasih tau caranya.",
		imageUrl:
			"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Hana & Raka",
		date: "Sabtu, 18 Maret 2023",
		quote:
			"Respons adminnya cepat dan hasilnya sesuai ekspektasi. Undangannya rapi dan nyaman dibaca.",
		imageUrl:
			"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Nadia & Faris",
		date: "Kamis, 1 Februari 2024",
		quote:
			"Template-nya banyak banget dan tampilannya clean. Prosesnya gampang, hasilnya memuaskan.",
		imageUrl:
			"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Alya & Dito",
		date: "Rabu, 20 Desember 2023",
		quote:
			"Pelayanan cepat dan ramah. Undangannya ringan dibuka dan tampilannya modern.",
		imageUrl:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Salsa & Iqbal",
		date: "Senin, 11 September 2023",
		quote:
			"Fitur lengkap, bisa custom sesuai keinginan. Tamu juga pada suka tampilannya.",
		imageUrl:
			"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Rani & Yusuf",
		date: "Minggu, 6 Agustus 2023",
		quote:
			"Simple tapi elegan. Admin bantu banget sampai undangan jadi sesuai banget.",
		imageUrl:
			"https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=800&auto=format&fit=crop",
	},
];

export default function Testimoni() {
	return (
		<section className="bg-white py-24 px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="text-left sm:text-center">
					<h2 className="text-3xl font-semibold text-[#1f2430] sm:text-4xl">
						Read reviews,
						<br className="hidden sm:block" />
						ride with confidence.
					</h2>
					<div className="mt-3 flex flex-wrap items-center justify-start gap-3 text-xs text-[#9aa0ad] sm:justify-center">
						<span className="font-semibold text-[#1f2430]">4.2/5</span>
						<div className="flex items-center gap-1 text-[#00b67a]">
							{Array.from({ length: 5 }).map((_, index) => (
								<Star key={index} className="h-3 w-3 fill-current" />
							))}
						</div>
						<span className="font-semibold text-[#1f2430]">Trustpilot</span>
						<span>Based on 5210 reviews</span>
					</div>
				</div>

				<div className="mt-12">
					<div className="testimonial-marquee w-full overflow-hidden">
						<div className="testimonial-marquee-track">
							{[...testimonials, ...testimonials].map((item, index) => (
								<article
									key={`${item.name}-${index}`}
									className="relative flex h-[320px] w-[210px] shrink-0 flex-col overflow-hidden rounded-[28px] bg-[#f2eee9] shadow-[0_18px_40px_rgba(17,19,29,0.16)] sm:h-[360px] sm:w-[240px] lg:h-[400px] lg:w-[260px]"
								>
									<div className="absolute inset-0">
										<img
											src={item.imageUrl}
											alt={item.name}
											className="h-full w-full object-cover"
											loading="lazy"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
									<div className="absolute inset-x-0 bottom-0 px-3 pb-3 sm:px-4 sm:pb-4">
										<div className="rounded-2xl bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
											<p className="text-[10px] font-semibold uppercase tracking-wide text-[#8c929e]">
												dari <span className="text-[#f15b6c]">{item.name}</span>
											</p>
											<p className="mt-1 text-[10px] text-[#9aa0ad]">{item.date}</p>
											<div className="mt-2 flex items-center gap-1 text-[#f5b93f]">
												{Array.from({ length: 5 }).map((_, starIndex) => (
													<Star key={starIndex} className="h-2.5 w-2.5 fill-current" />
												))}
											</div>
											<p className="mt-2 text-[11px] leading-relaxed text-[#6b7280]">
												{item.quote}
											</p>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
