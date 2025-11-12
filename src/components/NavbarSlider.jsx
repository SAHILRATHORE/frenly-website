import React, { useState, useEffect } from 'react';

const NavbarSlider = () => {
  const [active, setActive] = useState('home');

  // 👇 Detect which section is currently in view
  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } 
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex lg:gap-5 lg:px-3 px-1 whitespace-nowrap lg:py-2 py-1 rounded-4xl items-center drop-shadow-sm bg-white/30 backdrop-blur-md">
      <button
        onClick={() => scrollTo('home')}
        className={`px-2 lg:text-[15px] text-[8px] py-1 rounded-2xl font-medium transition-all duration-300 ${
          active === 'home' ? 'bg-[#f97af3] text-white' : 'text-black hover:bg-[#f97af3]/30'
        }`}
      >
        Home
      </button>

      <button
        onClick={() => scrollTo('problem')}
        className={`px-2 py-1 rounded-2xl lg:text-[15px] text-[8px] font-medium transition-all duration-300 ${
          active === 'problem' ? 'bg-[#f97af3] text-white' : 'text-black hover:bg-[#f97af3]/30'
        }`}
      >
        The Problem
      </button>

      <button
        onClick={() => scrollTo('why')}
        className={`px-2 py-1 rounded-2xl font-medium transition-all lg:text-[15px] text-[8px] duration-300 ${
          active === 'why' ? 'bg-[#f97af3] text-white' : 'text-black hover:bg-[#f97af3]/30'
        }`}
      >
        Why Frenly
      </button>

      <button
        onClick={() => scrollTo('pool')}
        className={`px-2 py-1 rounded-2xl font-medium transition-all duration-300 lg:text-[15px] text-[8px] ${
          active === 'pool' ? 'bg-[#f97af3] text-white' : 'text-black hover:bg-[#f97af3]/30'
        }`}
      >
        C1 Pool
      </button>
    </div>
  );
};

export default NavbarSlider;
