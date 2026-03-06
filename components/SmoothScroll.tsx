"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

interface SmoothScrollProps {
	children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
	return (
		<ReactLenis
			root
			options={{
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				orientation: "vertical",
				gestureOrientation: "vertical",
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
				infinite: false,
			}}
		>
			{children}
		</ReactLenis>
	);
}
