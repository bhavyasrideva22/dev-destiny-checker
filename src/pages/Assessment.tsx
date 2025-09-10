import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AssessmentHeader } from '@/components/assessment/AssessmentHeader';
import { IntroductionSection } from '@/components/assessment/IntroductionSection';
import { QuestionCard } from '@/components/assessment/QuestionCard';
import { ResultsSection } from '@/components/assessment/ResultsSection';
import { assessmentSections, totalEstimatedTime } from '@/data/assessmentData';
import { AssessmentState, UserResponse } from '@/types/assessment';
import { calculateSectionScore, calculateWISCARScore, generateAssessmentResult } from '@/utils/assessmentScoring';

const Assessment = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<AssessmentState>({
    currentSection: 0,
    currentQuestion: 0,
    responses: [],
    startTime: new Date(),
    sectionScores: []
  });

  const currentSectionData = assessmentSections[state.currentSection];
  const isIntroduction = currentSectionData?.id === 'introduction';
  const isResults = currentSectionData?.id === 'results';
  const hasQuestions = currentSectionData?.questions && currentSectionData.questions.length > 0;

  // Calculate time remaining
  const [timeRemaining, setTimeRemaining] = useState(totalEstimatedTime);
  
  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = (new Date().getTime() - state.startTime.getTime()) / (1000 * 60);
      setTimeRemaining(Math.max(0, totalEstimatedTime - elapsed));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(timer);
  }, [state.startTime]);

  const handleStartAssessment = () => {
    setState(prev => ({
      ...prev,
      currentSection: 1,
      startTime: new Date()
    }));
  };

  const handleAnswer = (value: number | string) => {
    if (!hasQuestions) return;
    
    const questionId = currentSectionData.questions[state.currentQuestion].id;
    
    setState(prev => ({
      ...prev,
      responses: [
        ...prev.responses.filter(r => r.questionId !== questionId),
        { questionId, value }
      ]
    }));
  };

  const handleNext = () => {
    if (!hasQuestions) return;

    if (state.currentQuestion < currentSectionData.questions.length - 1) {
      // Next question in current section
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      // Complete current section, move to next
      completeCurrentSection();
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    } else if (state.currentSection > 1) {
      // Go back to previous section
      const prevSection = assessmentSections[state.currentSection - 1];
      setState(prev => ({
        ...prev,
        currentSection: prev.currentSection - 1,
        currentQuestion: Math.max(0, prevSection.questions.length - 1)
      }));
    }
  };

  const completeCurrentSection = () => {
    const sectionScore = calculateSectionScore(currentSectionData.id, state.responses);
    
    setState(prev => ({
      ...prev,
      sectionScores: [
        ...prev.sectionScores.filter(s => s.sectionId !== currentSectionData.id),
        sectionScore
      ],
      currentSection: prev.currentSection + 1,
      currentQuestion: 0
    }));

    // If this was the last question section, generate results
    if (state.currentSection === assessmentSections.length - 2) {
      generateResults();
    }
  };

  const generateResults = () => {
    const psychometricScore = state.sectionScores.find(s => s.sectionId === 'psychometric')?.score || 0;
    const technicalScore = state.sectionScores.find(s => s.sectionId === 'technical')?.score || 0;
    const wiscarScore = calculateWISCARScore(state.responses);
    
    const result = generateAssessmentResult(psychometricScore, technicalScore, wiscarScore);
    
    setState(prev => ({
      ...prev,
      result
    }));
  };

  const handleRestart = () => {
    setState({
      currentSection: 0,
      currentQuestion: 0,
      responses: [],
      startTime: new Date(),
      sectionScores: []
    });
  };

  const getCurrentResponse = () => {
    if (!hasQuestions) return undefined;
    const questionId = currentSectionData.questions[state.currentQuestion].id;
    return state.responses.find(r => r.questionId === questionId)?.value;
  };

  // Render introduction
  if (isIntroduction) {
    return (
      <div className="min-h-screen bg-background p-6">
        <IntroductionSection 
          onStart={handleStartAssessment}
          estimatedTime={totalEstimatedTime}
        />
      </div>
    );
  }

  // Render results
  if (isResults && state.result) {
    return (
      <div className="min-h-screen bg-background p-6">
        <AssessmentHeader
          currentSection={state.currentSection + 1}
          totalSections={assessmentSections.length}
          sectionTitle={currentSectionData.title}
        />
        <ResultsSection 
          result={state.result}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // Render question sections
  if (hasQuestions) {
    const currentQuestion = currentSectionData.questions[state.currentQuestion];
    
    return (
      <div className="min-h-screen bg-background p-6">
        <AssessmentHeader
          currentSection={state.currentSection + 1}
          totalSections={assessmentSections.length}
          sectionTitle={currentSectionData.title}
          timeRemaining={Math.round(timeRemaining)}
          currentQuestion={state.currentQuestion + 1}
          totalQuestions={currentSectionData.questions.length}
        />
        
        <QuestionCard
          question={currentQuestion}
          value={getCurrentResponse()}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={state.currentSection === 1 && state.currentQuestion === 0}
          isLast={state.currentQuestion === currentSectionData.questions.length - 1}
        />
      </div>
    );
  }

  // Fallback
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Assessment...</h1>
        <p className="text-muted-foreground">Please wait while we prepare your assessment.</p>
      </div>
    </div>
  );
};

export default Assessment;