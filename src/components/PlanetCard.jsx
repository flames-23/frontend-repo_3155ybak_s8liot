import React, { useRef } from 'react';

function PlanetCard({ name, size, color, description }) {
  const ref = useRef(null);

  const handlePointerDown = () => {
    // Apply a quick spin animation on touch/click
    if (!ref.current) return;
    ref.current.animate([
      { transform: 'rotate(0deg) scale(1)' },
      { transform: 'rotate(360deg) scale(1.05)' },
      { transform: 'rotate(720deg) scale(1)' },
    ], {
      duration: 1200,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
    });
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      className="group relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors cursor-pointer backdrop-blur-sm"
    >
      <div className="flex items-center gap-5">
        <div
          ref={ref}
          className="shrink-0 rounded-full shadow-inner"
          style={{ width: size, height: size, background: color }}
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/10 to-transparent" />
    </div>
  );
}

export default PlanetCard;
