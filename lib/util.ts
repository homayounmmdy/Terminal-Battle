import { UI } from "@/types/constants";

export const CreateSeparator = (char: string = '═'): string => char.repeat(UI.LINE_WIDTH);
