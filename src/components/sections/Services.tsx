"use client";

import { ICONS } from "@/constants/icons";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.items.design.title,
      description: t.services.items.design.desc,
      icon: ICONS.DESAIN_PLANING,
      image: IMAGES.SERVICES_IMAGE1,
    },
    {
      title: t.services.items.construction.title,
      description: t.services.items.construction.desc,
      icon: ICONS.CONSTRUCTION,
      image: IMAGES.SERVICES_IMAGE2,
    },
    {
      title: t.services.items.maintenance.title,
      description: t.services.items.maintenance.desc,
      icon: ICONS.MAINT,
      image: IMAGES.SERVICES_IMAGE3,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 md:px-[61px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 w-full"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-unbounded h-[2px] w-8 bg-(--color-secondary)"></span>
            <span className="font-unbounded font-bold text-xl sm:text-2xl md:text-[32px] text-(--color-secondary) uppercase tracking-wider">
              {t.services.title}
            </span>
          </div>
          <p className="font-nunito text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed text-center mx-auto max-w-3xl">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-8 md:gap-12 md:flex-row md:flex-wrap md:justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative flex flex-col w-[330px] h-[430px] mx-auto rounded-4xl overflow-hidden border-5 border-(--color-secondary) shadow-[8px_8px_0px_0px_var(--color-primary)] bg-white group transition-transform duration-300 md:hover:-translate-y-3!"
            >
              {/* Image & Icon */}
              <div className="relative h-[65%] w-full bg-white p-6 flex items-center justify-center z-10">
                {/* Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 z-10">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                {/* Illustration */}
                <div className="relative w-full h-[90%]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Title Tab */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-b-2xl py-4 flex items-center justify-center shadow-none z-20">
                    <h3 className="font-unbounded font-bold text-(--color-foreground) text-center text-lg leading-tight">
                    {service.title.split('&').map((part, i, arr) => (
                        <span key={i}>
                            {part}
                            {i < arr.length - 1 && <span> & </span>}
                            {i < arr.length - 1 && <br className="hidden" />}
                        </span>
                        ))}
                    </h3>
                </div>
              </div>

              {/* Description */}
              <div className="h-[35%] bg-(--color-secondary) px-6 pb-6 pt-12 flex items-center justify-center relative z-0">
                 <p className="font-nunito text-white text-center text-sm md:text-base leading-relaxed">
                  {service.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}