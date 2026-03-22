import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex flex-col items-start text-left z-10">
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
          <a href="#projects" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors duration-300 font-mono backdrop-blur-sm">
            Check out my work!
          </a>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border-2 border-cyan-400/50 border-dashed animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-blue-500/30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/50 bg-slate-900/50 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
              Web Dev
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
