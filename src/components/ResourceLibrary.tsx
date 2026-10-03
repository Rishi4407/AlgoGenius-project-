import React, { useState } from 'react';
import { CURATED_RESOURCES } from '../data/roadmapData';
import { ResourceItem } from '../types/roadmap';
import { Search, BookOpen, ExternalLink, Video, FileText, Github, Filter } from 'lucide-react';

export const ResourceLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const categories = ['All', 'Foundational Papers', 'University Lecture Series', 'Textbooks & Guides', 'GitHub Repositories'];
  const years = ['All', 'Year 1', 'Year 2', 'Year 3', 'Year 4'];

  const filteredResources = CURATED_RESOURCES.filter((res: ResourceItem) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.authorOrInstitution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tag.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesYear =
      selectedYear === 'All' ||
      (selectedYear === 'Year 1' && res.targetYear === 1) ||
      (selectedYear === 'Year 2' && res.targetYear === 2) ||
      (selectedYear === 'Year 3' && res.targetYear === 3) ||
      (selectedYear === 'Year 4' && res.targetYear === 4) ||
      res.targetYear === 'All';

    return matchesSearch && matchesCategory && matchesYear;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Foundational Papers': return <FileText className="w-4 h-4 text-blue-400" />;
      case 'University Lecture Series': return <Video className="w-4 h-4 text-emerald-400" />;
      case 'Textbooks & Guides': return <BookOpen className="w-4 h-4 text-amber-400" />;
      case 'GitHub Repositories': return <Github className="w-4 h-4 text-purple-400" />;
      default: return <FileText className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="py-10 space-y-8">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          <span>AlgoGenius Academic Repository</span>
          <span aria-hidden="true">·</span>
          <span>Open Research Archives</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Curated Literature, Video Lectures & Implementation Repositories
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
          The essential canon: peer-reviewed research papers, Stanford and MIT open lectures, foundational textbooks, 
          and production-grade GitHub codebases referenced throughout the 4-year curriculum.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers, textbooks, authors, topics (e.g. Attention, Strang, vLLM)..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Category & Year Selectors */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedYear === y ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((res: ResourceItem) => (
          <div
            key={res.id}
            className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Category and Target Year */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5 font-medium">
                  {getCategoryIcon(res.category)}
                  <span className="text-slate-300">{res.category}</span>
                </div>
                <span className="font-mono text-blue-400 text-[11px]">
                  {res.targetYear === 'All' ? 'All Years' : `Year ${res.targetYear}`}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                {res.title}
              </h4>

              {/* Author / Source */}
              <div className="text-xs text-blue-400 font-medium">
                {res.authorOrInstitution}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {res.description}
              </p>
            </div>

            {/* Footer with tag & Link */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {res.tag}
              </span>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Accessing archive link for "${res.title}". Recommended reading for AlgoGenius scholars.`);
                }}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{res.linkText}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
