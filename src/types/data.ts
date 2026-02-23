export interface ProblemItem {
  icon: string;
  description: string;
}

export interface IntelligenceItem {
  title: string;
  description: string;
}

export interface SolutionItems {
  source: string;
  title: string;
  items: string[];
}

export interface Teams {
  name: string;
  image: string;
  role: string;
  description: string;
}
