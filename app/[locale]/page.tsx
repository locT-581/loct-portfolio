import { setRequestLocale } from "next-intl/server";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<div className="flex flex-col gap-12 pb-24">
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ProjectsSection />
		</div>
	);
}
