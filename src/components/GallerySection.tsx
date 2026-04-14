import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery3 from '@/assets/gallery-3.webp';
import gallery4 from '@/assets/gallery-4.webp';

const photos = [
  { src: gallery1, alt: 'Kelas Halimah As-Sadiyyah' },
  { src: gallery2, alt: 'Kelas Hamnah binti Jahsy' },
  { src: gallery3, alt: 'Kelas Hamza ibn Abd al-Muttalib' },
  { src: gallery4, alt: 'Kelas Zubair bin al-Awwam' },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative py-16 px-4 bg-emerald-gradient overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 reveal">
          <p className="font-script text-primary text-3xl md:text-4xl mb-2">Galeri</p>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold-gradient inline-block" />
            <span className="font-display text-foreground text-sm tracking-widest uppercase">Momen Berharga</span>
            <span className="h-px w-12 bg-gold-gradient inline-block" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 reveal">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="relative overflow-hidden rounded-xl border border-primary/30 group cursor-pointer aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-foreground text-xs md:text-sm font-medium">{photo.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-scale"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground/80 hover:text-foreground"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-w-full max-h-[80vh] rounded-xl shadow-gold object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
