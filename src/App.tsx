import React, { useState, useEffect } from 'react';
import { TopNavbar } from './components/TopNavbar';
import { DeanWelcome } from './components/DeanWelcome';
import { YearNavigator } from './components/YearNavigator';
import { CurriculumViewer } from './components/CurriculumViewer';
import { ExhibitionShowcase } from './components/ExhibitionShowcase';
import { PlacementMatrix } from './components/PlacementMatrix';
import { ResourceLibrary } from './components/ResourceLibrary';
import { ReadinessCompass } from './components/ReadinessCompass';
import { Footer } from './components/Footer';
import { FOUR_YEAR_ROADMAP } from './data/roadmapData';
import { AlgoGeniusLogo } from './components/AlgoGeniusLogo';
import { 
  Compass, 
  Sparkles, 
  Download, 
  BookOpen, 
  Layers, 
  Award, 
  Briefcase, 
  GraduationCap,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('roadmap'); // 'roadmap' | 'exhibition' | 'placements' | 'resources'
  const [selectedYearNumber, setSelectedYearNumber] = useState<1 | 2 | 3 | 4>(1);
  const [selectedSemesterNumber, setSelectedSemesterNumber] = useState<number>(1);
  const [isCompassModalOpen, setIsCompassModalOpen] = useState<boolean>(false);
  const [completedCourseIds, setCompletedCourseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('algogenius_completed_courses');
      return saved ? JSON.parse(saved) : ['mth101', 'cs101'];
    } catch {
      return ['mth101', 'cs101'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('algogenius_completed_courses', JSON.stringify(completedCourseIds));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [completedCourseIds]);

  const toggleCourseCompletion = (courseId: string) => {
    setCompletedCourseIds((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  const handleSelectYear = (yearNum: 1 | 2 | 3 | 4) => {
    setSelectedYearNumber(yearNum);
    const yr = FOUR_YEAR_ROADMAP.find((y) => y.yearNumber === yearNum);
    if (yr && yr.semesters.length > 0) {
      setSelectedSemesterNumber(yr.semesters[0].semesterNumber);
    }
  };

  const currentYearPlan =
    FOUR_YEAR_ROADMAP.find((y) => y.yearNumber === selectedYearNumber) || FOUR_YEAR_ROADMAP[0];

  const handleExportPlan = () => {
    const totalCredits = 160;
    const completedCount = completedCourseIds.length;
    const planText = `=====================================================
ALGOGENIUS INSTITUTE OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE
4-YEAR BACHELOR OF AI & DATA SCIENCE ACADEMIC ROADMAP
=====================================================
Student Plan: Class of 2026-2030
Completed Courses: ${completedCount} / 32 Modules
Total Degree Credits: ${totalCredits} Units
Generated Date: ${new Date().toLocaleDateString()}

DIRECTOR'S CHARTER:
"Artificial Intelligence is the fusion of rigorous mathematics, 
algorithmic elegance, systems engineering, and clear human communication."
- Dr. Raymond Vance, Ph.D., Head of Institute

-----------------------------------------------------
YEAR 1: FUNDAMENTALS & COMMUNICATION
Focus: Mathematical bedrocks, discrete logic, scientific writing, and oral rhetoric
- Semester 1:
  * MTH-101: Linear Algebra & High-Dimensional Vector Spaces [5 Credits]
  * CS-101: Principles of Computing, Linux Systems & Version Control [5 Credits]
  * MTH-102: Discrete Mathematics & Formal Logic for AI [5 Credits]
  * COM-101: Technical Communication, Scientific Writing & AI Rhetoric [5 Credits]
- Semester 2:
  * MTH-103: Multivariable Calculus & Continuous Optimization [5 Credits]
  * MTH-104: Probability Theory & Stochastic Processes [5 Credits]
  * CS-102: Object-Oriented Programming & Computational Thinking in Python [5 Credits]
  * PHI-101: Ethics, Algorithmic Bias & Societal Governance of AI [5 Credits]
Milestone: The First-Year Foundations Portfolio & Freshman Colloquium

-----------------------------------------------------
YEAR 2: PROGRAMMING & DATA SCIENCE FOUNDATIONS
Focus: Algorithms, CPython optimization, vector search, and classical ML
- Semester 3:
  * CS-201: Data Structures & Algorithmic Analysis [5 Credits]
  * CS-202: Advanced Python Engineering & High-Performance Computing [5 Credits]
  * DS-201: Relational, Distributed & Vector Database Systems [5 Credits]
  * DS-202: Exploratory Data Analysis, Visualization & Scientific Wrangling [5 Credits]
- Semester 4:
  * ML-201: Statistical Machine Learning: Supervised Foundations [5 Credits]
  * ML-202: Ensemble Methods, Decision Trees & Gradient Boosting [5 Credits]
  * CS-203: Dynamic Programming, Greedy Algorithms & NP-Completeness [5 Credits]
  * ML-203: Unsupervised Learning, Clustering & Dimensionality Reduction [5 Credits]
Milestone: Custom Vector Storage Engine + Top 10% Kaggle Benchmark Solution

-----------------------------------------------------
YEAR 3: AI WORKING PROJECTS & ANNUAL EXPO
Focus: Deep learning architectures, LLMs, demo day exhibition, and industry mentorship
- Semester 5:
  * DL-301: Deep Learning Fundamentals & PyTorch Framework Mastery [5 Credits]
  * DL-302: Transformers, Large Language Models & Attention Mechanisms [5 Credits]
  * SYS-301: Production MLOps, Containerization & High-Throughput Serving [5 Credits]
  * CAP-301: Capstone Incubation & Research Methodology [5 Credits]
- Semester 6:
  * CAP-302: Advanced AI Capstone Engineering & System Hardening [8 Credits]
  * EXP-301: The AlgoGenius AI Innovation Expo & Demo Day Presentation [6 Credits]
  * NET-301: Industry Networking, Mentorship & Corporate Partnerships [6 Credits]
Milestone: Live Demo Day Exhibition Booth + Published ArXiv Paper + Investor Pitch

-----------------------------------------------------
YEAR 4: TECH PLACEMENTS & GRADUATION LAUNCH
Focus: Algorithmic coding loops, large-scale ML system design, and FAANG interviews
- Semester 7:
  * INT-401: Advanced Algorithmic & Data Structures Interview Bootcamp [6 Credits]
  * SYS-401: Large-Scale Machine Learning System Design [6 Credits]
  * ML-401: Machine Learning Theory & Deep Learning Bar-Raiser Defense [4 Credits]
  * CAR-401: Behavioral Leadership, STAR Framework & Negotiation [4 Credits]
- Semester 8:
  * PLC-401: AlgoGenius Corporate Placement Drive & On-Campus Recruiting [8 Credits]
  * THE-401: Senior AI Research Thesis & Public Oral Defense [8 Credits]
  * ALU-401: AlgoGenius Alumni Fellowship & Lifelong Mentorship Induction [4 Credits]
Milestone: Tier-1 Offer Letter / Research Fellowship + Public Thesis Defense

=====================================================
AlgoGenius Institute of Artificial Intelligence & Data Science
ABET & ACM Aligned Academic Curriculum
=====================================================`;

    const blob = new Blob([planText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AlgoGenius_4Year_AI_Academic_Roadmap.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#0b1120] text-slate-100">
      
      {/* Strict 3-Zone Navigation Header */}
      <TopNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCompassModal={() => setIsCompassModalOpen(true)}
        onDownloadPlan={handleExportPlan}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section & Institute Header */}
        <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0e172a] via-[#0b1120] to-[#0b1120] py-14 sm:py-20">
          
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto space-y-5">
              
              {/* Institutional Kicker (Zero-Pill clean typography) */}
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                <AlgoGeniusLogo variant="mark" size="sm" />
                <span>AlgoGenius Institute of Artificial Intelligence</span>
                <span aria-hidden="true">·</span>
                <span>Bachelor of AI & Data Science</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight text-balance">
                The 4-Year Academic & Career Development Roadmap
              </h1>

              {/* Refined Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
                A rigorous, first-principles journey tailored for freshman AI scholars. From vector calculus and terminal fluency in Year 1, to algorithmic dominance in Year 2, world-class project exhibitions in Year 3, and senior placement in top tech firms in Year 4.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => {
                    setActiveTab('roadmap');
                    const el = document.getElementById('curriculum-root');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore 4-Year Curriculum</span>
                </button>

                <button
                  onClick={() => setIsCompassModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-blue-400" />
                  <span>AI Readiness Diagnostic</span>
                </button>

                <button
                  onClick={() => setActiveTab('exhibition')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Expo Hall</span>
                </button>
              </div>

              {/* 4-Year Quick Progress Bar */}
              <div className="pt-6 max-w-xl mx-auto">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                  <span>Freshman Onboarding Progress</span>
                  <span className="font-mono text-blue-400 tabular-nums">
                    {completedCourseIds.length} / 32 Modules ({Math.round((completedCourseIds.length / 32) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(6, (completedCourseIds.length / 32) * 100)}%` }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Director's Welcome & Convocation Section */}
        <DeanWelcome
          onExploreYear={handleSelectYear}
          campusHeroImage="/src/assets/images/algogenius_institute_hero_1791017062678.jpg"
        />

        {/* Tab 1: Full 4-Year Roadmap View */}
        {activeTab === 'roadmap' && (
          <div id="curriculum-root" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Interactive Sticky Year Navigator */}
            <YearNavigator
              years={FOUR_YEAR_ROADMAP}
              selectedYearNumber={selectedYearNumber}
              onSelectYear={handleSelectYear}
              selectedSemesterNumber={selectedSemesterNumber}
              onSelectSemester={setSelectedSemesterNumber}
              completedCourseIds={completedCourseIds}
            />

            {/* Curriculum Viewer for Active Year and Semester */}
            <CurriculumViewer
              yearPlan={currentYearPlan}
              activeSemesterNumber={selectedSemesterNumber}
              completedCourseIds={completedCourseIds}
              onToggleCourseCompletion={toggleCourseCompletion}
              onNavigateToExhibition={() => setActiveTab('exhibition')}
              onNavigateToPlacements={() => setActiveTab('placements')}
            />
          </div>
        )}

        {/* Tab 2: Year 3 Exhibition Showcase */}
        {activeTab === 'exhibition' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ExhibitionShowcase
              heroImage="/src/assets/images/year3_ai_exhibition_1791017103494.jpg"
            />
          </div>
        )}

        {/* Tab 3: Year 4 Placement Matrix & Interview Hub */}
        {activeTab === 'placements' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PlacementMatrix
              heroImage="/src/assets/images/year4_tech_recruitment_1791017114185.jpg"
            />
          </div>
        )}

        {/* Tab 4: Reference Library & Literature */}
        {activeTab === 'resources' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ResourceLibrary />
          </div>
        )}

      </main>

      {/* AI Readiness Compass Modal */}
      <ReadinessCompass
        isOpen={isCompassModalOpen}
        onClose={() => setIsCompassModalOpen(false)}
        onSelectYear={handleSelectYear}
      />

      {/* Institutional Footer */}
      <Footer />

    </div>
  );
}
