"use client";

import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export default function Counter({ value }: { value: string }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	// Extract number and suffix (e.g., "50+" -> 50, "+")
	const numberMatch = value.match(/\d+/);
	const targetNumber = numberMatch ? Number.parseInt(numberMatch[0]) : 0;
	const suffix = value.replace(/\d+/, "");

	const spring = useSpring(0, {
		stiffness: 40,
		damping: 20,
		restDelta: 0.001,
	});

	const displayValue = useTransform(spring, (current) => Math.round(current));

	useEffect(() => {
		if (isInView) {
			spring.set(targetNumber);
		}
	}, [isInView, spring, targetNumber]);

	return (
		<span ref={ref}>
			<motion.span>{displayValue}</motion.span>
			{suffix}
		</span>
	);
}
