"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Capabilities() {
	const t = useTranslations("AboutPage");
	const [hoveredIndex, setHoveredIndex] = useState<number>(2);

	const items = [
		{
			id: 1,
			image:
				"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
		},
		{
			id: 2,
			image:
				"https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=1000",
		},
		{
			id: 3,
			image:
				"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
		},
		{
			id: 4,
			image:
				"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
		},
	];

	return (
		<section className="px-6 md:px-[8%] py-32 bg-[#F2F2F2] dark:bg-[#111111] overflow-hidden">
			<div className="flex flex-col items-center gap-4 mb-20 lg:mb-32">
				<div className="flex items-center justify-center gap-2 text-lg md:text-xl font-switzer text-gray-600 dark:text-gray-400">
					<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
					{t("capabilities.label")}
				</div>
				<h2 className="text-5xl md:text-6xl lg:text-[80px] font-switzer font-medium tracking-tight text-center leading-[1.1]">
					{t("capabilities.heading")}
				</h2>
				<p className="text-gray-500 font-satoshi text-lg md:text-xl text-center max-w-xl">
					{t("capabilities.description")}
				</p>
			</div>

			<div className="relative w-full py-10 flex flex-col items-center min-h-125 justify-center">
				{/* Background Images */}
				{items.map((item) => (
					<div
						key={`img-${item.id}`}
						className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-80 lg:w-96 aspect-video rotate-20 pointer-events-none transition-all duration-700 ease-in-out z-0 ${
							hoveredIndex === item.id
								? "opacity-100 scale-100 blur-none"
								: "opacity-0 scale-95 blur-sm"
						}`}
					>
						<Image
							src={item.image}
							alt={t(`capabilities.items.${item.id}`)}
							fill
							className="object-cover rounded-sm shadow-2xl"
						/>
					</div>
				))}

				{/* Foreground Texts */}
				<div className="relative z-10 flex flex-col items-center w-full gap-10">
					{items.map((item) => (
						<button
							key={item.id}
							type="button"
							onMouseEnter={() => setHoveredIndex(item.id)}
							onFocus={() => setHoveredIndex(item.id)}
							className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none font-switzer font-medium tracking-tighter uppercase whitespace-nowrap cursor-pointer transition-colors duration-500 select-none outline-none ${
								hoveredIndex === item.id
									? "text-black dark:text-[#F2F2F2]"
									: "text-[#D1D1D1] dark:text-[#444444]"
							}`}
						>
							{t(`capabilities.items.${item.id}`)}
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
