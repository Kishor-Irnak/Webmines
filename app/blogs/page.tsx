"use client";

import React, { useState, useMemo } from "react";
import { posts, Post } from "@/data/blog-data";
import { Search, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Dynamically derive categories from data
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(posts.map((post) => post.category))];
    return cats;
  }, []);

  // Filter posts based on search query and active category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Full Post View
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white font-sans selection:bg-white selection:text-[#1A1A1A]">
        {/* Navigation Bar for Full Post */}
        <div className="sticky top-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>Back to Blogs</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Return Home</span>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
              <Home className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <div className="mb-10 text-center">
            <span className="text-zinc-500 font-semibold uppercase tracking-wider text-xs mb-4 block">
              {selectedPost.category} • {selectedPost.readTime}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] tracking-tight mb-8">
              {selectedPost.title}
            </h1>
          </div>

          <div className="w-full aspect-video overflow-hidden rounded-3xl bg-zinc-900 mb-12">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed space-y-6">
            <p className="text-xl text-zinc-200 font-light leading-relaxed">
              This is a placeholder for the complete content of the blog post
              titled "{selectedPost.title}". In a fully functional application,
              this area would be populated with rich text content, images, blockquotes,
              and code snippets fetched from your CMS or API.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-serif text-white mt-12 mb-6">
              A Deeper Dive
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <blockquote className="border-l-2 border-white/20 pl-6 my-8 italic text-zinc-400 text-xl font-serif">
              "Design is not just what it looks like and feels like. Design is
              how it works." - Steve Jobs
            </blockquote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </article>
      </div>
    );
  }

  // Grid View
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans selection:bg-white selection:text-[#1A1A1A] relative">
      {/* Top Left Navigation - Return Home */}
      <Link
        href="/"
        className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group z-20"
      >
        <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span>Back to Home</span>
      </Link>

      <main className="max-w-[1400px] mx-auto px-6 py-24 md:px-12 md:py-32">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-sans font-medium tracking-tight mb-6">
              Insights & <br /> Perspectives
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-lg leading-relaxed">
              Diving deep into the intersection of design, technology, and
              human experience.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-zinc-800 rounded-full py-3.5 pl-12 pr-6 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
        </div>

        {/* Navigation / Filter Bar */}
        <nav className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-[#1A1A1A] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  : "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Masonry-style Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group flex flex-col bg-[#0a0a0a] border border-zinc-900/60 rounded-3xl p-3 hover:bg-[#111111] hover:border-zinc-800 transition-all duration-300 cursor-pointer"
              >
                {/* Card Image Container */}
                <div className="relative w-full aspect-[4/2.6] overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Content Container */}
                <div className="flex flex-col grow px-3 pt-6 pb-4">
                  <h2 className="font-serif text-[1.35rem] leading-[1.3] tracking-tight text-zinc-100 mb-6 group-hover:text-white transition-colors">
                    {post.title}
                  </h2>

                  {/* Card Meta */}
                  <div className="mt-auto flex items-center text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                    <span className="text-zinc-400">{post.category}</span>
                    <span className="mx-3 text-zinc-800">|</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
              <p className="text-zinc-500 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
