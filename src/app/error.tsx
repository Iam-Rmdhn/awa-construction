'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { AlertTriangle, Home, RefreshCcw, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/layout/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-(--color-primary) flex flex-col font-nunito relative overflow-hidden">
        {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vh] h-[50vh] rounded-full border-20 border-white/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vh] h-[60vh] rounded-full bg-(--color-danger)/20 blur-3xl" />
         {/* Grid pattern */}
         <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '30px 30px',
            opacity: 0.2
          }} 
        />
      </div>

       {/* Diagonal Lines - consistent with other pages */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-16 overflow-hidden z-0 opacity-30">
        <div className="absolute inset-0 flex justify-center">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-full bg-white/10 -skew-x-12 mx-2 shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="grow flex items-center justify-center w-full relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
            >
            {/* Icon Animation */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative"
            >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-lg">!</span>
                </div>
                <AlertTriangle className="w-20 h-20 md:w-32 md:h-32 text-white" strokeWidth={1.5} />
            </motion.div>

            <h1 className="font-unbounded text-4xl md:text-6xl font-bold text-white mb-4">
                {t.error.title}
            </h1>
            <p className="text-white/80 max-w-lg mx-auto text-base md:text-lg mb-8 leading-relaxed">
                {t.error.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                onClick={reset}
                className="bg-(--color-secondary) text-white hover:bg-[#e99b45] font-bold px-8 py-6 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-orange-500/20"
                >
                <RefreshCcw className="w-5 h-5 mr-2" />
                {t.error.retry}
                </Button>

                <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-base backdrop-blur-sm transition-all hover:scale-105 cursor-pointer"
                onClick={() => router.back()}
                >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.notFound.goBack}
                </Button>
                
                <Button 
                asChild 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-base backdrop-blur-sm transition-all hover:scale-105"
                >
                <Link href="/">
                    <Home className="w-5 h-5 mr-2" />
                    {t.error.back}
                </Link>
                </Button>
            </div>
            </motion.div>
        </div>
      </div>
      
       {/* Diagonal Lines - Bottom */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-16 overflow-hidden z-0 opacity-30">
        <div className="absolute inset-0 flex justify-center">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-full bg-white/10 -skew-x-12 mx-2 shrink-0"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
