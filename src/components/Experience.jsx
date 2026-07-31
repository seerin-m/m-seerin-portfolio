import React from 'react';
import { experiences } from '../data/portfolioData';
import Icon from './Icon';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">CAREER JOURNEY</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center justify-center gap-3">
            <span>💼</span> Work Experience
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sand-400 to-transparent mx-auto mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-sage-800/80 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Leaf Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-sage-950 border-2 border-sand-400 flex items-center justify-center shadow-lg shadow-sand-400/20 group-hover:scale-110 transition-transform">
                <span className="text-xs">🌿</span>
              </div>

              {/* Card */}
              <div className="spa-card p-8 rounded-3xl space-y-5 border border-sage-800/80 hover:border-sand-400/40 transition-all">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-sage-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-2xl font-bold text-sage-100">{exp.company}</h3>
                      {exp.certificateLink && (
                        <a
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sand-400/15 text-sand-300 text-xs font-mono border border-sand-400/30 hover:bg-sand-400/25 transition-colors"
                        >
                          <span>Certificate</span>
                          <Icon name="ExternalLink" className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-sand-300 font-medium text-base mt-1">{exp.role}</p>
                  </div>

                  <div className="flex flex-col md:items-end text-xs font-mono text-sage-400 space-y-1">
                    <div className="flex items-center gap-1.5 text-sand-200">
                      <Icon name="Calendar" className="w-3.5 h-3.5 text-sand-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="MapPin" className="w-3.5 h-3.5 text-sage-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 text-sage-300 text-sm leading-relaxed">
                  {exp.responsibilities.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="w-4 h-4 text-sand-400 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
