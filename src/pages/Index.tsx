import { useState, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Particles from '@/components/Particles';
import CoverSection from '@/components/CoverSection';
import ScheduleSection from '@/components/ScheduleSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import FooterSection from '@/components/FooterSection';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [opened, setOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Particles />
      <MusicPlayer />

      {/* Cover */}
      <CoverSection onOpen={handleOpen} />

      {/* Content sections */}
      <div
        ref={contentRef}
        className={`transition-all duration-1000 ${opened ? 'opacity-100 max-h-[100000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
      >
        <ScheduleSection />
        <GallerySection />
        <LocationSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
