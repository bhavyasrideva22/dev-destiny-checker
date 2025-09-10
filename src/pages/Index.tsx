import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Brain, Code, TrendingUp, Clock, CheckCircle, Target, ChevronRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-blockchain/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Career Assessment</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-blockchain bg-clip-text text-transparent">
              Should You Learn<br />
              Smart Contract Development?
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover if blockchain development aligns with your personality, skills, and career goals through our comprehensive assessment platform powered by proven psychological frameworks.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>32 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span>Science-based</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Personalized results</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                onClick={handleStartAssessment}
                size="lg"
                className="px-12 py-6 text-lg bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Badge variant="secondary" className="text-sm">
                Free • No signup required
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Assessment Framework</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our multi-dimensional approach evaluates your fit for smart contract development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-6 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Psychometric Analysis</h3>
              <p className="text-muted-foreground">
                Evaluate personality traits, cognitive style, and intrinsic motivation using validated psychological frameworks including Big Five and Holland Codes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Interest & motivation assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Personality compatibility
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Work style preferences
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 text-center space-y-6 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-blockchain/10 rounded-2xl flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-blockchain" />
              </div>
              <h3 className="text-xl font-semibold">Technical Aptitude</h3>
              <p className="text-muted-foreground">
                Assess your current programming knowledge, blockchain understanding, and technical readiness for smart contract development.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Programming fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Blockchain concepts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Problem-solving skills
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 text-center space-y-6 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold">WISCAR Framework</h3>
              <p className="text-muted-foreground">
                Multi-dimensional analysis of Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Learning readiness
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Career alignment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Growth potential
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-blockchain/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Discover Your Path?</h2>
          <p className="text-xl text-muted-foreground">
            Get personalized insights, career recommendations, and a detailed learning roadmap tailored to your profile.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">32 min</div>
              <div className="text-sm text-muted-foreground">Assessment time</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blockchain">85%</div>
              <div className="text-sm text-muted-foreground">Accuracy rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success">Free</div>
              <div className="text-sm text-muted-foreground">No hidden costs</div>
            </div>
          </div>
          
          <Button 
            onClick={handleStartAssessment}
            size="lg"
            className="px-12 py-6 text-lg bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Begin Your Assessment
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
