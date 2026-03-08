"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

const items = [
	{
		id: 1,
		image: "/assets/images/social-banner.jpg",
	},
	{
		id: 2,
		image: "/assets/images/booking-sport-banner.jpg",
	},
	{
		id: 3,
		image: "/assets/images/blockchain-banner.jpg",
	},
	{
		id: 4,
		image: "/assets/images/motion-banner.jpg",
	},
];

export default function Capabilities() {
	const t = useTranslations("AboutPage");
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

	return (
		<section className="px-6 md:px-[8%] py-16 overflow-hidden">
			<div className="flex flex-col items-center gap-4 mb-14 lg:mb-16">
				<div className="flex items-center justify-center gap-2 text-lg md:text-xl font-work-sans text-gray-600 dark:text-gray-400">
					<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
					{t("capabilities.label")}
				</div>
				<h2 className="text-5xl md:text-6xl lg:text-[80px] font-work-sans font-medium tracking-tight text-center leading-[1.1]">
					{t("capabilities.heading")}
				</h2>
				<p className="text-gray-500 text-lg md:text-xl text-center max-w-xl">
					{t("capabilities.description")}
				</p>
			</div>

			<div className="relative w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-10 py-10">
				{items.map((item) => (
					<div
						key={item.id}
						className={`relative group flex flex-col items-center w-full transition-all duration-300 outline-none ${
							hoveredIndex === item.id ? "z-50" : "z-10"
						}`}
					>
						{/* Title Button */}
						<button
							type="button"
							onMouseEnter={() => setHoveredIndex(item.id)}
							onFocus={() => setHoveredIndex(item.id)}
							className={`relative z-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight font-work-sans font-medium tracking-tighter uppercase whitespace-nowrap cursor-pointer transition-all duration-500 select-none outline-none ${
								hoveredIndex === item.id
									? "text-black dark:text-[#F2F2F2] scale-105"
									: "text-[#D1D1D1] dark:text-[#444444] scale-100"
							}`}
						>
							{t(`capabilities.items.${item.id}`)}
						</button>

						{/* Attached Image */}
						<div
							className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] min-w-45 aspect-4/2.5 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 ${
								hoveredIndex === item.id
									? "opacity-100 scale-100 rotate-12 blur-none -translate-x-[50%] -translate-y-[40%]"
									: "opacity-0 scale-90 rotate-6 blur-md"
							}`}
						>
							<Image
								src={item.image}
								alt={t(`capabilities.items.${item.id}`)}
								fill
								className="object-cover opacity-75 rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
