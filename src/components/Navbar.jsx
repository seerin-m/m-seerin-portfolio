import React, { useState, useEffect } from 'react';
import Icon from './Icon';

export const navSections = [
  { id: 'home', label: 'Home', emoji: '🏠' },
  { id: 'about', label: 'About Me', emoji: '👨' },
  { id: 'skills', label: 'Skills', emoji: '🛠' },
  { id: 'experience', label: 'Experience', emoji: '💼' },
  { id: 'projects', label: 'Projects', emoji: '📂' },
  { id: 'certifications', label: 'Certifications', emoji: '🏆' },
  { id: 'blogs', label: 'Blogs', emoji: '📝' },
  { id: 'resume', label: 'Resume', emoji: '📄' },
  { id: 'contact', label: 'Contact', emoji: '📞' }
];

export default function Navbar({ activeSection, setActiveSection, isDark, setIsDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-2.5 bg-sage-950/85 dark:bg-sage-950/85 backdrop-blur-md border-b border-sage-800/40 shadow-lg shadow-sage-950/20' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sage-500 via-sand-400 to-gold-400 p-[1.5px] shadow-md shadow-sage-900/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-sage-950 rounded-full flex items-center justify-center font-serif text-sand-300 font-bold text-lg">
                🌿
              </div>
            </div>
            <div>
              <span className="font-serif text-lg font-bold bg-gradient-to-r from-sage-100 via-sand-200 to-sand-300 bg-clip-text text-transparent block">
                M Seerin
              </span>
              <span className="text-[11px] text-sage-400 font-mono tracking-wider block">
                AI/ML Engineer
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 bg-sage-900/60 dark:bg-sage-900/60 p-1.5 rounded-full border border-sage-800/60 backdrop-blur-lg">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-sage-800/90 text-sand-200 border border-sand-400/40 shadow-sm font-semibold'
                      : 'text-sage-300 hover:text-sand-100 hover:bg-sage-800/40'
                  }`}
                >
                  <span className="text-sm">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-sage-900/80 border border-sage-800 text-sand-300 hover:text-gold-300 hover:border-sand-400/50 transition-all duration-300"
              title={isDark ? "Switch to Light Spa Mode" : "Switch to Dark Spa Mode"}
            >
              {isDark ? <Icon name="Sun" className="w-4 h-4 text-gold-400" /> : <Icon name="Moon" className="w-4 h-4 text-sage-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-full bg-sage-900/80 border border-sage-800 text-sage-200 hover:text-sand-200"
            >
              {mobileMenuOpen ? <Icon name="X" className="w-5 h-5" /> : <Icon name="Menu" className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-sage-950/95 border-b border-sage-800/80 px-4 pt-3 pb-6 mt-2 backdrop-blur-xl animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {navSections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-sage-800/80 text-sand-300 border border-sand-400/40 font-semibold'
                      : 'text-sage-300 hover:bg-sage-900 hover:text-sand-100'
                  }`}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
