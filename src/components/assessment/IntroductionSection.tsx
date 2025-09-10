import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Brain, Code, TrendingUp, ChevronRight } from "lucide-react";

interface IntroductionSectionProps {
  onStart: () => void;
  estimatedTime: number;
}

export const IntroductionSection = ({ onStart, estimatedTime }: IntroductionSectionProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-primary/10 via-background to-blockchain/10 border-0">
        <div className="relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart Contract Developer Assessment</span>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Should You Learn Smart Contract Development?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive assessment to evaluate your fit, readiness, and career path in blockchain development
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{estimatedTime} minutes</span>
            </div>
            <Badge variant="secondary">Free Assessment</Badge>
          </div>
        </div>
      </Card>

      {/* What is Smart Contract Development */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          What is Smart Contract Development?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Smart Contract Developers build self-executing code on blockchain platforms like Ethereum, Solana, or Hyperledger. These contracts automate transactions, enforce rules, and eliminate intermediaries in decentralized systems.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Key Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {['Solidity', 'Web3.js', 'Ethereum', 'DeFi', 'NFTs', 'Gas Optimization'].map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Typical Career Paths:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-primary" />
                Blockchain Developer
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-primary" />
                Smart Contract Engineer
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-primary" />
                Web3 Full Stack Developer
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-primary" />
                DeFi Application Developer
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-primary" />
                NFT Platform Engineer
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Assessment Overview */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          Assessment Overview
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Psychometric Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Evaluate personality traits, interests, and motivation using validated psychological frameworks.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Technical Aptitude</h3>
            <p className="text-sm text-muted-foreground">
              Assess your current programming knowledge and blockchain concepts understanding.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">WISCAR Framework</h3>
            <p className="text-sm text-muted-foreground">
              Multi-dimensional analysis of Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment.
            </p>
          </div>
        </div>
      </Card>

      {/* Who Succeeds */}
      <Card className="p-8 bg-gradient-to-r from-success/5 to-blockchain/5 border-success/20">
        <h2 className="text-2xl font-semibold mb-6">Who Succeeds in Smart Contract Development?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-success">Ideal Traits:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-success rounded-full" />
                High logical reasoning and problem-solving skills
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-success rounded-full" />
                Strong curiosity and self-motivation
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-success rounded-full" />
                Attention to detail and security-conscious
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-success rounded-full" />
                Comfort with abstraction and cryptographic thinking
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-blockchain">Success Factors:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blockchain rounded-full" />
                Passion for decentralized technologies
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blockchain rounded-full" />
                Tolerance for rapidly evolving ecosystem
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blockchain rounded-full" />
                Understanding of financial systems
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blockchain rounded-full" />
                Commitment to continuous learning
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Button 
          onClick={onStart}
          size="lg"
          className="px-12 py-6 text-lg bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Assessment
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Get personalized insights and career guidance in {estimatedTime} minutes
        </p>
      </div>
    </div>
  );
};