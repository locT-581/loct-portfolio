import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function ValueSection() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-12.5 py-16 border-t border-black/10 dark:border-white/10">
			{/* Top Section */}
			<div className="flex flex-col gap-6 md:gap-10 mb-12 md:mb-20 lg:mb-32">
				<div className="flex items-center gap-2 text-base md:text-xl font-work-sans text-gray-600 dark:text-gray-400">
					<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
					{t("value.label")}
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start md:items-end">
					<div className="lg:col-span-6 xl:col-span-7">
						<h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-work-sans leading-[1.1] tracking-tight">
							{t("value.heading")}
						</h2>
					</div>
					<div className="lg:col-span-6 xl:col-span-5 flex justify-start md:justify-end">
						<p className="text-gray-500 font-quicksand text-lg md:text-xl leading-relaxed max-w-sm">
							{t("value.description")}
						</p>
					</div>
				</div>
			</div>

			{/* Flattened Grid for responsive control */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-24 items-start">
				{/* Item 1 - Mobile: 1st | Desktop: Col 2, Row 1 */}
				<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default lg:col-start-2 lg:row-start-1">
					<span className="text-lg md:text-2xl font-work-sans font-medium text-gray-400 mb-8 md:mb-20">
						{t("value.items.1.number")}
					</span>
					<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-4 md:mb-6">
						{t("value.items.1.title")}
					</h3>
					<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
						{t("value.items.1.desc")}
					</p>
				</div>

				{/* Image 1 - Mobile: 2nd | Desktop: Col 1, Row 1 */}
				<div className="relative w-full aspect-4/3 bg-gray-200 overflow-hidden rounded-2xl lg:col-start-1 lg:row-start-1">
					<Image
						src={t("value.images.1")}
						alt="Creative Process"
						fill
						className="object-cover"
					/>
				</div>

				{/* Item 2 - Mobile: 3rd | Desktop: Col 3, Row 1 */}
				<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default lg:col-start-3 lg:row-start-1">
					<span className="text-lg md:text-2xl font-work-sans font-medium text-gray-400 mb-8 md:mb-20">
						{t("value.items.2.number")}
					</span>
					<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-4 md:mb-6">
						{t("value.items.2.title")}
					</h3>
					<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
						{t("value.items.2.desc")}
					</p>
				</div>

				{/* Item 3 - Mobile: 4th | Desktop: Col 1, Row 2 */}
				<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default lg:col-start-1 lg:row-start-2 lg:mt-24">
					<span className="text-lg md:text-2xl font-work-sans font-medium text-gray-400 mb-8 md:mb-20">
						{t("value.items.3.number")}
					</span>
					<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-4 md:mb-6">
						{t("value.items.3.title")}
					</h3>
					<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
						{t("value.items.3.desc")}
					</p>
				</div>

				{/* Image 2 - Mobile: 5th | Desktop: Col 2, Row 2 */}
				<div className="relative w-full aspect-[1.3] overflow-hidden bg-gray-200 rounded-2xl lg:col-start-2 lg:row-start-2">
					<Image
						src={t("value.images.2")}
						alt="User Focus"
						fill
						className="object-cover"
					/>
				</div>

				{/* Item 4 - Mobile: 6th | Desktop: Col 3, Row 2 */}
				<div className="flex flex-col border-b border-black/10 dark:border-white/10 pb-10 group cursor-default lg:col-start-3 lg:row-start-2">
					<span className="text-lg md:text-2xl font-work-sans font-medium text-gray-400 mb-8 md:mb-20">
						{t("value.items.4.number")}
					</span>
					<h3 className="text-2xl md:text-3xl font-work-sans font-medium mb-4 md:mb-6">
						{t("value.items.4.title")}
					</h3>
					<p className="text-gray-500 font-quicksand text-base md:text-lg leading-relaxed">
						{t("value.items.4.desc")}
					</p>
				</div>
			</div>
		</section>
	);
}
