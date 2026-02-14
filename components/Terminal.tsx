'use client';

import { useState, useEffect, useRef } from 'react';
import { Challenge } from '@/types';
import { battlesData } from '@/lib/battles';
import {COMMANDS, PATHS, UI} from "@/types/constants";

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to Terminal Battle!' },
    { type: 'output', content: `Type "${COMMANDS.HELP}" to see available commands.` },
    { type: 'output', content: '' },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentPath, setCurrentPath] = useState(PATHS.HOME as string);
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    // Add to history
    setCommandHistory(prev => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    // Add input line
    setLines(prev => [...prev, { type: 'input', content: `${currentPath} $ ${trimmedCommand}` }]);

    const [cmd, ...args] = trimmedCommand.split(' ');
    const arg = args.join(' ');

    switch (cmd.toLowerCase()) {
      case COMMANDS.HELP:
        handleHelp();
        break;
      case COMMANDS.LIST:
        handleLs();
        break;
      case COMMANDS.CHANGE_DIR:
        handleCd(arg);
        break;
      case COMMANDS.OPEN:
        handleCat(arg);
        break;
      case COMMANDS.PRINT_WD:
        handlePwd();
        break;
      case COMMANDS.CLEAR:
        handleClear();
        break;
      default:
        addOutput(`Command not found: ${cmd}. Type "${COMMANDS.HELP}" for available commands.`, 'error');
    }

    setCurrentInput('');
  };

  const addOutput = (content: string, type: 'output' | 'error' = 'output') => {
    setLines(prev => [...prev, { type, content }]);
  };

  const handleHelp = () => {
    addOutput('Available commands:');
    addOutput(`  ${COMMANDS.LIST}                      - List of battles`);
    addOutput(`  ${COMMANDS.CHANGE_DIR} <directory>    - Navigate to a battles`);
    addOutput(`  ${COMMANDS.OPEN} <battle id>          - View battle details`);
    addOutput(`  ${COMMANDS.PRINT_WD}                  - Print current directory`);
    addOutput(`  ${COMMANDS.CLEAR}                     - Clear terminal`);
    addOutput(`  ${COMMANDS.HELP}                      - Show this help message`);
    addOutput('');
  };

  const handleLs = () => {
    if (currentPath === PATHS.HOME) {
      addOutput('Directories:');
      battlesData.forEach(dir => {
        addOutput(`  ${UI.DIRECTORY_ICON} ${dir.name}/`);
      });
    } else {
      const currentDir = battlesData.find(d => d.path === currentPath);
      if (currentDir) {
        addOutput('battles:');
        currentDir.battles.forEach(challenge => {
          addOutput(`  #: ${challenge.id} - ${challenge.title} [${challenge.difficulty}]`);
        });
      }
    }
    addOutput('');
  };

  const handleCd = (directory: string) => {
    if (!directory || directory === PATHS.HOME || directory === '/') {
      setCurrentPath(PATHS.HOME);
      setCurrentChallenge(null);
      addOutput('');
      return;
    }

    if (directory === '..') {
      setCurrentPath(PATHS.HOME);
      setCurrentChallenge(null);
      addOutput('');
      return;
    }

    const targetDir = battlesData.find(d => d.name === directory || d.path === `/${directory}`);
    if (targetDir) {
      setCurrentPath(targetDir.path);
      setCurrentChallenge(null);
      addOutput('');
    } else {
      addOutput(`Directory not found: ${directory}`, 'error');
      addOutput('');
    }
  };

  const handleCat = (challengeId: string) => {
    if (currentPath === PATHS.HOME) {
      addOutput(`Please navigate to a directory first using "${COMMANDS.CHANGE_DIR} <directory>"`, 'error');
      addOutput('');
      return;
    }

    const currentDir = battlesData.find(d => d.path === currentPath);
    if (!currentDir) {
      addOutput('Error: Current directory not found', 'error');
      addOutput('');
      return;
    }

    const challenge = currentDir.battles.find(c => c.id === challengeId);
    if (!challenge) {
      addOutput(`Challenge not found: ${challengeId}`, 'error');
      addOutput(`Use "${COMMANDS.LIST}" to see available battles.`);
      addOutput('');
      return;
    }

    setCurrentChallenge(challenge);
    
    addOutput('═'.repeat(UI.LINE_WIDTH));
    addOutput(`${UI.NOTE_ICON} ${challenge.title}`);
    addOutput(`Difficulty: ${challenge.difficulty.toUpperCase()}`);
    addOutput('═'.repeat(UI.LINE_WIDTH));
    addOutput('');
    addOutput('Description:');
    addOutput(challenge.description);
    addOutput('');
    addOutput('Examples:');
    challenge.examples.forEach((example, i) => {
      addOutput(`  Example ${i + 1}:`);
      addOutput(`    Input:  ${example.input}`);
      addOutput(`    Output: ${example.output}`);
    });
    addOutput('');
    addOutput('═'.repeat(UI.LINE_WIDTH));
    addOutput('');
  };

  const handlePwd = () => {
    addOutput(currentPath === PATHS.HOME ? PATHS.HOME_DISPLAY : PATHS.HOME_DISPLAY + currentPath);
    addOutput('');
  };

  const handleClear = () => {
    setLines([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div 
      className="h-screen w-screen bg-black text-green-400 p-4 font-mono text-sm overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <div 
        ref={terminalRef}
        className="h-full overflow-y-auto pb-4"
      >
        {lines.map((line, i) => (
          <div key={i} className={`whitespace-pre-wrap ${
            line.type === 'error' ? 'text-red-400' : 
            line.type === 'input' ? 'text-cyan-400' : 
            'text-green-400'
          }`}>
            {line.content}
          </div>
        ))}
        
        <div className="flex items-center mt-1">
          <span className="text-cyan-400 mr-2">{currentPath} $</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
