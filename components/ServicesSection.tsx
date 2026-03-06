"use client";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
	},
};

const ServiceItem = ({
	number,
	title,
	tags,
	desc,
}: {
	number: string;
	title: string;
	tags: string[];
	desc: string;
}) => {
	return (
		<motion.div
			variants={itemVariants}
			whileHover="hover"
			className="flex flex-col lg:flex-row justify-between py-10 md:py-12 border-t border-gray-300 dark:border-gray-800 w-full group relative overflow-hidden transition-colors duration-500 hover:bg-black/5 dark:hover:bg-white/5 px-4 rounded-xl"
		>
			{/* Left side: Number and Title */}
			<div className="flex flex-col mb-8 lg:mb-0 w-full lg:w-1/2 relative z-10">
				<motion.span
					variants={{
						hover: { x: 10, color: "var(--foreground)" },
					}}
					className="text-xl md:text-2xl mb-2 text-gray-500 font-switzer transition-colors duration-300"
				>
					{number}
				</motion.span>
				<motion.h3
					variants={{
						hover: { x: 20 },
					}}
					className="text-3xl md:text-4xl lg:text-5xl font-semibold font-switzer group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
				>
					{title}
				</motion.h3>
			</div>

			{/* Right side: Tags and Description */}
			<div className="flex flex-col w-full lg:w-1/2 justify-center lg:items-end gap-4 relative z-10">
				<div className="flex flex-wrap items-center gap-3 text-sm md:text-base font-bold font-switzer">
					{tags.map((tag, i) => (
						<motion.div
							key={tag}
							variants={{
								hover: { y: -2, scale: 1.05 },
							}}
							className="flex items-center gap-3"
						>
							<span className="group-hover:text-primary transition-colors duration-300">
								{tag}
							</span>
							{i < tags.length - 1 && (
								<span className="bg-black dark:bg-white rounded-full size-1 block" />
							)}
						</motion.div>
					))}
				</div>
				<motion.p
					variants={{
						hover: { x: -10 },
					}}
					className="text-gray-500 text-lg md:text-xl lg:text-right lg:max-w-md group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-300"
				>
					{desc}
				</motion.p>
			</div>

			{/* Animated underline or reveal line */}
			<motion.div
				className="absolute bottom-0 left-0 h-0.5 bg-black dark:bg-white w-0"
				variants={{
					hover: { width: "100%" },
				}}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			/>
		</motion.div>
	);
};

export default function ServicesSection() {
	const t = useTranslations("Index");

	const serviceKeys = ["1", "2", "3", "4"] as const;

	return (
		<section
			id="services"
			className="w-full flex flex-col gap-12 md:gap-24 px-6 md:px-12 pt-16 md:pt-24"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="flex flex-col lg:flex-row justify-between items-start"
			>
				<div className="flex gap-2 items-center text-lg md:text-xl font-switzer lg:self-start lg:mt-6 mb-8 lg:mb-0">
					<div className="bg-black dark:bg-white rounded-full size-1" />
					{t("servicesSubTitle")}
				</div>
				<h2 className="text-5xl md:text-7xl lg:text-8xl font-switzer lg:w-3/4 lg:text-right leading-tight tracking-tight">
					{t("servicesHeading")}
				</h2>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="flex flex-col w-full mt-8 md:mt-16"
			>
				{serviceKeys.map((key) => {
					const tags = t.raw(`services.${key}.tags`) as string[];

					return (
						<ServiceItem
							key={key}
							number={t(`services.${key}.number`)}
							title={t(`services.${key}.title`)}
							tags={tags}
							desc={t(`services.${key}.desc`)}
						/>
					);
				})}
			</motion.div>
		</section>
	);
}
