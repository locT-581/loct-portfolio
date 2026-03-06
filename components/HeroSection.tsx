import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

function ArrowIcon() {
	return (
		<svg
			aria-label="Arrow icon"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.97271 15.32L15.5457 8.749C15.6896 8.60671 15.8039 8.43728 15.8819 8.25052C15.9598 8.06376 16 7.86339 16 7.661C16 7.45862 15.9598 7.25824 15.8819 7.07148C15.8039 6.88472 15.6896 6.71529 15.5457 6.573L8.97271 0"
				stroke="#222222"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 7.66H0"
				stroke="#222222"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export default function HeroSection() {
	const locale = useLocale();
	return (
		<section className="hero-section">
			<div className="hero-content">
				{/* Top row: Subheading + Featured Project */}
				<div className="hero-top-row">
					<p className="hero-subheading">
						From me to fellow creatives, makers, and dreamers — Velisse is built
						to help you showcase your best work with clarity and confidence.
					</p>

					<div className="featured-project-block">
						<Image
							src="https://i.pinimg.com/736x/59/f9/5a/59f95aa8b46e479e4d0f84878acb34a8.jpg"
							alt="Featured Project preview"
							width={247}
							height={139}
							className="featured-project-thumb"
						/>
						<Link
							href={`/${locale}/projects`}
							className="featured-project-link"
						>
							<span className="featured-project-label">Featured Project</span>
							<ArrowIcon />
						</Link>
					</div>
				</div>

				{/* Heading row: Large title + Location */}
				<div className="hero-heading-row">
					<h1 className="hero-heading">
						<span className="heading-dark">Show Your Work, </span>
						<span className="heading-grey">Your Way</span>
					</h1>
				</div>
			</div>

			{/* Full-width hero image */}
			{!!0 && (
				<div className="hero-image-wrapper">
					<Image
						src="https://api.builder.io/api/v1/image/assets/TEMP/4e614238f189078d25d6c5b3b3deec7bc018a56a?width=2882"
						alt="Portfolio showcase"
						fill
						className="hero-image"
						priority
					/>
				</div>
			)}
		</section>
	);
}
