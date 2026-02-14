import { Directory } from "@/types";

export const battlesData: Directory[] = [
{
  name: 'general',
  path: '/general',
  battles: [
    {
      id: '011',
      title: 'Print user name',
      difficulty: 'easy',
      description: 'Ask the user name and let user type their name and return Hello , and name of user',
      examples: [
        {
          input: 'Alex',
          output: 'Hello , Alex'
        },
        {
          input: 'Tom',
          output: 'Hello , Tom'
        }
      ]
    },
    {
      id: '012',
      title: 'Star Pyramid Pattern',
      difficulty: 'easy',
      description: 'Ask user for the number of rows and print a pyramid pattern using stars (*)',
      detailedDescription: 'Create a program that takes the height of pyramid from user and prints a beautiful star pyramid. Each row should have increasing number of stars with proper spacing to form a pyramid shape.',
      examples: [
        {
          input: '3',
          output: '  *\n ***\n*****'
        },
        {
          input: '5',
          output: '    *\n   ***\n  *****\n *******\n*********'
        }
      ]
    },
    {
      id: '013',
      title: 'Age Validator',
      difficulty: 'easy',
      description: 'Check if the user is above 18 years old',
      detailedDescription: 'Ask the user for their age. If they are 18 or older, display "You are eligible". If they are under 18, display "You are not eligible" and tell them how many years left until they turn 18.',
      examples: [
        {
          input: '20',
          output: 'You are eligible'
        },
        {
          input: '15',
          output: 'You are not eligible. 3 years left until 18'
        }
      ]
    },
    {
      id: '014',
      title: 'Double or Pass Game',
      difficulty: 'medium',
      description: 'A fun game where users take turns doubling numbers',
      detailedDescription: 'Start with number 1. Two players take turns. On each turn, the player can either double the current number or pass the turn to the next player. The game continues until the number reaches 1000 or more. The player who makes the number reach 1000+ loses!',
      examples: [
        {
          input: 'Player 1: double\nPlayer 2: double\nPlayer 1: pass\nPlayer 2: double',
          output: 'Current: 4\nPlayer 2 doubles → 8\nGame continues...'
        }
      ]
    }
  ]
},
{
  name: 'math',
  path: '/math',
  battles: [
    {
      id: '021',
      title: 'Factorial Calculator',
      difficulty: 'easy',
      description: 'Calculate the factorial of a given number',
      detailedDescription: 'Factorial (symbol: !) means multiplying a number by all the numbers below it. For example: 5! = 5 × 4 × 3 × 2 × 1 = 120. It\'s like asking "How many ways can we arrange these items?"',
      examples: [
        {
          input: '5',
          output: '120 (5! = 5 × 4 × 3 × 2 × 1 = 120)'
        },
        {
          input: '3',
          output: '6 (3! = 3 × 2 × 1 = 6)'
        }
      ]
    },
    {
      id: '022',
      title: 'Prime Number Checker',
      difficulty: 'medium',
      description: 'Check if a number is prime',
      detailedDescription: 'A prime number is a number that can only be divided evenly by 1 and itself. Think of it like a pizza that can only be shared with 1 person or everyone at once - no other group size works! Examples: 2, 3, 5, 7, 11 are prime. 6 is not prime because you can share it among 2 or 3 people.',
      examples: [
        {
          input: '7',
          output: '✅ 7 is Prime! (Only divisible by 1 and 7)'
        },
        {
          input: '8',
          output: '❌ 8 is NOT Prime (Can be divided by 1, 2, 4, and 8)'
        }
      ]
    },
    {
      id: '023',
      title: 'Fibonacci Sequence Generator',
      difficulty: 'medium',
      description: 'Generate Fibonacci sequence up to n terms',
      detailedDescription: 'The Fibonacci sequence is like a magic number chain where each number is the sum of the two before it. Start with 0 and 1, then: 0, 1, 1, 2, 3, 5, 8, 13... It appears everywhere in nature - in flower petals, pinecones, and even galaxies!',
      examples: [
        {
          input: '6',
          output: '0, 1, 1, 2, 3, 5 (Each number adds the previous two: 0+1=1, 1+1=2, 1+2=3, 2+3=5)'
        },
        {
          input: '8',
          output: '0, 1, 1, 2, 3, 5, 8, 13'
        }
      ]
    },
    {
      id: '024',
      title: 'Greatest Common Divisor (GCD)',
      difficulty: 'medium',
      description: 'Find the largest number that divides two numbers evenly',
      detailedDescription: 'GCD is like finding the biggest pizza slice size that can perfectly fit into two different pizza sizes. For example, GCD of 12 and 18 is 6 - because 6 is the largest number that divides both 12 and 18 without leftovers!',
      examples: [
        {
          input: '12, 18',
          output: '6 (Largest number dividing both 12 and 18)'
        },
        {
          input: '8, 12',
          output: '4 (Largest number dividing both 8 and 12)'
        }
      ]
    },
    {
      id: '025',
      title: 'Least Common Multiple (LCM)',
      difficulty: 'medium',
      description: 'Find the smallest number that is a multiple of two numbers',
      detailedDescription: 'LCM is like planning a party and finding when two different cycles sync up. If one event happens every 3 days and another every 4 days, LCM tells you they\'ll meet every 12 days! For numbers 4 and 6, LCM is 12 because it\'s the smallest number both 4 and 6 divide into.',
      examples: [
        {
          input: '4, 6',
          output: '12 (Smallest number divisible by both 4 and 6)'
        },
        {
          input: '3, 5',
          output: '15 (Smallest number divisible by both 3 and 5)'
        }
      ]
    },
    {
      id: '026',
      title: 'Perfect Number Checker',
      difficulty: 'hard',
      description: 'Check if a number equals the sum of its proper divisors',
      detailedDescription: 'A perfect number is a number that equals the sum of its proper divisors (excluding itself). It\'s like a perfectly balanced number! The first perfect number is 6: its divisors are 1, 2, 3, and 1+2+3 = 6. It\'s so rare that only 51 perfect numbers have been discovered so far!',
      examples: [
        {
          input: '6',
          output: '✅ 6 is Perfect! (1 + 2 + 3 = 6)'
        },
        {
          input: '28',
          output: '✅ 28 is Perfect! (1 + 2 + 4 + 7 + 14 = 28)'
        },
        {
          input: '12',
          output: '❌ 12 is NOT Perfect (1 + 2 + 3 + 4 + 6 = 16, not 12)'
        }
      ]
    }
  ]
}
];
