"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
	CATEGORY_IDS,
	DISCOVER_PROJECT_IDS,
	getProjectById,
} from "@/lib/data/projects";

export default function ProjectsSection() {
	const tIndex = useTranslations("Index");
	const tProjects = useTranslations("ProjectsData");
	const locale = useLocale();

	const tCat = useTranslations("Categories");

	const project1Id = DISCOVER_PROJECT_IDS[0]; // NeuroDash Website
	const project2Id = DISCOVER_PROJECT_IDS[1]; // Velvette Fashion Rebrand
	const project3Id = DISCOVER_PROJECT_IDS[2]; // Aurum Brand Kit

	const project1 = getProjectById(project1Id)!;
	const project2 = getProjectById(project2Id)!;
	const project3 = getProjectById(project3Id)!;

	return (
		<section id="projects" className="w-full px-6 md:px-[10%] py-16 md:py-24">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
				<div className="flex gap-2 items-center text-lg md:text-xl font-switzer">
					<div className="bg-black dark:bg-white rounded-full size-1" />
					{tIndex("discover.subTitle")}
				</div>
				<h2 className="text-5xl md:text-7xl lg:text-[86px] font-switzer font-medium leading-[1.1] tracking-tight text-right w-full md:w-auto">
					{tIndex("discover.heading")}
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
				<div className="md:col-span-5 lg:col-span-4 flex flex-col gap-12 lg:gap-24">
					{/* Categories */}
					<div className="flex flex-col gap-4">
						{CATEGORY_IDS.map((catId, i) => (
							<Link
								key={catId}
								href={`/${locale}/projects?cat=${i}`}
								className={`inline-block text-left font-switzer text-lg md:text-xl w-fit ${
									i === 0
										? "font-bold text-black dark:text-white"
										: "text-gray-500 hover:text-black dark:hover:text-white transition-colors"
								}`}
							>
								{tCat(catId)}
							</Link>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="flex flex-col gap-4 group w-full"
					>
						<Link
							href={`/${locale}/projects/${project2Id}`}
							className="relative w-full aspect-square md:aspect-4/5.5 overflow-hidden"
						>
							<Image
								src={project2.image}
								alt={tProjects(`${project2Id}.title`)}
								fill
								className="object-contain transition-transform duration-700 group-hover:scale-105"
							/>
						</Link>
						<div className="flex justify-between items-start text-lg md:text-xl font-switzer font-bold">
							<Link
								href={`/${locale}/projects/${project2Id}`}
								className="tracking-tight hover:underline"
							>
								{tProjects(`${project2Id}.title`)}
							</Link>
							<span className="text-gray-400 font-medium whitespace-nowrap text-sm md:text-base">
								{tCat(project2.categoryId)}
							</span>
						</div>
					</motion.div>

					{/* View All Button */}
					<Link
						href={`/${locale}/projects`}
						className="flex mt-auto items-center gap-2 border border-black dark:border-white px-6 py-4 w-fit text-sm md:text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 font-switzer font-medium whitespace-nowrap"
					>
						{tIndex("discover.btnAll")}
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
						<Link
							href={`/${locale}/projects/${project1Id}`}
							className="relative w-full aspect-4/5 overflow-hidden bg-gray-200 block"
						>
							<Image
								src={project1.image}
								alt={tProjects(`${project1Id}.title`)}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</Link>
						<div className="flex justify-between items-start text-lg md:text-xl font-switzer font-bold">
							<Link
								href={`/${locale}/projects/${project1Id}`}
								className="tracking-tight hover:underline"
							>
								{tProjects(`${project1Id}.title`)}
							</Link>
							<span className="text-gray-400 font-medium whitespace-nowrap text-sm md:text-base">
								{tCat(project1.categoryId)}
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
						<Link
							href={`/${locale}/projects/${project3Id}`}
							className="relative w-full aspect-video md:aspect-16/10 overflow-hidden bg-gray-200 block"
						>
							<Image
								src={project3.image}
								alt={tProjects(`${project3Id}.title`)}
								fill
								className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
							/>
						</Link>
						<div className="flex justify-between items-start text-lg md:text-xl font-switzer font-bold mt-2">
							<Link
								href={`/${locale}/projects/${project3Id}`}
								className="tracking-tight hover:underline"
							>
								{tProjects(`${project3Id}.title`)}
							</Link>
							<span className="text-gray-400 font-medium whitespace-nowrap text-sm md:text-base">
								{tCat(project3.categoryId)}
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
