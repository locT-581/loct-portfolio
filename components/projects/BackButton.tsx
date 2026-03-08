"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
	label: string;
}

export default function BackButton({ label }: BackButtonProps) {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.back()}
			className="group inline-flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-8 font-work-sans text-sm md:text-base cursor-pointer"
		>
			<ArrowLeft
				size={20}
				className="transition-transform group-hover:-translate-x-1"
			/>
			<span>{label}</span>
		</button>
	);
}
