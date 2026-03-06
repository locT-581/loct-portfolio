import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

// Using dummy data for demonstration.
const PROJECT_DETAIL = {
	id: "1",
	title: "Aurum Brand Kit",
	subtitle:
		"A premium identity system built to reflect elegance, craftsmanship, and modern luxury.",
	heroImage:
		"https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2670",
	details: {
		headingPart1: "Aurum is a rising jewelry brand that blends timeless ",
		headingPart2: "craftsmanship with contemporary design.",
		description:
			"From logo and color palette to packaging and social guidelines, I crafted a cohesive brand kit that elevated their presence and resonated with their upscale audience.",
		image:
			"https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=1000",
	},
	meta: {
		client: "Aurum",
		industry: "Jewelry & Fashion",
		category: "Brand Kit",
		duration: "4 Weeks",
	},
	painPoints: {
		heading:
			"The Challenge Behind the Shine: Designing Visual Identity That Reflects Elegance and Meaning",
		list: [
			"Lack of a consistent visual system across platforms.",
			"Existing logo and fonts felt outdated and didn't reflect the brand's elegance.",
			"Needed a brand identity that worked equally well in print, packaging, and digital spaces.",
		],
	},
	gallery: [
		"https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000",
		"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
		"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000",
		"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
	],
	result: {
		headingPart1:
			"The new brand kit positioned Aurum as a serious contender in the luxury market, ",
		headingPart2: "delivering a modern look with timeless appeal.",
		list: [
			"3x Increase in Instagram engagement",
			"40% Growth in online store conversions",
			"90% Positive feedback from customers on rebranded packaging",
			"5x Brand consistency score across all assets",
		],
	},
	relatedProjects: [
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
	],
};

