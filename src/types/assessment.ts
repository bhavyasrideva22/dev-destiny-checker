export interface Question {
  id: string;
  text: string;
  type: 'likert' | 'multiple-choice' | 'boolean' | 'scale';
  options?: string[];
  category: 'interest' | 'personality' | 'cognitive' | 'motivation' | 'technical' | 'aptitude' | 'wiscar';
  subcategory?: string;
  weight: number;
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeEstimate: number;
}

export interface UserResponse {
  questionId: string;
  value: number | string;
}

export interface SectionScore {
  sectionId: string;
  score: number;
  subsectionScores?: Record<string, number>;
}

export interface WISCARScore {
  will: number;
  interest: number;
  skill: number;
  cognitive: number;
  ability: number;
  realWorld: number;
  overall: number;
}

export interface AssessmentResult {
  psychometricScore: number;
  technicalScore: number;
  wiscarScore: WISCARScore;
  recommendation: 'yes' | 'maybe' | 'no';
  confidenceScore: number;
  feedback: string;
  suggestions: string[];
  learningPath: string[];
  careerPaths: string[];
}

export interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  responses: UserResponse[];
  startTime: Date;
  sectionScores: SectionScore[];
  result?: AssessmentResult;
}