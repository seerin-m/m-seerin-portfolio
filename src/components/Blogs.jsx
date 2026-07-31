import React, { useState } from 'react';
import { defaultBlogs } from '../data/portfolioData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Icon from './Icon';

export default function Blogs() {
  const [blogs, setBlogs] = useLocalStorage('seerin_spa_blogs', defaultBlogs);
  const [expandedId, setExpandedId] = useState(null);
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', content: '' });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.excerpt || !newPost.content) return;

    const post = {
      id: `post-${Date.now()}`,
      title: newPost.title,
      date: new Date().toISOString().split('T')[0],
      excerpt: newPost.excerpt,
      content: newPost.content,
      author: 'M Seerin',
      readTime: '3 min read'
    };

    setBlogs([post, ...blogs]);
    setNewPost({ title: '', excerpt: '', content: '' });
    setShowDraftModal(false);
  };

  const handleDeletePost = (id) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  return (
    <section id="blogs" className="py-20 border-t border-sage-800/40">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono text-sand-400 uppercase tracking-widest">TECHNICAL WRITING</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-100 flex items-center gap-3">
              <span>📝</span> Blogs & Research
            </h2>
          </div>

          <button
            onClick={() => setShowDraftModal(true)}
            className="px-4 py-2.5 rounded-full bg-sand-400/15 hover:bg-sand-400/25 border border-sand-400/30 text-sand-300 text-xs font-mono font-semibold flex items-center gap-2 transition-all w-fit"
          >
            <Icon name="Plus" className="w-4 h-4 text-sand-400" />
            <span>Write New Blog (LocalStorage)</span>
          </button>
        </div>

        {/* Create Post Modal / Form Drawer */}
        {showDraftModal && (
          <div className="spa-card p-6 sm:p-8 rounded-3xl border border-sand-400/40 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-sage-800 pb-3">
              <h3 className="font-serif text-lg font-bold text-sand-300">Draft New Technical Post</h3>
              <button onClick={() => setShowDraftModal(false)} className="text-sage-400 hover:text-white">
                <Icon name="X" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <input
                type="text"
                placeholder="Article Title..."
                required
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full bg-sage-900 border border-sage-800 focus:border-sand-400 rounded-xl px-4 py-2 text-xs text-sage-100 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Short Excerpt..."
                required
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                className="w-full bg-sage-900 border border-sage-800 focus:border-sand-400 rounded-xl px-4 py-2 text-xs text-sage-100 focus:outline-none"
              />
              <textarea
                placeholder="Full Article Content (Markdown or plain text)..."
                required
                rows={5}
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full bg-sage-900 border border-sage-800 focus:border-sand-400 rounded-xl p-4 text-xs text-sage-100 focus:outline-none"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowDraftModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-sage-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-sand-400 to-sand-500 text-sage-950 font-bold text-xs shadow-md"
                >
                  Publish & Store Locally
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Blog Posts List */}
        <div className="space-y-6">
          {blogs.map((post) => {
            const isExpanded = expandedId === post.id;

            return (
              <div
                key={post.id}
                className="spa-card p-6 sm:p-8 rounded-3xl border border-sage-800/80 space-y-4 hover:border-sand-400/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sage-800/80 pb-3">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-sage-100">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono text-sage-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime || '4 min read'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleExpand(post.id)}
                      className="px-4 py-1.5 rounded-full bg-sage-900 hover:bg-sand-400/20 text-sand-300 text-xs font-mono border border-sage-800 hover:border-sand-400/30 transition-all flex items-center gap-1.5"
                    >
                      <span>{isExpanded ? "Collapse" : "Read More"}</span>
                      <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} className="w-4 h-4 text-sand-400" />
                    </button>

                    {blogs.length > 1 && (
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 rounded-full text-sage-500 hover:text-rose-400 transition-colors"
                        title="Delete Post"
                      >
                        <Icon name="Trash2" className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-sage-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Expanded Content View */}
                {isExpanded && (
                  <div className="pt-4 border-t border-sage-800/80 text-sage-200 text-sm leading-relaxed whitespace-pre-line font-sans space-y-3 animate-fade-in">
                    {post.content}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
