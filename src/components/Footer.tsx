import React from 'react';
import { AlgoGeniusLogo } from './AlgoGeniusLogo';
import { GraduationCap, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#090e1a] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Charter (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <AlgoGeniusLogo variant="horizontal" size="md" theme="dark" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              AlgoGenius Institute of Artificial Intelligence & Data Science is a premier undergraduate and research institution dedicated to first-principles computer science, mathematical rigor, and frontier technology engineering.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                ABET & ACM Aligned Curriculum
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                Class of 2026-2030
              </span>
            </div>
          </div>

          {/* Col 2: Academic Divisions (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Academic Divisions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Department of Mathematical Foundations</li>
              <li>School of Algorithmic & Systems Engineering</li>
              <li>Center for Deep Learning & Foundation Models</li>
              <li>Autonomous Robotics & Edge Vision Laboratory</li>
              <li>Division of AI Ethics & Societal Governance</li>
            </ul>
          </div>

          {/* Col 3: Student Portals (2 cols) */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Student Portals
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Freshman Advising Cell</li>
              <li>Annual AI Innovation Expo</li>
              <li>Corporate Placement Office</li>
              <li>LaTeX Research Repository</li>
              <li>Alumni Mentorship Network</li>
            </ul>
          </div>

          {/* Col 4: Campus Information (2 cols) */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Academic Center
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Computing Science Quadrangle, AlgoGenius Campus</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>admissions@algogenius.edu</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>portal.algogenius.edu</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 AlgoGenius Institute of Artificial Intelligence. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Academic Honor Code</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-400 transition-colors">Curriculum Licensing</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-400 transition-colors">Institutional Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
