"use client";

import { motion } from "motion/react";

interface AnimatedListProps {
	items: string[];
}

export default function AnimatedList({ items }: AnimatedListProps) {
	// Function to parse the **text** into bold segments
	const renderTextWithBold = (text: string) => {
		const parts = text.split(/(\*\*.*?\*\*)/g);
		return parts.map((part) => {
			if (part.startsWith("**") && part.endsWith("**")) {
				return (
					<strong key={part} className="font-bold text-black dark:text-white">
						{part.slice(2, -2)}
					</strong>
				);
			}
			return part;
		});
	};

	return (
		<div className="flex flex-col gap-8 max-w-[80%]">
			{items.map((point, i) => (
				<motion.div
					key={point}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{
						duration: 0.8,
						delay: i * 0.15,
						ease: [0.215, 0.61, 0.355, 1], // easeOutCubic-like
					}}
					className="flex gap-8 md:gap-16 items-start"
				>
					<span className="text-gray-400 font-satoshi text-base shrink-0">
						/0{i + 1}
					</span>
					<p className="text-gray-500 font-satoshi text-base md:text-lg leading-relaxed">
						{renderTextWithBold(point)}
					</p>
				</motion.div>
			))}
		</div>
	);
}
