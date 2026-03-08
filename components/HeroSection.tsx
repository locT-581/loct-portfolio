"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FEATURED_PROJECT_IDS, PROJECTS } from "@/lib/data/projects";
import ShinyText from "./ShinyText";

function ArrowIcon() {
	return (
		<svg
			aria-label="Arrow icon"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.97271 15.32L15.5457 8.749C15.6896 8.60671 15.8039 8.43728 15.8819 8.25052C15.9598 8.06376 16 7.86339 16 7.661C16 7.45862 15.9598 7.25824 15.8819 7.07148C15.8039 6.88472 15.6896 6.71529 15.5457 6.573L8.97271 0"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 7.66H0"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
			/>
		</svg>
	);
}

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function HeroSection() {
	const locale = useLocale();
	const t = useTranslations();
	const featuredProjects = PROJECTS.filter((p) =>
		FEATURED_PROJECT_IDS.includes(p.id),
	);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [featuredProjects.length]);

	const currentProject = featuredProjects[currentIndex];

	return (
		<motion.section
			className="hero-section"
			initial="initial"
			animate="animate"
			variants={staggerContainer}
		>
			<div className="hero-content">
				{/* Top row: Subheading + Featured Project */}
				<div className="hero-top-row">
					<motion.p className="hero-subheading" variants={fadeInUp}>
						{t("Hero.subheading")}
					</motion.p>

					<motion.div className="featured-project-block" variants={fadeInUp}>
						<AnimatePresence mode="wait">
							<motion.div
								key={currentProject.id}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								className="flex flex-col gap-5"
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.4, ease: "easeOut" }}
									className="overflow-hidden rounded-lg"
								>
									<Image
										src={currentProject.image}
										alt={t(`ProjectsData.${currentProject.id}.title`)}
										width={247}
										height={139}
										className="featured-project-thumb transition-transform duration-500 hover:scale-110"
									/>
								</motion.div>
								<Link
									href={`/${locale}/projects/${currentProject.id}`}
									className="featured-project-link"
								>
									<span className="featured-project-label truncate max-w-50">
										{t(`ProjectsData.${currentProject.id}.title`)}
									</span>
									<motion.div
										whileHover={{ x: 5 }}
										transition={{ type: "spring", stiffness: 400 }}
									>
										<ArrowIcon />
									</motion.div>
								</Link>
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</div>

				{/* Heading row: Large title + Location */}
				<div className="hero-heading-row">
					<h1 className="hero-heading">
						<motion.div variants={fadeInUp} className="inline-block mr-4">
							<ShinyText
								text={t("Hero.headingDark")}
								disabled={false}
								speed={5}
								className="heading-dark text-5xl md:text-8xl"
								color="#1a1a1a"
								shineColor="#666666"
							/>
						</motion.div>
						<motion.div variants={fadeInUp} className="inline-block">
							<ShinyText
								text={t("Hero.headingGrey")}
								disabled={false}
								speed={5}
								className="heading-grey text-5xl md:text-8xl"
								color="#999999"
								shineColor="#aaaaaa"
							/>
						</motion.div>
					</h1>
				</div>
			</div>

			{/* Full-width hero image (hidden for now as per code) */}
			{!!0 && (
				<motion.div
					className="hero-image-wrapper"
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<Image
						src="https://api.builder.io/api/v1/image/assets/TEMP/4e614238f189078d25d6c5b3b3deec7bc018a56a?width=2882"
						alt="Portfolio showcase"
						fill
						className="hero-image"
						priority
					/>
				</motion.div>
			)}
		</motion.section>
	);
}
