import React from 'react';
import { personalInfo, education } from '../data/portfolioData';
import Icon from './Icon';

export default function Resume() {
  const resumeDownloadPath = "/Resume.md";

  return (
    <section id="resume" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">CURRICULUM VITAE</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center gap-3">
              <span>📄</span> Resume Preview
            </h2>
          </div>

          <a
            href={resumeDownloadPath}
            download="Seerin_Resume.md"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-sage-950 font-bold text-xs shadow-xl shadow-sand-500/15 hover:shadow-sand-500/30 hover:scale-105 transition-all flex items-center gap-2 w-fit"
          >
            <Icon name="Download" className="w-4 h-4" />
            <span>Download Resume File</span>
          </a>
        </div>

        {/* Embedded Resume Preview */}
        <div className="spa-card p-8 sm:p-12 rounded-3xl border border-sage-800 space-y-8 max-w-4xl mx-auto font-sans">
          
          {/* Header */}
          <div className="text-center border-b border-sage-800/80 pb-6 space-y-2">
            <h1 className="font-serif text-3xl font-bold text-sage-100 uppercase tracking-wide">{personalInfo.name}</h1>
            <p className="text-sand-300 font-mono text-sm font-semibold">{personalInfo.title}</p>
            <p className="text-xs text-sage-400 font-mono">
              {personalInfo.location} • {personalInfo.phone} • {personalInfo.email}
            </p>
            <div className="flex justify-center gap-4 text-xs text-sand-400 font-mono pt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-sand-400 uppercase tracking-widest border-b border-sage-800/60 pb-1">Education</h3>
            <div className="flex justify-between items-baseline text-sm">
              <span className="font-bold text-sage-100">{education.institution}</span>
              <span className="text-xs font-mono text-sage-400">{education.period}</span>
            </div>
            <p className="text-xs text-sage-300">{education.degree} | CGPA: {education.cgpa}</p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold text-sand-400 uppercase tracking-widest border-b border-sage-800/60 pb-1">Work Experience</h3>
            
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-sage-200 text-sm">
                <span>F22 Labs — AI/ML Intern</span>
                <span className="font-mono text-sage-400 text-xs">Dec 2025 – July 2026</span>
              </div>
              <p className="text-sage-300 leading-relaxed">
                Fine-tuned Kokoro-82M TTS models on curated synthetic datasets, built multi-agent RAG pipelines with Qdrant, and benchmarked PyTorch model inference on edge/mobile configurations.
              </p>
            </div>

            <div className="space-y-1 text-xs pt-2">
              <div className="flex justify-between font-bold text-sage-200 text-sm">
                <span>UPTOSKILLS — Artificial Intelligence Intern</span>
                <span className="font-mono text-sage-400 text-xs">Jan 2025 – Apr 2025</span>
              </div>
              <p className="text-sage-300 leading-relaxed">
                Engineered LLM question generator and camera/tab-switch AI proctoring dashboard using ReactJS, Tailwind CSS, and MongoDB.
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-sand-400 uppercase tracking-widest border-b border-sage-800/60 pb-1">Projects</h3>
            <div className="space-y-2 text-xs text-sage-300">
              <p><strong className="text-sage-100">Educalria (2026):</strong> Knowledge graph video segment merging & TOPSIS evaluation framework + Qdrant RAG assistant.</p>
              <p><strong className="text-sage-100">Local Mobile TTS Inference (2026):</strong> Android ONNX Runtime Mobile integration for Inflect-Nano-v1 speech synthesis.</p>
              <p><strong className="text-sage-100">Nova OS Voice Assistant (2025):</strong> Desktop assistant integration via LiveKit Agents and Gemini Realtime API.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
