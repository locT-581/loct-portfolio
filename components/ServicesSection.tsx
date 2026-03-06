"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

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
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="flex flex-col lg:flex-row justify-between py-8 md:py-16 border-t border-gray-300 dark:border-gray-800 w-full group"
		>
			{/* Left side: Number and Title */}
			<div className="flex flex-col mb-8 lg:mb-0 w-full lg:w-1/2">
				<span className="text-xl md:text-2xl mb-2 text-gray-500 font-switzer">
					{number}
				</span>
				<h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-switzer">
					{title}
				</h3>
			</div>

			{/* Right side: Tags and Description */}
			<div className="flex flex-col w-full lg:w-1/2 justify-center lg:items-end gap-4">
				<div className="flex flex-wrap items-center gap-3 text-sm md:text-base font-bold font-switzer">
					{tags.map((tag, i) => (
						<div key={tag} className="flex items-center gap-3">
							<span>{tag}</span>
							{i < tags.length - 1 && (
								<span className="bg-black dark:bg-white rounded-full size-1 block" />
							)}
						</div>
					))}
				</div>
				<p className="text-gray-500 text-lg md:text-xl lg:text-right lg:max-w-md">
					{desc}
				</p>
			</div>
		</motion.div>
	);
};

export default function ServicesSection() {
	const t = useTranslations("Index");

	const serviceKeys = ["1", "2", "3", "4"] as const;

	return (
		<section
			id="services"
			className="w-full flex flex-col gap-12 md:gap-24 px-12 pt-16 md:pt-24"
		>
			<div className="flex flex-col lg:flex-row justify-between items-start">
				<div className="flex gap-2 items-center text-lg md:text-xl font-switzer lg:self-start lg:mt-6 mb-8 lg:mb-0">
					<div className="bg-black dark:bg-white rounded-full size-1" />
					{t("servicesSubTitle")}
				</div>
				<h2 className="text-5xl md:text-7xl lg:text-8xl font-switzer lg:w-3/4 lg:text-right leading-tight tracking-tight">
					{t("servicesHeading")}
				</h2>
			</div>

			<div className="flex flex-col w-full mt-8 md:mt-16">
				{serviceKeys.map((key) => {
					// Use t.raw to get the array properly, or access each element if it was fixed
					// We'll safely acquire tags from the translated json using t.raw for arrays or objects
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
			</div>
		</section>
	);
}
