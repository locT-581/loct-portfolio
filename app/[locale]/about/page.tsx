import AboutHeader from "@/components/about/AboutHeader";
import AboutMe from "@/components/about/AboutMe";
import Capabilities from "@/components/about/Capabilities";
import JobExperience from "@/components/about/JobExperience";
import Toolbox from "@/components/about/Toolbox";
import ValueSection from "@/components/about/ValueSection";

export default function AboutPage() {
	return (
		<main className="w-full bg-[#e3e3e3] dark:bg-[#111111] pt-32 lg:pt-48">
			<AboutHeader />
			<AboutMe />
			<JobExperience />
			<ValueSection />
			<Capabilities />
			<Toolbox />
		</main>
	);
}
