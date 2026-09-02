import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, darkMode, setDarkMode, isBlogPage }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blogs', id: 'blog', isPage: true },
    { name: 'Contact', id: 'contact' },
  ];

  const navigateTo = (item) => {
    if (item.isPage) {
      window.location.hash = '/blogs';
      return;
    }

    const { id } = item;
    setActiveSection(id);
    if (isBlogPage) {
      window.location.hash = id;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isItemActive = (item) =>
    item.isPage ? isBlogPage : !isBlogPage && activeSection === item.id;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); navigateTo({ id: 'home' }); }}
          className="text-2xl font-black tracking-wider text-white hover:text-red-500 transition-colors uppercase"
        >
          SREEJITH
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = isItemActive(item);
            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item)}
                className={`relative transition-colors duration-200 hover:text-white py-1 ${
                  isActive ? 'text-white font-semibold' : 'text-gray-400'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle Button matching mockup switch */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="w-12 h-6 bg-white rounded-full p-0.5 flex items-center justify-between relative shadow-inner cursor-pointer transition-colors duration-300"
          >
            <div
              className={`w-5 h-5 bg-black rounded-full flex items-center justify-center transition-transform duration-300 transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {darkMode ? (
                <Sun className="w-3 h-3 text-white" />
              ) : (
                <Moon className="w-3 h-3 text-white" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Links Row */}
      <div className="md:hidden flex justify-center gap-4 pt-3 text-[11px] font-medium border-t border-white/5 mt-3 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigateTo(item)}
            className={`${
              isItemActive(item) ? 'text-white border-b-2 border-white' : 'text-gray-400'
            } pb-1`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
