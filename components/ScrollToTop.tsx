"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > window.innerHeight * 2.75) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.5, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.5, y: 20 }}
					whileHover={{ scale: 1.1, y: -6 }}
					whileTap={{ scale: 0.9 }}
					onClick={scrollToTop}
					className="fixed bottom-[10%] cursor-pointer right-8 z-50 p-4 rounded-full bg-black/80 dark:bg-white/80 text-white dark:text-black shadow-2xl backdrop-blur-md border border-white/10 dark:border-black/10 flex items-center justify-center group"
					aria-label="Scroll to top"
				>
					<ArrowUp size={24} className="transition-transform duration-300" />

					{/* Subtle ring effect */}
					<div className="absolute inset-0 rounded-full border-2 border-black/20 dark:border-white/20 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
