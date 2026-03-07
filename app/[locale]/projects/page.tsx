import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import PortfolioGrid from "@/components/projects/PortfolioGrid";

const RELATED_PROJECTS = [
	{
		id: "4",
		title: "NeuroDash Website",
		category: "Web Design",
		image:
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
	},
	{
		id: "5",
		title: "Quantix UI Design",
		category: "UI/UX Design",
		image:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
];

export default async function ProjectsPage() {
	const t = await getTranslations("ProjectsPage");
	const locale = await getLocale();

	return (
		<>
			{/* Top Header */}
			<section className="px-6 pt-32 lg:pt-48 md:px-[8%] mb-12">
				<h1 className="text-6xl md:text-8xl lg:text-[120px] font-switzer font-medium tracking-tight mb-6">
					{t("title")}
				</h1>
				<p className="text-gray-500 font-satoshi text-base md:text-lg">
					{t("subtitle")}
				</p>
			</section>

			{/* Banner Image */}
			<section className="w-full aspect-21/9 md:aspect-3/1 relative mb-20 lg:mb-32">
				<Image
					src={t("banner")}
					alt="Project Showcase"
					fill
					className="object-cover"
				/>
			</section>

			{/* Sub Heading & Grid Section */}
			<section className="px-6 md:px-[8%]">
				<div className="flex flex-col items-center gap-4 mb-20 text-center">
					<div className="flex items-center justify-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
						<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
						{t("portfolio.label")}
					</div>
					<h2 className="text-5xl md:text-6xl lg:text-[80px] font-switzer font-medium tracking-tight leading-[1.1]">
						{t("portfolio.heading")}
					</h2>
					<p className="text-gray-500 font-satoshi text-base md:text-lg max-w-md mt-2">
						{t("portfolio.description")}
					</p>
				</div>

				{/* The Client Component that handles tabs and grid layout */}
				<PortfolioGrid />
			</section>

			{/* Related Projects Section */}
			<section className="pt-24 md:pt-32 pb-20 mt-32 border-t border-black/10 dark:border-white/10">
				<div className="px-6 md:px-[8%]">
					{/* Heading */}
					<div className="flex flex-col items-center gap-4 mb-20 text-center">
						<div className="flex items-center justify-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
							<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
							Related Project
						</div>
						<h2 className="text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-switzer font-medium tracking-tight leading-[1.1]">
							Explore Similar Work
						</h2>
						<p className="text-gray-500 font-satoshi text-lg md:text-xl max-w-2xl mt-4">
							More creative work with a focus on strategy, visual impact, and
							usability.
						</p>
					</div>

					{/* Projects Layout */}
					<div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
						{/* View Details Label (Left Bottom) */}
						<div className="hidden md:flex md:col-span-4 items-end pb-4 font-switzer font-medium text-gray-600 dark:text-gray-400">
							VIEW DETAILS
						</div>

						{/* Two Cards (Right) */}
						<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
							{RELATED_PROJECTS.map((project) => (
								<Link
									key={project.id}
									href={`/${locale}/projects/${project.id}`}
									className="group block relative w-full aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800"
								>
									{/* Image */}
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									/>
									{/* Gradient Overlay for better text legibility */}
									<div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-black/60 to-transparent pointer-events-none" />

									{/* Labels */}
									<div className="absolute top-6 left-6 right-6 z-10 flex flex-col items-start gap-1 text-white pointer-events-none drop-shadow-sm">
										<h3 className="font-switzer text-2xl md:text-3xl font-medium tracking-tight leading-tight">
											{project.title}
										</h3>
										<span className="font-satoshi font-medium text-sm md:text-base opacity-80">
											{project.category}
										</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
