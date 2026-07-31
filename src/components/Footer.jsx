import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="border-t border-sage-800/80 spa-card py-12">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
        
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sage-500 to-sand-400 p-[1px]">
            <div className="w-full h-full bg-sage-950 rounded-full flex items-center justify-center font-serif text-sand-300 font-bold text-xs">
              🌿
            </div>
          </div>
          <span className="font-serif text-lg font-bold text-sage-100">{personalInfo.name}</span>
        </div>

        <p className="text-xs text-sage-400 max-w-md mx-auto leading-relaxed">
          Crafting tranquil, intelligent AI solutions with precision engineering.
        </p>

        <div className="flex justify-center gap-6 text-sage-400 text-xs font-mono">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-sand-300 transition-colors flex items-center gap-1">
            <Icon name="Github" className="w-4 h-4" /> GitHub
          </a>
          <span>•</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-sand-300 transition-colors flex items-center gap-1">
            <Icon name="Linkedin" className="w-4 h-4" /> LinkedIn
          </a>
          <span>•</span>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-sand-300 transition-colors flex items-center gap-1">
            <Icon name="Mail" className="w-4 h-4" /> {personalInfo.email}
          </a>
        </div>

        <p className="text-[11px] text-sage-500 font-mono pt-4 border-t border-sage-800/60">
          © {new Date().getFullYear()} M Seerin • Built with Vite, React, Tailwind CSS & LocalStorage.
        </p>

      </div>
    </footer>
  );
}
