import React, { useState, useEffect } from 'react';
import { blogs } from '../data/portfolioData';
import { BookOpen, ExternalLink, Bookmark, BookmarkCheck, StickyNote, Plus, Trash2 } from 'lucide-react';

export default function BlogsTab() {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('seerin_blog_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('seerin_blog_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const [activeNoteBlogId, setActiveNoteBlogId] = useState(null);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    localStorage.setItem('seerin_blog_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('seerin_blog_notes', JSON.stringify(notes));
  }, [notes]);

  const toggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const handleSaveNote = (blogId) => {
    if (!noteText.trim()) return;
    setNotes(prev => ({
      ...prev,
      [blogId]: noteText.trim()
    }));
    setActiveNoteBlogId(null);
    setNoteText('');
  };

  const handleDeleteNote = (blogId) => {
    setNotes(prev => {
      const copy = { ...prev };
      delete copy[blogId];
      return copy;
    });
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-100 flex items-center gap-3">
            <span>📝</span> Technical Writing & Publications
          </h2>
          <p className="text-slate-400 text-sm mt-1">Articles on Directional Stimulus Prompting, OCR benchmarks, and local PII redaction</p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono w-fit">
          <Bookmark className="w-4 h-4 text-teal-400" />
          <span>{bookmarks.length} Bookmarked</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => {
          const isBookmarked = bookmarks.includes(blog.id);
          const hasNote = !!notes[blog.id];
          const isNoteOpen = activeNoteBlogId === blog.id;

          return (
            <div
              key={blog.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-5 hover:border-teal-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-mono font-semibold">
                    {blog.category}
                  </span>

                  <button
                    onClick={() => toggleBookmark(blog.id)}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 transition-colors"
                    title={isBookmarked ? "Remove Bookmark" : "Bookmark Post"}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-teal-400" />
                    ) : (
                      <Bookmark className="w-4 h-4 text-slate-500 hover:text-slate-300" />
                    )}
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-100 leading-snug hover:text-teal-300 transition-colors">
                    <a href={blog.url} target="_blank" rel="noreferrer">
                      {blog.title}
                    </a>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    {blog.publisher} • {blog.year}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {blog.summary}
                </p>

                {/* LocalStorage Note Display */}
                {hasNote && (
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-teal-500/30 text-xs text-teal-200 space-y-1 relative">
                    <div className="flex items-center justify-between font-mono text-[10px] text-teal-400 font-bold">
                      <span className="flex items-center gap-1">
                        <StickyNote className="w-3 h-3" /> Saved Note (LocalStorage):
                      </span>
                      <button onClick={() => handleDeleteNote(blog.id)} className="text-slate-400 hover:text-rose-400">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="italic">{notes[blog.id]}</p>
                  </div>
                )}

                {/* Add Note Form */}
                {isNoteOpen && (
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <textarea
                      placeholder="Type your study note or reminder..."
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
                      rows={3}
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setActiveNoteBlogId(null)}
                        className="px-3 py-1 rounded-lg text-xs text-slate-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveNote(blog.id)}
                        className="px-3 py-1 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-800 hover:border-teal-500/30 transition-all"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {!hasNote && !isNoteOpen && (
                  <button
                    onClick={() => {
                      setActiveNoteBlogId(blog.id);
                      setNoteText('');
                    }}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
                    title="Add Personal Note"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
