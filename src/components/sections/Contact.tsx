"use client";

import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#061B35] overflow-hidden py-16 md:py-24" id="contact">
      {/* Background Image Decoration - Right Bottom */}
      <div className="absolute top-1/4 left-1/2 w-1/2 h-full pointer-events-none opacity-30 md:opacity-50">
        <Image
          src={IMAGES.CONTACT_IMAGE1}
          alt="Blueprint Decoration"
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-[61px] relative z-10">
        <div className="max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="h-[2px] w-8 bg-(--color-secondary)"></span>
              <span className="font-nunito font-bold text-sm md:text-lg text-(--color-secondary) uppercase tracking-wider">
                {t.contact?.subtitle || "Hubungi Kami"}
              </span>
            </div>

            <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
              {t.contact?.title || "Bermitra Dengan Kami untuk Kebutuhan Konstruksi Anda"}
            </h2>

            <p className="font-nunito text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
              {t.contact?.description || "Tim kami siap memberikan solusi konstruksi yang efisien, berkualitas tinggi, dan terintegrasi yang disesuaikan dengan kebutuhan bisnis Anda"}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-(--color-secondary) text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base transition-all hover:shadow-[4px_4px_0px_0px_var(--color-tertiary)] group"
            >
              <span>{t.contact?.cta || "Konsultasi Sekarang"}</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
