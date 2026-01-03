"use client";

import { use } from "react";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPinned, LandPlot, AlarmClock, ArrowLeft, Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-(--color-primary) text-white pt-24 md:pt-32 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 md:px-[61px] mb-8">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-white/80 hover:text-(--color-secondary) transition-colors font-nunito"
        >
          <ArrowLeft size={20} />
          <span>Kembali ke Projek</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-[61px]">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:mb-24 items-start">
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-4/3 rounded-2xl md:rounded-[32px] overflow-hidden border-4 border-[#2E5F9E]/30"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-4 left-4 flex gap-3">
               <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold text-sm">
                {project.year}
              </div>
              <div className="px-4 py-2 rounded-full bg-(--color-secondary) text-white font-bold text-sm">
                {project.type}
              </div>
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full justify-center"
          >
            <h1 className="font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase leading-tight text-white">
              {project.title}
            </h1>
            
            <p className="font-nunito text-white/80 text-base md:text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-[#2E5F9E]/20 rounded-2xl border border-[#2E5F9E]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2E5F9E] flex items-center justify-center shrink-0">
                  <MapPinned size={20} className="text-(--color-secondary)" />
                </div>
                <div>
                  <h3 className="font-unbounded text-sm text-(--color-secondary) mb-1">Lokasi</h3>
                  <p className="font-nunito text-sm md:text-base">{project.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2E5F9E] flex items-center justify-center shrink-0">
                  <LandPlot size={20} className="text-(--color-secondary)" />
                </div>
                <div>
                  <h3 className="font-unbounded text-sm text-(--color-secondary) mb-1">Luas Area</h3>
                  <p className="font-nunito text-sm md:text-base">{project.area}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2E5F9E] flex items-center justify-center shrink-0">
                  <AlarmClock size={20} className="text-(--color-secondary)" />
                </div>
                <div>
                  <h3 className="font-unbounded text-sm text-(--color-secondary) mb-1">Waktu Pengerjaan</h3>
                  <p className="font-nunito text-sm md:text-base">{project.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2E5F9E] flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-(--color-secondary)" />
                </div>
                <div>
                  <h3 className="font-unbounded text-sm text-(--color-secondary) mb-1">Tahun</h3>
                  <p className="font-nunito text-sm md:text-base">{project.year}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-8 bg-(--color-secondary)"></span>
              <h2 className="font-unbounded text-2xl md:text-3xl font-bold uppercase tracking-wide">
                Galeri Projek
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-4/3 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
