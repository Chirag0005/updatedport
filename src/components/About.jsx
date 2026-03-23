import React from 'react';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-xl">01.</span> About Me & Education
            <div className="h-[1px] bg-slate-700 flex-1 ml-4"></div>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Text */}
          <Reveal delay={200}>
            <div className="glass p-8 rounded-2xl relative overflow-hidden group h-full block">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all duration-500"></div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed relative z-10">
              <p>
                Hello! My name is <strong>Chirag</strong> and I enjoy building intelligent web applications. 
                I am a focused individual characterized by strong problem-solving skills, analytical thinking, 
                and adaptability.
              </p>
              <p>
                I am currently pursuing my <strong>Bachelor of Technology in Computer Science and Engineering</strong> at 
                Lovely Professional University. Whether it's crafting scalable <strong>MERN stack</strong> applications 
                or optimizing algorithms, I am always exploring new challenges.
              </p>
            </div>
          </div>
          </Reveal>

          {/* Education Timeline */}
          <Reveal delay={400}>
            <div className="glass p-8 rounded-2xl relative z-10 block h-full">
            <h3 className="text-xl font-bold text-slate-100 mb-6 font-mono text-cyan-400 border-b border-white/10 pb-4">Education Journey</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              
              {/* LPU */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-cyan-500/50"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                  <div className="flex flex-col">
                    <span className="text-cyan-400 text-sm font-mono mb-1">Apr '23 - Present</span>
                    <h4 className="font-bold text-slate-200">Lovely Professional University</h4>
                    <span className="text-slate-400 text-sm mb-2">B.Tech CSE</span>
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full w-fit">CGPA: 8.8</span>
                  </div>
                </div>
              </div>

              {/* School */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-slate-500 bg-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                  <div className="flex flex-col">
                     <span className="text-slate-500 text-sm font-mono mb-1">Karnal, Haryana</span>
                    <h4 className="font-bold text-slate-300">Arya Vidya Peeth School</h4>
                    <span className="text-slate-400 text-sm mt-1">Intermediate (PCM): 81.8%</span>
                    <span className="text-slate-400 text-sm">Matriculation: 94.4%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
