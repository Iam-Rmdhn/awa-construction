"use client";

import { ICONS } from "@/constants/icons";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.items.design.title,
      description: t.services.items.design.desc,
      icon: ICONS.DESAIN_PLANING,
    },
    {
      title: t.services.items.construction.title,
      description: t.services.items.construction.desc,
      icon: ICONS.CONSTRUCTION,
    },
    {
      title: t.services.items.maintenance.title,
      description: t.services.items.maintenance.desc,
      icon: ICONS.MAINT,
    },
  ];

  return (
    <section className="py-24 bg-[#F2F2F2]" id="services">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            {t.services.title}
          </h2>
          <p className="text-gray-600">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 relative w-16 h-16">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 bg-[#0055FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t.services.cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}