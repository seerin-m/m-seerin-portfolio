import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function ExperienceTab() {
  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
          <span>💼</span> Work Experience & Internships
        </h2>
        <p className="text-slate-400 text-sm mt-1">Professional track record in AI/ML engineering, voice agent POCs, and web platforms</p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-teal-400 flex items-center justify-center shadow-md shadow-teal-500/30 group-hover:scale-110 transition-transform">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-teal-500/30 transition-all">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-100">{exp.company}</h3>
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 text-[11px] font-mono hover:bg-teal-500/20 transition-colors"
                      >
                        <span>Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-teal-400 font-medium text-base mt-0.5">{exp.role}</p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
