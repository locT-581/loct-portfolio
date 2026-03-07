import Image from "next/image";
import { getTranslations } from "next-intl/server";

const tools = [
	{
		name: "ReactJS",
		icon: "/assets/images/toolbox/react.webp",
	},
	{
		name: "NextJS",
		icon: "/assets/images/toolbox/nextjs.jpeg",
	},
	{
		name: "Typescript",
		icon: "/assets/images/toolbox/typescript.png",
	},
	{
		name: "HTML, CSS, JS",
		icon: "/assets/images/toolbox/html-css-js.webp",
	},
	{
		name: "VueJS",
		icon: "/assets/images/toolbox/vuejs.webp",
	},
	{
		name: "SolidJS",
		icon: "/assets/images/toolbox/solid.png",
	},
	{
		name: "Flutter",
		icon: "/assets/images/toolbox/flutter.webp",
	},
	{
		name: "RESTFul APIs",
		icon: "/assets/images/toolbox/restful.jpg",
	},
];

const states = [
	{
		name: "Zustand",
		icon: "/assets/images/toolbox/zustand.png",
	},
	{
		name: "Redux",
		icon: "/assets/images/toolbox/redux.png",
	},
];

const realtime = [
	{
		name: "Centrifuge",
		icon: "/assets/images/toolbox/centrifuge.svg",
	},
	{
		name: "Ably",
		icon: "/assets/images/toolbox/ably.png",
	},
	{
		name: "Websocket",
		icon: "/assets/images/toolbox/websocket.svg",
	},
];

const uis = [
	{
		name: "MUI",
		icon: "/assets/images/toolbox/mui.webp",
	},
	{
		name: "Ant Design",
		icon: "/assets/images/toolbox/ant.png",
	},
	{
		name: "Shadcn",
		icon: "/assets/images/toolbox/shadcn.png",
	},
	{
		name: "Radix",
		icon: "/assets/images/toolbox/radix.png",
	},
	{
		name: "Motion",
		icon: "/assets/images/toolbox/motion.png",
	},
	{
		name: "GSAP",
		icon: "/assets/images/toolbox/gsap.png",
	},
];

const another = [
	{
		name: "Github",
		icon: "/assets/images/toolbox/github.webp",
	},
	{
		name: "Vitest",
		icon: "/assets/images/toolbox/vitest.png",
	},
	{
		name: "Jest",
		icon: "/assets/images/toolbox/jest.webp",
	},
	{
		name: "Figma",
		icon: "/assets/images/toolbox/figma.jpeg",
	},
	{
		name: "Adobe Photoshop",
		icon: "/assets/images/toolbox/photoshop.png",
	},
	{
		name: "Adobe Illustrator",
		icon: "/assets/images/toolbox/illustrator.webp",
	},
	{
		name: "Adobe After Effect",
		icon: "/assets/images/toolbox/after-effects.webp",
	},
];
export default async function Toolbox() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="px-6 md:px-[8%] py-16 overflow-hidden">
			<div className="flex flex-col items-center gap-4 mb-16 lg:mb-20">
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

			<div className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.state")}
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 w-full">
				{states.map((tool, index) => (
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

			<div className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.realtime")}
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 w-full">
				{realtime.map((tool, index) => (
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

			<div className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.ui")}
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 w-full">
				{uis.map((tool, index) => (
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

			<div className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.another")}
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 w-full">
				{another.map((tool, index) => (
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
