import React from 'react';
import { personalInfo, education } from '../data/portfolioData';
import Icon from './Icon';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">PERSONAL STORY & BACKGROUND</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center justify-center gap-3">
            <span>👨</span> About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sand-400 to-transparent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 spa-card p-8 rounded-3xl space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-sand-300">
              Engineering with Harmony & Purpose
            </h3>
            
            <p className="text-sage-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.bio}
            </p>

            <p className="text-sage-300 text-sm sm:text-base leading-relaxed">
              My technical journey is grounded in disciplined problem-solving. From fine-tuning <strong className="text-sand-300 font-normal">Kokoro-82M TTS models</strong> for natural Indian-English speech synthesis at F22 Labs to engineering automated proctoring & evaluation systems at UPTOSKILLS, I focus on building technology that feels effortless and tranquil for end users.
            </p>

            <div className="pt-4 border-t border-sage-800/80 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-sage-500 block">PRIMARY LOCATION</span>
                <span className="text-sage-200 font-medium">{personalInfo.location}</span>
              </div>
              <div>
                <span className="text-sage-500 block">STATUS</span>
                <span className="text-sand-300 font-medium">B.E. CSE (9.2 CGPA)</span>
              </div>
            </div>
          </div>

          {/* Education & Values Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Box */}
            <div className="spa-card p-7 rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sand-400/10 text-sand-300 border border-sand-400/30">
                  <Icon name="GraduationCap" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-sage-100">Academic Excellence</h4>
                  <p className="text-xs text-sage-400 font-mono">{education.period}</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <p className="font-bold text-sand-200 text-sm">{education.institution}</p>
                <p className="text-xs text-sage-300">{education.degree}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-sand-400/15 text-sand-300 text-xs font-mono font-semibold mt-2">
                  CGPA: {education.cgpa}
                </div>
              </div>
            </div>

            {/* Core Values Box */}
            <div className="spa-card p-7 rounded-3xl space-y-3">
              <h4 className="font-serif text-lg font-bold text-sand-300">Engineering Philosophy</h4>
              <ul className="space-y-2 text-xs text-sage-300">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 text-sand-400 shrink-0" />
                  <span>Precision in Model Fine-Tuning & Evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 text-sand-400 shrink-0" />
                  <span>Sub-second Low Latency Edge Inference</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 text-sand-400 shrink-0" />
                  <span>Clean, Maintainable Software Architectures</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
