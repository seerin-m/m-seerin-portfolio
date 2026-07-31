import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Download, Printer, FileText, Eye, CheckCircle, ExternalLink } from 'lucide-react';

export default function ResumeTab() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const resumeMarkdownText = `
# M SEERIN
AI/ML Engineer | Chennai, Tamil Nadu, India
Phone: +91 9790903285 | Email: seerin3514@gmail.com
LinkedIn: https://www.linkedin.com/in/seerin-m/
GitHub: https://github.com/seerin-m

## EDUCATION
Anand Institute of Higher Technology (Nov 2022 -- May 2026)
B.E. Computer Science and Engineering | CGPA: 9.2/10.0

## EXPERIENCE
1. F22 Labs (December 2025 -- July 2026) - AI/ML Intern
- Generated and curated synthetic speech datasets for TTS fine-tuning (Kokoro-82M).
- Built AI Proof-of-Concepts across LLMs, RAG, AI Agents, OCR, NLP, and Voice AI (LiveKit).
- Benchmarked RAG architectures using Qdrant vector database.
- Executed LLM & TTS inference using PyTorch, Hugging Face Transformers, vLLM, and llama.cpp.

2. UPTOSKILLS (Jan 2025 -- Apr 2025) - Artificial Intelligence Intern
- Contributed to AI recruitment platform (LLM question generation, tab-switch detection, proctoring).
- Built candidate dashboard with ReactJS, Tailwind CSS, and MongoDB.

## PROJECTS
- Educalria: AI-Powered Videos-to-Knowledge Summarization (Python, Flask, React, Qdrant, RAG)
- Local Mobile TTS Inference using Inflect-Nano-v1 (Java, Android, ONNX Mobile, FastAPI)
- Nova OS: AI Voice Assistant (LiveKit, Gemini Realtime API, Python)

## TECHNICAL BLOGS (F22 Labs)
- What is Directional Stimulus Prompting?
- How Good is LightOnOCR-2-1B for Document OCR and Parsing?
- OpenAI Privacy Filter: How to Detect and Redact PII Locally

## TECHNICAL SKILLS
- Languages: Python, Java, SQL, HTML/CSS
- ML/AI: PyTorch, NLP, OCR, Quantization, Hugging Face
- GenAI: LLMs, RAG, AI Agents, Vector DBs (Qdrant), CrewAI
- Tools: OpenAI, Gemini, Groq, Cerebras, Docker, Git
- Web: Flask, FastAPI, ReactJS, Tailwind CSS
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeMarkdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
            <span>📄</span> Curriculum Vitae / Resume
          </h2>
          <p className="text-slate-400 text-sm mt-1">Verified academic performance, internship timeline, and publication history</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-all"
          >
            {copied ? <CheckCircle className="w-4 h-4 text-teal-400" /> : <FileText className="w-4 h-4 text-slate-400" />}
            <span>{copied ? "Copied Markdown!" : "Copy Raw Markdown"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-teal-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Viewer */}
      <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-800 max-w-4xl mx-auto space-y-8 font-sans">
        
        {/* Header Block */}
        <div className="text-center border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-100 uppercase">{personalDetails.name}</h1>
          <p className="text-teal-400 font-mono text-sm font-semibold">{personalDetails.role}</p>
          <p className="text-xs text-slate-400 font-mono">
            {personalDetails.location} • {personalDetails.phone} • {personalDetails.email}
          </p>
          <div className="flex justify-center gap-4 text-xs text-teal-400 font-mono pt-1">
            <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <span>•</span>
            <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold font-mono text-teal-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">Education</h3>
          <div className="flex justify-between items-baseline text-sm">
            <span className="font-bold text-slate-200">Anand Institute of Higher Technology</span>
            <span className="text-xs font-mono text-slate-400">Nov 2022 -- May 2026</span>
          </div>
          <div className="flex justify-between items-baseline text-xs text-slate-300">
            <span>B.E. Computer Science and Engineering | CGPA: 9.2/10.0</span>
            <span className="text-slate-400">Chennai, India</span>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold font-mono text-teal-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">Experience / Internships</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-sm">
              <span className="font-bold text-slate-200">F22 Labs — AI/ML Intern</span>
              <span className="text-xs font-mono text-slate-400">Dec 2025 -- July 2026</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
              <li>Curated synthetic speech datasets adapting Kokoro-82M for Indian-English pronunciation.</li>
              <li>Built AI Proof-of-Concepts across LLMs, RAG, AI Agents, OCR, and Voice AI (LiveKit).</li>
              <li>Benchmarked vector search & chunking optimization with Qdrant.</li>
              <li>Executed inference optimization using Hugging Face Transformers, vLLM, and llama.cpp.</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-baseline text-sm">
              <span className="font-bold text-slate-200">UPTOSKILLS — Artificial Intelligence Intern</span>
              <span className="text-xs font-mono text-slate-400">Jan 2025 -- Apr 2025</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
              <li>Built AI-powered recruitment assessment & proctoring platform (tab-switch detection, automated reports).</li>
              <li>Engineered candidate assessment portal with ReactJS, Tailwind CSS, and MongoDB.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold font-mono text-teal-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">Key Projects</h3>
          <div className="space-y-2 text-xs text-slate-300">
            <p><strong className="text-slate-100">Educalria (2026):</strong> Knowledge graph video segment merging & TOPSIS evaluation framework + Qdrant RAG Q&A assistant.</p>
            <p><strong className="text-slate-100">Local Mobile TTS Inference (2026):</strong> Android ONNX Runtime Mobile integration for Inflect-Nano-v1 with FastAPI G2P pipeline.</p>
            <p><strong className="text-slate-100">Nova OS Voice Assistant (2025):</strong> Low-latency voice interaction via LiveKit Agents and Gemini Realtime API.</p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold font-mono text-teal-400 uppercase tracking-wider border-b border-slate-800/80 pb-1">Technical Skills</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Programming & Frameworks:</strong> Python, Java, SQL, PyTorch, Hugging Face Transformers, Flask, FastAPI, ReactJS<br />
            <strong>GenAI & Machine Learning:</strong> LLMs, Prompt Engineering, RAG, Vector DBs (Qdrant), Speech AI, ONNX Runtime Mobile, Docker, Git
          </p>
        </div>

      </div>
    </div>
  );
}
