import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Search, Code2, Cpu, Wrench, Globe, Terminal } from 'lucide-react';

export default function SkillsTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoriesList = ['All', ...skillCategories.map(c => c.name)];

  const categoryIcons = {
    "Programming & Core": <Code2 className="w-5 h-5 text-teal-400" />,
    "AI & Machine Learning": <Cpu className="w-5 h-5 text-cyan-400" />,
    "Generative AI & LLMs": <Terminal className="w-5 h-5 text-purple-400" />,
    "Tools, Platforms & Infra": <Wrench className="w-5 h-5 text-emerald-400" />,
    "Backend & Web": <Globe className="w-5 h-5 text-indigo-400" />
  };

  const filteredCategories = skillCategories
    .map(cat => {
      if (selectedCategory !== 'All' && cat.name !== selectedCategory) return null;

      const filteredSkills = cat.skills.filter(s =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0) return null;

      return {
        ...cat,
        skills: filteredSkills
      };
    })
    .filter(Boolean);

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
            <span>🛠</span> Technical Skills Matrix
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Core tech stack, AI frameworks, and engineering tools
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search skills (e.g. PyTorch, RAG)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/70 focus:border-teal-500 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 transition-all"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categoriesList.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  {categoryIcons[cat.name] || <Code2 className="w-5 h-5 text-teal-400" />}
                </div>
                <h3 className="text-lg font-bold text-slate-200">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 text-slate-200 text-xs font-mono font-medium hover:text-teal-300 transition-all cursor-default shadow-sm hover:scale-105"
                  >
                    ⚡ {skill}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 glass-panel rounded-2xl text-slate-400 text-sm">
            No skills matched your search query "{searchQuery}".
          </div>
        )}
      </div>
    </div>
  );
}
