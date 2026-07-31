import React from 'react';
import { skillCategories } from '../data/portfolioData';
import Icon from './Icon';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">TECHNICAL MASTERY</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center justify-center gap-3">
            <span>🛠</span> Skills & Expertise
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sand-400 to-transparent mx-auto mt-3" />
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="spa-card spa-card-hover p-7 rounded-3xl space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sage-800/80 pb-4">
                  <div className="p-3 rounded-2xl bg-sage-800/80 text-sand-300 border border-sand-400/30">
                    <Icon name={cat.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-sage-100">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-sage-200">{skill.name}</span>
                        <span className="text-sand-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-sage-900 rounded-full overflow-hidden border border-sage-800/60">
                        <div
                          className="h-full bg-gradient-to-r from-sage-500 via-sand-400 to-gold-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] font-mono text-sage-400">
                  ✦ Applied in production & POCs
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
