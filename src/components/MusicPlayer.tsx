import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_URL = 'https://cdn.pixabay.com/audio/2024/11/28/audio_3721f494b1.mp3';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
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
