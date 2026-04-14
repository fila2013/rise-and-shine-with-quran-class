import { useEffect, useRef } from 'react';

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (3 + Math.random() * 4) + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    };

    for (let i = 0; i < 30; i++) createParticle();

    return () => {
      container.querySelectorAll('.particle').forEach(p => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
};

export default Particles;
