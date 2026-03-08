import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import AnimatedList from "@/components/projects/AnimatedList";
import BackButton from "@/components/projects/BackButton";
import MediaRenderer from "@/components/projects/MediaRenderer";
import ScrollRevealText from "@/components/ScrollRevealText";
import { getProjectById, getRelatedProjectIds } from "@/lib/data/projects";

export default async function ProjectDetail({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const id = "uni-portal";
	const projectConfig = getProjectById(id);

	if (!projectConfig) {
		notFound();
	}

	const t = await getTranslations("ProjectsData");
	const tCat = await getTranslations("Categories");
	const tBase = await getTranslations("ProjectDetailPage");

	const relatedIds = getRelatedProjectIds(id);
	const relatedProjects = relatedIds.map((rId) => {
		const relConfig = getProjectById(rId);
		return {
			id: rId,
			title: t(`${rId}.title`),
			category: tCat(relConfig?.categoryId || ""),
			image: relConfig?.squareImage,
		};
	});

	return (
		<>
			<div className="w-full">
				<div className="px-6 md:px-12.5 mb-12 mt-6 md:mt-37.5">
					<BackButton label={tBase("backToProjects")} />
					<h1 className="text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] font-switzer font-medium tracking-tight mb-6">
						UniPortal
					</h1>
					<p className="text-gray-500 font-satoshi text-base md:text-lg mb-8">
						{t(`${id}.subtitle`)}
					</p>

					{projectConfig.appStoreLink && (
						<a
							href={projectConfig.appStoreLink}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-switzer font-medium transition-all hover:scale-105 active:scale-95 group shadow-lg"
						>
							<svg
								viewBox="0 0 384 512"
								className="w-5 h-5 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51 -21.1-78.2-21.1-34.5 0-82.3 24.3-100.3 64-16.1 35.4-15.6 118.9 33.7 207.1 24.6 44.5 61.3 93.6 106.6 93.6 9.4 0 31.9-4.1 48.7-4.1 16.3 0 36.8 3.9 48.3 3.9 44.8 0 81.3-46.3 103.7-77.9 20.3-29.4 28.6-58 29.1-59.5-.7-.3-60.1-23-60.6-99.4zM280.9 94c30.2-36 26.6-83 23.3-102.3-39 1.6-83.3 25.4-110.1 57.1-23.7 28.1-28.9 76.5-22.1 101.4 44.1 3.5 83.1-20.3 108.9-56.2z" />
							</svg>
							<span>{tBase("viewAppStore")}</span>
						</a>
					)}
				</div>

				{!!0 && (
					<div className="w-full aspect-21/9 md:aspect-2.5/1 relative mb-20 lg:mb-32">
						<MediaRenderer
							media={{
								type: "image",
								src: projectConfig.panoramaImage || projectConfig.image,
								size: "full",
							}}
							alt={t(`${id}.title`)}
						/>
					</div>
				)}

				<div className="px-6 md:px-12.5">
					{/* Detail Section */}
					<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400 mb-8">
						<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
						{tBase("detail")}
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 pb-16">
						{/* Left col */}
						<div className="lg:col-span-3 flex flex-col justify-between pb-[15%]">
							<ScrollRevealText
								text={t(`${id}.details.headingPart1`)}
								className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-16 lg:mb-32"
							/>

							<div className="grid grid-cols-2 gap-y-10 gap-x-4 mb-16">
								<div>
									<p className="text-gray-500 font-satoshi mb-2">
										{tBase("industry")}
									</p>
									<p className="font-switzer font-bold">
										{t(`${id}.meta.industry`)}
									</p>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi mb-2">
										{tBase("category")}
									</p>
									<p className="font-switzer font-bold">
										{tCat(projectConfig.categoryId)}
									</p>
								</div>
							</div>

							<div className="border-t border-black/10 dark:border-white/10 pt-10">
								<p className="text-gray-500 font-satoshi mb-4 tracking-wider text-xs md:text-sm font-medium">
									{tBase("myRole")}
								</p>
								<p className="text-gray-600 dark:text-gray-300 font-satoshi text-base md:text-lg leading-relaxed max-w-2xl">
									{t(`${id}.meta.role`)}
								</p>
							</div>
						</div>

						{/* Right col */}
						<div className="lg:col-span-2 pt-5 md:pt-[25%] flex flex-col gap-10">
							<p className="text-gray-500 font-satoshi text-lg md:text-xl leading-relaxed ">
								{t(`${id}.details.description`)}
							</p>
							<div className="relative max-w-[35vw] w-full aspect-video md:aspect-4/3">
								<Image
									src={projectConfig.detailsImage}
									alt="Detail Image"
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>

					{/* Pain Points Section */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12">
						<div className="lg:col-span-3">
							<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
								<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
								{tBase("painPoints")}
							</div>
						</div>

						<div className="lg:col-span-9">
							<ScrollRevealText
								text={t(`${id}.painPoints.heading`)}
								className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-16 lg:mb-20"
							/>

							<AnimatedList items={t.raw(`${id}.painPoints.list`)} />
						</div>
					</div>

					{/* Gallery Grid Section */}
					{projectConfig.gallery.length > 0 && (
						<div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-10 auto-rows-min pb-12">
							{projectConfig.gallery.map((media, i) => {
								let colSpan = "md:col-span-12";
								let aspect = "aspect-video";
								const offset = i % 2 === 0 ? "" : "md:mt-32";
								const colStart =
									i % 2 === 0 ? "md:col-start-1" : "md:col-start-7";

								if (media.size === "half") {
									colSpan = "md:col-span-6";
									aspect = "aspect-square";
								} else if (media.size === "portrait") {
									colSpan = "md:col-span-5";
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
										className={`${colSpan} ${colStart} ${offset} relative w-full ${aspect}`}
									>
										<MediaRenderer
											media={media}
											alt={`Gallery media ${i + 1}`}
											objectFit="contain"
										/>
									</div>
								);
							})}
						</div>
					)}

					{/* Key Features Section */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 py-16">
						<div className="lg:col-span-3">
							<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
								<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
								{tBase("keyFeatures")}
							</div>
						</div>

						<div className="lg:col-span-9">
							<ScrollRevealText
								text={t(`${id}.keyFeatures.heading`)}
								className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-16 lg:mb-20"
							/>

							<AnimatedList items={t.raw(`${id}.keyFeatures.list`)} />
						</div>
					</div>

					{/* Result Section */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 py-16">
						<div className="lg:col-span-3">
							<div className="flex items-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
								<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
								{tBase("result")}
							</div>
						</div>

						<div className="lg:col-span-9">
							<ScrollRevealText
								text={t(`${id}.result.heading`)}
								className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-16 lg:mb-20"
							/>

							<AnimatedList items={t.raw(`${id}.result.list`)} />
						</div>
					</div>
				</div>
			</div>

			{/* Related Projects Section */}
			<section className="pt-16 md:pt-20 pb-20 border-t border-black/10 dark:border-white/10">
				<div className="px-6 md:px-12.5">
					{/* Heading */}
					<div className="flex flex-col items-center gap-4 mb-20 text-center">
						<div className="flex items-center justify-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
							<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
							{tBase("relatedProject")}
						</div>
						<h2 className="text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-switzer font-medium tracking-tight leading-[1.1]">
							{tBase("exploreSimilar")}
						</h2>
						<p className="text-gray-500 font-satoshi text-lg md:text-xl max-w-2xl mt-4">
							{tBase("exploreSimilarDesc")}
						</p>
					</div>

					<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
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
			</section>
		</>
	);
}
