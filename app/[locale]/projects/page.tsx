import Image from "next/image";
import { getTranslations } from "next-intl/server";
import PortfolioGrid from "@/components/projects/PortfolioGrid";

export default async function ProjectsPage() {
	const t = await getTranslations("ProjectsPage");
	return (
		<>
			{/* Top Header */}
			<section className="px-6 pt-20 lg:pt-24 md:px-12.5 mb-12">
				<h1 className="text-6xl md:text-8xl lg:text-[120px] font-switzer font-medium tracking-tight mb-6">
					{t("title")}
				</h1>
				<p className="text-gray-500 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
					{t("subtitle")}
				</p>
			</section>

			{/* Banner Image */}
			<section className="w-full aspect-21/9 md:aspect-3/1 relative mb-10 lg:mb-12">
				<Image
					src={t("banner")}
					alt="Project Showcase"
					fill
					className="object-cover"
				/>
			</section>

			{/* Sub Heading & Grid Section */}
			<section className="px-6 md:px-12.5 mb-10 lg:mb-12">
				<div className="flex flex-col items-center gap-4 mb-20 text-center">
					<div className="flex items-center justify-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
						<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
						{t("portfolio.label")}
					</div>
					<h2 className="text-5xl md:text-6xl lg:text-[80px] font-switzer font-medium tracking-tight leading-[1.1]">
						{t("portfolio.heading")}
					</h2>
					<p className="text-gray-500 font-satoshi text-base md:text-lg max-w-[65%] mt-2">
						{t("portfolio.description")}
					</p>
				</div>

				{/* The Client Component that handles tabs and grid layout */}
				<PortfolioGrid />
			</section>
		</>
	);
}
