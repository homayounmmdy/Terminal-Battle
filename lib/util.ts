import { TerminalLineType } from "@/types";
import { UI } from "@/types/constants";

export const CreateSeparator = (char: string = '═'): string => char.repeat(UI.LINE_WIDTH);

export const getLineColor = (type: TerminalLineType['type']) => {
  switch (type) {
    case 'error': return 'text-red-400';
    case 'input': return 'text-cyan-400';
    default: return 'text-green-400';
  }
};