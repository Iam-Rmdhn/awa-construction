"use client";

import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return (
    <span ref={ref} className="text-4xl font-bold text-[#00CBF1] mb-2">
      0{suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <h2
              className="text-4xl font-bold mb-6 text-black tracking-tight"
              style={{ color: "#000" }}
            >
              {t.about.title}
            </h2>

            <p className="text-lg mb-10 text-gray-600 leading-relaxed font-nunito">
              {t.about.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white rounded-4xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center justify-center">
                <Counter value={200} />
                <span className="text-sm font-medium text-gray-600">
                  {t.about.stats.legacy}
                </span>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white rounded-4xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center justify-center">
                <Counter value={15} suffix="+" />
                <span className="text-sm font-medium text-gray-600">
                  {t.about.stats.experience}
                </span>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white rounded-4xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center justify-center">
                <Counter value={140} suffix="+" />
                <span className="text-sm font-medium text-gray-600">
                  {t.about.stats.project}
                </span>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white rounded-4xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center justify-center">
                <Counter value={100} suffix="%" />
                <span className="text-sm font-medium text-gray-600">
                  {t.about.stats.cost}
                </span>
              </div>
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
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg">
                  <Image
                    src={IMAGES.ABOUT_IMAGE1}
                    alt="Construction Site 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg">
                  <Image
                    src={IMAGES.ABOUT_IMAGE3}
                    alt="Construction Worker"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg">
                  <Image
                    src={IMAGES.ABOUT_IMAGE2}
                    alt="Framework Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 md:h-64 w-full rounded-4xl overflow-hidden shadow-lg">
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