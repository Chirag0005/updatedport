import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Resell - AI-Powered Second-Hand Marketplace',
      date: "Nov '25 - Dec '25",
      description: 'A full-stack MERN web application for secure buying and selling of second-hand products. Features JWT-based authentication, a seller dashboard with real-time tracking, in-app messaging for buyer-seller communication, and an integrated AI-powered product description generator.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'AI APIs'],
      github: 'https://github.com/Chirag0005',
      external: '#'
    },
    {
      title: 'VolunteerHub - Volunteer Management System',
      date: "Mar '25 - Mar '25",
      description: 'A robust PHP-based web application designed to manage volunteer registration, event creation, and participation tracking. Includes secure authentication, an admin dashboard with CRUD operations, role-based access control, and automated certificate generation upon event completion.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/Chirag0005',
      external: '#'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyan-400 font-mono text-xl">03.</span> Some Things I've Built
          <div className="h-[1px] bg-slate-700 flex-1 ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-all duration-500"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <svg className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <span className="text-cyan-500 text-xs font-mono tracking-widest uppercase mb-2 block">{project.date}</span>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <ul className="flex flex-wrap gap-2 mt-4 relative z-10">
                {project.tech.map((tech) => (
                  <li key={tech} className="text-xs font-mono text-cyan-400/80 bg-cyan-900/20 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
