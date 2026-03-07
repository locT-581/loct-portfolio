/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import {
	type MotionValue,
	motion,
	useScroll,
	useTransform,
} from "motion/react";
import { useRef } from "react";

interface ScrollRevealTextProps {
	text: string;
	className?: string;
}

export default function ScrollRevealText({
	text,
	className,
}: ScrollRevealTextProps) {
	const element = useRef<HTMLParagraphElement>(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.65", "start 0.2"],
	});

	const words = text.split(" ");

	return (
		<p ref={element} className={`flex flex-wrap ${className}`}>
			{words.map((word, i) => (
				<Word
					key={`${word}-${i}`}
					word={word}
					progress={scrollYProgress}
					range={[i / words.length, (i + 1) / words.length]}
				/>
			))}
		</p>
	);
}

interface WordProps {
	word: string;
	range: [number, number];
	progress: MotionValue<number>;
}

const Word = ({ word, range, progress }: WordProps) => {
	const characters = word.split("");
	const amount = range[1] - range[0];
	const step = amount / characters.length;

	return (
		<span className="relative mr-3 mt-1 inline-flex">
			{characters.map((char, i) => {
				const start = range[0] + i * step;
				const end = range[0] + (i + 1) * step;
				return (
					<Character
						key={`${char}-${i}`}
						range={[start, end]}
						progress={progress}
					>
						{char}
					</Character>
				);
			})}
		</span>
	);
};

interface CharacterProps {
	children: string;
	range: [number, number];
	progress: MotionValue<number>;
}

const Character = ({ children, range, progress }: CharacterProps) => {
	const opacity = useTransform(progress, range, [0.2, 1]);

	return (
		<span className="relative">
			<span className="absolute opacity-20">{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
};
