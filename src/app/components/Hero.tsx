import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel - using multiple images that change periodically */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
            opacity: 1
          }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')",
            opacity: 0
          }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop')",
            opacity: 0
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Mewujudkan Impian Bangunan Anda</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 max-w-2xl mx-auto">
          Kami ahli dalam proyek konstruksi dan renovasi untuk rumah, kantor, dan bangunan komersial.
        </p>

        <Link
          href="#konsultasi"
          className="bg-[#00ADB5] hover:bg-[#008a90] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300"
        >
          Mulai Proyek Anda
        </Link>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white bg-opacity-50"></button>
        <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></button>
        <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white bg-opacity-50"></button>
      </div>
    </section>
  );
}