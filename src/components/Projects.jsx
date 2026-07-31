import React from 'react';
import { projects } from '../data/portfolioData';
import Icon from './Icon';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">PORTFOLIO OF INNOVATION</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center justify-center gap-3">
            <span>📂</span> Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sand-400 to-transparent mx-auto mt-3" />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="spa-card spa-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-sage-800/80 group"
            >
              <div>
                {/* Project Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-950 via-sage-950/40 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-sage-950/80 backdrop-blur-md text-sand-300 text-xs font-mono border border-sand-400/30">
                    {proj.period}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-sage-100 group-hover:text-sand-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sage-300 text-xs sm:text-sm leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {proj.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-sage-300">
                        <span className="text-sand-400 text-sm leading-none">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.techTags.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full bg-sage-900 border border-sage-800 text-sage-300 text-[11px] font-mono"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* External Links */}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-sage-900 hover:bg-sand-400/20 text-sand-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-sage-800 hover:border-sand-400/40 transition-all"
                  >
                    <Icon name="Github" className="w-4 h-4" />
                    <span>View Source Code</span>
                    <Icon name="ExternalLink" className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
