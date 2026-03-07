import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ScrollRevealText from "../ScrollRevealText";

export default async function AboutMe() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-12.5 pb-24 md:pb-32">
			<div className="py-17.5 relative flex justify-between">
				{/* Left Column */}
				<div className="lg:col-span-4 flex flex-col gap-10">
					<div className="flex items-center gap-2 text-lg md:text-2xl shrink-0 text-nowrap">
						<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
						{t("aboutMe.label")}
					</div>
				</div>

				{/* Right Column */}
				<div className="flex flex-col items-end gap-24 md:gap-32 justify-end max-w-[65%]">
					<ScrollRevealText
						text={t("aboutMe.heading")}
						className="text-2xl md:text-3xl lg:text-5xl"
					/>
					<p className="text-gray-500 text-base md:text-lg lg:text-xl items-end max-w-[65%]">
						{t("aboutMe.description")}
					</p>
				</div>

				<div className="absolute bottom-[3%] min-w-50 left-4 max-w-87.5 w-[20vw] aspect-3/4 overflow-hidden">
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
