import React, { useState } from 'react';
import { CAPSTONE_SHOWCASE_PROJECTS } from '../data/roadmapData';
import { CapstoneProject } from '../types/roadmap';
import { 
  Award, 
  ExternalLink, 
  Github, 
  Users, 
  Calendar, 
  CheckCircle, 
  Cpu, 
  Sparkles, 
  Presentation, 
  MapPin, 
  TrendingUp, 
  Star,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ExhibitionShowcaseProps {
  heroImage: string;
}

export const ExhibitionShowcase: React.FC<ExhibitionShowcaseProps> = ({ heroImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<CapstoneProject | null>(CAPSTONE_SHOWCASE_PROJECTS[0]);

  const categories = [
    { id: 'all', label: 'All Capstone Systems' },
    { id: 'healthcare', label: 'Healthcare & Vision' },
    { id: 'robotics', label: 'Robotics & Autonomy' },
    { id: 'llm', label: 'Generative AI & Agents' },
    { id: 'fintech', label: 'Fintech & Quant' }
  ];

  const filteredProjects = CAPSTONE_SHOWCASE_PROJECTS.filter((proj) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'healthcare') return proj.category.includes('Healthcare');
    if (selectedCategory === 'robotics') return proj.category.includes('Robotics');
    if (selectedCategory === 'llm') return proj.category.includes('Generative') || proj.category.includes('LLM');
    if (selectedCategory === 'fintech') return proj.category.includes('Fintech');
    return true;
  });

  return (
    <div className="py-10 space-y-12">
      
      {/* Expo Hero Banner */}
      <div className="rounded-2xl border border-blue-900/50 bg-[#0c1427] p-8 lg:p-10 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>Junior Year Capstone Showcase</span>
              <span aria-hidden="true">·</span>
              <span>Annual Innovation Expo</span>
              <span aria-hidden="true">·</span>
              <span>May 18-20, 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              The AlgoGenius AI Innovation Expo & Demo Day
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              In Year 3, theoretical models transition into living, production-hardened systems. 
              Our junior students build enterprise-grade artificial intelligence artifacts, defend their mathematics before 
              an esteemed jury of Silicon Valley leaders, and pitch to venture capital syndicates for seed backing.
            </p>

            {/* Expo Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-white tabular-nums">48+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Live Booth Demos</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-blue-400 tabular-nums">120+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Visiting Tech Firms</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums">$250k</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Seed Grant Pool</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative">
              <img 
                src={heroImage} 
                alt="AlgoGenius AI Student Exhibition Hall" 
                className="w-full h-64 sm:h-72 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="font-semibold text-white">Main Exhibition Atrium</span>
                <span className="text-[11px] text-blue-400 font-mono">Live Demonstrations</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Expo Agenda & Judging Protocol */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-mono text-blue-400 font-bold mb-1">09:00 - 11:30 AM</div>
          <h4 className="text-sm font-bold text-white">Stage 1: Keynote & Key Metrics</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Opening remarks by Director Dr. Raymond Vance and guest keynote by OpenAI Research Directors.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-mono text-blue-400 font-bold mb-1">11:30 - 02:30 PM</div>
          <h4 className="text-sm font-bold text-white">Stage 2: Live Booth Demonstrations</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Public hands-on testing of models, robotic flight arenas, edge vision testers, and inference benchmarks.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-mono text-blue-400 font-bold mb-1">02:30 - 05:00 PM</div>
          <h4 className="text-sm font-bold text-white">Stage 3: Jury Cross-Examination</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Rigorous technical defense of latency budgets, ablation studies, and architectural choices before senior judges.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-mono text-blue-400 font-bold mb-1">05:00 - 08:00 PM</div>
          <h4 className="text-sm font-bold text-white">Stage 4: VIP Networking & Offers</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Closed-door networking reception connecting junior teams directly with recruitment partners and VC partners.
          </p>
        </div>
      </div>

      {/* Filter Tabs (Interactive Functional Controls) */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white">
            Exemplary Junior Year Capstone Systems
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Click on any project to inspect its architecture, hardware booth, and industry mentor.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => {
          const isSelected = activeProject?.id === proj.id;
          return (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer bg-slate-900/80 flex flex-col justify-between ${
                isSelected
                  ? 'border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/50'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header Metadata (Clean unboxed text) */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-semibold">{proj.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">{proj.team}</span>
                  </div>
                  {proj.githubStars && (
                    <div className="flex items-center gap-1 text-slate-300 font-mono text-[11px]">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{proj.githubStars.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Project Title */}
                <h4 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {proj.title}
                </h4>

                {/* Abstract */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {proj.abstract}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Demonstration Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {proj.demonstrationHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: Award, Mentor, Booth */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                {proj.award && (
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{proj.award}</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{proj.exhibitionBooth}</span>
                  </div>
                  <div className="truncate max-w-[200px]" title={proj.mentor}>
                    Mentor: {proj.mentor}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
