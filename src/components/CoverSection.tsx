import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import quranHero from '@/assets/quran-hero.png';
import lantern from '@/assets/lantern.png';

interface CoverSectionProps {
  onOpen: () => void;
}

const CoverSection = ({ onOpen }: CoverSectionProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-emerald-gradient px-4">
      {/* Lanterns */}
      <img
        src={lantern}
        alt=""
        className="absolute top-0 left-4 w-16 md:w-24 animate-swing opacity-80"
        width={512}
        height={800}
      />
      <img
        src={lantern}
        alt=""
        className="absolute top-0 right-4 w-16 md:w-24 animate-swing opacity-80"
        style={{ animationDelay: '1s' }}
        width={512}
        height={800}
      />

      {/* Content */}
      <div className={`text-center transition-all duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-script text-primary text-2xl md:text-4xl mb-2">Save The Date</p>

        <div className={`transition-all duration-1000 delay-300 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <img
            src={quranHero}
            alt="Al-Quran"
            className="w-48 md:w-72 mx-auto my-4 glow-gold animate-float-slow"
            width={800}
            height={800}
          />
        </div>

        <h1 className={`font-script text-gold-gradient text-4xl md:text-7xl leading-tight mb-2 transition-all duration-1000 delay-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Rise and Shine
        </h1>
        <p className={`font-display text-foreground text-xl md:text-3xl mb-1 transition-all duration-1000 delay-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
          with Qur'an
        </p>
        <div className={`flex items-center justify-center gap-4 my-3 transition-all duration-1000 delay-800 ${show ? 'opacity-100' : 'opacity-0'}`}>
          <span className="h-px w-12 bg-gold-gradient inline-block" />
          <span className="font-display text-primary text-lg md:text-2xl tracking-widest">Class of 2026</span>
          <span className="h-px w-12 bg-gold-gradient inline-block" />
        </div>

        <p className={`text-foreground/80 text-base md:text-xl mt-4 font-light transition-all duration-1000 delay-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
          A Special Moment<br />for the 8<sup>th</sup> Generation
        </p>

        <div className={`mt-6 transition-all duration-1000 delay-[1200ms] ${show ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-display text-foreground text-sm md:text-base font-semibold">
            SDIT FITRAH INSANI LANGKAPURA
          </p>
          <p className="text-primary/80 font-arabic text-sm md:text-base italic">
            Qur'ani, Cerdas, dan Mandiri
          </p>
        </div>

        {/* Note */}
        <div className={`mt-6 mx-auto max-w-xs border border-primary/40 rounded-lg px-4 py-2 bg-secondary/50 backdrop-blur animate-pulse-glow transition-all duration-1000 delay-[1400ms] ${show ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-primary text-xs md:text-sm font-medium">📋 Berlaku untuk 2 orang</p>
        </div>

        <div className={`mt-4 text-foreground/60 text-sm transition-all duration-1000 delay-[1500ms] ${show ? 'opacity-100' : 'opacity-0'}`}>
          <p>📅 Sabtu, 13 Juni 2026</p>
          <p>📍 Emersia Hotel & Resort, Bandar Lampung</p>
        </div>
      </div>

      {/* Open button */}
      <button
        onClick={onOpen}
        className={`mt-8 group flex flex-col items-center gap-2 transition-all duration-1000 delay-[1800ms] ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <span className="px-8 py-3 rounded-full bg-gold-gradient text-primary-foreground font-semibold text-sm md:text-base shadow-gold hover:scale-105 transition-transform">
          Buka Undangan
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </button>
    </section>
  );
};

export default CoverSection;
