import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowRight, Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 bg-[#050505] flex items-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Badge & Outlined Title */}
          <div className="space-y-4 relative">
            <div className="inline-block border border-white/20 bg-black/40 px-3 py-1 text-[10px] tracking-widest font-mono text-gray-300 uppercase">
              CONTACT ME
            </div>

            <div className="relative">
              <h2 className="text-6xl md:text-8xl font-black text-outline-red tracking-tighter uppercase font-display select-none">
                LET'S TALK
              </h2>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Let's Build Something Meaningful
              </h3>
              <p className="text-sm text-gray-400 font-light max-w-lg leading-relaxed">
                Have a project, opportunity or idea in mind? I'd love to hear from you.
              </p>
            </div>
          </div>

          {/* 3 Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            {/* Email Card */}
            <a 
              href="mailto:sreejith@example.com" 
              className="card-glow p-4 rounded-xl border border-white/10 bg-[#0c0c0c] flex flex-col justify-between space-y-3 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 w-fit text-gray-200 group-hover:text-red-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Email</div>
                <div className="text-[11px] text-gray-400">Connect with me</div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow p-4 rounded-xl border border-white/10 bg-[#0c0c0c] flex flex-col justify-between space-y-3 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 w-fit text-gray-200 group-hover:text-red-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">LinkedIn</div>
                <div className="text-[11px] text-gray-400">Connect with me</div>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow p-4 rounded-xl border border-white/10 bg-[#0c0c0c] flex flex-col justify-between space-y-3 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 w-fit text-gray-200 group-hover:text-red-400">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">GitHub</div>
                <div className="text-[11px] text-gray-400">Connect with me</div>
              </div>
            </a>

          </div>

          {/* Status Indicator Pill */}
          <div className="pt-2">
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-white/20 bg-black/60 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6">
          <div className="card-glow p-8 rounded-2xl border border-white/10 bg-[#0c0c0c]/90 backdrop-blur-xl space-y-6 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-xs text-gray-400">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Your Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Email Address</label>
                  <input 
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Subject</label>
                  <input 
                    type="text"
                    placeholder="Enter subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Write your message..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black font-semibold text-xs rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2 pt-3"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
