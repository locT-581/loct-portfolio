import Image from "next/image";
import type { ProjectMedia } from "@/lib/data/projects";

type Props = {
	media: ProjectMedia;
	alt: string;
	className?: string; // Optional custom classes, e.g. padding or specific rounded corners
	objectFit?: "cover" | "contain";
};

export default function MediaRenderer({
	media,
	alt,
	className = "",
	objectFit = "cover",
}: Props) {
	if (media.type === "video") {
		return (
			<div
				className={`relative w-full h-full overflow-hidden bg-gray-200 dark:bg-gray-800 ${className}`}
			>
				<video
					src={media.src}
					poster={media.poster}
					autoPlay
					loop
					muted
					playsInline
					className={`w-full h-full object-${objectFit}`}
				/>
			</div>
		);
	}

	return (
		<div className={`relative w-full h-full ${className}`}>
			<Image
				src={media.src}
				alt={media.alt || alt}
				fill
				sizes="(max-width: 768px) 100vw, 50vw"
				className={`object-${objectFit}`}
			/>
		</div>
	);
}
