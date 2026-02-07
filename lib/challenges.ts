import { Directory } from '@/types';

export const challengesData: Directory[] = [
  {
    name: 'arrays',
    path: '/arrays',
    challenges: [
      {
        id: 'reverse-array',
        title: 'Reverse Array',
        difficulty: 'easy',
        description: 'Write a function that reverses an array without using the built-in reverse() method.',
        examples: [
          {
            input: '[1, 2, 3, 4, 5]',
            output: '[5, 4, 3, 2, 1]'
          },
          {
            input: '["a", "b", "c"]',
            output: '["c", "b", "a"]'
          }
        ],
        solution: `function reverseArray(arr) {
  const result = [...arr];
  let left = 0;
  let right = result.length - 1;
  
  while (left < right) {
    [result[left], result[right]] = [result[right], result[left]];
    left++;
    right--;
  }
  
  return result;
}

// Alternative: Using reduce
function reverseArray(arr) {
  return arr.reduce((acc, item) => [item, ...acc], []);
}`
      },
      {
        id: 'find-duplicates',
        title: 'Find Duplicates',
        difficulty: 'medium',
        description: 'Find all duplicate elements in an array and return them as a new array.',
        examples: [
          {
            input: '[1, 2, 3, 2, 4, 5, 3]',
            output: '[2, 3]'
          },
          {
            input: '["a", "b", "c", "a", "d", "b"]',
            output: '["a", "b"]'
          }
        ],
        solution: `function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  
  return Array.from(duplicates);
}

// Alternative: Using filter
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index && arr.indexOf(item) === arr.lastIndexOf(item));
}`
      }
    ]
  },
  {
    name: 'strings',
    path: '/strings',
    challenges: [
      {
        id: 'palindrome',
        title: 'Palindrome Checker',
        difficulty: 'easy',
        description: 'Check if a given string is a palindrome (reads the same forwards and backwards).',
        examples: [
          {
            input: '"racecar"',
            output: 'true'
          },
          {
            input: '"hello"',
            output: 'false'
          }
        ],
        solution: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Alternative: Two pointers
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}`
      },
      {
        id: 'anagram',
        title: 'Anagram Checker',
        difficulty: 'medium',
        description: 'Check if two strings are anagrams of each other.',
        examples: [
          {
            input: '"listen", "silent"',
            output: 'true'
          },
          {
            input: '"hello", "world"',
            output: 'false'
          }
        ],
        solution: `function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  const sorted1 = str1.toLowerCase().split('').sort().join('');
  const sorted2 = str2.toLowerCase().split('').sort().join('');
  
  return sorted1 === sorted2;
}

// Alternative: Character count
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  const charCount = {};
  
  for (const char of str1.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (const char of str2.toLowerCase()) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  
  return true;
}`
      }
    ]
  },
  {
    name: 'algorithms',
    path: '/algorithms',
    challenges: [
      {
        id: 'fibonacci',
        title: 'Fibonacci Sequence',
        difficulty: 'medium',
        description: 'Generate the first n numbers in the Fibonacci sequence.',
        examples: [
          {
            input: '5',
            output: '[0, 1, 1, 2, 3]'
          },
          {
            input: '8',
            output: '[0, 1, 1, 2, 3, 5, 8, 13]'
          }
        ],
        solution: `function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const result = [0, 1];
  
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  
  return result;
}

// Alternative: Recursive with memoization
function fibonacci(n, memo = {}) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  const prev = fibonacci(n - 1, memo);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}`
      },
      {
        id: 'binary-search',
        title: 'Binary Search',
        difficulty: 'hard',
        description: 'Implement binary search algorithm to find the index of a target value in a sorted array.',
        examples: [
          {
            input: '[1, 3, 5, 7, 9, 11], target: 7',
            output: '3'
          },
          {
            input: '[2, 4, 6, 8, 10], target: 5',
            output: '-1'
          }
        ],
        solution: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Alternative: Recursive
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
  return binarySearch(arr, target, left, mid - 1);
}`
      }
    ]
  }
];
