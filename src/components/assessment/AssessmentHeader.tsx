import { ProgressBar } from "@/components/ui/progress-bar";
import { Card } from "@/components/ui/card";
import { Clock, Target } from "lucide-react";

interface AssessmentHeaderProps {
  currentSection: number;
  totalSections: number;
  sectionTitle: string;
  timeRemaining?: number;
  currentQuestion?: number;
  totalQuestions?: number;
}

export const AssessmentHeader = ({
  currentSection,
  totalSections,
  sectionTitle,
  timeRemaining,
  currentQuestion,
  totalQuestions
}: AssessmentHeaderProps) => {
  const progress = ((currentSection - 1) / (totalSections - 1)) * 100;
  
  return (
    <Card className="p-6 mb-6 bg-gradient-to-r from-card to-accent/50 border-0 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Smart Contract Developer Assessment</h1>
          {timeRemaining && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{timeRemaining} min remaining</span>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">{sectionTitle}</h2>
            {currentQuestion && totalQuestions && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="h-4 w-4" />
                <span className="text-sm">Question {currentQuestion} of {totalQuestions}</span>
              </div>
            )}
          </div>
          
          <ProgressBar value={progress} className="mt-2" />
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Section {currentSection} of {totalSections}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </div>
    </Card>
  );
};