import React from 'react';

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/90 font-semibold tracking-wide">Cosmic Explorer</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#planets" className="hover:text-white transition-colors">Planets</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
