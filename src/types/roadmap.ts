export interface CourseModule {
  title: string;
  description: string;
  topics: string[];
}

export interface TextbookReference {
  title: string;
  author: string;
  type: 'book' | 'paper' | 'course' | 'tool';
  link?: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  category: 'mathematics' | 'programming' | 'machine_learning' | 'systems' | 'communication' | 'capstone' | 'career';
  overview: string;
  keyOutcomes: string[];
  modules: CourseModule[];
  labProject: string;
  textbooks: TextbookReference[];
  weeklyHours: number;
}

export interface Semester {
  semesterNumber: number;
  termTitle: string;
  theme: string;
  description: string;
  totalCredits: number;
  courses: Course[];
}

export interface YearPlan {
  yearNumber: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  focusArea: string;
  heroImage: string;
  executiveSummary: string;
  milestoneTitle: string;
  milestoneDescription: string;
  milestoneDeliverable: string;
  semesters: Semester[];
  directorAdvice: string;
}

export interface CapstoneProject {
  id: string;
  title: string;
  category: string;
  team: string;
  abstract: string;
  techStack: string[];
  demonstrationHighlights: string[];
  award?: string;
  githubStars?: number;
  exhibitionBooth: string;
  mentor: string;
}

export interface PlacementPartner {
  name: string;
  logoInitial: string;
  rolesHired: string[];
  avgPackage: string;
  interviewFormat: string[];
  topDomains: string[];
  hiringTier: 'FAANG / Frontier Labs' | 'Autonomous Tech & Robotics' | 'AI Enterprise & Cloud' | 'Quant & Fintech';
}

export interface InterviewQuestion {
  id: string;
  type: 'algorithm' | 'ml_system_design' | 'ml_theory' | 'behavioral';
  difficulty: 'Medium' | 'Hard' | 'Staff Level';
  question: string;
  context: string;
  keyConcepts: string[];
  solutionBreakdown: string;
  codeSnippet?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Foundational Papers' | 'University Lecture Series' | 'Textbooks & Guides' | 'GitHub Repositories';
  targetYear: number | 'All';
  description: string;
  authorOrInstitution: string;
  linkText: string;
  tag: string;
}
