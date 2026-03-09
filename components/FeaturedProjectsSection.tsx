"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FEATURED_PROJECT_IDS, getProjectById } from "@/lib/data/projects";

export default function FeaturedProjectsSection() {
	const tIndex = useTranslations("Index");
	const tProjects = useTranslations("ProjectsData");
	const locale = useLocale();

	const project1Id = FEATURED_PROJECT_IDS[0];
	const project2Id = FEATURED_PROJECT_IDS[1];

	const project1 = getProjectById(project1Id);
	const project2 = getProjectById(project2Id);

	if (!project1 || !project2) return null;

	return (
		<section
			id="featured-projects"
			className="w-full px-5 md:px-12 py-16 md:py-24"
		>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-10">
				<div className="flex flex-col gap-4">
					<div className="flex gap-2 items-center text-base md:text-xl font-work-sans">
						<div className="bg-black dark:bg-white rounded-full size-1" />
						{tIndex("featured.subTitle")}
					</div>
					<h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-work-sans leading-tight tracking-tight whitespace-pre-line font-medium">
						{tIndex("featured.heading")}
					</h2>
				</div>
				<Link
					href={`/${locale}/projects`}
					className="flex items-center gap-2 border border-black dark:border-white px-8 py-4 text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 font-work-sans whitespace-nowrap self-start md:self-auto uppercase tracking-wider"
				>
					{tIndex("featured.btnAll")}
					<ArrowRight
						className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
						strokeWidth={1.5}
					/>
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
				{/* Item 1 - Left */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-col gap-6 group w-full lg:w-[90%]"
				>
					<div className="relative w-full aspect-4/5 overflow-hidden rounded-2xl">
						<Image
							src={project1.image}
							alt={tProjects(`${project1Id}.title`)}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						{/* Overlay Button - Desktop Only or subtle on mobile */}
						<div className="absolute inset-0 flex items-end justify-center pb-8 lg:pb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<Link
								href={`/${locale}/projects/${project1Id}`}
								className="bg-white/95 text-black px-8 py-4 font-work-sans font-medium hover:bg-white transition-colors rounded-full shadow-lg"
							>
								{tIndex("featured.btnDetails")}
							</Link>
						</div>
					</div>
					<div className="flex justify-between items-center text-2xl lg:text-3xl">
						<h3 className="font-work-sans tracking-tight font-semibold py-1">
							{tProjects(`${project1Id}.title`)}
						</h3>
						<span className="text-gray-400 text-lg">
							{tProjects(`${project1Id}.year`)}
						</span>
					</div>
				</motion.div>

				{/* Item 2 - Right */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="flex flex-col gap-6 group md:mt-32 lg:mt-48 w-full"
				>
					<div className="relative w-full aspect-16/10 overflow-hidden rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 shadow-sm">
						<Image
							src={project2.image}
							alt={tProjects(`${project2Id}.title`)}
							fill
							className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
						/>
						{/* Overlay Button */}
						<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<Link
								href={`/${locale}/projects/${project2Id}`}
								className="bg-white/95 text-black px-8 py-4 font-work-sans font-medium hover:bg-white transition-colors rounded-full shadow-lg"
							>
								{tIndex("featured.btnDetails")}
							</Link>
						</div>
					</div>
					<div className="flex justify-between items-center text-2xl lg:text-3xl">
						<h3 className="tracking-tight font-work-sans font-semibold py-1">
							{tProjects(`${project2Id}.title`)}
						</h3>
						<span className="text-gray-400 text-lg">
							{tProjects(`${project2Id}.year`)}
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
