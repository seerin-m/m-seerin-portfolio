import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Icon from './Icon';

export default function Home({ scrollToSection }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12">
      {/* Background Calm Atmosphere */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-sand-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-12 left-1/4 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-4 animate-slide-up">
        
        {/* Soft Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-900/80 border border-sand-400/30 text-sand-300 text-xs font-mono tracking-wide shadow-sm">
          <Icon name="Sparkles" className="w-3.5 h-3.5 text-sand-400 animate-pulse" />
          <span>Calm Intelligence • AI/ML Engineering</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-sage-50 leading-[1.15]">
          Greetings, I am <br />
          <span className="bg-gradient-to-r from-sand-200 via-sand-400 to-gold-400 bg-clip-text text-transparent italic">
            {personalInfo.name}
          </span>
        </h1>

        {/* Tagline & Intro */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl font-serif text-sand-300 font-normal italic">
            "{personalInfo.tagline}"
          </p>
          <p className="text-sage-300 text-sm sm:text-base leading-relaxed font-sans">
            {personalInfo.intro}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-sage-950 font-semibold text-sm shadow-xl shadow-sand-500/15 hover:shadow-sand-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore My Work</span>
            <Icon name="ArrowRight" className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 py-3.5 rounded-full bg-sage-900/80 border border-sage-700/80 text-sand-200 hover:text-sand-100 hover:border-sand-400/50 font-medium text-sm transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Quick Channels */}
        <div className="flex items-center justify-center gap-6 pt-8 border-t border-sage-800/60 text-xs font-mono text-sage-400">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-sand-300 flex items-center gap-1.5 transition-colors">
            <Icon name="Github" className="w-4 h-4" /> GitHub
          </a>
          <span>•</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-sand-300 flex items-center gap-1.5 transition-colors">
            <Icon name="Linkedin" className="w-4 h-4" /> LinkedIn
          </a>
          <span>•</span>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-sand-300 flex items-center gap-1.5 transition-colors">
            <Icon name="Mail" className="w-4 h-4" /> {personalInfo.email}
          </a>
        </div>

      </div>
    </section>
  );
}
