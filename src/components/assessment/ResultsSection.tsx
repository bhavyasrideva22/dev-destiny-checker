import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { AssessmentResult } from "@/types/assessment";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  TrendingUp, 
  Brain, 
  Code, 
  Target,
  BookOpen,
  Briefcase,
  Download
} from "lucide-react";

interface ResultsSectionProps {
  result: AssessmentResult;
  onRestart: () => void;
}

export const ResultsSection = ({ result, onRestart }: ResultsSectionProps) => {
  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'yes': return <CheckCircle className="h-8 w-8 text-success" />;
      case 'maybe': return <AlertCircle className="h-8 w-8 text-warning" />;
      case 'no': return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.recommendation) {
      case 'yes': return 'from-success/20 to-success/5 border-success/30';
      case 'maybe': return 'from-warning/20 to-warning/5 border-warning/30';
      case 'no': return 'from-destructive/20 to-destructive/5 border-destructive/30';
    }
  };

  const getRecommendationTitle = () => {
    switch (result.recommendation) {
      case 'yes': return 'Excellent Fit! 🎉';
      case 'maybe': return 'Promising Potential 🌟';
      case 'no': return 'Consider Alternatives 🔄';
    }
  };

  const WISCARRadarChart = () => (
    <div className="relative h-64 w-64 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Background grid */}
        <g stroke="#e5e7eb" strokeWidth="1" fill="none">
          <polygon points="100,50 136.6,75 136.6,125 100,150 63.4,125 63.4,75" />
          <polygon points="100,70 125.9,85 125.9,115 100,130 74.1,115 74.1,85" />
          <polygon points="100,90 115.3,95 115.3,105 100,110 84.7,105 84.7,95" />
        </g>
        
        {/* Axes */}
        <g stroke="#6b7280" strokeWidth="1">
          <line x1="100" y1="100" x2="100" y2="50" />
          <line x1="100" y1="100" x2="136.6" y2="75" />
          <line x1="100" y1="100" x2="136.6" y2="125" />
          <line x1="100" y1="100" x2="100" y2="150" />
          <line x1="100" y1="100" x2="63.4" y2="125" />
          <line x1="100" y1="100" x2="63.4" y2="75" />
        </g>
        
        {/* Data polygon */}
        <polygon
          points={`
            100,${100 - result.wiscarScore.will/2}
            ${100 + (result.wiscarScore.interest/2) * 0.866},${100 - (result.wiscarScore.interest/2) * 0.5}
            ${100 + (result.wiscarScore.skill/2) * 0.866},${100 + (result.wiscarScore.skill/2) * 0.5}
            100,${100 + result.wiscarScore.cognitive/2}
            ${100 - (result.wiscarScore.ability/2) * 0.866},${100 + (result.wiscarScore.ability/2) * 0.5}
            ${100 - (result.wiscarScore.realWorld/2) * 0.866},${100 - (result.wiscarScore.realWorld/2) * 0.5}
          `}
          fill="hsl(262 83% 58% / 0.3)"
          stroke="hsl(262 83% 58%)"
          strokeWidth="2"
        />
        
        {/* Labels */}
        <text x="100" y="45" textAnchor="middle" className="text-xs fill-current">Will</text>
        <text x="145" y="80" textAnchor="middle" className="text-xs fill-current">Interest</text>
        <text x="145" y="130" textAnchor="middle" className="text-xs fill-current">Skill</text>
        <text x="100" y="165" textAnchor="middle" className="text-xs fill-current">Cognitive</text>
        <text x="55" y="130" textAnchor="middle" className="text-xs fill-current">Ability</text>
        <text x="55" y="80" textAnchor="middle" className="text-xs fill-current">Real World</text>
      </svg>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Main Recommendation */}
      <Card className={`p-8 bg-gradient-to-r ${getRecommendationColor()}`}>
        <div className="text-center space-y-4">
          {getRecommendationIcon()}
          <h1 className="text-3xl font-bold">{getRecommendationTitle()}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {result.feedback}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="text-sm">
              Confidence Score: {result.confidenceScore}%
            </Badge>
          </div>
        </div>
      </Card>

      {/* Score Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Psychological Fit</h3>
          </div>
          <div className="space-y-3">
            <ProgressBar value={result.psychometricScore} showPercentage />
            <p className="text-sm text-muted-foreground">
              Personality and interest alignment
            </p>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-6 w-6 text-blockchain" />
            <h3 className="font-semibold">Technical Readiness</h3>
          </div>
          <div className="space-y-3">
            <ProgressBar value={result.technicalScore} showPercentage />
            <p className="text-sm text-muted-foreground">
              Current technical knowledge
            </p>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-success" />
            <h3 className="font-semibold">WISCAR Overall</h3>
          </div>
          <div className="space-y-3">
            <ProgressBar value={result.wiscarScore.overall} showPercentage />
            <p className="text-sm text-muted-foreground">
              Multi-dimensional readiness
            </p>
          </div>
        </Card>
      </div>

      {/* WISCAR Radar Chart */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">WISCAR Framework Analysis</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <WISCARRadarChart />
          <div className="space-y-4">
            {Object.entries(result.wiscarScore).map(([key, score]) => {
              if (key === 'overall') return null;
              return (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium capitalize">{key}</span>
                    <span className="text-sm text-muted-foreground">{score}/100</span>
                  </div>
                  <ProgressBar value={score} />
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Suggestions */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Personalized Recommendations
        </h2>
        
        <div className="space-y-6">
          {result.suggestions.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Key Areas to Focus On:</h3>
              <ul className="space-y-2">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>

      {/* Learning Path */}
      {result.learningPath.length > 0 && (
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blockchain" />
            Recommended Learning Path
          </h2>
          
          <div className="space-y-4">
            {result.learningPath.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-accent/30">
                <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium">{step}</h4>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Career Paths */}
      {result.careerPaths.length > 0 && (
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-success" />
            Suggested Career Paths
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {result.careerPaths.map((path, index) => (
              <div key={index} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h4 className="font-medium">{path}</h4>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button onClick={onRestart} variant="outline" className="px-8">
          Retake Assessment
        </Button>
        <Button className="px-8 bg-gradient-to-r from-primary to-blockchain">
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>
    </div>
  );
};