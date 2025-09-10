import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Question } from "@/types/assessment";
import { useState } from "react";

interface QuestionCardProps {
  question: Question;
  value?: number | string;
  onAnswer: (value: number | string) => void;
  onNext: () => void;
  onPrevious?: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const QuestionCard = ({
  question,
  value,
  onAnswer,
  onNext,
  onPrevious,
  isFirst,
  isLast
}: QuestionCardProps) => {
  const [currentValue, setCurrentValue] = useState<number | string>(value || '');

  const handleValueChange = (newValue: number | string) => {
    setCurrentValue(newValue);
    onAnswer(newValue);
  };

  const canProceed = currentValue !== '' && currentValue !== undefined;

  const renderInput = () => {
    switch (question.type) {
      case 'likert':
        return (
          <RadioGroup
            value={currentValue.toString()}
            onValueChange={(val) => handleValueChange(parseInt(val))}
            className="space-y-3"
          >
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label 
                  htmlFor={`option-${index}`} 
                  className="flex-1 cursor-pointer text-sm"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'multiple-choice':
        return (
          <RadioGroup
            value={currentValue.toString()}
            onValueChange={(val) => handleValueChange(parseInt(val))}
            className="space-y-3"
          >
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/30 transition-all">
                <RadioGroupItem value={index.toString()} id={`choice-${index}`} />
                <Label 
                  htmlFor={`choice-${index}`} 
                  className="flex-1 cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'scale':
        return (
          <div className="space-y-6">
            <div className="px-4">
              <Slider
                value={[typeof currentValue === 'number' ? currentValue : 5]}
                onValueChange={(values) => handleValueChange(values[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground px-4">
              <span>Beginner (1)</span>
              <span className="font-medium text-foreground">
                {typeof currentValue === 'number' ? currentValue : 5}/10
              </span>
              <span>Expert (10)</span>
            </div>
          </div>
        );

      case 'boolean':
        return (
          <RadioGroup
            value={currentValue.toString()}
            onValueChange={(val) => handleValueChange(val === 'true' ? 1 : 0)}
            className="flex flex-col space-y-3"
          >
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/30 transition-all">
              <RadioGroupItem value="true" id="yes" />
              <Label htmlFor="yes" className="cursor-pointer">Yes</Label>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/30 transition-all">
              <RadioGroupItem value="false" id="no" />
              <Label htmlFor="no" className="cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
        </div>
        
        <h3 className="text-xl font-semibold leading-relaxed text-foreground">
          {question.text}
        </h3>
      </div>

      <div className="space-y-6">
        {renderInput()}
      </div>

      <div className="flex justify-between pt-6 border-t border-border">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isFirst}
          className="px-8"
        >
          Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className="px-8 bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90"
        >
          {isLast ? 'Complete Section' : 'Next Question'}
        </Button>
      </div>
    </Card>
  );
};