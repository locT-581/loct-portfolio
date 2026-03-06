"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { useLocale } from "next-intl";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const locale = useLocale();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative cursor-pointer"
    >
      <Link href={`/${locale}/projects/${project.id}`} className="block relative w-full aspect-4/3 rounded-4xl overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw" 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <span className="text-white font-medium text-lg border border-white/30 rounded-full px-6 py-3 backdrop-blur-sm">View Project</span>
        </div>
      </Link>
      <div className="mt-6 flex flex-col gap-2">
         <h3 className="text-2xl font-bold tracking-tight group-hover:opacity-70 transition-opacity">
            <Link href={`/${locale}/projects/${project.id}`}>{project.title}</Link>
         </h3>
         <p className="text-sm font-medium opacity-60 uppercase tracking-widest">{project.category}</p>
      </div>
    </motion.div>
  );
}
