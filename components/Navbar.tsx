"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const locale = useLocale();
	const t = useTranslations("Navbar");
	const router = useRouter();
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleLanguage = () => {
		const nextLocale = locale === "vi" ? "en" : "vi";
		let newPath = pathname;
		if (pathname.startsWith(`/${locale}`)) {
			newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
		} else {
			newPath = `/${nextLocale}${pathname}`;
		}
		const searchParams =
			typeof window !== "undefined" ? window.location.search : "";
		router.replace(`${newPath}${searchParams}`);
	};

	const navLinks = [
		{ href: `/${locale}`, label: t("home"), active: pathname === `/${locale}` },
		{
			href: `/${locale}/projects`,
			label: t("project"),
			active: pathname.startsWith(`/${locale}/projects`),
		},
		{
			href: `/${locale}/about`,
			label: t("about"),
			active: pathname === `/${locale}/about`,
		},
	];

	return (
		<header className="navbar-wrapper">
			<div className="navbar-inner">
				<Link href={`/${locale}`} className="navbar-logo">
					LocT®
				</Link>

				<div className="flex items-center gap-3 md:gap-6">
					{/* Desktop Menu */}
					<nav className="navbar-menu hidden md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`navbar-link ${link.active ? "active" : ""}`}
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="hidden md:block w-px h-6 bg-black dark:bg-white/20" />

					<div className="navbar-actions">
						<button
							type="button"
							onClick={toggleLanguage}
							className="navbar-lang-btn"
						>
							{locale === "vi" ? "EN" : "VI"}
						</button>
						<button
							type="button"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="navbar-theme-btn"
							aria-label="Toggle theme"
						>
							<Sun className="h-5 w-5 dark:hidden" />
							<Moon className="h-5 w-5 hidden dark:block" />
						</button>

						{/* Mobile Menu Toggle */}
						<button
							type="button"
							className="md:hidden navbar-mobile-toggle"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{isMenuOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/20 backdrop-blur-sm z-90 md:hidden"
							onClick={() => setIsMenuOpen(false)}
						/>
						<motion.div
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							className="fixed top-17.5 left-0 right-0 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 p-6 z-100 md:hidden"
						>
							<nav className="flex flex-col gap-6">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => setIsMenuOpen(false)}
										className={`text-2xl font-work-sans ${
											link.active ? "font-bold underline" : ""
										}`}
									>
										{link.label}
									</Link>
								))}
							</nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>
	);
}
