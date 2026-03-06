import { getTranslations } from "next-intl/server";

export default async function JobExperience() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-[8%] py-17.5">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
				{/* Left Column */}
				<div className="lg:col-span-3 flex items-start">
					<div className="flex items-center gap-2 text-lg md:text-xl font-switzer">
						<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
						{t("experience.label")}
					</div>
				</div>

				{/* Right Column */}
				<div className="lg:col-span-9">
					<h2 className="text-5xl md:text-6xl lg:text-[76px] font-switzer leading-[1.1] mb-10 lg:mb-14">
						{t("experience.heading")}
					</h2>

					<div className="flex flex-col">
						{[0, 1, 2, 3, 4, 5].map((index) => (
							<div
								key={index}
								className="group grid grid-cols-1 md:grid-cols-2 gap-6 py-7.5"
							>
								<div className="flex flex-col gap-2">
									<h3 className="text-2xl md:text-3xl font-switzer font-medium">
										{t(`experience.jobs.${index}.role`)}
									</h3>
									<span className="text-sm font-satoshi text-gray-500 font-medium tracking-wide">
										{t(`experience.jobs.${index}.company`)}
									</span>
								</div>
								<div>
									<p className="text-gray-500 font-satoshi text-base md:text-lg leading-relaxed">
										{t(`experience.jobs.${index}.desc`)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
