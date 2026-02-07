'use client';

import { useState, useEffect, useRef } from 'react';
import { Challenge } from '@/types';
import { challengesData } from '@/lib/challenges';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to JS-Challenge Terminal!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentPath, setCurrentPath] = useState('~');
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
      case 'help':
        handleHelp();
        break;
      case 'ls':
        handleLs();
        break;
      case 'cd':
        handleCd(arg);
        break;
      case 'cat':
        handleCat(arg);
        break;
      case 'pwd':
        handlePwd();
        break;
      case 'clear':
        handleClear();
        break;
      case 'solution':
        handleSolution();
        break;
      default:
        addOutput(`Command not found: ${cmd}. Type "help" for available commands.`, 'error');
    }

    setCurrentInput('');
  };

  const addOutput = (content: string, type: 'output' | 'error' = 'output') => {
    setLines(prev => [...prev, { type, content }]);
  };

  const handleHelp = () => {
    addOutput('Available commands:');
    addOutput('  ls              - List directories and challenges');
    addOutput('  cd <directory>  - Navigate to a directory');
    addOutput('  cat <challenge> - View challenge details');
    addOutput('  pwd             - Print current directory');
    addOutput('  solution        - Show solution for current challenge');
    addOutput('  clear           - Clear terminal');
    addOutput('  help            - Show this help message');
    addOutput('');
  };

  const handleLs = () => {
    if (currentPath === '~') {
      addOutput('Directories:');
      challengesData.forEach(dir => {
        addOutput(`  📁 ${dir.name}/`);
      });
    } else {
      const currentDir = challengesData.find(d => d.path === currentPath);
      if (currentDir) {
        addOutput('Challenges:');
        currentDir.challenges.forEach(challenge => {
          const badge = challenge.difficulty === 'easy' ? '🟢' : 
                       challenge.difficulty === 'medium' ? '🟡' : '🔴';
          addOutput(`  ${badge} ${challenge.id} - ${challenge.title} [${challenge.difficulty}]`);
        });
      }
    }
    addOutput('');
  };

  const handleCd = (directory: string) => {
    if (!directory || directory === '~' || directory === '/') {
      setCurrentPath('~');
      setCurrentChallenge(null);
      addOutput('');
      return;
    }

    if (directory === '..') {
      setCurrentPath('~');
      setCurrentChallenge(null);
      addOutput('');
      return;
    }

    const targetDir = challengesData.find(d => d.name === directory || d.path === `/${directory}`);
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
    if (currentPath === '~') {
      addOutput('Please navigate to a directory first using "cd <directory>"', 'error');
      addOutput('');
      return;
    }

    const currentDir = challengesData.find(d => d.path === currentPath);
    if (!currentDir) {
      addOutput('Error: Current directory not found', 'error');
      addOutput('');
      return;
    }

    const challenge = currentDir.challenges.find(c => c.id === challengeId);
    if (!challenge) {
      addOutput(`Challenge not found: ${challengeId}`, 'error');
      addOutput('Use "ls" to see available challenges.');
      addOutput('');
      return;
    }

    setCurrentChallenge(challenge);
    
    addOutput('═'.repeat(60));
    addOutput(`📝 ${challenge.title}`);
    addOutput(`Difficulty: ${challenge.difficulty.toUpperCase()}`);
    addOutput('═'.repeat(60));
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
    addOutput('═'.repeat(60));
    addOutput('');
  };

  const handlePwd = () => {
    addOutput(currentPath === '~' ? '/home/challenges' : `/home/challenges${currentPath}`);
    addOutput('');
  };

  const handleClear = () => {
    setLines([]);
  };

  const handleSolution = () => {
    if (!currentChallenge) {
      addOutput('No challenge selected. Use "cat <challenge-id>" to view a challenge first.', 'error');
      addOutput('');
      return;
    }

    addOutput('═'.repeat(60));
    addOutput(`💡 Solution for: ${currentChallenge.title}`);
    addOutput('═'.repeat(60));
    addOutput('');
    currentChallenge.solution.split('\n').forEach(line => {
      addOutput(line);
    });
    addOutput('');
    addOutput('═'.repeat(60));
    addOutput('');
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
