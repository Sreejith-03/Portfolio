import React from 'react';
import { Database, LineChart, Cpu, Server, Download } from 'lucide-react';

const About = () => {
  const whatIDo = [
    {
      icon: Database,
      text: "Clean, process and analyze structured datasets",
    },
    {
      icon: LineChart,
      text: "Perform EDA, feature engineering and visualization",
    },
    {
      icon: Cpu,
      text: "Build and evaluate machine-learning models",
    },
    {
      icon: Server,
      text: "Retrieve and analyze data using Python and SQL",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Records Analyzed" },
    { value: "18%", label: "Forecast Accuracy Improvement" },
    { value: "30%", label: "Faster Report Preparation" },
  ];

  const interests = [
    "Machine Learning",
    "Data Analytics",
    "NLP",
    "Computer Vision",
    "AI Chatbots",
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 bg-[#050505] flex items-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Photo & Outline "ABOUT" Text */}
        <div className="lg:col-span-5 relative flex flex-col justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]">
          {/* Badge */}
          <div className="inline-block self-start mb-4 border border-white/20 bg-black/40 px-3 py-1 text-[10px] tracking-widest font-mono text-gray-300 uppercase">
            ABOUT ME
          </div>

          {/* Background Outlined Text "ABOUT" */}
          <div className="absolute top-8 left-0 select-none z-0 pointer-events-none">
            <h2 className="text-[7rem] sm:text-[9rem] lg:text-[12rem] font-black text-outline-red tracking-tighter leading-none opacity-80 uppercase font-display">
              ABOUT
            </h2>
          </div>

          {/* Person Hoodie Photo */}
          <div className="relative z-10 w-full max-w-sm mx-auto lg:mx-0">
            <img 
              src="/assets/2.png" 
              alt="Sreejith Essentials Hoodie" 
              className="w-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/media_1787590450061.png";
                e.target.className = "w-full object-contain";
              }}
            />
          </div>
        </div>

        {/* Right Side: Information Content */}
        <div className="lg:col-span-7 space-y-8 z-10">
          
          {/* Title & Bio */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF2A2A]">
              Data Scientist & Data Analyst
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
              I am an entry-level Data Scientist and Data Analyst with a Bachelor of Engineering in Computer Science and practical internship experience in data analysis, predictive modelling, data visualization and Python development.
            </p>
          </div>

          {/* What I Do Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">What I Do</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatIDo.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="card-glow flex items-center space-x-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-200 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-gray-300 font-normal leading-snug">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="card-glow p-5 rounded-xl border border-white/10 bg-[#0d0d0d] text-center space-y-1 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-light leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* My Interests */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">My Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs text-gray-300 hover:border-red-500/40 hover:text-white transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Subtext & Download Resume CTA */}
          <div className="pt-2 space-y-4">
            <p className="text-xs text-gray-400">
              Seeking entry-level opportunities in Data Analytics, Data Science and Machine Learning.
            </p>

            <a
            href="/assets/Sreejith_S_Resume_DataAnalyst.pdf"
            download="Sreejith_S_Resume_DataAnalyst.pdf"
            className="group relative overflow-hidden inline-flex items-center
                      px-5 py-2.5 rounded-lg border border-white/40
                      bg-transparent text-white text-sm font-medium
                      transition-all duration-500 ease-out
                      hover:border-[#FF2A2A] hover:-translate-y-1
                      hover:shadow-[0_0_15px_rgba(255,42,42,0.7),0_0_35px_rgba(255,42,42,0.4)]
                      active:translate-y-0 active:scale-95"
          >
            {/* Left-to-right red background */}
            <span
              className="absolute inset-0 bg-[#FF2A2A]
                        -translate-x-full group-hover:translate-x-0
                        transition-transform duration-500 ease-out"
            />

            {/* Icon and text */}
            <span className="relative z-10 flex items-center gap-2.5">
              <Download
                className="w-4 h-4 transition-transform duration-500
                          group-hover:translate-y-0.5"
              />
              <span>Download Resume</span>
            </span>
          </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
