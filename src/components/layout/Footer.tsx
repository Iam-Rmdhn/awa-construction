'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white text-gray-800 overflow-hidden font-nunito pt-16 pb-8 border-t">
      <div className="container mx-auto px-6 md:px-[61px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <h3 className="text-[#FEB05D] text-2xl font-bold mb-6 font-unbounded">
              {t.footer.location}
            </h3>
            <p className="text-gray-700 font-bold leading-relaxed text-lg">
              Jl. Sawo No. 156, RT: 04/01 Cipedak-Jagakarsa, Jakarta Selatan 12630
            </p>
          </div>

          <div>
            <h3 className="text-[#FEB05D] text-2xl font-bold mb-6 font-unbounded text-left md:text-right">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-4 justify-start md:justify-end">
              <Link
                href="#"
                className="bg-[#2E5F9E] p-3 rounded-full text-white hover:bg-[#1a3b66] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="bg-[#2E5F9E] p-3 rounded-full text-white hover:bg-[#1a3b66] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center mb-16 select-none"
        >
          <h1
            className="font-unbounded font-black text-[10vw] md:text-[8vw] lg:text-[7vw] leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-gray-200 to-gray-400"
            style={{
              filter: 'drop-shadow(4px 4px 6px rgba(0,0,0,0.2))',
            }}
          >
            AWA CONSTRUCTION
            <span
              className="absolute inset-0 text-transparent bg-clip-text bg-linear-to-b from-white/80 to-transparent pointer-events-none"
              aria-hidden="true"
            >
              AWA CONSTRUCTION
            </span>
          </h1>
          {/* 3D Effect Layer */}
          <h1
            className="absolute inset-0 font-unbounded font-black text-[10vw] md:text-[8vw] lg:text-[7vw] leading-none tracking-tighter text-gray-300 -z-10 transform translate-x-1 translate-y-1"
            aria-hidden="true"
          >
            AWA CONSTRUCTION
          </h1>
        </motion.div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400 font-nunito">
          <p>&copy; {new Date().getFullYear()} AWA Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
