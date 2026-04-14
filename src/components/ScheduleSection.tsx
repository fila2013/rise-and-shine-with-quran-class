import flowers from '@/assets/flowers.png';

const scheduleData = [
  { time: '07.15 – 07.30', desc: 'Pembukaan dan Pembacaan Ayat Suci Al-Quran, Saritilawah dan Doa' },
  { time: '07.30 – 07.40', desc: 'Menyanyikan Lagu Indonesia Raya, Mars Fitrah Insani, Mars JSIT' },
  { time: '07.40 – 07.55', desc: 'Performance Tari' },
  { time: '07.55 – 08.25', desc: 'Sambutan-sambutan' },
  { time: '08.25 – 08.40', desc: 'Sesi foto bersama dan Penutup' },
  { time: '08.40 – 09.00', desc: 'Uji Publik siswa-siswi level 6 Doa khatmil Qur\'an, dan pemberian mahkota kepada orang tua' },
  { time: '09.00 – 09.25', desc: 'Prosesi pelepasan, pemberian penghargaan dan Surat Keterangan Lulus' },
  { time: '09.25 – 09.40', desc: 'Pengumuman prestasi peserta didik (hafalan terbanyak, Tilawah terbanyak, hafalan Mutqin, Cognitif dan afektif)' },
  { time: '09.40 – 09.50', desc: 'Sambutan orang tua' },
  { time: '09.50 – 10.10', desc: 'Performance Drama Musikal "Pejuang Qur\'an" Putra' },
  { time: '10.10 – 10.30', desc: 'Performance Musikalisasi Puisi "Birrul Walidain" Putra' },
  { time: '10.30 – 10.50', desc: 'Performance "Combined Performance"' },
  { time: '10.50 – 11.10', desc: 'Pidato perpisahan dari perwakilan siswa kelas 6' },
  { time: '11.10 – 11.25', desc: 'Menyanyikan lagu "doaku untukmu guru"' },
  { time: '11.25 – 11.30', desc: 'Penutupan' },
];

const ScheduleSection = () => {
  return (
    <section className="relative py-16 px-4 bg-emerald-gradient overflow-hidden">
      {/* Decorative flowers */}
      <img
        src={flowers}
        alt=""
        className="absolute bottom-0 right-0 w-32 md:w-48 opacity-60 rotate-180"
        loading="lazy"
        width={512}
        height={512}
      />
      <img
        src={flowers}
        alt=""
        className="absolute top-0 left-0 w-32 md:w-48 opacity-60"
        loading="lazy"
        width={512}
        height={512}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10 reveal">
          <h2 className="font-script text-gold-gradient text-4xl md:text-6xl mb-2">
            Rise and Shine
          </h2>
          <p className="font-display text-foreground text-lg md:text-2xl">with Qur'an</p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-gold-gradient inline-block" />
            <span className="font-display text-primary text-sm tracking-[0.3em] uppercase">Class of 2026</span>
            <span className="h-px w-10 bg-gold-gradient inline-block" />
          </div>
          <h3 className="font-script text-primary text-3xl md:text-5xl mt-6">Schedule</h3>
        </div>

        {/* Schedule table */}
        <div className="reveal border border-primary/30 rounded-xl overflow-hidden bg-card/60 backdrop-blur animate-border-glow">
          <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] bg-gold-gradient">
            <div className="px-4 py-3 font-display font-bold text-primary-foreground text-sm md:text-base text-center">
              WAKTU
            </div>
            <div className="px-4 py-3 font-display font-bold text-primary-foreground text-sm md:text-base">
              KETERANGAN
            </div>
          </div>
          {scheduleData.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] border-t border-primary/20 transition-colors hover:bg-secondary/40 ${
                i % 2 === 0 ? 'bg-card/40' : 'bg-card/20'
              }`}
            >
              <div className="px-4 py-3 text-primary font-semibold text-xs md:text-sm text-center border-r border-primary/20">
                {item.time}
              </div>
              <div className="px-4 py-3 text-foreground/90 text-xs md:text-sm">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
