
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/431/1800/1200')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">Effortless Style, Redefined.</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">Discover our new collection of timeless pieces, crafted with sustainable materials for the modern individual.</p>
        <button className="bg-brand-off-white text-brand-charcoal font-bold uppercase tracking-wider py-3 px-8 hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300">
          Shop The Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
