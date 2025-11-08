import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Explore the Planets
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Spin the interactive Earth and begin your journey across the solar system. Touch planets to set them in motion.
        </p>
        <a href="#planets" className="inline-block mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-red-500/20 transition-colors">
          Start Exploring
        </a>
      </div>
    </section>
  );
}

export default Hero;
