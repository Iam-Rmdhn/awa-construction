'use client';

import { PROJECTS } from '@/constants/projects';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPinned, LandPlot, AlarmClock, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const projects = PROJECTS;

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof projects)[number];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-8 bg-[#2E5F9E] p-4 md:p-6 overflow-hidden rounded-2xl md:rounded-[24px]`}
      style={{
        clipPath:
          index % 2 === 0
            ? 'polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)'
            : 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)',
      }}
    >
      <div
        className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-80 rounded-xl md:rounded-[22px] overflow-hidden shrink-0"
        style={{
          clipPath:
            index % 2 === 0
              ? 'polygon(50px 0, 100% 0, 100% 100%, 0 100%, 0 50px)'
              : 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 flex gap-2 sm:gap-3">
          <div className="px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 font-bold text-xs sm:text-sm">
            {project.year}
          </div>
          <div className="px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 font-bold text-xs sm:text-sm">
            {project.type}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-white">
        <h3 className="font-unbounded letter-spacing-[8%] text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 uppercase">
          {project.title}
        </h3>
        <p className="font-nunito text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
          {project.description}
        </p>
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-(--color-secondary) flex items-center justify-center">
              <MapPinned size={12} className="text-white md:hidden" />
              <MapPinned size={16} className="text-white hidden md:block" />
            </div>
            <span className="font-nunito text-xs md:text-sm">Lokasi: {project.location}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-(--color-secondary) flex items-center justify-center">
              <LandPlot size={12} className="text-white md:hidden" />
              <LandPlot size={16} className="text-white hidden md:block" />
            </div>
            <span className="font-nunito text-xs md:text-sm">Luas Area: {project.area}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-(--color-secondary) flex items-center justify-center">
              <AlarmClock size={12} className="text-white md:hidden" />
              <AlarmClock size={16} className="text-white hidden md:block" />
            </div>
            <span className="font-nunito text-xs md:text-sm">Waktu Pengerjaan: {project.time}</span>
          </div>
        </div>
        {/* Link */}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-(--color-secondary) font-bold text-sm hover:gap-3 transition-all group"
        >
          <span className="underline underline-offset-4">Lihat detail</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section className="relative bg-(--color-primary) overflow-hidden" id="projects">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-16 overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="w-8 h-full bg-white/10 -skew-x-12 mx-2 shrink-0" />
          ))}
        </div>
      </div>
      <div className="py-12 md:py-24 pt-20 md:pt-32 container mx-auto px-4 sm:px-6 md:px-[61px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-8 bg-(--color-secondary)"></span>
            <span className="font-nunito font-bold text-lg text-(--color-secondary) uppercase tracking-wider">
              {t.projects.subtitle}
            </span>
          </div>
          <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center uppercase tracking-wide">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="mb-8 md:mb-16">
          <div className="flex flex-col gap-8 md:gap-12">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-8 md:gap-12 pt-8 md:pt-12">
                  {projects.slice(2).map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index + 2} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {projects.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-(--color-secondary) text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all cursor-pointer hover:shadow-[4px_4px_0px_0px_var(--color-tertiary)]"
            >
              <span>{showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua'}</span>
              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </motion.div>
        )}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-16 overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="w-8 h-full bg-white/10 -skew-x-12 mx-2 shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
