import flowers from '@/assets/flowers.png';

const FooterSection = () => {
  return (
    <section className="relative py-16 px-4 bg-emerald-gradient overflow-hidden">
      <img
        src={flowers}
        alt=""
        className="absolute bottom-0 left-0 w-32 opacity-40 rotate-90"
        loading="lazy"
        width={512}
        height={512}
      />
      <img
        src={flowers}
        alt=""
        className="absolute bottom-0 right-0 w-32 opacity-40 -rotate-90"
        loading="lazy"
        width={512}
        height={512}
      />

      <div className="max-w-xl mx-auto text-center relative z-10 reveal">
        <p className="font-arabic text-foreground/80 text-base md:text-lg italic mb-6">
          "Dan sesungguhnya telah Kami mudahkan Al-Qur'an untuk pelajaran, maka adakah orang yang mengambil pelajaran?"
        </p>
        <p className="text-primary text-sm font-semibold mb-8">— QS. Al-Qamar: 17</p>

        <div className="h-px w-24 mx-auto bg-gold-gradient mb-8" />

        <p className="text-foreground/60 text-sm">
          Merupakan suatu kehormatan dan kebahagiaan apabila<br />
          Bapak/Ibu/Saudara/i berkenan hadir dalam acara kami.
        </p>

        <p className="font-script text-primary text-2xl md:text-3xl mt-6">
          Jazakumullahu Khairan
        </p>

        <div className="mt-8 border border-primary/30 rounded-xl px-6 py-4 bg-card/40 backdrop-blur inline-block">
          <p className="font-display text-foreground text-sm font-semibold">SDIT FITRAH INSANI LANGKAPURA</p>
          <p className="text-primary/70 text-xs italic">Qur'ani, Cerdas, dan Mandiri</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
