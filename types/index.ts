export interface Challenge {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  examples: {
    input: string;
    output: string;
  }[];
  solution: string;
}

export interface Directory {
  name: string;
  path: string;
  challenges: Challenge[];
}

export interface TerminalState {
  currentPath: string;
  history: string[];
  currentChallenge: Challenge | null;
}

export type CommandType = 'ls' | 'cd' | 'cat' | 'help' | 'clear' | 'pwd' | 'solution';
