import { useEffect, useState } from 'react';

const TARGET = new Date('2026-06-13T07:15:00+07:00').getTime();

const calc = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

const Countdown = () => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: 'Hari', value: t.d },
    { label: 'Jam', value: t.h },
    { label: 'Menit', value: t.m },
    { label: 'Detik', value: t.s },
  ];

  return (
    <div className="reveal mt-8">
      <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4">
        Menuju Hari Bahagia
      </p>
      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
        {items.map((it) => (
          <div
            key={it.label}
            className="bg-card/60 backdrop-blur border border-primary/30 rounded-xl p-3 md:p-4 shadow-gold animate-border-glow"
          >
            <div className="font-display text-gold-gradient text-2xl md:text-4xl font-bold tabular-nums">
              {String(it.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/70 mt-1">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;