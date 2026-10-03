import React from 'react';
import { YearPlan } from '../types/roadmap';
import { CheckCircle2, Calendar, BookOpen, Layers, Award, Briefcase } from 'lucide-react';

interface YearNavigatorProps {
  years: YearPlan[];
  selectedYearNumber: 1 | 2 | 3 | 4;
  onSelectYear: (yearNumber: 1 | 2 | 3 | 4) => void;
  selectedSemesterNumber: number;
  onSelectSemester: (semesterNumber: number) => void;
  completedCourseIds: string[];
}

export const YearNavigator: React.FC<YearNavigatorProps> = ({
  years,
  selectedYearNumber,
  onSelectYear,
  selectedSemesterNumber,
  onSelectSemester,
  completedCourseIds
}) => {
  const currentYear = years.find((y) => y.yearNumber === selectedYearNumber) || years[0];

  const getYearIcon = (year: number) => {
    switch (year) {
      case 1: return <BookOpen className="w-4 h-4" />;
      case 2: return <Layers className="w-4 h-4" />;
      case 3: return <Award className="w-4 h-4" />;
      case 4: return <Briefcase className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full bg-[#0d1527] border-b border-slate-800/80 sticky top-18 z-40 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Top: 4-Year Segmented Selector */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 overflow-x-auto w-full md:w-auto">
            {years.map((year) => {
              const isSelected = year.yearNumber === selectedYearNumber;
              
              // Count completed courses in this year
              const yearCourseIds = year.semesters.flatMap(s => s.courses.map(c => c.id));
              const completedInYear = yearCourseIds.filter(id => completedCourseIds.includes(id)).length;
              const totalInYear = yearCourseIds.length;
              
              return (
                <button
                  key={year.yearNumber}
                  onClick={() => {
                    onSelectYear(year.yearNumber);
                    // Default to first semester of this year
                    onSelectSemester(year.semesters[0].semesterNumber);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span className={`${isSelected ? 'text-white' : 'text-blue-400'}`}>
                    {getYearIcon(year.yearNumber)}
                  </span>
                  <span>Year {year.yearNumber}</span>
                  <span className="text-[11px] opacity-80 font-normal hidden sm:inline">
                    ({completedInYear}/{totalInYear})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Current Year Theme Indicator (Clean Unboxed Typography) */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-200">Current Focus:</span>
            <span className="text-blue-400 font-medium truncate max-w-md">{currentYear.focusArea}</span>
          </div>

        </div>

        {/* Bottom: Semester Switcher for Selected Year */}
        <div className="mt-2.5 pt-2.5 border-t border-slate-800/60 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Academic Semesters:</span>
            </span>
            <div className="flex items-center gap-1.5">
              {currentYear.semesters.map((sem) => {
                const isSemActive = sem.semesterNumber === selectedSemesterNumber;
                return (
                  <button
                    key={sem.semesterNumber}
                    onClick={() => onSelectSemester(sem.semesterNumber)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      isSemActive
                        ? 'bg-slate-800 text-blue-400 border border-blue-500/40 shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    Semester {sem.semesterNumber} ({sem.totalCredits} Credits)
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Year Progress Indicator */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Overall Roadmap Progress:</span>
            <span className="text-blue-400 font-mono font-bold tabular-nums">
              {completedCourseIds.length} / 32 Modules Completed
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-mono tabular-nums">
              {Math.round((completedCourseIds.length / 32) * 100)}%
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
