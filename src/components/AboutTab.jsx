import React from 'react';
import { personalDetails, education } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function AboutTab() {
  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
          <span>👨</span> About Me
        </h2>
        <p className="text-slate-400 text-sm mt-1">Background, academic excellence, and core engineering focus</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Bio Card */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-teal-400">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {personalDetails.bio}
            </p>
            <p className="text-slate-300 leading-relaxed text-base">
              My engineering philosophy revolves around combining production-grade model inference with intuitive application layer interfaces. Whether optimizing <span className="text-teal-300 font-medium">ONNX Runtime on Android</span> for edge inference or benchmarking vector databases like <span className="text-teal-300 font-medium">Qdrant</span> for semantic search pipelines, I focus on performance, scalability, and measurable real-world user value.
            </p>
          </div>

          {/* Education Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Education</h3>
                <p className="text-xs text-slate-400">Academic Foundation</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-lg font-bold text-slate-200">{education.institution}</h4>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono border border-teal-500/20 w-fit">
                  {education.period}
                </span>
              </div>
              <p className="text-teal-400 font-medium text-sm">{education.degree}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
                <span className="flex items-center gap-1 text-teal-300 font-semibold">
                  <Award className="w-4 h-4 text-amber-400" /> CGPA: {education.cgpa}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-slate-500" /> {education.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 border-b border-slate-800 pb-3">Quick Facts</h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-500 block font-mono">LOCATION</span>
                <span className="text-slate-200 font-medium">{personalDetails.location}</span>
              </div>

              <div>
                <span className="text-xs text-slate-500 block font-mono">EMAIL</span>
                <a href={`mailto:${personalDetails.email}`} className="text-teal-400 hover:underline font-medium">
                  {personalDetails.email}
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-500 block font-mono">PHONE</span>
                <span className="text-slate-200 font-medium">{personalDetails.phone}</span>
              </div>

              <div>
                <span className="text-xs text-slate-500 block font-mono">PRIMARY STACK</span>
                <span className="text-slate-200 font-medium">Python, PyTorch, React, RAG, TTS, FastAPI</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-between border border-slate-700 transition-colors"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 text-xs font-semibold flex items-center justify-between border border-teal-500/30 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
