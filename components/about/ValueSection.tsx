import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function ValueSection() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-12.5 py-16 border-t border-black/10 dark:border-white/10">
			{/* Top Section */}
			<div className="flex flex-col gap-10 mb-20 lg:mb-32">
				<div className="flex items-center gap-2 text-lg md:text-xl font-work-sans text-gray-600 dark:text-gray-400">
					<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
					{t("value.label")}
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-end">
					<div className="lg:col-span-6 xl:col-span-7">
						<h2 className="text-5xl md:text-7xl lg:text-[110px] font-work-sans leading-[1.1] tracking-tight">
							{t("value.heading")}
						</h2>
					</div>
					<div className="lg:col-span-6 xl:col-span-5 flex justify-end">
						<p className="text-gray-500 font-quicksand text-lg md:text-xl leading-relaxed max-w-sm">
							{t("value.description")}
						</p>
					</div>
				</div>
			</div>

			{/* Grid Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-16 lg:gap-y-24 items-start">
				{/* Column 1 */}
				<div className="flex flex-col gap-16 lg:gap-24">
					<div className="relative w-full aspect-4/3 bg-gray-200 overflow-hidden">
						<Image
							src={t("value.images.1")}
							alt="Creative Process"
							fill
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default">
						<span className="text-xl md:text-2xl font-work-sans font-medium text-gray-400 mb-20">
							{t("value.items.3.number")}
						</span>
						<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-6">
							{t("value.items.3.title")}
						</h3>
						<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
							{t("value.items.3.desc")}
						</p>
					</div>
				</div>

				{/* Column 2 */}
				<div className="flex flex-col gap-16 lg:gap-24">
					<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default">
						<span className="text-xl md:text-2xl font-work-sans font-medium text-gray-400 mb-20">
							{t("value.items.1.number")}
						</span>
						<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-6">
							{t("value.items.1.title")}
						</h3>
						<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
							{t("value.items.1.desc")}
						</p>
					</div>
					<div className="relative w-full aspect-[1.3] overflow-hidden bg-gray-200">
						<Image
							src={t("value.images.2")}
							alt="User Focus"
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Column 3 */}
				<div className="flex flex-col gap-16 lg:gap-24">
					<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default">
						<span className="text-xl md:text-2xl font-work-sans font-medium text-gray-400 mb-20">
							{t("value.items.2.number")}
						</span>
						<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-6">
							{t("value.items.2.title")}
						</h3>
						<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
							{t("value.items.2.desc")}
						</p>
					</div>
					<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default">
						<span className="text-xl md:text-2xl font-work-sans font-medium text-gray-400 mb-20">
							{t("value.items.4.number")}
						</span>
						<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-6">
							{t("value.items.4.title")}
						</h3>
						<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
							{t("value.items.4.desc")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
