"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const locale = useLocale();
	const t = useTranslations("Navbar");
	const router = useRouter();
	const pathname = usePathname();

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

	return (
		<header className="navbar-wrapper">
			<div className="navbar-inner">
				<Link href={`/${locale}`} className="navbar-logo">
					LocT®
				</Link>

				<div className="flex items-center gap-6">
					<nav className="navbar-menu">
						<Link
							href={`/${locale}`}
							className={`navbar-link ${
								pathname === `/${locale}` ? "active" : ""
							}`}
						>
							{t("home")}
						</Link>
						<Link
							href={`/${locale}/about`}
							className={`navbar-link ${
								pathname === `/${locale}/about` ? "active" : ""
							}`}
						>
							{t("about")}
						</Link>
						<Link
							href={`/${locale}/projects`}
							className={`navbar-link ${
								pathname.startsWith(`/${locale}/projects`) ? "active" : ""
							}`}
						>
							{t("project")}
						</Link>
						<Link
							href={`/${locale}/blogs`}
							className={`navbar-link ${
								pathname.startsWith(`/${locale}/blogs`) ? "active" : ""
							}`}
						>
							{t("blogs")}
						</Link>
					</nav>

					<div className="w-px h-6 bg-black dark:bg-white" />

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
					</div>
				</div>
			</div>
		</header>
	);
}
