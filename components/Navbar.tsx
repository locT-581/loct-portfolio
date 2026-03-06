"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const locale = useLocale();
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
					Velisse®
				</Link>

				<nav className="navbar-menu">
					<Link
						href={`/${locale}`}
						className={`navbar-link ${
							pathname === `/${locale}` ? "active" : ""
						}`}
					>
						Home
					</Link>
					<Link
						href={`/${locale}/about`}
						className={`navbar-link ${
							pathname === `/${locale}/about` ? "active" : ""
						}`}
					>
						About
					</Link>
					<Link
						href={`/${locale}/projects`}
						className={`navbar-link ${
							pathname.startsWith(`/${locale}/projects`) ? "active" : ""
						}`}
					>
						Project
					</Link>
					<Link
						href={`/${locale}/blogs`}
						className={`navbar-link ${
							pathname.startsWith(`/${locale}/blogs`) ? "active" : ""
						}`}
					>
						Blogs
					</Link>
				</nav>

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
		</header>
	);
}
