'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Mouse, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const HERO_ASSETS = [
  {
    type: 'video',
    src: '/assets/vid/vid-masgaw.webm',
    alt: 'Project Video Masgaw',
  },
  {
    type: 'video',
    src: '/assets/vid/vid-warnas.webm',
    alt: 'Project Video Warnas',
  },
  {
    type: 'video',
    src: '/assets/vid/vid-dapur.webm',
    alt: 'Project Video Dapur',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_ASSETS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_ASSETS.length) % HERO_ASSETS.length);
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && HERO_ASSETS[currentIndex].type === 'video') {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    if (HERO_ASSETS[currentIndex].type === 'video' && videoRef.current) {
      setTimeout(() => {
          videoRef.current?.play().catch(() => {});
      }, 100);
    }
  }, [currentIndex]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      id="hero"
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
        >
          {HERO_ASSETS[currentIndex].type === 'video' ? (
            <video
              ref={videoRef}
              src={HERO_ASSETS[currentIndex].src}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              autoPlay
            />
          ) : (
            <Image
              src={HERO_ASSETS[currentIndex].src}
              alt={HERO_ASSETS[currentIndex].alt}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-28 lg:top-32 left-0 z-20 flex items-center">
          <div className="hidden lg:block w-[100px] h-px bg-white/50"></div>
          <div className="flex items-center gap-6 ml-4 md:ml-6">
            <button
              onClick={handlePrev}
              className="p-2 text-white hover:text-(--color-secondary) transition-colors focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="font-unbounded text-white text-sm tracking-widest">
              <span className="font-bold">{currentIndex + 1}</span>
              <span className="opacity-60 mx-1">/</span>
              <span className="opacity-60">{HERO_ASSETS.length}</span>
            </div>
            <button
              onClick={handleNext}
              className="p-2 text-white hover:text-(--color-secondary) transition-colors focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
      </div>
      <div className="absolute bottom-12 left-6 md:left-[61px] z-20">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 text-white hover:text-(--color-secondary) transition-colors focus:outline-none bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      <div className="absolute bottom-0 right-0 z-20 hidden lg:flex flex-col items-center mr-[61px]">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-6 group cursor-pointer mb-4"
        >
          <div className="[writing-mode:vertical-lr] whitespace-nowrap text-white font-unbounded text-sm tracking-widest group-hover:text-(--color-secondary) transition-colors transform hover:translate-y-1">
            Explore More
          </div>
          <Mouse
            className="text-white group-hover:text-(--color-secondary) transition-colors"
            size={24}
          />
        </button>
        <div className="h-8 w-px bg-white/50"></div>
      </div>
    </section>
  );
}
