import flowers from '@/assets/flowers.png';

const stanzas: string[][] = [
  [
    'Kubuat sebuah puisi sederhana untukmu',
    'Tempatku mengarungi samudra ilmu',
    'Kupersembahkan khusus padamu',
    'Wahai sekolahku tercinta',
  ],
  [
    'Di sini aku mengenal banyak teman',
    'Hingga menemukan sahabat tersayang',
    'Menimba ilmu pengetahuan untuk masa depan',
    'Semuanya menjadi satu di sini',
    'Di sekolahku ini',
  ],
  [
    'Sekolah di mana aku menemukan jati diri',
    'Agar berguna bagi bangsa dan negara',
    'Di sekolah kutemukan ketulusan dari seorang guru',
    'Di sekolah pula aku belajar tentang ilmu',
    'Kubelajar indahnya kebersamaan',
    'Diskusi dalam menyelesaikan perbedaan',
  ],
  [
    'Sekolahku, semoga engkau jaya selalu',
    'Menjadi tempat mendidik putra puteri bangsa',
  ],
  [
    'Selamat tinggal aku ucapkan',
    'Wahai sekolahku tersayang',
    'Kau tak pernah aku lupakan',
    'Meski seiring perkembangan zaman',
  ],
];

const PoemSection = () => {
  return (
    <section className="relative py-20 px-4 bg-emerald-gradient overflow-hidden">
      <img
        src={flowers}
        alt=""
        className="absolute top-0 right-0 w-32 md:w-48 opacity-50 -rotate-12"
        loading="lazy"
        width={512}
        height={512}
      />
      <img
        src={flowers}
        alt=""
        className="absolute bottom-0 left-0 w-32 md:w-48 opacity-50 rotate-180"
        loading="lazy"
        width={512}
        height={512}
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <div className="reveal mb-8">
          <p className="font-display text-primary text-xs md:text-sm tracking-[0.4em] uppercase mb-2">
            Persembahan
          </p>
          <h2 className="font-script text-gold-gradient text-5xl md:text-7xl leading-none">
            Puisi
          </h2>
          <h3 className="font-script text-primary text-3xl md:text-5xl mt-1">
            Sekolahku
          </h3>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 bg-gold-gradient" />
            <span className="text-primary text-xs">✦</span>
            <span className="h-px w-16 bg-gold-gradient" />
          </div>
        </div>

        <div className="reveal bg-card/50 backdrop-blur border border-primary/30 rounded-2xl px-6 py-8 md:px-10 md:py-12 shadow-gold space-y-6">
          {stanzas.map((lines, i) => (
            <div key={i} className="space-y-1">
              {lines.map((line, j) => (
                <p
                  key={j}
                  className="font-arabic italic text-foreground/90 text-sm md:text-base leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          ))}

          <div className="pt-4 border-t border-primary/20">
            <p className="font-script text-primary text-xl md:text-2xl">
              Dengan segenap cinta
            </p>
            <p className="text-foreground/80 text-sm md:text-base mt-1">
              dari siswa-siswi Kelas 6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;