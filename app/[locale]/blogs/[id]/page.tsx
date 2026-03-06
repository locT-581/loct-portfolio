import { ArrowLeft, ArrowUpRight, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function BlogDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const t = await getTranslations("BlogsPage");
	const locale = await getLocale();

	// Mocking blog detail data based on index data
	const blog = {
		id,
		title: t(`items.${id}.title`),
		date: t(`items.${id}.date`),
		category: t(`items.${id}.category`),
		image: t(`items.${id}.image`),
		excerpt: t(`items.${id}.excerpt`),
	};

	return (
		<main className="w-full bg-[#f2f2f2] dark:bg-[#111111] pt-32 lg:pt-48 pb-20 min-h-screen">
			{/* Breadcrumb & Navigation */}
			<section className="px-6 md:px-[8%] mb-12">
				<Link
					href={`/${locale}/blogs`}
					className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors group mb-10"
				>
					<ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
					<span className="font-switzer font-medium uppercase tracking-wider text-sm">
						Back to Insights
					</span>
				</Link>

				<div className="flex flex-col gap-6 md:gap-10">
					<div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-satoshi text-gray-500">
						<span className="bg-black/5 dark:bg-white/5 px-4 py-1.5 rounded-full text-black dark:text-white font-bold uppercase tracking-widest text-xs">
							{blog.category}
						</span>
						<span>•</span>
						<span>{blog.date}</span>
						<span>•</span>
						<span>5 MIN READ</span>
					</div>

					<h1 className="text-5xl md:text-7xl lg:text-[100px] font-switzer font-medium tracking-tight leading-[1.1] max-w-5xl text-balance">
						{blog.title}
					</h1>

					<p className="text-gray-500 font-satoshi text-xl md:text-2xl max-w-4xl leading-relaxed italic border-l-4 border-black/20 dark:border-white/20 pl-8 py-2">
						&quot;{blog.excerpt}&quot;
					</p>
				</div>
			</section>

			{/* Main Banner Image */}
			<section className="w-full aspect-21/9 md:aspect-3/1 relative mb-24 lg:mb-32">
				<Image
					src={blog.image}
					alt={blog.title}
					fill
					className="object-cover"
				/>
			</section>

			{/* Article Content Layout */}
			<section className="px-6 md:px-[8%] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
				{/* Sidebar (Left) */}
				<aside className="lg:col-span-3 flex flex-col gap-12">
					<div className="flex flex-col gap-4 sticky top-32">
						<h4 className="font-switzer font-bold text-lg uppercase tracking-wider">
							Share This
						</h4>
						<div className="flex gap-4">
							<button
								type="button"
								className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-opacity"
							>
								<Share2 className="w-5 h-5" />
							</button>
							<div className="flex flex-col gap-1 text-sm font-satoshi text-gray-500">
								<span>Spread the</span>
								<span>knowledge</span>
							</div>
						</div>
					</div>
				</aside>

				{/* Main Content (Right) */}
				<article className="lg:col-span-9 max-w-4xl flex flex-col gap-12 text-[#111111] dark:text-[#f2f2f2]">
					<div className="flex flex-col gap-8">
						<h2 className="text-3xl md:text-4xl font-switzer font-medium tracking-tight">
							Introduction: Why It Matters
						</h2>
						<p className="font-satoshi text-lg md:text-xl leading-relaxed opacity-80">
							In the rapidly evolving landscape of digital experiences, the
							fundamental principles of design often get lost in the noise of
							complexity. Whether you&apos;re building a simple app or a massive
							platform, how we approach visual communication dictates the
							entirety of the user journey.
						</p>
						<p className="font-satoshi text-lg md:text-xl leading-relaxed opacity-80">
							Good design is not just what it looks like and feels like. Design
							is how it works. When we strip away the non-essential, we allow
							the core function to shine through, providing a seamless bridge
							between the user&apos;s intent and the product&apos;s value
							proposition.
						</p>
					</div>

					<div className="relative w-full aspect-video bg-gray-200">
						<Image
							src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000"
							alt="Context"
							fill
							className="object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8">
						<h2 className="text-3xl md:text-4xl font-switzer font-medium tracking-tight">
							Breaking Down the Strategy
						</h2>
						<p className="font-satoshi text-lg md:text-xl leading-relaxed opacity-80">
							To truly master this approach, one must first understand that
							every element on a screen is a request for user attention. By
							judiciously managing these requests, we respect the user&apos;s
							cognitive load and guide them intuitively toward their goals.
						</p>
						<ul className="flex flex-col gap-4 pl-6 md:pl-10 font-satoshi text-lg md:text-xl opacity-80 list-disc decoration-black/20">
							<li>Prioritization of core features over secondary ones</li>
							<li>Consistency in visual language and interaction patterns</li>
							<li>Intentional use of whitespace to create visual hierarchy</li>
							<li>
								Data-driven improvements based on real user feedback cycles
							</li>
						</ul>
					</div>

					<div className="bg-black/5 dark:bg-white/5 p-10 md:p-16 border-l-8 border-black dark:border-white">
						<blockquote className="text-2xl md:text-4xl font-switzer font-medium italic leading-snug">
							&quot;Simplicity is not the absence of clutter, that&apos;s a
							consequence of simplicity. Simplicity is somehow essentially
							describing the purpose and place of an object and product.&quot;
						</blockquote>
						<p className="mt-8 font-satoshi font-bold text-gray-500 uppercase tracking-widest text-sm">
							— Jonathan Ive
						</p>
					</div>
				</article>
			</section>

			{/* Explore More - Quick Links */}
			<section className="px-6 md:px-[8%] mt-32 md:mt-48 pt-24 border-t border-black/10 dark:border-white/10 text-center">
				<h3 className="text-4xl md:text-6xl font-switzer font-medium mb-16">
					Keep the Inspiration Flowing
				</h3>
				<Link
					href={`/${locale}/projects`}
					className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-full font-switzer font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
				>
					View All Projects <ArrowUpRight className="w-6 h-6" />
				</Link>
			</section>
		</main>
	);
}
