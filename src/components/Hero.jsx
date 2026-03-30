import React from 'react';
import Reveal from './Reveal';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <Reveal>
          <div className="md:w-full max-w-2xl flex flex-col items-start text-left z-10">
          <p className="text-cyan-400 font-mono mb-4 text-lg">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            Chirag.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
            I build things for the web.
          </h2>
          <p className="text-slate-400 max-w-xl text-lg mb-10 leading-relaxed">
            I'm a 3rd year Computer Science and Engineering student at Lovely Professional University. Currently, I'm focused on full-stack MERN web development and solving complex problems.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300 font-mono backdrop-blur-sm uppercase font-semibold">
              Check out my work!
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 bg-cyan-400 text-slate-900 rounded hover:bg-cyan-300 transition-colors duration-300 font-mono font-semibold uppercase shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              Download Resume
            </a>
          </div>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 md:mt-0 relative flex justify-center z-10 group cursor-pointer lg:ml-12">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] transition-transform duration-700 ease-out group-hover:scale-105">
            {/* Background glowing blobs */}
            <div className="absolute top-0 -left-4 w-full h-full bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-full h-full bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-10 w-full h-full bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
            
            {/* Spinning ring 1 */}
            <div className="absolute -inset-4 rounded-full border border-cyan-400/30 border-dashed animate-[spin_15s_linear_infinite]"></div>
            
            {/* Spinning ring 2 (reverse) */}
            <div className="absolute -inset-8 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite_reverse]"></div>
            
            {/* Image Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.2)] bg-slate-900 group-hover:border-cyan-400 group-hover:shadow-[0_0_80px_rgba(34,211,238,0.5)] transition-all duration-500 z-10">
              <img 
                src="/profile.png" 
                alt="Chirag" 
                className="w-full h-full object-cover object-[center_25%] scale-100 grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out relative z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-500 z-30 pointer-events-none"></div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
