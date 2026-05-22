import { Calendar, Clock, MapPin } from 'lucide-react';
import lantern from '@/assets/lantern.png';
import Countdown from './Countdown';

const InvitationSection = () => {
  const details = [
    { icon: Calendar, label: 'Hari', value: 'Sabtu' },
    { icon: Calendar, label: 'Tanggal', value: '13 Juni 2026' },
    { icon: Clock, label: 'Waktu', value: 'Mulai pukul 07.15 WIB - selesai' },
    { icon: MapPin, label: 'Tempat', value: 'Emersia Hotel & Resort' },
  ];

  return (
    <section className="relative py-20 px-4 bg-emerald-gradient overflow-hidden">
      <img
        src={lantern}
        alt=""
        className="absolute top-0 left-2 w-14 md:w-20 animate-swing opacity-70"
        width={512}
        height={800}
      />
      <img
        src={lantern}
        alt=""
        className="absolute top-0 right-2 w-14 md:w-20 animate-swing opacity-70"
        style={{ animationDelay: '1s' }}
        width={512}
        height={800}
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <div className="reveal">
          <p className="font-arabic text-gold-gradient text-2xl md:text-3xl italic mb-2">
            Assalamualaikum Warahmatullahi Wabarakatuh.
          </p>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-px w-12 bg-gold-gradient" />
            <span className="text-primary text-xs">✦</span>
            <span className="h-px w-12 bg-gold-gradient" />
          </div>
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed px-2">
            Dengan penuh rasa syukur dan suka cita, kami mengundang Bapak/Ibu wali murid
            dalam acara <span className="text-primary font-semibold">Wisuda Siswa-siswi
            SDIT Fitrah Insani Langkapura</span> tahun ajaran 2025/2026 yang
            insya Allah akan dilaksanakan pada:
          </p>
        </div>

        <div className="reveal mt-8 bg-card/60 backdrop-blur border border-primary/30 rounded-2xl p-6 md:p-8 shadow-gold animate-border-glow">
          <div className="space-y-3">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 text-left border-b border-primary/15 last:border-b-0 pb-3 last:pb-0"
              >
                <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-foreground/60">
                    {label}
                  </p>
                  <p className="font-display text-primary text-base md:text-lg">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://maps.app.goo.gl/J1CbdKJxYD6UkPep6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-primary-foreground font-semibold text-sm shadow-gold hover:scale-105 transition-transform"
          >
            <MapPin className="w-4 h-4" />
            Buka di Google Maps
          </a>
        </div>

        <Countdown />

        <p className="reveal mt-8 text-foreground/80 text-sm md:text-base leading-relaxed px-2">
          Atas kehadiran Bapak/Ibu dalam mendukung acara tersebut,
          kami ucapkan <span className="text-primary font-semibold">terima kasih</span>.
        </p>
        <p className="reveal font-arabic text-primary text-lg md:text-xl italic mt-3">
          Wassalamu'alaikum Wr. Wb.
        </p>
      </div>
    </section>
  );
};

export default InvitationSection;