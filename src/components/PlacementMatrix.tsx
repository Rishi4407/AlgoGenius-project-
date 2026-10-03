import React, { useState } from 'react';
import { PLACEMENT_PARTNERS, MOCK_INTERVIEW_QUESTIONS } from '../data/roadmapData';
import { InterviewQuestion } from '../types/roadmap';
import { 
  Briefcase, 
  DollarSign, 
  Terminal, 
  Layers, 
  CheckCircle, 
  Brain, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Target, 
  Building2,
  FileCheck2
} from 'lucide-react';

interface PlacementMatrixProps {
  heroImage: string;
}

export const PlacementMatrix: React.FC<PlacementMatrixProps> = ({ heroImage }) => {
  const [activeQuestionTab, setActiveQuestionTab] = useState<'all' | 'algorithm' | 'ml_system_design' | 'ml_theory' | 'behavioral'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(MOCK_INTERVIEW_QUESTIONS[0].id);
  const [selectedPartnerTier, setSelectedPartnerTier] = useState<string>('All');

  const tiers = ['All', 'FAANG / Frontier Labs', 'Autonomous Tech & Robotics', 'Quant & Fintech', 'AI Enterprise & Cloud'];

  const filteredPartners = PLACEMENT_PARTNERS.filter((partner) => {
    if (selectedPartnerTier === 'All') return true;
    return partner.hiringTier === selectedPartnerTier;
  });

  const filteredQuestions = MOCK_INTERVIEW_QUESTIONS.filter((q) => {
    if (activeQuestionTab === 'all') return true;
    return q.type === activeQuestionTab;
  });

  return (
    <div className="py-10 space-y-12">
      
      {/* Year 4 Placement Banner */}
      <div className="rounded-2xl border border-emerald-900/40 bg-[#0c1926] p-8 lg:p-10 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <span>Senior Year Placement Blueprint</span>
              <span aria-hidden="true">·</span>
              <span>100% Industry Placement Track</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2026-2030</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Top Tech Firm Placements & High-Stakes Interview Preparation
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              Senior year represents the decisive bridge into Tier-1 industry and research organizations. 
              Our Corporate Placement Cell runs rigorous technical bootcamps covering large-scale ML system design, 
              LeetCode Hard problem solving, deep learning mathematical whiteboard defenses, and executive leadership bar-raisers.
            </p>

            {/* Quick Proof Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums">$265k</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Average Total Comp</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-white tabular-nums">98.4%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Offer Prior to Grad</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-blue-400 tabular-nums">3.4</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Avg Offers / Senior</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative">
              <img 
                src={heroImage} 
                alt="AlgoGenius AI Senior Placement Recruitment" 
                className="w-full h-64 sm:h-72 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="font-semibold text-white">Campus Interview Pavillion</span>
                <span className="text-[11px] text-emerald-400 font-mono">Day 0 On-Campus Recruiting</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Stage Interview Loop Breakdown */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white">
            The 4-Stage Technical Interview Architecture
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Every senior undergoes proctored drills across each of the four standard assessment pillars used by FAANG, OpenAI, and hedge funds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>
            <h4 className="text-sm font-bold text-white">Algorithmic Problem Solving</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              45-minute live coding in CoderPad. Trees, Graphs, Dynamic Programming, Complexity derivations, and boundary condition handling.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>
            <h4 className="text-sm font-bold text-white">ML System Design (Scale)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing petabyte-scale recommenders, search ranking, two-tower embedding retrieval, feature stores, and low-latency LLM serving.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm">
              03
            </div>
            <h4 className="text-sm font-bold text-white">DL Theory & Math Defense</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whiteboard derivations of loss functions, backprop through attention tensors, Chinchilla scaling arithmetic, and optimization failures.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
              04
            </div>
            <h4 className="text-sm font-bold text-white">Behavioral & Bar-Raiser</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              STAR method leadership stories: handling architectural conflict, managing failure, taking extreme ownership, and compensation negotiation.
            </p>
          </div>
        </div>
      </div>

      {/* Top Tech Firms Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-xl font-bold text-white">
              Official Placement Partner Roster
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Direct recruitment relationships with on-campus interview privileges.
            </p>
          </div>

          {/* Tier Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 overflow-x-auto">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedPartnerTier(t)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedPartnerTier === t
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPartners.map((partner, pIdx) => (
            <div
              key={pIdx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-black text-sm">
                    {partner.logoInitial}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    {partner.avgPackage}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">{partner.name}</h4>
                  <div className="text-[11px] text-blue-400 font-medium">{partner.hiringTier}</div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    Roles Recruited:
                  </span>
                  <div className="text-xs text-slate-300 font-medium">
                    {partner.rolesHired.join(', ')}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    Primary Technical Domains:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {partner.topDomains.map((d, dIdx) => (
                      <span key={dIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                <span className="text-slate-500">Typical Interview:</span> {partner.interviewFormat.slice(0, 2).join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Mock Interview Question Bank */}
      <div className="space-y-6 pt-4 border-t border-slate-800">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Interactive Preparation Laboratory
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Curated Senior Interview Question Bank & Deconstructions
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select questions to examine the structural breakdown, algorithmic code, and scoring rubric.
            </p>
          </div>

          {/* Question Type Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveQuestionTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeQuestionTab === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setActiveQuestionTab('ml_system_design')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeQuestionTab === 'ml_system_design' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              ML System Design
            </button>
            <button
              onClick={() => setActiveQuestionTab('algorithm')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeQuestionTab === 'algorithm' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Coding & Algorithms
            </button>
            <button
              onClick={() => setActiveQuestionTab('ml_theory')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeQuestionTab === 'ml_theory' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              ML Theory
            </button>
            <button
              onClick={() => setActiveQuestionTab('behavioral')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeQuestionTab === 'behavioral' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Behavioral
            </button>
          </div>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-4">
          {filteredQuestions.map((q: InterviewQuestion) => {
            const isExpanded = expandedQuestionId === q.id;
            return (
              <div
                key={q.id}
                className={`rounded-2xl border transition-all bg-slate-900/80 overflow-hidden ${
                  isExpanded ? 'border-emerald-500/60 shadow-lg' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Question Header */}
                <div
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                        {q.type.replace('_', ' ')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{q.difficulty}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-500">{q.context}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {q.question}
                    </h4>
                  </div>

                  <button className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Question Solution Body */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-slate-950/80 border-t border-slate-800 space-y-5">
                    
                    {/* Key Concepts */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Competency Concepts Required
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {q.keyConcepts.map((kc, kIdx) => (
                          <span key={kIdx} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">
                            {kc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Solution Breakdown */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                        Comprehensive Architectural & Mathematical Solution
                      </h5>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 text-xs sm:text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                        {q.solutionBreakdown}
                      </div>
                    </div>

                    {/* Code Snippet if applicable */}
                    {q.codeSnippet && (
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Optimal Reference Implementation</span>
                        </h5>
                        <pre className="p-4 rounded-xl bg-[#090d16] border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                          {q.codeSnippet}
                        </pre>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
