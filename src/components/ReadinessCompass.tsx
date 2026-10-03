import React, { useState } from 'react';
import { Sparkles, X, CheckCircle, ArrowRight, ShieldAlert, Award } from 'lucide-react';

interface ReadinessCompassProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectYear: (yearNumber: 1 | 2 | 3 | 4) => void;
}

export const ReadinessCompass: React.FC<ReadinessCompassProps> = ({
  isOpen,
  onClose,
  onSelectYear
}) => {
  const [currentYearFocus, setCurrentYearFocus] = useState<1 | 2 | 3 | 4>(1);
  
  // 5 Pillars scoring (1 to 5)
  const [scores, setScores] = useState({
    math: 3,
    algorithms: 2,
    deepLearning: 1,
    systems: 2,
    communication: 4
  });

  if (!isOpen) return null;

  const totalScore = Math.round(
    ((scores.math + scores.algorithms + scores.deepLearning + scores.systems + scores.communication) / 25) * 100
  );

  const getReadinessTier = (score: number) => {
    if (score >= 80) return { title: 'Frontier AI Specialist', color: 'text-emerald-400', desc: 'Ready for high-complexity research papers and Tier-1 ML interview loops.' };
    if (score >= 60) return { title: 'Competent System Builder', color: 'text-blue-400', desc: 'Strong foundations in place. Focus on large-scale capstone execution and hard algorithms.' };
    if (score >= 40) return { title: 'Emerging Apprentice', color: 'text-amber-400', desc: 'Accelerating nicely through Year 1 & 2 foundations. Prioritize data structures and linear algebra.' };
    return { title: 'First-Year Initiate', color: 'text-purple-400', desc: 'Prime beginning phase. Focus on mathematical derivations, Linux shell, and continuous Python practice.' };
  };

  const tier = getReadinessTier(totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0d1627] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close diagnostic compass"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Personalized AI Diagnostic Matrix</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            AlgoGenius AI Readiness Compass
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Assess your current technical and communicative foundations across the 5 core pillars of the 4-year curriculum.
          </p>
        </div>

        {/* Target Academic Stage Selector */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs font-semibold text-slate-300">My Target Academic Year:</span>
          <div className="flex items-center gap-1">
            {([1, 2, 3, 4] as const).map((yr) => (
              <button
                key={yr}
                onClick={() => setCurrentYearFocus(yr)}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                  currentYearFocus === yr
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Year {yr}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Pillars Sliders */}
        <div className="space-y-4">
          
          {/* 1. Mathematics & Optimization */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200">1. Mathematical & Optimization Foundations</span>
              <span className="font-mono text-blue-400 font-bold tabular-nums">Level {scores.math} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={scores.math}
              onChange={(e) => setScores({ ...scores, math: parseInt(e.target.value) })}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Basic Algebra</span>
              <span>Eigenvalues & SVD</span>
              <span>Convex Optimization & Hessians</span>
            </div>
          </div>

          {/* 2. Python & Algorithms */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200">2. Python & Algorithmic Engineering</span>
              <span className="font-mono text-blue-400 font-bold tabular-nums">Level {scores.algorithms} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={scores.algorithms}
              onChange={(e) => setScores({ ...scores, algorithms: parseInt(e.target.value) })}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Basic Scripts</span>
              <span>Trees, Graphs & Big-O</span>
              <span>LeetCode Hard & Vectorized SIMD</span>
            </div>
          </div>

          {/* 3. ML & Deep Learning */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200">3. Machine Learning & Deep Learning Core</span>
              <span className="font-mono text-blue-400 font-bold tabular-nums">Level {scores.deepLearning} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={scores.deepLearning}
              onChange={(e) => setScores({ ...scores, deepLearning: parseInt(e.target.value) })}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Scikit-Learn Basics</span>
              <span>PyTorch & Transformers</span>
              <span>Custom CUDA Kernels & LLM Pretraining</span>
            </div>
          </div>

          {/* 4. Systems & MLOps */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200">4. Production Systems & MLOps Infrastructure</span>
              <span className="font-mono text-blue-400 font-bold tabular-nums">Level {scores.systems} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={scores.systems}
              onChange={(e) => setScores({ ...scores, systems: parseInt(e.target.value) })}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Local Jupyter</span>
              <span>Docker & FastAPI</span>
              <span>TensorRT, Triton & Distributed Clusters</span>
            </div>
          </div>

          {/* 5. Communication */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200">5. Technical Communication & Leadership</span>
              <span className="font-mono text-blue-400 font-bold tabular-nums">Level {scores.communication} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={scores.communication}
              onChange={(e) => setScores({ ...scores, communication: parseInt(e.target.value) })}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Casual Writing</span>
              <span>LaTeX & Pitch Talks</span>
              <span>Peer-Review Defense & STAR Master</span>
            </div>
          </div>

        </div>

        {/* Diagnostic Score Output Card */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Readiness Assessment Score
            </div>
            <div className={`text-lg font-bold ${tier.color}`}>
              {tier.title}
            </div>
            <p className="text-xs text-slate-300 max-w-sm">
              {tier.desc}
            </p>
          </div>

          <div className="text-right shrink-0">
            <div className="text-3xl font-extrabold font-mono text-white tabular-nums">
              {totalScore}%
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Institute Index</div>
          </div>
        </div>

        {/* Recommended Action Plan */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onSelectYear(currentYearFocus);
              onClose();
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all cursor-pointer"
          >
            <span>Navigate to Year {currentYearFocus} Recommended Syllabus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
