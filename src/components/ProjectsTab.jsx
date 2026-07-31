import React from 'react';
import { projects } from '../data/portfolioData';
import { FolderGit2, Github, ExternalLink, Calendar, Code, CheckCircle2 } from 'lucide-react';

export default function ProjectsTab() {
  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
          <span>📂</span> Major Projects
        </h2>
        <p className="text-slate-400 text-sm mt-1">End-to-end AI applications, TTS pipelines, and desktop assistants</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 hover:border-teal-500/30 transition-all"
          >
            {/* Header / Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-semibold">
                    {project.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>{project.year}</span>
                </div>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors w-fit"
                >
                  <Github className="w-4 h-4 text-teal-400" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base leading-relaxed">
              {project.description}
            </p>

            {/* Details */}
            <div className="space-y-3 glass-card p-5 rounded-xl border border-slate-800">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Key Implementation Features:</h4>
              {project.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">TECHNOLOGY STACK:</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono font-medium"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
