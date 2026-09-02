import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Clock3, X } from 'lucide-react';
import blogPosts from '../data/blogPosts';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${date}T00:00:00`));

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="relative min-h-screen pt-36 pb-20 bg-[#050505] flex flex-col justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-block border border-white/20 bg-black/40 px-3 py-1 text-[10px] tracking-widest font-mono text-gray-300 uppercase">
            Daily Notes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF2A2A]">
            Blogs
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Practical notes about data science, analytics, machine learning and the projects I build.
          </p>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card-glow rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 flex flex-col justify-between gap-8 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl border border-white/10"
              />
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full border border-red-500/25 bg-red-500/10 text-[11px] font-medium text-red-300">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                    <Clock3 className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CalendarDays className="w-4 h-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-red-400 transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md p-4 md:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-dialog-title"
          onClick={() => setSelectedPost(null)}
        >
          <article
            className="relative max-w-3xl mx-auto my-8 rounded-2xl border border-white/15 bg-[#0b0b0b] p-6 md:p-10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close article"
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-12 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full border border-red-500/25 bg-red-500/10 text-xs font-medium text-red-300">
                {selectedPost.category}
              </span>
              <h2 id="blog-dialog-title" className="text-3xl md:text-5xl font-black text-white leading-tight">
                {selectedPost.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {formatDate(selectedPost.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 className="w-4 h-4" />
                  {selectedPost.readTime}
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-5 text-base text-gray-300 font-light leading-8">
              {selectedPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default Blog;
