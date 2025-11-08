import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlanetsGrid from './components/PlanetsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <PlanetsGrid />
      <Footer />
    </div>
  );
}

export default App;
