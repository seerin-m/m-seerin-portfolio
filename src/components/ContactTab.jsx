import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, History, Trash2, Github, Linkedin } from 'lucide-react';

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submittedMessages, setSubmittedMessages] = useState(() => {
    const saved = localStorage.getItem('seerin_contact_messages');
    return saved ? JSON.parse(saved) : [];
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('seerin_contact_messages', JSON.stringify(submittedMessages));
  }, [submittedMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newMessage = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toLocaleString()
    };

    setSubmittedMessages(prev => [newMessage, ...prev]);
    setSubmittedSuccess(true);

    // Form reset
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 4000);
  };

  const deleteMessageHistory = (id) => {
    setSubmittedMessages(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
          <span>📞</span> Get In Touch
        </h2>
        <p className="text-slate-400 text-sm mt-1">Let's discuss AI/ML opportunities, voice agent development, or technical research</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-100">Direct Channels</h3>
            
            <div className="space-y-4">
              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">EMAIL ADDRESS</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                    {personalDetails.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">PHONE NUMBER</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {personalDetails.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">LOCATION</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {personalDetails.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 block uppercase">Professional Networks</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-200 text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4 text-teal-400" /> GitHub
                </a>

                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-200 text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4 text-teal-400" /> LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Form & LocalStorage Submission History */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-100">Send a Message</h3>

            {submittedSuccess && (
              <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-200 text-xs flex items-center gap-3 font-mono">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Thank you! Your message has been saved to LocalStorage history & dispatched.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  placeholder="AI/ML Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Seerin, I would love to connect regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl p-4 text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Store Local Message</span>
              </button>
            </form>
          </div>

          {/* LocalStorage Sent Messages Log */}
          {submittedMessages.length > 0 && (
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 font-mono">
                  <History className="w-4 h-4 text-teal-400" />
                  <span>LocalStorage Sent Log ({submittedMessages.length})</span>
                </h4>
              </div>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {submittedMessages.map((msg) => (
                  <div key={msg.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs text-slate-300 relative">
                    <div className="flex items-center justify-between font-mono text-[10px] text-teal-400">
                      <span>{msg.name} ({msg.email})</span>
                      <div className="flex items-center gap-2">
                        <span>{msg.timestamp}</span>
                        <button onClick={() => deleteMessageHistory(msg.id)} className="text-slate-500 hover:text-rose-400">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    {msg.subject && <div className="font-semibold text-slate-200">{msg.subject}</div>}
                    <p className="text-slate-400">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
