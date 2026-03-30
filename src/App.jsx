import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500 selection:text-white relative overflow-hidden cursor-none md:cursor-auto">
      <CustomCursor />
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
      
      <Background3D />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

        <footer className="py-8 text-center text-slate-400 border-t border-white/5 relative z-10">
          <p>© {new Date().getFullYear()} Chirag. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
