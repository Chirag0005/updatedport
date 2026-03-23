import React from 'react';
import Reveal from './Reveal';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: (
        <svg className="w-8 h-8 text-cyan-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ),
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'PHP']
    },
    {
      title: 'Frameworks',
      icon: (
        <svg className="w-8 h-8 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      ),
      skills: ['React', 'Node.js', 'Express.js', 'Tailwind CSS']
    },
    {
      title: 'Tools & Platforms',
      icon: (
        <svg className="w-8 h-8 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      skills: ['Git', 'GitHub', 'Postman', 'MySQL', 'MongoDB', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center gap-4 text-center">
            <div className="h-[1px] bg-slate-700 flex-1"></div>
            <span className="text-cyan-400 font-mono text-xl">02.</span> Technical Arsenal
            <div className="h-[1px] bg-slate-700 flex-1"></div>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 200}>
              <div className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group h-full">
              <div className="p-4 rounded-full bg-slate-800/80 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-6 font-mono border-b border-slate-700 pb-2 w-full">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800/60 text-slate-300 border border-white/5 rounded-full text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
