"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BlogArticle = ({
	item,
	t,
	index,
	aspectClass = "aspect-4/3",
}: {
	item: number;
	t: (key: string) => string;
	index: number;
	aspectClass?: string;
}) => (
	<motion.article
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.1 }}
		className="group flex flex-col gap-4 cursor-pointer w-full"
	>
		<div
			className={`relative w-full ${aspectClass} overflow-hidden bg-gray-200`}
		>
			<Image
				src={t(`blog.items.${item}.image`)}
				alt={t(`blog.items.${item}.title`)}
				fill
				className="object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</div>

		<div className="flex flex-col gap-3 mt-2">
			<div className="flex justify-between items-center text-sm font-satoshi text-gray-500">
				<span>{t(`blog.items.${item}.date`)}</span>
				<span>{t("blog.readTime")}</span>
			</div>

			<h3 className="text-lg font-bold tracking-tight line-clamp-2">
				{t(`blog.items.${item}.title`)}
			</h3>

			<Link
				href="/projects"
				className="flex items-center gap-1 text-sm font-medium w-fit border-b border-transparent hover:border-black dark:hover:border-white transition-colors pb-0.5 mt-1"
			>
				{t("blog.btnDetails")}
				<ArrowUpRight className="w-4 h-4 ml-1" strokeWidth={2} />
			</Link>
		</div>
	</motion.article>
);

export default function BlogSection() {
	const t = useTranslations("Index");

	return (
		<section
			id="blog"
			className="w-full px-6 md:px-[8%] py-16 md:py-24 bg-[#F2F2F2] dark:bg-[#111111]"
		>
			<div className="flex gap-2 items-center text-lg md:text-xl font-switzer mb-5">
				<div className="bg-black dark:bg-white rounded-full size-1" />
				{t("blog.subTitle")}
			</div>
			<h2 className="text-5xl max-w-[60%] md:text-7xl lg:text-[86px] font-switzer font-medium leading-[1.1] tracking-tight mb-14">
				{t("blog.heading")}
			</h2>

			<div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
				<div className="absolute top-0 right-0 flex flex-col items-end gap-14">
					<p className="text-gray-500 font-satoshi text-base lg:text-lg leading-relaxed text-left max-w-sm xl:max-w-md">
						{t("blog.description")}
					</p>
					<Link
						href="/projects"
						className="flex items-center gap-2 border border-black dark:border-white px-6 py-4 w-fit text-sm md:text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 font-switzer font-medium whitespace-nowrap mb-16 lg:mb-0"
					>
						{t("blog.btnAll")}
						<ArrowRight className="w-5 h-5 ml-1" strokeWidth={1.5} />
					</Link>
				</div>
				{/* Left Column (5/12) */}
				<div className="md:col-span-6 lg:col-span-5 flex flex-col gap-10">
					<BlogArticle item={1} t={t} index={0} aspectClass="aspect-[1.4]" />
				</div>

				{/* Middle Column (4/12) */}
				<div className="md:col-span-6 lg:col-span-4 flex flex-col h-full lg:mt-30">
					{/* Spacer to push image down */}
					<div className="mt-16 md:mt-24 lg:mt-45">
						<BlogArticle item={2} t={t} index={1} aspectClass="aspect-[1.5]" />
					</div>
				</div>

				{/* Right Column (3/12) */}
				<div className="md:col-span-12 lg:col-span-3 flex flex-col items-start lg:items-end h-full lg:mt-30">
					{/* Spacer to push image down */}
					<div className="mt-8 md:mt-16 lg:mt-75 w-full md:w-1/2 lg:w-full">
						<BlogArticle item={3} t={t} index={2} aspectClass="aspect-[5/6]" />
					</div>
				</div>
			</div>
		</section>
	);
}
