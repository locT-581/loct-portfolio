import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Toolbox() {
	const t = await getTranslations("AboutPage");

	const tools = [
		{
			name: "Webflow",
			icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200",
		},
		{
			name: "Figma",
			icon: "https://images.unsplash.com/photo-1581291518857-484b0e5085e3?auto=format&fit=crop&q=80&w=200",
		},
		{
			name: "Framer",
			icon: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=200",
		},
		{
			name: "Adobe Illustrator",
			icon: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=200",
		},
	];

	return (
		<section className="px-6 md:px-[8%] py-32 bg-[#F2F2F2] dark:bg-[#111111] overflow-hidden">
			<div className="flex flex-col items-center gap-4 mb-20 lg:mb-32">
				<div className="flex items-center justify-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
					<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
					{t("toolbox.label")}
				</div>
				<h2 className="text-6xl md:text-7xl lg:text-8xl font-switzer font-medium tracking-tight text-center leading-[1.1]">
					{t("toolbox.heading")}
				</h2>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 w-full">
				{tools.map((tool, index) => (
					<div
						key={tool.name}
						className={`flex flex-col items-center justify-center gap-8 py-12 px-6 ${
							index !== tools.length - 1
								? "lg:border-r border-black/10 dark:border-white/10"
								: ""
						}`}
					>
						<div className="relative w-24 h-24 md:w-32 md:h-32 hover:-translate-y-2 transition-transform duration-300">
							<Image
								src={tool.icon}
								alt={tool.name}
								fill
								className="object-cover rounded-2xl md:rounded-4xl shadow-sm"
							/>
						</div>
						<span className="text-gray-500 font-satoshi text-lg md:text-2xl font-medium text-center">
							{tool.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
