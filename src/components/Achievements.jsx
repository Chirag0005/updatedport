import React from 'react';

const Achievements = () => {
  const certificates = [
    { name: 'Software Engineering Job Simulation', issuer: 'JPMorgan Chase & Co.', date: "Mar '26" },
    { name: 'Web Development Intern', issuer: 'SkillCraft Technology', date: "Aug '25" },
    { name: 'PEP Program (DSA)', issuer: 'byteXL', date: "Jul '25" },
  ];

  const achievements = [
    { platform: 'LeetCode', details: '225+ problems solved, 3 badges earned, 45+ day streak', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { platform: 'GeeksForGeeks', details: '100+ problems solved, Top 10% at university level', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyan-400 font-mono text-xl">04.</span> Achievements & Certificates
          <div className="h-[1px] bg-slate-700 flex-1 ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              Milestones
            </h3>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div key={index} className="glass p-6 rounded-xl hover:border-cyan-500/50 transition-colors flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-100">{item.platform}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              Certifications
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div key={index} className="flex justify-between items-center glass p-4 rounded-xl hover:bg-slate-800/50 transition-colors group">
                  <div>
                    <h4 className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                    <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-cyan-500 font-mono text-xs block">{cert.date}</span>
                    <a href="#" className="text-xs text-slate-500 hover:text-cyan-400 underline decoration-slate-600 underline-offset-2">View</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
