import React from 'react';
import { certifications } from '../data/portfolioData';
import Icon from './Icon';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">HONORS & CREDENTIALS</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center justify-center gap-3">
            <span>🏆</span> Certifications
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sand-400 to-transparent mx-auto mt-3" />
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="spa-card spa-card-hover p-7 rounded-3xl space-y-6 flex flex-col justify-between border border-sage-800/80 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-sand-400/10 text-sand-300 border border-sand-400/30 group-hover:scale-105 transition-transform">
                    <Icon name="Award" className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sage-900 border border-sage-800 text-sage-300 text-xs font-mono">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-sage-100 leading-snug group-hover:text-sand-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-sand-400 flex items-center gap-1.5">
                  <Icon name="CheckCircle" className="w-3.5 h-3.5 text-sand-400" />
                  <span>Issued by: {cert.issuer}</span>
                </p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-sage-900 hover:bg-sand-400/20 text-sand-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-sage-800 hover:border-sand-400/30 transition-all"
              >
                <span>View Verified Credential</span>
                <Icon name="ExternalLink" className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
