import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export default function CertificationsTab() {
  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
          <span>🏆</span> Certifications & Achievements
        </h2>
        <p className="text-slate-400 text-sm mt-1">Verified credentials in Python, Computer Applications, and AI/ML Workshops</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-teal-500/40 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                  {cert.year}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-100 leading-snug group-hover:text-teal-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-teal-400 mt-2 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                  <span>Issued by: {cert.issuer}</span>
                </p>
              </div>
            </div>

            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-800 hover:border-teal-500/30 transition-all"
            >
              <span>View Verified Certificate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
