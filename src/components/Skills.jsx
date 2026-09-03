import React from 'react';
import { Code2, Brain, BarChart3, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen py-20 bg-[#050505] flex flex-col justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF2A2A]">
            Technical Skills
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full h-[300px] sm:h-[380px] lg:h-full lg:min-h-[420px] rounded-2xl overflow-hidden border border-white/10 relative group">
              <img 
                src="/assets/skills-person.png" 
                alt="Skills Visor Portrait" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/media_1787590452057.png";
                  e.target.className = "w-full h-full object-cover";
                }}
              />
            </div>
          </div>

          {/* Right Column: Skills Cards Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Top 2 Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Programming & Databases */}
              <div className="card-glow p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] space-y-5 transition-all duration-300">
                <div className="p-3 rounded-xl border border-white/10 bg-white/5 w-fit text-gray-200">
                  <Code2 className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-white">
                  Programming & Databases
                </h3>

                <ul className="space-y-3 text-xs text-gray-300">
                  {["Python", "SQL", "MySQL", "Data Structures"].map((skill, i) => (
                    <li key={i} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Data Science & AI */}
              <div className="card-glow p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] space-y-5 transition-all duration-300">
                <div className="p-3 rounded-xl border border-white/10 bg-white/5 w-fit text-gray-200">
                  <Brain className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  Data Science & AI
                </h3>

                <ul className="space-y-3 text-xs text-gray-300">
                  {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Predictive Modelling"].map((skill, i) => (
                    <li key={i} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Full-width Card: Data Analytics & Tools */}
            <div className="card-glow p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] space-y-5 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-200">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Data Analytics & Tools
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs text-gray-300 pt-1">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Data Cleaning & EDA</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Statistics & Data Visualization</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Excel & Reporting</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Pandas, NumPy & Scikit-learn</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Matplotlib, Seaborn & Plotly</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Git & GitHub</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
