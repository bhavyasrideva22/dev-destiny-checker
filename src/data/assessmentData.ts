import { AssessmentSection, Question } from '@/types/assessment';

// Psychometric Section Questions
const psychometricQuestions: Question[] = [
  {
    id: 'psych_1',
    text: 'I enjoy solving complex logical puzzles and mathematical problems.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'personality',
    subcategory: 'analytical_thinking',
    weight: 1.0
  },
  {
    id: 'psych_2', 
    text: 'I am curious about how blockchain technology works behind the scenes.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'interest',
    subcategory: 'blockchain_curiosity',
    weight: 1.2
  },
  {
    id: 'psych_3',
    text: 'I prefer working on projects where I can see immediate results.',
    type: 'likert', 
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'personality',
    subcategory: 'feedback_preference',
    weight: 0.8
  },
  {
    id: 'psych_4',
    text: 'I am comfortable working with abstract concepts and theoretical frameworks.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'], 
    category: 'cognitive',
    subcategory: 'abstraction',
    weight: 1.1
  },
  {
    id: 'psych_5',
    text: 'When learning something new, I prefer to understand the underlying principles first.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'cognitive',
    subcategory: 'learning_style',
    weight: 1.0
  },
  {
    id: 'psych_6',
    text: 'I am motivated by the potential to build decentralized applications that can impact finance and society.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'motivation',
    subcategory: 'purpose_driven',
    weight: 1.3
  },
  {
    id: 'psych_7',
    text: 'I enjoy debugging code and finding solutions to technical problems.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'interest',
    subcategory: 'problem_solving',
    weight: 1.1
  },
  {
    id: 'psych_8',
    text: 'I am comfortable with the idea that blockchain technology is still evolving and changing rapidly.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'personality',
    subcategory: 'ambiguity_tolerance',
    weight: 1.0
  }
];

// Technical & Aptitude Questions
const technicalQuestions: Question[] = [
  {
    id: 'tech_1',
    text: 'What is a smart contract?',
    type: 'multiple-choice',
    options: [
      'A legal document stored on the blockchain',
      'Self-executing code that runs on a blockchain network',
      'A type of cryptocurrency',
      'A blockchain wallet'
    ],
    category: 'technical',
    subcategory: 'basic_concepts',
    weight: 1.0
  },
  {
    id: 'tech_2',
    text: 'Which programming language is most commonly used for Ethereum smart contracts?',
    type: 'multiple-choice',
    options: ['JavaScript', 'Python', 'Solidity', 'Rust'],
    category: 'technical', 
    subcategory: 'languages',
    weight: 1.0
  },
  {
    id: 'tech_3',
    text: 'If a function costs 21,000 gas and gas price is 20 gwei, what is the transaction cost in ETH? (1 ETH = 10^9 gwei)',
    type: 'multiple-choice',
    options: ['0.00042 ETH', '0.0042 ETH', '0.042 ETH', '0.42 ETH'],
    category: 'technical',
    subcategory: 'gas_calculations',
    weight: 1.2
  },
  {
    id: 'tech_4',
    text: 'How comfortable are you with object-oriented programming concepts?',
    type: 'scale',
    category: 'aptitude',
    subcategory: 'programming_experience',
    weight: 1.1
  },
  {
    id: 'tech_5',
    text: 'What does "immutable" mean in the context of blockchain?',
    type: 'multiple-choice',
    options: [
      'Data can be easily changed by administrators',
      'Data cannot be altered once written to the blockchain',
      'Data is encrypted',
      'Data is stored permanently'
    ],
    category: 'technical',
    subcategory: 'blockchain_properties',
    weight: 1.0
  },
  {
    id: 'tech_6',
    text: 'How would you rate your understanding of data structures (arrays, objects, mappings)?',
    type: 'scale',
    category: 'aptitude',
    subcategory: 'data_structures',
    weight: 1.0
  }
];

// WISCAR Framework Questions
const wiscarQuestions: Question[] = [
  {
    id: 'wiscar_1',
    text: 'I am willing to spend 6-12 months learning smart contract development before seeing significant career benefits.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'wiscar',
    subcategory: 'will',
    weight: 1.0
  },
  {
    id: 'wiscar_2',
    text: 'I find the concept of decentralized finance (DeFi) fascinating and want to build applications in this space.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'wiscar',
    subcategory: 'interest',
    weight: 1.0
  },
  {
    id: 'wiscar_3',
    text: 'How would you rate your current programming skills overall?',
    type: 'scale',
    category: 'wiscar',
    subcategory: 'skill',
    weight: 1.0
  },
  {
    id: 'wiscar_4',
    text: 'I can break down complex problems into smaller, manageable components.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'wiscar',
    subcategory: 'cognitive',
    weight: 1.0
  },
  {
    id: 'wiscar_5',
    text: 'I actively seek feedback and use it to improve my work.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'wiscar',
    subcategory: 'ability',
    weight: 1.0
  },
  {
    id: 'wiscar_6',
    text: 'I would enjoy working on projects that involve financial transactions and security considerations.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'wiscar',
    subcategory: 'realWorld',
    weight: 1.0
  }
];

export const assessmentSections: AssessmentSection[] = [
  {
    id: 'introduction',
    title: 'Welcome to the Assessment',
    description: 'Learn about smart contract development and what this assessment covers.',
    questions: [],
    timeEstimate: 2
  },
  {
    id: 'psychometric',
    title: 'Personality & Interest Assessment',
    description: 'Evaluate your personality traits, interests, and motivation for smart contract development.',
    questions: psychometricQuestions,
    timeEstimate: 8
  },
  {
    id: 'technical',
    title: 'Technical & Aptitude Assessment', 
    description: 'Test your technical knowledge and programming aptitude.',
    questions: technicalQuestions,
    timeEstimate: 10
  },
  {
    id: 'wiscar',
    title: 'WISCAR Framework Analysis',
    description: 'Multi-dimensional assessment of your readiness and learning profile.',
    questions: wiscarQuestions,
    timeEstimate: 7
  },
  {
    id: 'results',
    title: 'Your Results & Recommendations',
    description: 'Personalized insights, career guidance, and next steps.',
    questions: [],
    timeEstimate: 5
  }
];

export const totalEstimatedTime = assessmentSections.reduce((sum, section) => sum + section.timeEstimate, 0);