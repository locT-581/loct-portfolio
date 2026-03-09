import { getTranslations } from "next-intl/server";

export default async function JobExperience() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-12.5 py-17.5">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
				{/* Left Column */}
				<div className="lg:col-span-3 flex items-start">
					<div className="flex items-center gap-2 text-lg md:text-xl font-work-sans">
						<div className="bg-black dark:bg-white rounded-full w-1 h-1" />
						{t("experience.label")}
					</div>
				</div>

				{/* Right Column */}
				<div className="lg:col-span-9">
					<h2 className="text-5xl md:text-6xl lg:text-[76px] font-work-sans leading-[1.1] mb-10 lg:mb-14">
						{t("experience.heading")}
					</h2>

					<div className="flex flex-col">
						{[0, 1, 2].map((index) => {
							const hasLink = t.has(`experience.jobs.${index}.link`);

							return (
								<div
									key={index}
									className="group grid grid-cols-1 md:grid-cols-2 gap-6 py-7.5 border-b border-gray-100 dark:border-gray-900 last:border-0"
								>
									<div className="flex flex-col gap-2">
										<h3 className="text-2xl md:text-3xl font-work-sans font-medium">
											{t(`experience.jobs.${index}.role`)}
										</h3>
										<span className="text-sm text-gray-500 font-medium tracking-wide">
											{t(`experience.jobs.${index}.company`)}
										</span>
									</div>
									<div className="flex flex-col gap-5">
										<p className="text-gray-500 text-base md:text-lg leading-relaxed">
											{t(`experience.jobs.${index}.desc`)}
										</p>
										{hasLink && (
											<a
												href={t(`experience.jobs.${index}.link`)}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 w-fit px-6 py-2.5 border border-black dark:border-white rounded-full text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/btn"
											>
												{t("experience.viewUpwork")}
												<svg
													width="14"
													height="14"
													viewBox="0 0 14 14"
													fill="none"
													className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
													aria-hidden="true"
												>
													<path
														d="M1 13L13 1M13 1H4M13 1V10"
														stroke="currentColor"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</a>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
