"use client";

import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FeaturedProjects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Retail Outlet Renovation",
      floorArea: "250",
      image: IMAGES.PROJECT_IMAGE1,
    },
    {
      title: "Park Villa Remodel",
      floorArea: "320",
      image: IMAGES.PROJECT_IMAGE2,
    },
    {
      title: "Kitchen Restaurant Renovation",
      floorArea: "480",
      image: IMAGES.PROJECT_IMAGE3,
    },
  ];

  return (
    <section className="bg-white" id="projects">
      {/* Featured Projects Section */}
      <div className="py-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
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
              className="group bg-white rounded-3xl p-4 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-black mb-1">
                  {project.title}
                </h3>
                <p className="text-[#00CBF1] text-sm font-medium">
                  {t.projects.floorArea} {project.floorArea} m²
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group bg-[#0055FF] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
            {t.projects.viewAll}
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
          </button>
        </motion.div>
      </div>

      {/* Partner With Us Section */}
      <div className="bg-[#0055FF] py-24 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t.projects.partner.title}
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {t.projects.partner.desc}
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-[#0055FF] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            {t.projects.partner.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
