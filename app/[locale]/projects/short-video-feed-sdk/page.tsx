import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import MediaRenderer from "@/components/projects/MediaRenderer";
import { getProjectById, getRelatedProjectIds } from "@/lib/data/projects";

export default async function ProjectDetail({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const id = "short-video-feed-sdk";
	const projectConfig = getProjectById(id);

	if (!projectConfig) {
		notFound();
	}

	const t = await getTranslations("ProjectsData");
	const tCat = await getTranslations("Categories");

	const relatedIds = getRelatedProjectIds(id);
	const relatedProjects = relatedIds.map((rId) => {
		const relConfig = getProjectById(rId);
		return {
			id: rId,
			title: t(`${rId}.title`),
			category: tCat(relConfig?.categoryId || ""),
			image: relConfig?.image,
		};
	});

	return (
		<>
			<div className="w-full">
				<div className="px-6 md:px-12.5 mb-12">
					<h1 className="text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] font-switzer font-medium tracking-tight mb-6">
						{t(`${id}.title`)}
					</h1>
					<p className="text-gray-500 font-satoshi text-base md:text-lg">
						{t(`${id}.subtitle`)}
					</p>
				</div>

				<div className="w-full aspect-21/9 md:aspect-2.5/1 relative mb-20 lg:mb-32">
					<MediaRenderer
						media={
							projectConfig.gallery[0] || {
								type: "image",
								src: projectConfig.image,
								size: "full",
							}
						}
						alt={t(`${id}.title`)}
					/>
				</div>

				<div className="px-6 md:px-12.5">
					{/* Detail Section */}
					<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400 mb-8">
						<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
						Detail
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 border-b border-black/10 dark:border-white/10 pb-32">
						{/* Left col */}
						<div className="flex flex-col justify-between">
							<h2 className="text-3xl md:text-5xl lg:text-6xl font-switzer font-medium leading-[1.2] tracking-tight mb-16 lg:mb-32">
								{t(`${id}.details.headingPart1`)}
								<span className="text-gray-400">
									{t(`${id}.details.headingPart2`)}
								</span>
							</h2>

							<div className="grid grid-cols-2 gap-y-10 gap-x-4">
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Client:</p>
									<p className="font-switzer font-bold">
										{t(`${id}.meta.client`)}
									</p>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Industry:</p>
									<p className="font-switzer font-bold">
										{t(`${id}.meta.industry`)}
									</p>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Category:</p>
									<p className="font-switzer font-bold">
										{tCat(projectConfig.categoryId)}
									</p>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi mb-2">Duration:</p>
									<p className="font-switzer font-bold">
										{t(`${id}.meta.duration`)}
									</p>
								</div>
							</div>
						</div>

						{/* Right col */}
						<div className="flex flex-col gap-10">
							<p className="text-gray-500 font-satoshi text-lg md:text-xl leading-relaxed max-w-lg">
								{t(`${id}.details.description`)}
							</p>
							<div className="relative w-full aspect-video md:aspect-4/3 bg-gray-200">
								<Image
									src={projectConfig.detailsImage}
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
									{t(`${id}.painPoints.heading`).split(":")[0]}
									{t(`${id}.painPoints.heading`).includes(":") ? ":" : ""}
								</span>
								{t(`${id}.painPoints.heading`).includes(":")
									? t(`${id}.painPoints.heading`).substring(
											t(`${id}.painPoints.heading`).indexOf(":") + 1,
										)
									: ""}
							</h3>

							<div className="flex flex-col gap-8 max-w-3xl">
								{t
									.raw(`${id}.painPoints.list`)
									.map((point: string, i: number) => (
										<div
											key={point}
											className="flex gap-8 md:gap-16 items-start"
										>
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
					{projectConfig.gallery.length > 1 && (
						<div className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 auto-rows-min">
							{projectConfig.gallery.slice(1).map((media, i) => {
								let colSpan = "md:col-span-12";
								let aspect = "aspect-video";

								if (media.size === "half") {
									colSpan = "md:col-span-6";
									aspect = "aspect-square";
								} else if (media.size === "portrait") {
									colSpan = "md:col-span-4";
									aspect = "aspect-3/4";
								} else if (media.size === "landscape") {
									colSpan = "md:col-span-8";
									aspect = "aspect-video";
								} else if (media.size === "square") {
									colSpan = "md:col-span-5";
									aspect = "aspect-square";
								}

								return (
									<div
										key={media.src}
										className={`${colSpan} relative w-full ${aspect}`}
									>
										<MediaRenderer
											media={media}
											alt={`Gallery media ${i + 1}`}
										/>
									</div>
								);
							})}
						</div>
					)}

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
								{t(`${id}.result.headingPart1`)}
								<span className="text-gray-400">
									{t(`${id}.result.headingPart2`)}
								</span>
							</h3>

							<div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
								{t.raw(`${id}.result.list`).map((item: string, i: number) => (
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
			<section className="pt-24 md:pt-32 pb-20 mt-32 border-t border-black/10 dark:border-white/10">
				<div className="px-6 md:px-12.5">
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
							{relatedProjects.map((project) => (
								<Link
									key={project.id}
									href={`/${locale}/projects/${project.id}`}
									className="group block relative w-full aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800"
								>
									{/* Image */}
									<Image
										src={project.image || "/"}
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
