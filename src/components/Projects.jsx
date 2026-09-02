import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: "Real-Time Traffic Sign Recognition",
      description: "A CNN-based system that detects and classifies traffic signs from live camera frames using TensorFlow and OpenCV.",
      tags: ["Python", "TensorFlow", "OpenCV", "CNN"],
      image: "/assets/project-traffic.png",
      link: "#"
    },
    {
      title: "Generative AI Chatbot",
      description: "A context-aware AI assistant that answers website questions and guides users with retrieval-augmented generation.",
      tags: ["Python", "Llama", "RAG", "FastAPI"],
      image: "/assets/project-chatbot.png",
      link: "#"
    },
    {
      title: "Mobile Application Development",
      description: "A cross-platform mobile application built with Flutter and Dart, supported by Firebase cloud services.",
      tags: ["Flutter", "Dart", "Firebase"],
      image: "/assets/project-mobile.png",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-[#050505] flex flex-col justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 space-y-12">
        
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF2A2A]">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              className="card-glow rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              {/* Project Image Banner */}
              <div className="h-48 w-full overflow-hidden bg-gray-900 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/media_1787590454108.png";
                    e.target.className = "w-full h-full object-cover";
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-3 py-1 rounded-md border border-white/15 bg-white/5 text-[11px] text-gray-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a 
                    href={project.link}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Opening ${project.title}...`);
                    }}
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-white hover:text-red-500 transition-colors pt-2"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
