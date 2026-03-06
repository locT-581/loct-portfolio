"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const Item = ({
	title,
	desc,
	paragraph,
}: {
	title: string;
	desc: string;
	paragraph: string;
}) => {
	return (
		<motion.div whileHover={{ y: -5 }} className="p-6 md:p-8 rounded-2xl">
			<h3 className="text-6xl md:text-8xl mb-4 font-switzer">{title}</h3>
			<p className="text-xl md:text-2xl font-semibold font-switzer">{desc}</p>
			<p className="text-lg md:text-[20px] text-grey-1">{paragraph}</p>
		</motion.div>
	);
};

export default function AboutSection() {
	const t = useTranslations("Index");

	return (
		<section
			id="about"
			className="container flex flex-col lg:flex-row gap-8 lg:gap-[10%] px-6 pt-16 pb-6 md:py-24 border-t border-gray-200 dark:border-gray-800"
		>
			<div className="flex gap-1 text-nowrap shrink-0 h-fit lg:items-center lg:justify-center self-start items-center">
				<div className="bg-black dark:bg-white rounded-full size-1" />
				{t("about.title")}
			</div>
			<div className="flex flex-col gap-10 md:gap-16">
				<div className="col-span-1">
					<p className="text-3xl md:text-5xl font-medium">{t("about.desc")}</p>
				</div>
				<div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
					<Item
						title={t("about.items.1.title")}
						desc={t("about.items.1.desc")}
						paragraph={t("about.items.1.paragraph")}
					/>
					<Item
						title={t("about.items.2.title")}
						desc={t("about.items.2.desc")}
						paragraph={t("about.items.2.paragraph")}
					/>
					<Item
						title={t("about.items.3.title")}
						desc={t("about.items.3.desc")}
						paragraph={t("about.items.3.paragraph")}
					/>
					<Item
						title={t("about.items.4.title")}
						desc={t("about.items.4.desc")}
						paragraph={t("about.items.4.paragraph")}
					/>
				</div>
				<button
					type="button"
					className="flex text-lg md:text-xl uppercase w-fit gap-1 items-center px-8 md:px-10 py-3 border border-black"
				>
					{t("about.btn")}
					<svg
						aria-label="about me"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="15"
						fill="none"
						viewBox="0 0 19 18"
					>
						<path
							stroke="#222"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.567"
							d="m10.154 16.783 6.865-6.862a1.597 1.597 0 0 0 0-2.273L10.154.783"
						/>
						<path
							stroke="#222"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="1.567"
							d="M17.493 8.783H.783"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}
