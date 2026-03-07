"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.23, 1, 0.32, 1] as const,
		},
	},
};

const tools = [
	{
		name: "ReactJS",
		icon: "/assets/images/toolbox/react.webp",
		url: "https://react.dev/",
	},
	{
		name: "NextJS",
		icon: "/assets/images/toolbox/nextjs.jpeg",
		url: "https://nextjs.org/",
	},
	{
		name: "Typescript",
		icon: "/assets/images/toolbox/typescript.png",
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "HTML, CSS, JS",
		icon: "/assets/images/toolbox/html-css-js.webp",
		url: "https://developer.mozilla.org/",
	},
	{
		name: "VueJS",
		icon: "/assets/images/toolbox/vuejs.webp",
		url: "https://vuejs.org/",
	},
	{
		name: "SolidJS",
		icon: "/assets/images/toolbox/solid.png",
		url: "https://www.solidjs.com/",
	},
	{
		name: "Flutter",
		icon: "/assets/images/toolbox/flutter.webp",
		url: "https://flutter.dev/",
	},
	{
		name: "RESTFul APIs",
		icon: "/assets/images/toolbox/restful.jpg",
		url: "https://restfulapi.net/",
	},
];

const states = [
	{
		name: "Zustand",
		icon: "/assets/images/toolbox/zustand.png",
		url: "https://zustand-demo.pmnd.rs/",
	},
	{
		name: "Redux",
		icon: "/assets/images/toolbox/redux.png",
		url: "https://redux.js.org/",
	},
];

const realtime = [
	{
		name: "Centrifuge",
		icon: "/assets/images/toolbox/centrifuge.svg",
		url: "https://centrifugal.dev/",
	},
	{
		name: "Ably",
		icon: "/assets/images/toolbox/ably.png",
		url: "https://ably.com/",
	},
	{
		name: "Websocket",
		icon: "/assets/images/toolbox/websocket.svg",
		url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
	},
];

const uis = [
	{
		name: "MUI",
		icon: "/assets/images/toolbox/mui.webp",
		url: "https://mui.com/",
	},
	{
		name: "Ant Design",
		icon: "/assets/images/toolbox/ant.png",
		url: "https://ant.design/",
	},
	{
		name: "Shadcn",
		icon: "/assets/images/toolbox/shadcn.png",
		url: "https://ui.shadcn.com/",
	},
	{
		name: "Radix",
		icon: "/assets/images/toolbox/radix.png",
		url: "https://www.radix-ui.com/",
	},
	{
		name: "Motion",
		icon: "/assets/images/toolbox/motion.png",
		url: "https://motion.dev/",
	},
	{
		name: "GSAP",
		icon: "/assets/images/toolbox/gsap.png",
		url: "https://gsap.com/",
	},
	{
		name: "Story Book",
		icon: "/assets/images/toolbox/storybook.png",
		url: "https://storybook.js.org/",
	},
];

const another = [
	{
		name: "Github",
		icon: "/assets/images/toolbox/github.webp",
		url: "https://github.com/",
	},
	{
		name: "Vitest",
		icon: "/assets/images/toolbox/vitest.png",
		url: "https://vitest.dev/",
	},
	{
		name: "Jest",
		icon: "/assets/images/toolbox/jest.webp",
		url: "https://jestjs.io/",
	},
	{
		name: "Figma",
		icon: "/assets/images/toolbox/figma.jpeg",
		url: "https://www.figma.com/",
	},
	{
		name: "Adobe Photoshop",
		icon: "/assets/images/toolbox/photoshop.png",
		url: "https://www.adobe.com/products/photoshop.html",
	},
	{
		name: "Adobe Illustrator",
		icon: "/assets/images/toolbox/illustrator.webp",
		url: "https://www.adobe.com/products/illustrator.html",
	},
	{
		name: "Adobe After Effect",
		icon: "/assets/images/toolbox/after-effects.webp",
		url: "https://www.adobe.com/products/aftereffects.html",
	},
];

const AnimatedToolGrid = ({
	items,
	hasBorderTop = false,
}: {
	items: typeof tools;
	hasBorderTop?: boolean;
}) => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full"
		>
			{items.map((tool, index) => (
				<motion.a
					key={tool.name}
					variants={itemVariants}
					href={tool.url}
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
					className={`flex flex-col items-center justify-center gap-8 py-12 px-6 transition-colors group ${
						index % 4 !== 3
							? "lg:border-r border-black/10 dark:border-white/10"
							: ""
					} ${
						index < 4 && hasBorderTop
							? "border-t border-black/10 dark:border-white/10"
							: ""
					} border-b border-black/10 dark:border-white/10`}
				>
					<motion.div
						whileHover={{
							scale: 1.1,
							rotate: [0, -5, 5, -5, 0],
							transition: { duration: 0.4 },
						}}
						className="relative w-20 h-20 md:w-32 md:h-32"
					>
						<Image
							src={tool.icon}
							alt={tool.name}
							fill
							className="object-cover rounded-2xl md:rounded-4xl shadow-sm transition-shadow group-hover:shadow-xl"
						/>
					</motion.div>
					<motion.span
						whileHover={{ color: "#000" }}
						className="text-gray-500 dark:text-gray-400 font-satoshi text-lg md:text-2xl font-medium text-center transition-colors group-hover:text-black dark:group-hover:text-white"
					>
						{tool.name}
					</motion.span>
				</motion.a>
			))}
		</motion.div>
	);
};

export default function Toolbox() {
	const t = useTranslations("AboutPage");

	return (
		<section className="px-6 md:px-12.5 py-16 overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="flex flex-col items-center gap-4 mb-16 lg:mb-20"
			>
				<div className="flex items-center justify-center gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400">
					<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
					{t("toolbox.label")}
				</div>
				<h2 className="text-6xl md:text-7xl lg:text-8xl font-switzer font-medium tracking-tight text-center leading-[1.1]">
					{t("toolbox.heading")}
				</h2>
			</motion.div>

			<AnimatedToolGrid items={tools} />

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400"
			>
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.state")}
			</motion.div>
			<AnimatedToolGrid items={states} hasBorderTop />

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400"
			>
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.realtime")}
			</motion.div>
			<AnimatedToolGrid items={realtime} hasBorderTop />

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400"
			>
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.ui")}
			</motion.div>
			<AnimatedToolGrid items={uis} hasBorderTop />

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="flex items-center justify-center py-10 gap-2 text-base md:text-lg font-switzer text-gray-600 dark:text-gray-400"
			>
				<div className="bg-black dark:bg-white rounded-full w-1.5 h-1.5" />
				{t("toolbox.another")}
			</motion.div>
			<AnimatedToolGrid items={another} hasBorderTop />
		</section>
	);
}
