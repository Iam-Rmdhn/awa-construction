"use client";

import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 bg-(--color-background-secondary) overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6 md:px-[61px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-8 bg-(--color-secondary)"></span>
              <span className="font-nunito font-bold text-lg text-(--color-secondary) uppercase tracking-wider">
                {t.about.subtitle}
              </span>
            </div>

            <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-(--color-primary) leading-tight">
              {t.about.title}
            </h2>

            <div className="bg-slate-200 border-l-4 border-(--color-primary) py-3 px-5 rounded-2xl w-fit">
              <span className="font-nunito font-bold text-gray-700 text-lg">
                {t.about.badge}
              </span>
            </div>

            <h3 className="font-unbounded text-lg sm:text-xl lg:text-2xl font-bold text-(--color-secondary) leading-snug">
              {t.about.headline}
            </h3>

            <div className="font-nunito text-gray-600 text-base md:text-lg space-y-4 md:space-y-6">
              <p>{t.about.intro}</p>
              
              <ul className="space-y-3 md:space-y-4 ml-0 sm:ml-4 md:ml-8">
                {t.about.list.map((item, index) => (
                  <li key={index} className="flex items-start sm:items-center gap-3 md:gap-4">
                    <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-(--color-secondary) flex items-center justify-center text-white">
                      <Check size={14} className="sm:hidden" strokeWidth={3} />
                      <Check size={18} className="hidden sm:block" strokeWidth={3} />
                    </div>
                    <span className="font-medium text-gray-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="leading-relaxed">
                {t.about.closing}
              </p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full">
              <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] rounded-2xl md:rounded-4xl overflow-hidden shadow-[6px_6px_0px_var(--color-primary)]">
                <Image 
                    src={IMAGES.ABOUT_IMAGE1} 
                    alt="About Main"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 h-full">
                  <div className="relative w-full flex-1 rounded-2xl md:rounded-4xl overflow-hidden shadow-[6px_6px_0px_var(--color-primary)]">
                      <Image 
                          src={IMAGES.ABOUT_IMAGE2} 
                          alt="About Secondary Top"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"                      />
                  </div>
                  <div className="relative w-full flex-1 rounded-2xl md:rounded-4xl overflow-hidden shadow-[6px_6px_0px_var(--color-primary)]">
                      <Image 
                          src={IMAGES.ABOUT_IMAGE3} 
                          alt="About Secondary Bottom"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}