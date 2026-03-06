"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function CTASection() {
	const t = useTranslations("Index");
	const locale = useLocale();

	return (
		<section
			id="contact"
			className="w-full bg-[#1c1c1c] text-[#F2F2F2] px-6 md:px-[10%] py-16 md:py-24"
		>
			<div className="flex flex-col gap-10 md:gap-14 w-full mx-auto">
				<h2 className="text-5xl md:text-7xl lg:text-[86px] font-switzer font-medium leading-[1.1] tracking-tight whitespace-pre-line">
					{t("cta.heading")}
				</h2>

				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 w-full mt-4">
					<div className="flex flex-col sm:flex-row gap-12 md:gap-24">
						<div className="flex flex-col gap-3">
							<span className="text-gray-400 text-lg md:text-xl font-satoshi">
								{t("cta.phoneLabel")}
							</span>
							<a
								href="tel:+15551234567"
								className="text-xl md:text-2xl font-satoshi pb-1 border-b border-[#F2F2F2] hover:text-gray-300 hover:border-gray-300 transition-colors w-fit"
							>
								{t("cta.phoneValue")}
							</a>
						</div>
						<div className="flex flex-col gap-3">
							<span className="text-gray-400 text-lg md:text-xl font-satoshi">
								{t("cta.mailLabel")}
							</span>
							<a
								href="mailto:loct.se581@gmail.com"
								className="text-xl md:text-2xl font-satoshi pb-1 border-b border-[#F2F2F2] hover:text-gray-300 hover:border-gray-300 transition-colors w-fit"
							>
								{t("cta.mailValue")}
							</a>
						</div>
					</div>

					<Link
						href={`/${locale}#contact`}
						className="flex items-center justify-center gap-3 bg-[#F2F2F2] text-[#1c1c1c] px-8 py-4 md:px-10 md:py-5 font-satoshi font-medium text-base hover:bg-gray-300 transition-colors shrink-0"
					>
						{t("cta.btn")}
						<ArrowRight className="w-5 h-5 mb-px" strokeWidth={1.5} />
					</Link>
				</div>
			</div>
		</section>
	);
}
