'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';


const TiktokIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <div className="group relative">
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#2E5F9E] p-3 rounded-full text-white hover:bg-[#1a3b66] transition-colors flex items-center justify-center"
      aria-label={label}
    >
      <Icon size={24} />
      <span className="sr-only">{label}</span>
    </Link>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
      {label}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
    </div>
  </div>
);

const socialLinks = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@sagawamedia',
    icon: TiktokIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sagawagroup',
    icon: Instagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@sagawamedia',
    icon: Youtube,
  },
];

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
              Jl. H Misan V No. 11-B/6-A, Kukusan-Beji, Depok 16425
            </p>
          </div>

          <div>
            <h3 className="text-[#FEB05D] text-2xl font-bold mb-6 font-unbounded text-left md:text-right">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-4 justify-start md:justify-end">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
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
