import React from 'react';
import PlanetCard from './PlanetCard';

const PLANETS = [
  { name: 'Mercury', size: 36, color: 'linear-gradient(135deg, #b7b7b7, #8d8d8d)', description: 'Rocky and cratered, closest to the Sun.' },
  { name: 'Venus', size: 44, color: 'linear-gradient(135deg, #f5c07a, #e7a34b)', description: 'Dense clouds, scorching temperatures.' },
  { name: 'Earth', size: 48, color: 'linear-gradient(135deg, #2dd4bf, #2563eb)', description: 'Our blue home with life and oceans.' },
  { name: 'Mars', size: 42, color: 'linear-gradient(135deg, #ef4444, #b91c1c)', description: 'The red planet with giant volcanoes.' },
  { name: 'Jupiter', size: 80, color: 'linear-gradient(135deg, #f59e0b, #b45309)', description: 'Gas giant with the Great Red Spot.' },
  { name: 'Saturn', size: 72, color: 'linear-gradient(135deg, #fbbf24, #a16207)', description: 'Iconic rings and many moons.' },
  { name: 'Uranus', size: 56, color: 'linear-gradient(135deg, #60a5fa, #22d3ee)', description: 'Icy giant with a tilted axis.' },
  { name: 'Neptune', size: 56, color: 'linear-gradient(135deg, #3b82f6, #0ea5e9)', description: 'Deep blue with supersonic winds.' },
];

function PlanetsGrid() {
  return (
    <section id="planets" className="relative w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Tap the planets to set them spinning</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PLANETS.map((p) => (
            <PlanetCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlanetsGrid;
