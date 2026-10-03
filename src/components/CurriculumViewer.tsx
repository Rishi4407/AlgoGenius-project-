import React, { useState } from 'react';
import { YearPlan, Course } from '../types/roadmap';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Circle, 
  Clock, 
  BookOpen, 
  Code2, 
  FlaskConical, 
  GraduationCap, 
  Lightbulb, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';

interface CurriculumViewerProps {
  yearPlan: YearPlan;
  activeSemesterNumber: number;
  completedCourseIds: string[];
  onToggleCourseCompletion: (courseId: string) => void;
  onNavigateToExhibition?: () => void;
  onNavigateToPlacements?: () => void;
}

export const CurriculumViewer: React.FC<CurriculumViewerProps> = ({
  yearPlan,
  activeSemesterNumber,
  completedCourseIds,
  onToggleCourseCompletion,
  onNavigateToExhibition,
  onNavigateToPlacements
}) => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const currentSemester = yearPlan.semesters.find(
    (s) => s.semesterNumber === activeSemesterNumber
  ) || yearPlan.semesters[0];

  const toggleCourseExpand = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <div className="py-8 space-y-10">
      
      {/* Year Banner / Overview Deck */}
      <div className="rounded-2xl border border-slate-800 bg-[#0f172a] overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Banner Text (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-blue-400 uppercase tracking-wider">
                Year {yearPlan.yearNumber} Academic Dossier
              </span>
              <span aria-hidden="true">·</span>
              <span>40 Credits / Year</span>
              <span aria-hidden="true">·</span>
              <span>Two Intensive Semesters</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {yearPlan.title}
            </h2>

            <p className="text-sm font-medium text-slate-300">
              {yearPlan.subtitle}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
              {yearPlan.executiveSummary}
            </p>

            {/* Director's Strategic Advice Callout */}
            <div className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-blue-500 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Director's Directive for Year {yearPlan.yearNumber}</span>
              </div>
              <p className="text-slate-300 leading-relaxed italic">
                "{yearPlan.directorAdvice}"
              </p>
            </div>
          </div>

          {/* Banner Visual Anchor (5 cols) */}
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px] relative overflow-hidden bg-slate-900">
            <img 
              src={yearPlan.heroImage} 
              alt={yearPlan.title}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0f172a] via-transparent to-transparent opacity-80" />
            
            {/* Year Badge Overlay */}
            <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-blue-400">
              Year {yearPlan.yearNumber} Milestone
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-800 p-3.5 rounded-xl text-left">
              <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                Annual Capstone Milestone
              </div>
              <div className="text-xs font-bold text-white mt-0.5">
                {yearPlan.milestoneTitle}
              </div>
              <div className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                {yearPlan.milestoneDeliverable}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Special Contextual Action for Year 3 & Year 4 */}
      {yearPlan.yearNumber === 3 && onNavigateToExhibition && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-indigo-950/70 border border-blue-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
              <FlaskConical className="w-4 h-4" />
              <span>Year 3 Crown Feature: Annual AI Innovation Expo & Demo Day</span>
            </div>
            <p className="text-xs text-slate-300">
              Junior students present live working hardware/software AI systems to an industry jury of Silicon Valley directors and venture scouts.
            </p>
          </div>
          <button
            onClick={onNavigateToExhibition}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg whitespace-nowrap shadow-md cursor-pointer"
          >
            <span>Explore Exhibition Hall</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {yearPlan.yearNumber === 4 && onNavigateToPlacements && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-blue-950/70 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <GraduationCap className="w-4 h-4" />
              <span>Year 4 Crown Feature: Corporate Placement Drive & Top Tech Interview Loops</span>
            </div>
            <p className="text-xs text-slate-300">
              Review exclusive on-campus recruitment pipelines with Google DeepMind, OpenAI, NVIDIA, Meta, and quantitative hedge funds.
            </p>
          </div>
          <button
            onClick={onNavigateToPlacements}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg whitespace-nowrap shadow-md cursor-pointer"
          >
            <span>View Placement Matrix</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Active Semester Section Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Curriculum Specification
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {currentSemester.termTitle}
            </h3>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>Theme: <strong className="text-slate-200">{currentSemester.theme}</strong></span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums text-blue-400 font-semibold">{currentSemester.totalCredits} Credit Units</span>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-2 max-w-3xl leading-relaxed">
          {currentSemester.description}
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 gap-6">
        {currentSemester.courses.map((course: Course, index: number) => {
          const isCompleted = completedCourseIds.includes(course.id);
          const isExpanded = expandedCourseId === course.id;

          return (
            <div
              key={course.id}
              className={`rounded-2xl border transition-all duration-200 bg-slate-900/70 overflow-hidden ${
                isCompleted 
                  ? 'border-emerald-500/40 bg-slate-900/90 shadow-sm' 
                  : isExpanded 
                    ? 'border-blue-500/60 shadow-lg' 
                    : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Course Card Header */}
              <div className="p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                
                {/* Left: Code, Title, Category */}
                <div className="space-y-2 flex-1">
                  
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
                    <span className="font-mono font-bold text-blue-400">{course.code}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize text-slate-300 font-medium">{course.category.replace('_', ' ')}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{course.credits} Credits</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-mono tabular-nums">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {course.weeklyHours}h / week
                    </span>
                    {isCompleted && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          Completed in Plan
                        </span>
                      </>
                    )}
                  </div>

                  {/* Course Title with Editorial Number */}
                  <h4 className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                    <span className="text-slate-500 font-mono text-sm font-normal">
                      0{index + 1}.
                    </span>
                    <span>{course.title}</span>
                  </h4>

                  {/* Course Overview Snippet */}
                  <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                    {course.overview}
                  </p>
                </div>

                {/* Right: Actions (Mark Completed + Expand Syllabus) */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
                  <button
                    onClick={() => onToggleCourseCompletion(course.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isCompleted
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600/40 hover:bg-emerald-900/60'
                        : 'bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-750'
                    }`}
                    title={isCompleted ? 'Mark as pending' : 'Mark course completed in your personal plan'}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mark Done</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => toggleCourseExpand(course.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Syllabus' : 'Full Syllabus'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>

              {/* Expandable Deep Syllabus Drawer */}
              {isExpanded && (
                <div className="p-5 sm:p-6 bg-slate-950/70 border-t border-slate-800/80 space-y-6">
                  
                  {/* Key Learning Outcomes */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5">
                      Core Competency Outcomes
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                      {course.keyOutcomes.map((outcome, idx) => (
                        <li key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modules Breakdown */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Instructional Modules Breakdown
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {course.modules.map((mod, mIdx) => (
                        <div key={mIdx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                          <div className="text-xs font-bold text-white">
                            Module {mIdx + 1}: {mod.title}
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            {mod.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] text-slate-400">
                            {mod.topics.map((topic, tIdx) => (
                              <span key={tIdx} className="bg-slate-800/80 px-2 py-0.5 rounded text-slate-300 font-mono">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Lab & Terminal Deliverable */}
                  <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/30 flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        Mandatory Term Lab Project & GitHub Repository
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {course.labProject}
                      </p>
                    </div>
                  </div>

                  {/* Recommended Literature & Textbooks */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Recommended Textbooks & Literature
                    </h5>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                      {course.textbooks.map((tb, tbIdx) => (
                        <div key={tbIdx} className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                          <span className="font-semibold text-slate-200">"{tb.title}"</span>
                          <span className="text-slate-500">by {tb.author}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
