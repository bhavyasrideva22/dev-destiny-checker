import { UserResponse, AssessmentResult, WISCARScore, SectionScore } from '@/types/assessment';
import { assessmentSections } from '@/data/assessmentData';

export function calculateSectionScore(
  sectionId: string, 
  responses: UserResponse[]
): SectionScore {
  const section = assessmentSections.find(s => s.id === sectionId);
  if (!section || section.questions.length === 0) {
    return { sectionId, score: 0 };
  }

  const sectionResponses = responses.filter(r => 
    section.questions.some(q => q.id === r.questionId)
  );

  if (sectionResponses.length === 0) {
    return { sectionId, score: 0 };
  }

  let totalWeightedScore = 0;
  let totalWeight = 0;
  const subsectionScores: Record<string, number> = {};
  const subsectionCounts: Record<string, number> = {};

  sectionResponses.forEach(response => {
    const question = section.questions.find(q => q.id === response.questionId);
    if (!question) return;

    let normalizedScore = 0;
    
    // Normalize score to 0-100 based on question type
    if (question.type === 'likert') {
      normalizedScore = (Number(response.value) / 4) * 100; // 0-4 scale to 0-100
    } else if (question.type === 'multiple-choice') {
      // For technical questions, check if answer is correct
      const correctAnswers: Record<string, number> = {
        'tech_1': 1, // Self-executing code
        'tech_2': 2, // Solidity
        'tech_3': 0, // 0.00042 ETH
        'tech_5': 1, // Cannot be altered
      };
      normalizedScore = correctAnswers[question.id] === Number(response.value) ? 100 : 0;
    } else if (question.type === 'scale') {
      normalizedScore = (Number(response.value) / 10) * 100; // 1-10 scale to 0-100
    } else if (question.type === 'boolean') {
      normalizedScore = Number(response.value) * 100;
    }

    const weightedScore = normalizedScore * question.weight;
    totalWeightedScore += weightedScore;
    totalWeight += question.weight;

    // Track subsection scores
    if (question.subcategory) {
      if (!subsectionScores[question.subcategory]) {
        subsectionScores[question.subcategory] = 0;
        subsectionCounts[question.subcategory] = 0;
      }
      subsectionScores[question.subcategory] += normalizedScore;
      subsectionCounts[question.subcategory]++;
    }
  });

  // Calculate averages for subsections
  Object.keys(subsectionScores).forEach(key => {
    subsectionScores[key] = subsectionScores[key] / subsectionCounts[key];
  });

  const finalScore = totalWeight > 0 ? totalWeightedScore / totalWeight : 0;

  return {
    sectionId,
    score: Math.round(finalScore),
    subsectionScores
  };
}

export function calculateWISCARScore(responses: UserResponse[]): WISCARScore {
  const wiscarResponses = responses.filter(r => r.questionId.startsWith('wiscar_'));
  
  const scoreMap: Record<string, number[]> = {
    will: [],
    interest: [],
    skill: [],
    cognitive: [],
    ability: [],
    realWorld: []
  };

  wiscarResponses.forEach(response => {
    const question = assessmentSections
      .find(s => s.id === 'wiscar')
      ?.questions.find(q => q.id === response.questionId);
    
    if (!question?.subcategory) return;

    let normalizedScore = 0;
    if (question.type === 'likert') {
      normalizedScore = (Number(response.value) / 4) * 100;
    } else if (question.type === 'scale') {
      normalizedScore = (Number(response.value) / 10) * 100;
    }

    if (scoreMap[question.subcategory]) {
      scoreMap[question.subcategory].push(normalizedScore);
    }
  });

  const wiscarScore: WISCARScore = {
    will: scoreMap.will.length > 0 ? Math.round(scoreMap.will.reduce((a, b) => a + b, 0) / scoreMap.will.length) : 0,
    interest: scoreMap.interest.length > 0 ? Math.round(scoreMap.interest.reduce((a, b) => a + b, 0) / scoreMap.interest.length) : 0,
    skill: scoreMap.skill.length > 0 ? Math.round(scoreMap.skill.reduce((a, b) => a + b, 0) / scoreMap.skill.length) : 0,
    cognitive: scoreMap.cognitive.length > 0 ? Math.round(scoreMap.cognitive.reduce((a, b) => a + b, 0) / scoreMap.cognitive.length) : 0,
    ability: scoreMap.ability.length > 0 ? Math.round(scoreMap.ability.reduce((a, b) => a + b, 0) / scoreMap.ability.length) : 0,
    realWorld: scoreMap.realWorld.length > 0 ? Math.round(scoreMap.realWorld.reduce((a, b) => a + b, 0) / scoreMap.realWorld.length) : 0,
    overall: 0
  };

  // Calculate overall as average of all dimensions
  const allScores = [wiscarScore.will, wiscarScore.interest, wiscarScore.skill, wiscarScore.cognitive, wiscarScore.ability, wiscarScore.realWorld];
  wiscarScore.overall = Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length);

  return wiscarScore;
}

