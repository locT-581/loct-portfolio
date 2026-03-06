"use client";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const t = useTranslations("Index");
  const projects = t.raw("projectsList");

  return (
    <section id="projects" className="container mx-auto px-6 py-24 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t("projectsTitle")}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {projects.map((project: { id: number; title: string; category: string; image: string; }, index: number) => (
           <ProjectCard key={project.id} project={project} index={index} />
         ))}
      </div>
    </section>
  );
}