export default async function ProjectDetail({
	params,
}: {
	params: Promise<{ locale: string; id: string }>;
}) {
	const { locale, id } = await params;
	const t = await getTranslations("ProjectsPage"); // Reuse or update if there's a specific key
	return (
		<main className="min-h-screen pt-32 pb-24 bg-[#F2F2F2] dark:bg-[#111111] text-[#111111] dark:text-[#F2F2F2]">
			<div className="w-full">
				<div className="px-6 md:px-[8%] mb-12">
					<h1 className="text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] font-switzer font-medium tracking-tight mb-6">
						{PROJECT_DETAIL.title}
					</h1>
					<p className="text-gray-500 font-satoshi text-base md:text-lg max-w-2xl">
						{PROJECT_DETAIL.subtitle}
					</p>
				</div>

				<div className="w-full aspect-21/9 md:aspect-2.5/1 relative mb-20 lg:mb-32">
					<Image
						src={PROJECT_DETAIL.heroImage}
						alt={PROJECT_DETAIL.title}
						fill
						className="object-cover"
						priority
					/>
				</div>

				<div className="px-6 md:px-[8%]">
					{/* Detail Section */}
					<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400 mb-8">
						<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
						Detail
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 border-b border-black/10 dark:border-white/10 pb-32">
						{/* Left col */}
						<div className="flex flex-col justify-between">
							<h2 className="text-3xl md:text-5xl lg:text-6xl font-switzer font-medium leading-[1.2] tracking-tight mb-16 lg:mb-32">
								{PROJECT_DETAIL.details.headingPart1}
								<span className="text-gray-400">
									{PROJECT_DETAIL.details.headingPart2}
								</span>
							</h2>

							<div className="grid grid-cols-2 gap-y-10 gap-x-4">
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Client:</p>
									<p className="font-switzer font-bold">
										{PROJECT_DETAIL.meta.client}
									</p>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Industry:</p>
									<p className="font-switzer font-bold">
										{PROJECT_DETAIL.meta.industry}
									</p>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Category:</p>
									<p className="font-switzer font-bold">
										{PROJECT_DETAIL.meta.category}
									</p>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Duration:</p>
									<p className="font-switzer font-bold">
										{PROJECT_DETAIL.meta.duration}
									</p>
								</div>
							</div>
						</div>

						{/* Right col */}
						<div className="flex flex-col gap-10">
							<p className="text-gray-500 font-satoshi text-lg md:text-xl leading-relaxed max-w-lg">
								{PROJECT_DETAIL.details.description}
							</p>
							<div className="relative w-full aspect-video md:aspect-4/3 bg-gray-200">
								<Image
									src={PROJECT_DETAIL.details.image}
									alt="Detail Image"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Pain Points Section */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
						<div className="lg:col-span-3">
							<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
								<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
								Pain Points
							</div>
						</div>

						<div className="lg:col-span-9">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-switzer font-medium leading-[1.2] tracking-tight text-gray-500 mb-16 max-w-4xl">
								<span className="text-[#111111] dark:text-[#f2f2f2]">
									{PROJECT_DETAIL.painPoints.heading.split(":")[0]}:
								</span>
								{PROJECT_DETAIL.painPoints.heading.substring(
									PROJECT_DETAIL.painPoints.heading.indexOf(":") + 1,
								)}
							</h3>

							<div className="flex flex-col gap-8 max-w-3xl">
								{PROJECT_DETAIL.painPoints.list.map((point, i) => (
									<div key={point} className="flex gap-8 md:gap-16 items-start">
										<span className="text-gray-400 font-satoshi text-base">
											/0{i + 1}
										</span>
										<p className="text-gray-500 font-satoshi text-base md:text-lg leading-relaxed">
											{point}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Gallery Grid Section */}
					<div className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
						{/* Left Column */}
						<div className="flex flex-col items-start gap-16 md:gap-32">
							<div className="relative w-[90%] md:w-[80%] aspect-3/4 bg-gray-200">
								<Image
									src={PROJECT_DETAIL.gallery[0]}
									alt="Gallery Image 1"
									fill
									className="object-cover"
								/>
							</div>
							<div className="relative w-full aspect-video bg-gray-200">
								<Image
									src={PROJECT_DETAIL.gallery[2]}
									alt="Gallery Image 3"
									fill
									className="object-cover"
								/>
							</div>
						</div>

						{/* Right Column */}
						<div className="flex flex-col items-end gap-16 md:gap-32 pt-16 md:pt-40">
							<div className="relative w-[70%] md:w-[60%] aspect-square bg-gray-200 self-center md:self-auto md:mr-auto">
								<Image
									src={PROJECT_DETAIL.gallery[1]}
									alt="Gallery Image 2"
									fill
									className="object-cover"
								/>
							</div>
							<div className="relative w-full aspect-4/5 bg-gray-200">
								<Image
									src={PROJECT_DETAIL.gallery[3]}
									alt="Gallery Image 4"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Result Section */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 bg-[#F2F2F2] dark:bg-[#111111] mt-32 md:mt-48 pb-16">
						<div className="lg:col-span-3">
							<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
								<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
								Result
							</div>
						</div>

						<div className="lg:col-span-9">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-switzer font-medium leading-[1.2] tracking-tight mb-16 max-w-4xl text-[#111111] dark:text-[#f2f2f2]">
								{PROJECT_DETAIL.result.headingPart1}
								<span className="text-gray-400">
									{PROJECT_DETAIL.result.headingPart2}
								</span>
							</h3>

							<div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
								{PROJECT_DETAIL.result.list.map((item, i) => (
									<div
										key={item}
										className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start"
									>
										<span className="md:col-span-2 text-gray-400 font-satoshi text-base">
											/0{i + 1}
										</span>
										<p className="md:col-span-10 text-gray-500 font-satoshi text-base md:text-lg leading-relaxed">
											{item}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Related Projects Section */}
			<section className="w-full bg-[#EAEAEA] dark:bg-[#111111] pt-24 md:pt-32 pb-20 mt-32 border-t border-black/10 dark:border-white/10">
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
							{PROJECT_DETAIL.relatedProjects.map((project) => (
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
		</main>
	);
}
