'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Construction, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-(--color-primary) flex flex-col font-nunito relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full border-20 border-white/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-(--color-secondary)/20 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            opacity: 0.2,
          }}
        />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-16 overflow-hidden z-0 opacity-30">
        <div className="absolute inset-0 flex justify-center">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="w-8 h-full bg-white/10 -skew-x-12 mx-2 shrink-0" />
          ))}
        </div>
      </div>

      <div className="grow flex items-center justify-center w-full relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Icon Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="mb-8 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-(--color-secondary) rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <Construction className="w-20 h-20 md:w-32 md:h-32 text-white" strokeWidth={1.5} />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="font-unbounded text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/60 mb-2">
                404
              </h1>
              <h2 className="font-unbounded text-xl md:text-2xl text-(--color-secondary) font-bold mb-4 uppercase tracking-wider">
                {t.notFound.title}
              </h2>
              <p className="text-white/80 max-w-md mx-auto text-base md:text-lg mb-8 leading-relaxed">
                {t.notFound.description}
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                className="bg-white text-(--color-primary) hover:bg-gray-100 font-bold px-8 py-6 rounded-full text-base transition-all hover:scale-105"
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  {t.notFound.backHome}
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-base backdrop-blur-sm transition-all hover:scale-105 cursor-pointer"
                onClick={() => router.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.notFound.goBack}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Diagonal Lines - Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-16 overflow-hidden z-0 opacity-30">
        <div className="absolute inset-0 flex justify-center">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="w-8 h-full bg-white/10 -skew-x-12 mx-2 shrink-0" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
