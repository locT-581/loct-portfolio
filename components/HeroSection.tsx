"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Index");

  return (
    <section className="container mx-auto px-6 pt-32 pb-12 overflow-hidden flex flex-col md:flex-row gap-12 items-center">
       <div className="flex-1 pr-0 md:pr-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8"
          >
            {t("title")}
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl md:text-2xl opacity-80 leading-relaxed mb-12 max-w-2xl"
          >
            {t("heroDesc")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <div>
               <div className="text-4xl font-bold mb-2">50+</div>
               <div className="text-xs opacity-60 uppercase tracking-wider font-semibold">{t("stats.clients")}</div>
            </div>
            <div>
               <div className="text-4xl font-bold mb-2">8+</div>
               <div className="text-xs opacity-60 uppercase tracking-wider font-semibold">{t("stats.experience")}</div>
            </div>
            <div>
               <div className="text-4xl font-bold mb-2">120+</div>
               <div className="text-xs opacity-60 uppercase tracking-wider font-semibold">{t("stats.projects")}</div>
            </div>
            <div>
               <div className="text-4xl font-bold mb-2">98%</div>
               <div className="text-xs opacity-60 uppercase tracking-wider font-semibold">{t("stats.satisfaction")}</div>
            </div>
          </motion.div>
       </div>
       
       <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         className="flex-1 w-full max-w-md relative aspect-4/5 overflow-hidden rounded-[40px] hidden md:block"
       >
          <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Hero Portrait" fill sizes="(max-width: 768px) 100vw, 33vw" priority className="object-cover" />
       </motion.div>
    </section>
  );
}
