import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Icon from './Icon';

export default function Contact() {
  const [submissions, setSubmissions] = useLocalStorage('seerin_spa_contact_submissions', []);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const entry = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toLocaleString()
    };

    setSubmissions([entry, ...submissions]);
    setFormData({ name: '', email: '', message: '' });
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  const handleDeleteSubmission = (id) => {
    setSubmissions(submissions.filter(s => s.id !== id));
  };

  return (
    <section id="contact" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center justify-center gap-3">
            <span>📞</span> Contact Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sand-400 to-transparent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 spa-card p-8 rounded-3xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-sand-300">Direct Communication</h3>
            
            <div className="space-y-4 text-xs font-mono">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-sage-900/80 border border-sage-800 hover:border-sand-400/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-sand-400/10 text-sand-300 border border-sand-400/30 group-hover:scale-105 transition-transform">
                  <Icon name="Mail" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sage-500 block">EMAIL ADDRESS</span>
                  <span className="text-sage-200 group-hover:text-sand-300 font-semibold">{personalInfo.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-900/80 border border-sage-800">
                <div className="p-3 rounded-xl bg-sand-400/10 text-sand-300 border border-sand-400/30">
                  <Icon name="Phone" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sage-500 block">PHONE</span>
                  <span className="text-sage-200 font-semibold">{personalInfo.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-900/80 border border-sage-800">
                <div className="p-3 rounded-xl bg-sand-400/10 text-sand-300 border border-sand-400/30">
                  <Icon name="MapPin" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sage-500 block">LOCATION</span>
                  <span className="text-sage-200 font-semibold">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sage-800/80 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="py-3 rounded-xl bg-sage-900 hover:bg-sand-400/20 text-sand-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-sage-800 transition-all"
              >
                <Icon name="Github" className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="py-3 rounded-xl bg-sage-900 hover:bg-sand-400/20 text-sand-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-sage-800 transition-all"
              >
                <Icon name="Linkedin" className="w-4 h-4" /> LinkedIn
              </a>
            </div>

          </div>

          {/* Form & Saved Submissions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="spa-card p-8 rounded-3xl space-y-6 border border-sage-800">
              <h3 className="font-serif text-xl font-bold text-sage-100">Send a Peaceful Note</h3>

              {successMsg && (
                <div className="p-4 rounded-2xl bg-sand-400/20 border border-sand-400/40 text-sand-200 text-xs flex items-center gap-3 font-mono animate-fade-in">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-sand-400 shrink-0" />
                  <span>Message saved safely to LocalStorage history!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-sage-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-sage-900 border border-sage-800 focus:border-sand-400 rounded-xl px-4 py-2.5 text-xs text-sage-100 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-sage-400">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-sage-900 border border-sage-800 focus:border-sand-400 rounded-xl px-4 py-2.5 text-xs text-sage-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-sage-400">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your note..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-sage-900 border border-sage-800 focus:border-sand-400 rounded-xl p-4 text-xs text-sage-100 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-sage-950 font-bold text-sm shadow-xl shadow-sand-500/15 hover:shadow-sand-500/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="Send" className="w-4 h-4" />
                  <span>Send Message (Persist in LocalStorage)</span>
                </button>
              </form>
            </div>

            {/* LocalStorage History */}
            {submissions.length > 0 && (
              <div className="spa-card p-6 rounded-3xl border border-sage-800 space-y-3">
                <h4 className="text-xs font-mono font-bold text-sand-400 uppercase tracking-widest flex items-center gap-2">
                  <Icon name="History" className="w-4 h-4" />
                  <span>Submitted Messages ({submissions.length})</span>
                </h4>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="p-3 rounded-xl bg-sage-900 border border-sage-800 text-xs text-sage-300 space-y-1 relative">
                      <div className="flex items-center justify-between font-mono text-[10px] text-sand-400">
                        <span>{sub.name} ({sub.email})</span>
                        <div className="flex items-center gap-2">
                          <span>{sub.timestamp}</span>
                          <button onClick={() => handleDeleteSubmission(sub.id)} className="text-sage-500 hover:text-rose-400">
                            <Icon name="Trash2" className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <p>{sub.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
