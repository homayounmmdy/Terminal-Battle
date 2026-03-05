export interface Challenge {
  id: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  description: string;
  examples: {
    input: string;
    output: string;
  }[];
  detailedDescription?: string;
}

export interface Directory {
  name: string;
  path: string;
  battles: Challenge[];
}

export interface TerminalState {
  currentPath: string;
  history: string[];
  currentChallenge: Challenge | null;
}

export type CommandType =
  | "ls"
  | "cd"
  | "cat"
  | "help"
  | "clear"
  | "pwd"
  | "solution";

export type TerminalLineType = {
  type: "input" | "output" | "error";
  content: string;
};
