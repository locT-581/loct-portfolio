import { getTranslations } from "next-intl/server";

export default async function AboutHeader() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-[8%] mb-20 lg:mb-32">
			<h1 className="text-6xl md:text-8xl lg:text-[120px] font-switzer font-medium tracking-tight mb-8">
				{t("title")}
			</h1>
			<p className="text-gray-500 font-satoshi text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
				{t("subtitle")}
			</p>
		</section>
	);
}
