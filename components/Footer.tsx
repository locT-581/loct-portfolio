"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function GithubIcon() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-5 h-5"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" />
			<path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" />
		</svg>
	);
}

function LinkedinIcon() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 20 20"
			fill="currentColor"
			className="w-5 h-5"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
		</svg>
	);
}

function UpworkIcon() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 14 14"
			fill="currentColor"
			className="w-5 h-5"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m 10.2805,7.579 c -0.551,0 -1.0675,-0.2335 -1.537,-0.6135 l 0.114,-0.538 0.004,-0.021 c 0.1035,-0.5715 0.4245,-1.53 1.4195,-1.53 0.746,0 1.3515,0.606 1.3515,1.3515 -5e-4,0.7445 -0.606,1.351 -1.352,1.351 z m 0,-4.07 C 9.011,3.509 8.0255,4.3335 7.6255,5.692 7.0155,4.775 6.5515,3.674 6.282,2.746 l -1.368,0 0,3.556 C 4.913,7.005 4.3435,7.575 3.6405,7.576 2.938,7.575 2.369,7.0045 2.368,6.302 l 0,-3.556 -1.368,0 0,3.556 C 1,7.759 2.185,8.9535 3.6405,8.9535 5.097,8.9535 6.282,7.759 6.282,6.302 l 0,-0.595 c 0.2645,0.5535 0.591,1.1145 0.987,1.6105 l -0.8365,3.9365 1.3985,0 0.6065,-2.855 C 8.969,8.7385 9.58,8.9535 10.2805,8.9535 11.7805,8.9535 13,7.7275 13,6.2285 13,4.7285 11.7805,3.509 10.2805,3.509 Z" />
		</svg>
	);
}

function PinterestIcon() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 32 32"
			fill="currentColor"
			className="w-5 h-5"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M16.292 5C10.536 5 7.48 8.866 7.48 13.077c0 1.955 1.039 4.392 2.707 5.168.253.118.387.064.443-.18.047-.185.273-1.089.373-1.511a.402.402 0 0 0-.095-.386c-.55-.667-.988-1.896-.988-3.041 0-2.942 2.228-5.787 6.021-5.787 3.28 0 5.571 2.23 5.571 5.426 0 3.61-1.82 6.108-4.191 6.108-1.309 0-2.291-1.081-1.978-2.413.378-1.584 1.106-3.298 1.106-4.438 0-1.026-.552-1.883-1.685-1.883-1.341 0-2.415 1.385-2.415 3.241 0 1.182.4 1.978.4 1.978s-1.323 5.593-1.563 6.634c-.413 1.765.051 4.625.094 4.876.021.134.172.18.252.066.129-.175 1.725-2.565 2.174-4.292l.828-3.171c.439.829 1.707 1.531 3.061 1.531 4.021 0 6.923-3.703 6.923-8.299C24.52 8.301 20.92 5 16.292 5z" />
		</svg>
	);
}

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
							<motion.a
								whileHover={{ x: 5 }}
								href="mailto:loct.se581@gmail.com"
								className="text-white text-xl md:text-2xl inline-block hover:opacity-70 transition-opacity"
							>
								loct.se581@gmail.com
							</motion.a>
						</div>
						<div>
							<p className="text-sm mb-2">{t("phoneLabel")}</p>
							<motion.a
								whileHover={{ x: 5 }}
								href="tel:+84927038604"
								className="text-white text-xl md:text-2xl inline-block hover:opacity-70 transition-opacity"
							>
								(+84)927 038 604
							</motion.a>
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
							<Link
								href={`/${locale}/blogs`}
								className="hover:text-white transition-colors"
							>
								{t("quickLinks.blog")}
							</Link>
						</div>
					</div>

					{/* More Pages Column */}
					<div className="flex flex-col gap-6 lg:pl-8">
						<h3 className="text-white text-lg font-bold">
							{t("morePages.title")}
						</h3>
						<div className="flex flex-col gap-3">
							<a
								href="assets/pdfs/CV_TranNguyenHuuLoc_Frontend.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors flex items-center gap-2"
							>
								{t("morePages.resume")}
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>External link icon</title>
									<path
										d="M1 11L11 1M11 1H1M11 1V11"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>

							<a
								href="https://github.com/locT-581/loct-portfolio"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors flex items-center gap-2"
							>
								{t("morePages.sourceCode")}
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>External link icon</title>
									<path
										d="M1 11L11 1M11 1H1M11 1V11"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>

					{/* Social Media Column */}
					<div className="flex flex-col gap-6 lg:pl-8">
						<h3 className="text-white text-lg font-bold">
							{t("socialMedia.title")}
						</h3>
						<div className="flex flex-col gap-4">
							<motion.a
								whileHover={{ x: 10, color: "#ffffff" }}
								href="https://github.com/locT-581/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 transition-colors"
							>
								<motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
									<GithubIcon />
								</motion.div>
								{t("socialMedia.github")}
							</motion.a>
							<motion.a
								whileHover={{ x: 10, color: "#ffffff" }}
								href="https://www.linkedin.com/in/tr%E1%BA%A7n-nguy%E1%BB%85n-h%E1%BB%AFu-l%E1%BB%99c-b11a15274/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 transition-colors"
							>
								<motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
									<LinkedinIcon />
								</motion.div>
								{t("socialMedia.linkedin")}
							</motion.a>
							<motion.a
								whileHover={{ x: 10, color: "#ffffff" }}
								href="https://www.upwork.com/freelancers/~014f887f8f402e5149"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 transition-colors"
							>
								<motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
									<UpworkIcon />
								</motion.div>
								{t("socialMedia.upwork")}
							</motion.a>
							<motion.a
								whileHover={{ x: 10, color: "#ffffff" }}
								href="https://www.pinterest.com/rainydays581/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 transition-colors"
							>
								<motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
									<PinterestIcon />
								</motion.div>
								{t("socialMedia.pinterest")}
							</motion.a>
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
