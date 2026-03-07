import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin", "vietnamese"],
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	if (locale === "en") {
		return {
			title: "LocT - Frontend Developer",
			description:
				"I build high-performance web applications and fluid user interfaces, blending technical architecture with smooth animations.",
		};
	}
	return {
		title: "Tran Nguyen Huu Loc - Lập trình viên Frontend",
		description:
			"Tôi xây dựng các ứng dụng web hiệu năng cao và giao diện mượt mà, kết hợp giữa kiến trúc kỹ thuật và hiệu ứng sống động.",
	};
}

const locales = ["en", "vi"];

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!locales.includes(locale)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${inter.variable} min-h-screen flex flex-col`}>
				<NextIntlClientProvider messages={messages} locale={locale}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<SmoothScroll>
							<Navbar />
							<main className="grow pt-20 max-w-360 mx-auto">{children}</main>
							<Footer />
							<ScrollToTop />
						</SmoothScroll>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
