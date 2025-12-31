"use client";

import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-(--color-background-secondary) overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-[61px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-8 bg-(--color-secondary)"></span>
              <span className="font-nunito font-bold text-lg text-(--color-secondary) uppercase tracking-wider">
                {t.about.subtitle}
              </span>
            </div>

            <h2 className="font-unbounded text-4xl lg:text-5xl font-bold text-(--color-primary) leading-tight">
              {t.about.title}
            </h2>

            <div className="bg-slate-100 border-l-4 border-[--color-primary] py-3 px-5 rounded-r-lg w-fit">
              <span className="font-nunito font-bold text-slate-700 text-lg">
                {t.about.badge}
              </span>
            </div>

            <h3 className="font-unbounded text-xl lg:text-2xl font-bold text-(--color-secondary) leading-snug">
              {t.about.headline}
            </h3>

            <div className="font-nunito text-gray-600 text-lg space-y-6">
              <p>{t.about.intro}</p>
              
              <ul className="space-y-4">
                {t.about.list.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[--color-secondary]/20 flex items-center justify-center text-[--color-secondary]">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="leading-relaxed">
                {t.about.closing}
              </p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={IMAGES.ABOUT_IMAGE1}
                    alt="Construction Site 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={IMAGES.ABOUT_IMAGE3}
                    alt="Construction Worker"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={IMAGES.ABOUT_IMAGE2}
                    alt="Framework Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={IMAGES.ABOUT_IMAGE4}
                    alt="House Building"
                    fill
                    className="object-cover"
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