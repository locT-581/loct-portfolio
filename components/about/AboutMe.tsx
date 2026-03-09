import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ScrollRevealText from "../ScrollRevealText";

export default async function AboutMe() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-12.5 pb-24 md:pb-32">
			<div className="py-8 md:py-17.5 relative flex flex-col md:flex-row justify-between gap-12 md:gap-0">
				{/* Left Column */}
				<div className="md:w-1/4 flex flex-col gap-10">
					<div className="flex items-center gap-2 text-lg md:text-2xl shrink-0 text-nowrap">
						<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
						{t("aboutMe.label")}
					</div>
				</div>

				{/* Right Column */}
				<div className="flex flex-col items-start md:items-end gap-12 md:gap-32 justify-end max-w-full md:max-w-[65%]">
					<ScrollRevealText
						text={t("aboutMe.heading")}
						className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight"
					/>
					<p className="text-gray-500 text-lg md:text-xl md:text-right max-w-full md:max-w-[70%] leading-relaxed">
						{t("aboutMe.description")}
					</p>
				</div>

				<div className="relative md:absolute bottom-0 md:bottom-[3%] left-0 md:left-4 w-full md:w-[20vw] md:min-w-50 md:max-w-87.5 aspect-3/4 overflow-hidden rounded-2xl md:rounded-none">
					<Image
						src="/assets/images/avatar.jpg"
						alt={t("aboutMe.imageAlt")}
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
