"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
	const locale = useLocale();
	const t = useTranslations("Footer");

	return (
		<footer className="bg-[#1a1a1a] text-[#a0a0a0] pt-24 pb-12 w-full font-sans">
			<div className="container mx-auto px-6 max-w-7xl">
				{/* Top Section: Brand & Description */}
				<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-24">
					<h1 className="text-white text-7xl md:text-8xl font-bold tracking-tighter leading-none">
						{t("brand")}
					</h1>
					<p className="max-w-md text-lg leading-relaxed pt-2">
						{t("description")}
					</p>
				</div>

				{/* Grid Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
					{/* Contact Column */}
					<div className="flex flex-col gap-6">
						<div>
							<p className="text-sm mb-2">{t("emailLabel")}</p>
							<a
								href="mailto:loct.se581@gmail.com"
								className="text-white text-xl md:text-2xl hover:opacity-70 transition-opacity"
							>
								loct.se581@gmail.com
							</a>
						</div>
						<div>
							<p className="text-sm mb-2">{t("phoneLabel")}</p>
							<a
								href="tel:+84927038604"
								className="text-white text-xl md:text-2xl hover:opacity-70 transition-opacity"
							>
								(+84)927 038 604
							</a>
						</div>
						<div>
							<p className="text-sm mb-2">{t("locationLabel")}</p>
							<p className="text-white text-xl md:text-2xl">
								{t("locationValue")}
							</p>
						</div>
					</div>

					{/* Quick Links Column */}
					<div className="flex flex-col gap-6 lg:pl-12">
						<h3 className="text-white text-lg font-bold">
							{t("quickLinks.title")}
						</h3>
						<div className="flex flex-col gap-3">
							<Link
								href={`/${locale}`}
								className="hover:text-white transition-colors"
							>
								{t("quickLinks.home")}
							</Link>
							<Link
								href={`/${locale}/about`}
								className="hover:text-white transition-colors"
							>
								{t("quickLinks.about")}
							</Link>
							<Link
								href={`/${locale}/projects`}
								className="hover:text-white transition-colors"
							>
								{t("quickLinks.project")}
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								{t("quickLinks.services")}
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								{t("quickLinks.blog")}
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								{t("quickLinks.contact")}
							</Link>
						</div>
					</div>

					{/* More Pages Column */}
					<div className="flex flex-col gap-6 lg:pl-8">
						<h3 className="text-white text-lg font-bold">
							{t("morePages.title")}
						</h3>
						<div className="flex flex-col gap-3">
							<Link href="#" className="hover:text-white transition-colors">
								{t("morePages.styleGuide")}
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								{t("morePages.licenses")}
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								{t("morePages.404Page")}
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								{t("morePages.privacy")}
							</Link>
						</div>
					</div>

					{/* Social Media Column */}
					<div className="flex flex-col gap-6 lg:pl-8">
						<h3 className="text-white text-lg font-bold">
							{t("socialMedia.title")}
						</h3>
						<div className="flex flex-col gap-3">
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors"
							>
								{t("socialMedia.instagram")}
							</a>
							<a
								href="https://dribbble.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors"
							>
								{t("socialMedia.dribbble")}
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors"
							>
								{t("socialMedia.linkedin")}
							</a>
							<a
								href="https://behance.net"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors"
							>
								{t("socialMedia.behance")}
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="pt-12 border-t border-white/10 flex justify-end">
					<p className="text-sm opacity-80">{t("copyright")}</p>
				</div>
			</div>
		</footer>
	);
}
