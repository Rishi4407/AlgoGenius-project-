import React from 'react';
import { AlgoGeniusLogo } from './AlgoGeniusLogo';
import { Sparkles, Download, BookOpen, GraduationCap } from 'lucide-react';

interface TopNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCompassModal: () => void;
  onDownloadPlan: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCompassModal,
  onDownloadPlan
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b1120]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single Brand Element */}
        <a 
          href="#top" 
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('roadmap');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1"
        >
          <AlgoGeniusLogo variant="horizontal" size="md" theme="dark" />
        </a>

        {/* Zone 2: 4-6 Nav Links (Single-line, quiet typography) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              activeTab === 'roadmap' ? 'text-blue-400 font-semibold border-b-2 border-blue-500' : 'hover:text-white'
            }`}
          >
            4-Year Roadmap
          </button>
          
          <button
            onClick={() => setActiveTab('exhibition')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              activeTab === 'exhibition' ? 'text-blue-400 font-semibold border-b-2 border-blue-500' : 'hover:text-white'
            }`}
          >
            Year 3 Expo Vault
          </button>

          <button
            onClick={() => setActiveTab('placements')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              activeTab === 'placements' ? 'text-blue-400 font-semibold border-b-2 border-blue-500' : 'hover:text-white'
            }`}
          >
            Year 4 Placement Matrix
          </button>

          <button
            onClick={() => setActiveTab('resources')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              activeTab === 'resources' ? 'text-blue-400 font-semibold border-b-2 border-blue-500' : 'hover:text-white'
            }`}
          >
            Reference Library
          </button>

          <button
            onClick={onOpenCompassModal}
            className="transition-colors hover:text-white whitespace-nowrap cursor-pointer flex items-center gap-1.5 py-1 text-slate-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Readiness Compass</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDownloadPlan}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Export 4-Year Academic Syllabus & Checklist"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>Export Syllabus</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('roadmap');
              const el = document.getElementById('director-message');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all whitespace-nowrap cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Director's Desk</span>
          </button>
        </div>

      </div>
    </header>
  );
};