export function generateAssessmentResult(
  psychometricScore: number,
  technicalScore: number,
  wiscarScore: WISCARScore
): AssessmentResult {
  const averageScore = (psychometricScore + technicalScore + wiscarScore.overall) / 3;
  
  let recommendation: 'yes' | 'maybe' | 'no';
  let feedback: string;
  let suggestions: string[] = [];
  let learningPath: string[] = [];
  let careerPaths: string[] = [];

  // Determine recommendation
  if (averageScore >= 75 && psychometricScore >= 70 && technicalScore >= 60) {
    recommendation = 'yes';
    feedback = "You show excellent potential for smart contract development! Your personality traits, interests, and technical aptitude align well with this career path.";
    
    learningPath = [
      "Complete Solidity fundamentals course",
      "Build your first smart contract project",
      "Learn Web3.js and frontend integration", 
      "Study security best practices and auditing",
      "Contribute to open-source DeFi projects",
      "Build a portfolio of diverse blockchain applications"
    ];

    careerPaths = [
      "Smart Contract Engineer",
      "Web3 Full Stack Developer", 
      "DeFi Protocol Developer",
      "Blockchain Security Auditor",
      "NFT Platform Developer"
    ];
  } else if (averageScore >= 55 && (psychometricScore >= 60 || technicalScore >= 50)) {
    recommendation = 'maybe';
    feedback = "You have promising potential for smart contract development with some areas to strengthen. Focus on the recommended improvements to increase your readiness.";
    
    if (technicalScore < 60) {
      suggestions.push("Strengthen your programming fundamentals with JavaScript or Python");
      suggestions.push("Learn basic blockchain concepts and terminology");
    }
    
    if (psychometricScore < 60) {
      suggestions.push("Explore more blockchain use cases to build genuine interest");
      suggestions.push("Practice logical reasoning and problem-solving exercises");
    }

    learningPath = [
      "Complete programming fundamentals if needed",
      "Take an introductory blockchain course",
      "Learn Solidity basics through interactive tutorials",
      "Build simple smart contract projects",
      "Join blockchain developer communities"
    ];

    careerPaths = [
      "Blockchain Developer (after additional training)",
      "Web3 Frontend Developer",
      "Blockchain Product Manager",
      "Crypto/DeFi Analyst"
    ];
  } else {
    recommendation = 'no';
    feedback = "Smart contract development might not be the best fit based on your current profile. Consider the alternative career paths that better match your strengths.";
    
    suggestions.push("Consider related fields that match your interests better");
    suggestions.push("Build foundational programming skills if you're still interested in tech");
    
    careerPaths = [
      "Traditional Software Development",
      "Data Science & Analytics", 
      "Cybersecurity",
      "Product Management",
      "Technical Writing",
      "UX/UI Design"
    ];
  }

  // Additional targeted suggestions based on WISCAR scores
  if (wiscarScore.will < 60) {
    suggestions.push("Consider your long-term commitment to learning complex technologies");
  }
  if (wiscarScore.interest < 60) {
    suggestions.push("Explore more blockchain applications to build genuine interest");
  }
  if (wiscarScore.skill < 60) {
    suggestions.push("Focus on building stronger programming foundations");
  }

  const confidenceScore = Math.round(
    (Math.abs(averageScore - 50) / 50) * 100
  );

  return {
    psychometricScore,
    technicalScore, 
    wiscarScore,
    recommendation,
    confidenceScore,
    feedback,
    suggestions,
    learningPath,
    careerPaths
  };
}