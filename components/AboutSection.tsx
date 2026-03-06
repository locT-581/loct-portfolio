"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
	const t = useTranslations("Index");

	return (
		<section
			id="about"
			className="container mx-auto px-6 py-24 border-t border-gray-200 dark:border-gray-800"
		>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
				<div className="col-span-1">
					<h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
					<p className="text-lg opacity-80 leading-relaxed mb-8">
						{t("about.desc")}
					</p>
				</div>
				<div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-2xl">
						<h3 className="text-xl font-bold mb-4">
							{t("services.uiux.title")}
						</h3>
						<p className="opacity-70">{t("services.uiux.desc")}</p>
					</motion.div>
					<motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-2xl">
						<h3 className="text-xl font-bold mb-4">
							{t("services.web.title")}
						</h3>
						<p className="opacity-70">{t("services.web.desc")}</p>
					</motion.div>
					<motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-2xl">
						<h3 className="text-xl font-bold mb-4">
							{t("services.brand.title")}
						</h3>
						<p className="opacity-70">{t("services.brand.desc")}</p>
					</motion.div>
					<motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-2xl">
						<h3 className="text-xl font-bold mb-4">
							{t("services.art.title")}
						</h3>
						<p className="opacity-70">{t("services.art.desc")}</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
