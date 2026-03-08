import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function BlogsPage() {
	const t = await getTranslations("BlogsPage");
	const locale = await getLocale();

	// In a real app, this would come from a CMS or database
	const blogIds = ["1", "2", "3"];

	return (
		<main className="w-full bg-[#f2f2f2] dark:bg-[#111111] pt-32 lg:pt-48 pb-20 min-h-screen">
			{/* Header */}
			<section className="px-6 md:px-[8%] mb-24">
				<h1 className="text-6xl md:text-8xl lg:text-[120px] font-work-sans font-medium tracking-tight mb-8">
					{t("title")}
				</h1>
				<p className="text-gray-500 font-quicksand text-lg md:text-xl max-w-2xl leading-relaxed">
					{t("subtitle")}
				</p>
			</section>

			{/* Blog List Section */}
			<section className="px-6 md:px-[8%]">
				<div className="flex flex-col gap-1 items-start mb-12">
					<div className="flex items-center gap-2 text-base md:text-lg font-work-sans text-gray-600 dark:text-gray-400">
						<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
						Insights
					</div>
					<h2 className="text-5xl md:text-6xl font-work-sans font-medium tracking-tight mt-2">
						{t("heading")}
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
					{blogIds.map((id) => (
						<Link
							key={id}
							href={`/${locale}/blogs/${id}`}
							className="group flex flex-col gap-6"
						>
							<div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
								<Image
									src={t(`items.${id}.image`)}
									alt={t(`items.${id}.title`)}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute top-4 left-4">
									<span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
										{t(`items.${id}.category`)}
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-4">
								<div className="flex justify-between items-center text-sm font-quicksand text-gray-500">
									<span>{t(`items.${id}.date`)}</span>
									<span className="flex items-center gap-1 group-hover:text-black dark:group-hover:text-white transition-colors uppercase font-work-sans font-bold tracking-wider text-xs">
										Read More <ArrowUpRight className="w-4 h-4" />
									</span>
								</div>
								<h3 className="text-2xl md:text-3xl font-work-sans font-medium tracking-tight leading-tight group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
									{t(`items.${id}.title`)}
								</h3>
								<p className="text-gray-500 font-quicksand line-clamp-2 leading-relaxed opacity-80">
									{t(`items.${id}.excerpt`)}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
