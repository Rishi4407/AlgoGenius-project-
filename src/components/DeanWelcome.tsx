import React, { useState } from 'react';
import { DIRECTOR_PROFILE } from '../data/roadmapData';
import { Play, Pause, Volume2, ShieldCheck, Award, Compass, Sparkles, BookCheck, ArrowRight } from 'lucide-react';

interface DeanWelcomeProps {
  onExploreYear: (year: 1 | 2 | 3 | 4) => void;
  campusHeroImage: string;
}

export const DeanWelcome: React.FC<DeanWelcomeProps> = ({ onExploreYear, campusHeroImage }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState<'convocation' | 'tenets' | 'freshmanAdvice'>('convocation');

  return (
    <section id="director-message" className="py-12 md:py-16 border-b border-slate-800/80 bg-[#0d1527]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Campus & Director Visual Anchor (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <img 
                src={campusHeroImage} 
                alt="AlgoGenius AI Institute Campus & Research Commons" 
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                  Institute of Artificial Intelligence
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  AlgoGenius Academic Pavillion
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  Where theoretical mathematics meets industrial-grade engineering
                </p>
              </div>
            </div>

            {/* Director Bio Card */}
            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/70">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-0.5 shrink-0 shadow-md">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                    RV
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">{DIRECTOR_PROFILE.name}</h4>
                  <p className="text-xs text-blue-400 font-medium">{DIRECTOR_PROFILE.role}</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{DIRECTOR_PROFILE.credentials}</p>
                </div>
              </div>

              {/* Simulated Convocation Audio Player */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={isPlayingAudio ? 'Pause Director Keynote' : 'Play Director Keynote'}
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">Freshman Convocation Keynote</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Volume2 className="w-3 h-3 text-blue-400" />
                      <span>{isPlayingAudio ? 'Playing Dean\'s Welcome (04:12)' : 'Listen to Dr. Vance (04:12)'}</span>
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-blue-400 font-semibold px-2 py-1 rounded bg-blue-950/60 border border-blue-800/40">
                  Audio Dispatch
                </span>
              </div>
            </div>

            {/* Metric Proof Adjacent */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <div className="text-2xl font-bold text-white font-mono tabular-nums">160</div>
                <div className="text-xs text-slate-400 mt-1">Rigorous Credit Units</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <div className="text-2xl font-bold text-blue-400 font-mono tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-1">Top Tech Placement Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: Director's Strategic Manifesto (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Lockup */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <span>Director's Welcome to 1st-Year Students</span>
                <span aria-hidden="true">·</span>
                <span>Class of 2026-2030</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance leading-tight">
                "The 4-Year Crucible: Forging World-Class AI Engineers from First Principles"
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 p-1 bg-slate-800/80 rounded-xl border border-slate-700/80 max-w-md">
              <button
                onClick={() => setActiveTab('convocation')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'convocation' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Director's Address
              </button>
              <button
                onClick={() => setActiveTab('tenets')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'tenets' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                4 Academic Pillars
              </button>
              <button
                onClick={() => setActiveTab('freshmanAdvice')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'freshmanAdvice' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Freshman Guidance
              </button>
            </div>

            {/* Address Content */}
            {activeTab === 'convocation' && (
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-200 font-medium">
                  "{DIRECTOR_PROFILE.quote}"
                </blockquote>
                
                <p>
                  As an incoming first-year student, you are joining AlgoGenius at an unprecedented inflection point in computing history. 
                  Every company on earth is attempting to deploy artificial intelligence, yet there is a profound shortage of engineers who 
                  truly comprehend <span className="text-white font-semibold">what happens beneath the abstraction layer</span>.
                </p>

                <p>
                  Over these four years, we do not train passive consumers of commercial APIs. We train <span className="text-blue-400 font-semibold">originators</span>:
                </p>

                {/* 4-Year Narrative Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div 
                    onClick={() => onExploreYear(1)} 
                    className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/80 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-400">Year 1: Foundations</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-300 mt-1 font-medium">Vector Spaces, Calculus & Scientific Writing</p>
                    <p className="text-[11px] text-slate-400 mt-1">Master discrete logic, matrix decompositions & peer debate.</p>
                  </div>

                  <div 
                    onClick={() => onExploreYear(2)} 
                    className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/80 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-400">Year 2: Algorithms & Python</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-300 mt-1 font-medium">Data Structures, Vector DBs & Kaggle</p>
                    <p className="text-[11px] text-slate-400 mt-1">Write optimized CPython, trees/graphs & classical ML.</p>
                  </div>

                  <div 
                    onClick={() => onExploreYear(3)} 
                    className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/80 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-400">Year 3: Projects & Exhibition</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-300 mt-1 font-medium">Deep Learning, Expo Day & Mentorship</p>
                    <p className="text-[11px] text-slate-400 mt-1">Build production models & showcase to tech executives.</p>
                  </div>

                  <div 
                    onClick={() => onExploreYear(4)} 
                    className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/80 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-400">Year 4: Placements & Launch</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-300 mt-1 font-medium">System Design, FAANG Rounds & Graduation</p>
                    <p className="text-[11px] text-slate-400 mt-1">Conquer rigorous coding loops & secure Tier-1 offers.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 4 Pillars Content */}
            {activeTab === 'tenets' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                {DIRECTOR_PROFILE.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/70">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Freshman Guidance Content */}
            {activeTab === 'freshmanAdvice' && (
              <div className="space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 text-slate-300 text-sm">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>The Dean's 5 Cardinal Rules for Freshman Year</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-400 border border-blue-700/40 flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">1</span>
                    <span><strong className="text-white">Learn to calculate gradients by hand.</strong> Before you run <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">loss.backward()</code>, derive the partial derivatives with paper and pencil.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-400 border border-blue-700/40 flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">2</span>
                    <span><strong className="text-white">Commit code daily to GitHub.</strong> Form an unbroken habit of public, documented, tested software engineering from Day 1.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-400 border border-blue-700/40 flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">3</span>
                    <span><strong className="text-white">Write and speak with precision.</strong> Communication is 50% of an AI engineer's leverage. Learn LaTeX and give weekly technical lightning talks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-400 border border-blue-700/40 flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">4</span>
                    <span><strong className="text-white">Embrace the Linux terminal.</strong> Ditch graphical tools for system configuration. Learn bash pipelines, SSH, tmux, and Vim.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-900/60 text-blue-400 border border-blue-700/40 flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">5</span>
                    <span><strong className="text-white">Build study alliances.</strong> Collaborate with peers on difficult proofs; the deepest insights are forged in peer debates.</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Direct Year 1 Call to Action */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onExploreYear(1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md hover:shadow-blue-500/25 transition-all cursor-pointer"
              >
                <BookCheck className="w-4 h-4" />
                <span>Begin Year 1 Curriculum Exploration</span>
              </button>
              
              <button
                onClick={() => onExploreYear(3)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-blue-400" />
                <span>Preview Year 3 AI Expo Projects</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
