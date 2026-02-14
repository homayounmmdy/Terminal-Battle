/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef} from "react";

export const useTerminalScroll = (dependencyArray: unknown[]) => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        terminalRef.current?.scrollTo({
          top: terminalRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }, 10);
    }
  }, dependencyArray);

  return terminalRef;
};