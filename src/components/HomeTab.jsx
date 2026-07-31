import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Sparkles, ArrowRight, Github, Linkedin, Mail, Cpu, Bot, Mic, FileText, CheckCircle2 } from 'lucide-react';

export default function HomeTab({ setActiveTab }) {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-panel p-8 sm:p-12 border border-slate-800">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-teal-400" />
              <span>Available for AI/ML Roles</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">{personalDetails.name}</span>
            </h1>

            <p className="text-xl font-medium text-teal-400/90 font-mono">
              {personalDetails.role} & Speech AI Specialist
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Specializing in <span className="text-teal-300 font-medium">LLMs</span>, <span className="text-teal-300 font-medium">RAG Architectures</span>, <span className="text-teal-300 font-medium">Kokoro-82M TTS Fine-Tuning</span>, and <span className="text-teal-300 font-medium">On-Device Edge AI</span>. Building real-time voice agents and intelligent automated systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-teal-500/50 text-slate-200 font-medium hover:bg-slate-800 transition-all"
              >
                Get In Touch
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 text-slate-400">
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 text-xs font-mono">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <span>•</span>
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 text-xs font-mono">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <span>•</span>
              <a href={`mailto:${personalDetails.email}`} className="hover:text-teal-300 transition-colors flex items-center gap-1.5 text-xs font-mono">
                <Mail className="w-4 h-4" /> {personalDetails.email}
              </a>
            </div>
          </div>

          {/* Stats Cards / Highlight Card */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {personalDetails.stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Core Specializations */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-100">Core Engineering Pillars</h2>
          <p className="text-slate-400 text-sm">Key areas of research, development, and deployment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl space-y-3 border border-slate-800 hover:border-teal-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Generative AI & LLMs</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Prompt engineering, agentic workflows, directional stimulus prompting, and private PII filter systems.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3 border border-slate-800 hover:border-teal-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Speech & TTS Fine-Tuning</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kokoro-82M adaptation for Indian-English pronunciation, synthetic dataset curation, and LiveKit voice AI pipelines.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3 border border-slate-800 hover:border-teal-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Edge & Mobile Inference</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              On-device ONNX Runtime Mobile integration, lightweight models (Inflect-Nano-v1), and low-latency local execution.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Banner Callout */}
      <section className="glass-panel p-6 rounded-2xl border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" /> AI/ML Intern at F22 Labs (Dec 2025 – Jul 2026)
          </div>
          <p className="text-xs text-slate-400">
            Pioneered TTS datasets, benchmarked RAG architectures with Qdrant, and deployed quantized Hugging Face models.
          </p>
        </div>
        <button
          onClick={() => setActiveTab('experience')}
          className="px-4 py-2 rounded-xl bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 text-xs font-semibold whitespace-nowrap transition-colors"
        >
          View Experience Details →
        </button>
      </section>
    </div>
  );
}
