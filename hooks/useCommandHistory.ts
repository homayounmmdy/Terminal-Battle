"use client";
import { useState } from "react";

const useCommandHistory = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addCommand = (command: string) => {
    setCommandHistory((prev) => [...prev, command]);
    resetIndex();
  };

  const navigateUp = (currentInput  : string) : string => {
    if (commandHistory.length === 0) return currentInput;

    const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
    setHistoryIndex(newIndex);
    return commandHistory[newIndex]
  }

   const navigateDown = (currentInput: string): string => {
    if (historyIndex === -1) return currentInput;
    
    const newIndex = historyIndex + 1;
    if (newIndex >= commandHistory.length) {
      resetIndex();
      return '';
    } else {
      setHistoryIndex(newIndex);
      return commandHistory[newIndex];
    }
  };

  const resetIndex = () => setHistoryIndex(-1);

  return {
    addCommand,
    navigateUp,
    navigateDown
  }
};

export default useCommandHistory;
