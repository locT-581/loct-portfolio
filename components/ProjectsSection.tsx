"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectsSection() {
	const t = useTranslations("Index");
	const locale = useLocale();

	const categories = t.raw("discover.categories") as string[];

	return (
		<section
			id="projects"
			className="w-full px-6 md:px-[10%] py-16 md:py-24 bg-[#EAEAEA] dark:bg-transparent"
		>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
				<div className="flex gap-2 items-center text-lg md:text-xl font-switzer">
					<div className="bg-black dark:bg-white rounded-full size-1" />
					{t("discover.subTitle")}
				</div>
				<h2 className="text-5xl md:text-7xl lg:text-[86px] font-switzer font-medium leading-[1.1] tracking-tight text-right w-full md:w-auto">
					{t("discover.heading")}
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
				{/* Left Column: Categories, Velvette (2), Button */}
				<div className="md:col-span-5 lg:col-span-4 flex flex-col gap-12 lg:gap-24">
					{/* Categories */}
					<div className="flex flex-col gap-4">
						{categories.map((cat, i) => (
							<button
								key={cat}
								type="button"
								className={`text-left font-switzer text-lg md:text-xl ${
									i === 0
										? "font-bold text-black dark:text-white"
										: "text-gray-500 hover:text-black dark:hover:text-white transition-colors"
								}`}
							>
								{cat}
							</button>
						))}
					</div>

					{/* Project 2 (Velvette) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="flex flex-col gap-4 group w-full"
					>
						<div className="relative w-full aspect-square md:aspect-4/5 overflow-hidden bg-gray-200">
							<Image
								src={t("discover.items.2.image")}
								alt={t("discover.items.2.title")}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="flex justify-between items-start text-lg md:text-xl font-switzer font-bold">
							<h3 className="tracking-tight">{t("discover.items.2.title")}</h3>
							<span className="text-gray-400 font-medium whitespace-nowrap text-sm md:text-base">
								{t("discover.items.2.category")}
							</span>
						</div>
					</motion.div>

					{/* View All Button */}
					<Link
						href={`/${locale}/projects`}
						className="flex mt-auto items-center gap-2 border border-black dark:border-white px-6 py-4 w-fit text-sm md:text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 font-switzer font-medium whitespace-nowrap"
					>
						{t("discover.btnAll")}
						<ArrowRight className="w-5 h-5 ml-1" strokeWidth={1.5} />
					</Link>
				</div>

				{/* Right Column: NeuroDash (1), Aurum (3) */}
				<div className="md:col-span-7 lg:col-span-8 flex flex-col gap-16 lg:gap-24 w-full lg:pl-12">
					{/* Project 1 (NeuroDash) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="flex flex-col gap-4 group w-full lg:w-[75%] lg:self-center"
					>
						<div className="relative w-full aspect-4/5 overflow-hidden bg-gray-200">
							<Image
								src={t("discover.items.1.image")}
								alt={t("discover.items.1.title")}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="flex justify-between items-start text-lg md:text-xl font-switzer font-bold">
							<h3 className="tracking-tight">{t("discover.items.1.title")}</h3>
							<span className="text-gray-400 font-medium whitespace-nowrap text-sm md:text-base">
								{t("discover.items.1.category")}
							</span>
						</div>
					</motion.div>

					{/* Project 3 (Aurum) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="flex flex-col gap-4 group w-full lg:w-[90%] lg:self-end mt-4 lg:mt-0"
					>
						<div className="relative w-full aspect-video md:aspect-16/10 overflow-hidden bg-gray-200">
							<Image
								src={t("discover.items.3.image")}
								alt={t("discover.items.3.title")}
								fill
								className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="flex justify-between items-start text-lg md:text-xl font-switzer font-bold mt-2">
							<h3 className="tracking-tight">{t("discover.items.3.title")}</h3>
							<span className="text-gray-400 font-medium whitespace-nowrap text-sm md:text-base">
								{t("discover.items.3.category")}
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
