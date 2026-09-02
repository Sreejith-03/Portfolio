import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [isBlogPage, setIsBlogPage] = useState(
    () => window.location.hash === '#/blogs'
  );

  // Hash routing keeps the separate blog page compatible with GitHub Pages.
  useEffect(() => {
    const handleRouteChange = () => {
      const showBlogPage = window.location.hash === '#/blogs';
      setIsBlogPage(showBlogPage);

      if (showBlogPage) {
        setActiveSection('blog');
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      const sectionId = window.location.hash.replace('#', '') || 'home';
      setActiveSection(sectionId);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        });
      });
    };

    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  // IntersectionObserver to automatically update active section link in Navbar
  useEffect(() => {
    if (isBlogPage) return undefined;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlogPage]);

  return (
    <div className={`min-h-screen bg-[#050505] text-white selection:bg-red-500 selection:text-white ${darkMode ? 'dark' : ''}`}>
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isBlogPage={isBlogPage}
      />
      <main>
        {isBlogPage ? (
          <Blog />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
