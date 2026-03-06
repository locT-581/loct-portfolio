import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
			title: "Velissa - Multidisciplinary Designer",
			description:
				"Multidisciplinary designer with a passion for turning ideas into visually impactful experiences.",
		};
	}
	return {
		title: "Velissa - Portfolio cá nhân",
		description:
			"Nhà thiết kế đa ngành với niềm đam mê biến những ý tưởng thành trải nghiệm có tác động mạnh mẽ về mặt thị giác.",
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
						<Navbar />
						<main className="grow pt-20">{children}</main>
						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
