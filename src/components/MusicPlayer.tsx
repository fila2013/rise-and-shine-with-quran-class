import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_URL = '/public/sebiruhariini.mp3';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tryPlay = async (audio: HTMLAudioElement) => {
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = 'auto';
    audioRef.current = audio;

    const onError = () => {
      setAudioAvailable(false);
      setPlaying(false);
    };

    audio.addEventListener('error', onError);

    const playOnInteraction = () => {
      if (!audioRef.current) return;
      void tryPlay(audioRef.current);
    };

    const onStartMusic = () => {
      if (!audioRef.current) return;
      void tryPlay(audioRef.current);
    };

    window.addEventListener('start-music', onStartMusic);
    window.addEventListener('pointerdown', playOnInteraction, { once: true });
    window.addEventListener('keydown', playOnInteraction, { once: true });

    // Autoplay attempt
    void tryPlay(audio);

    return () => {
      audio.removeEventListener('error', onError);
      window.removeEventListener('start-music', onStartMusic);
      window.removeEventListener('pointerdown', playOnInteraction);
      window.removeEventListener('keydown', playOnInteraction);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      await tryPlay(audioRef.current);
    }
  };

  if (!audioAvailable) {
    return null;
  }

  return (
    <button
      onClick={() => {
        void toggle();
      }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gold-gradient shadow-gold flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
      aria-label={playing ? 'Matikan musik' : 'Putar musik'}
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-primary-foreground" />
      ) : (
        <VolumeX className="w-5 h-5 text-primary-foreground" />
      )}
    </button>
  );
};

export default MusicPlayer;
