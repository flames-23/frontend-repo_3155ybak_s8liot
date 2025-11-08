import React from 'react';

function Footer() {
  return (
    <footer id="about" className="w-full bg-black text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Cosmic Explorer. All rights reserved.</p>
        <p className="text-sm">Interactive solar system demo with a rotating Earth.</p>
      </div>
    </footer>
  );
}

export default Footer;
