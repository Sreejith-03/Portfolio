import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
    id="home"
    className="relative min-h-screen pt-32 md:pt-24 pb-10 md:pb-12 flex flex-col justify-between overflow-hidden bg-[#050505]"
    >
      {/* Background Big Typography: SREEJITH */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h1 className="text-[30vw] leading-none font-black text-[#FF2A2A] tracking-tighter uppercase font-display opacity-90 scale-y-125">
          SREEJITH
        </h1>
      </div>

      {/* Main Content Area with Person Cutout */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex-1 flex flex-col justify-end">
        
        {/* Center Portrait Image */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[75vh] md:h-[82vh] max-h-[750px] pointer-events-none z-10 flex items-end">
          <img 
            src="/assets/1.png" 
            alt="Sreejith Portrait" 
            className="h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            onError={(e) => {
              // Fallback if image path issue occurs
              e.target.onerror = null;
              e.target.src = "/assets/media_1787590446645.png";
              e.target.className = "h-[70%] object-contain";
            }}
          />
        </div>

        {/* Bottom Content Row */}
        <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between pb-6 gap-8">
          
          {/* Left Text & CTAs */}
          <div className="max-w-md space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-100">
                Data Scientist
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-100">
                Data Analyst
              </h2>
            </div>
            
            <p className="text-sm text-gray-400 font-light">
              Turning Data Into Actionable Insights
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button
              onClick={() => scrollTo('projects')}
              className="group relative overflow-hidden px-6 py-2.5 bg-transparent
                        border border-white/40 text-white font-medium text-sm rounded-md
                        transition-all duration-300 ease-out
                        hover:border-[#FF2A2A] hover:-translate-y-1
                        hover:shadow-[0_0_15px_rgba(255,42,42,0.7),0_0_35px_rgba(255,42,42,0.4)]
                        active:translate-y-0 active:scale-95"
                >
                {/* Left-to-right sliding background */}
                <span
                  className="absolute inset-0 bg-[#FF2A2A]
                            -translate-x-full group-hover:translate-x-0
                            transition-transform duration-500 ease-out"
                />

                {/* Button text */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  View Projects
                </span>
              </button>
              
              <button
              onClick={() => scrollTo('contact')}
              className="group relative overflow-hidden px-6 py-2.5 bg-transparent
                        border border-white/40 text-white font-medium text-sm rounded-md
                        transition-all duration-300 ease-out
                        hover:border-[#FF2A2A] hover:-translate-y-1
                        hover:shadow-[0_0_15px_rgba(255,42,42,0.7),0_0_35px_rgba(255,42,42,0.4)]
                        active:translate-y-0 active:scale-95"
              >
                {/* Left-to-right sliding background */}
                <span
                  className="absolute inset-0 bg-[#FF2A2A]
                            -translate-x-full group-hover:translate-x-0
                            transition-transform duration-500 ease-out"
                />

                {/* Button text */}
                <span className="relative z-10">
                  Contact Me
                </span>
              </button>
            </div>
          </div>

          {/* Right Social Icons Stack */}
          <div className="flex flex-row md:flex-col items-center space-x-3 md:space-x-0 md:space-y-3 z-30">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg border border-white/20 bg-black/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/60 transition-all hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg border border-white/20 bg-black/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/60 transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
            </a>

            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              aria-label="Email"
              className="w-10 h-10 rounded-lg border border-white/20 bg-black/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/60 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
