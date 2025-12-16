import { IMAGES } from '@/constants/images';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${IMAGES.HERO_BACKGROUND}')`,
          }}
        ></div>
      </div>
      
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Content temporarily removed
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        ...
      </div>
      */}
    </section>
  );
}