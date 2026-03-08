"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Suspense, useState } from "react";
import {
	CATEGORY_IDS,
	getProjectById,
	PORTFOLIO_PROJECT_IDS,
} from "@/lib/data/projects";

function PortfolioGridContent() {
	const tPage = useTranslations("ProjectsPage");
	const tProjects = useTranslations("ProjectsData");
	const tCat = useTranslations("Categories");
	const locale = useLocale();

	const projects = PORTFOLIO_PROJECT_IDS.map((id) => {
		const config = getProjectById(id);
		return {
			id,
			squareImage: config?.squareImage,
			image: config?.image,
			title: tProjects(`${id}.title`),
			category: tCat(config?.categoryId || ""),
			categoryId: config?.categoryId,
		};
	});

	const btnDetails = tPage("btnDetails");

	const searchParams = useSearchParams();
	const catParam = searchParams.get("cat");
	const initialIndex = catParam ? parseInt(catParam, 10) : 0;
	const initialCategoryId =
		!Number.isNaN(initialIndex) && CATEGORY_IDS[initialIndex]
			? CATEGORY_IDS[initialIndex]
			: CATEGORY_IDS[0];

	const [activeCategoryId, setActiveCategoryId] = useState(initialCategoryId);

	// Filter projects
	const filteredProjects =
		activeCategoryId === CATEGORY_IDS[0]
			? projects
			: projects.filter((p) => p.categoryId === activeCategoryId);

	return (
		<div className="flex flex-col gap-10">
			{/* Categories Nav */}
			<div className="flex flex-wrap items-center gap-6 md:gap-10 border-b border-black/10 dark:border-white/10 pb-6 mb-6">
				{CATEGORY_IDS.map((catId) => (
					<button
						key={catId}
						type="button"
						onClick={() => setActiveCategoryId(catId)}
						className={`font-work-sans text-base md:text-xl font-medium transition-colors ${
							activeCategoryId === catId
								? "text-black dark:text-white"
								: "text-gray-400 hover:text-black dark:hover:text-white"
						}`}
					>
						{tCat(catId)}
					</button>
				))}
			</div>

			{/* Projects Grid */}
			<motion.div
				layout
				className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
			>
				<AnimatePresence mode="popLayout">
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							layout
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="group relative cursor-pointer block"
						>
							<Link
								href={`/${locale}/projects/${project.id}`}
								className="block relative w-full aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800"
							>
								{/* Gradient Overlay for Text Readability */}
								<div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-black/70 to-transparent z-10 pointer-events-none" />

								{/* Top Right & Top Left Labels */}
								<div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start text-white pointer-events-none drop-shadow-md">
									<h3 className="font-work-sans font-semibold text-xl md:text-2xl max-w-[60%]">
										{project.title}
									</h3>
									<span className="text-sm md:text-base opacity-90">
										{project.category}
									</span>
								</div>

								{/* Image */}
								<Image
									src={project.squareImage || "/assets/images/placeholder.png"}
									alt={project.title}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>

								{/* Hover Overlay Circular Button */}
								<div className="absolute inset-0 bg-black/30 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="bg-white text-black font-work-sans font-bold text-xs md:text-sm px-6 py-6 md:px-8 md:py-8 aspect-square rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500 ease-out z-20">
										{btnDetails}
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default function PortfolioGrid() {
	return (
		<Suspense fallback={<div className="min-h-125 w-full" />}>
			<PortfolioGridContent />
		</Suspense>
	);
}
