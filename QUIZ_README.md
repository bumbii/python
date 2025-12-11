# Quiz System Documentation

## Overview

The Python GitBook now includes an interactive quiz system to help students practice and reinforce their Python knowledge. The system is built with React/Next.js and uses IndexedDB for local data storage.

## Features

### 1. **Topic and Level Selection**
- Students can select multiple topics they want to practice
- Three difficulty levels: Easy, Medium, Hard
- Multiple levels can be selected simultaneously
- Shows question count for each topic and level
- Quick select/deselect all topics functionality

### 2. **Interactive Quiz Taking**
- Up to 20 randomized questions per quiz session
- Progress bar showing current question position
- Level indicator for each question
- Four multiple-choice options per question
- Visual feedback for selected answers

### 3. **Immediate Feedback**
- After each answer, students see if they were correct
- Detailed explanation for every question
- Direct link to related topic page (opens in new tab)
- Visual indicators (✓ for correct, ✗ for wrong)

### 4. **Results Summary**
- Percentage score with performance message
- Breakdown of correct/incorrect answers
- Visual score circle
- Statistics grid showing quiz performance

### 5. **Personalized Recommendations**
- Lists topics where student got wrong answers
- Clickable links to review those specific topics
- Study tips for effective learning
- Encouragement messages based on performance

### 6. **Restart Quiz**
- Easy "Start New Quiz" button on results page
- Returns to topic selection for another round

## Technical Architecture

### Database Schema

**IndexedDB with Dexie.js** - Chosen for:
- Zero server cost (client-side only)
- No latency (instant access)
- Persistent storage across sessions
- Can store thousands of questions locally
- No backend infrastructure needed

#### Question Schema
```typescript
interface Question {
  id?: number;
  topic: string;              // Topic slug (e.g., "bien-so")
  topicTitle: string;         // Display name (e.g., "Biến (Variable)")
  level: 'easy' | 'medium' | 'hard';
  question: string;           // Question text
  options: string[];          // 4 answer options
  correctAnswer: number;      // Index of correct option (0-3)
  explanation: string;        // Explanation text
  relatedTopicUrl: string;   // URL to topic page
}
```

#### Quiz Result Schema
```typescript
interface QuizResult {
  id?: number;
  date: Date;
  topics: string[];          // Topics included in quiz
  levels: string[];          // Levels included
  totalQuestions: number;
  correctAnswers: number;
  wrongTopics: string[];     // Topics with wrong answers
  timestamp: number;
}
```

### File Structure

```
/lib
  /db.ts                    - Database schema and initialization
  /quizData.ts             - Quiz questions dataset (60+ questions)

/pages/quiz
  /index.tsx               - Topic/level selection page
  /take.tsx                - Quiz taking interface
  /results.tsx             - Results summary page

/theme.config.jsx          - Updated with Quiz button in navbar
```

## Quiz Questions

Currently includes **60+ questions** covering:

### Topics Covered (25+ topics):
- Variables (biến số)
- Data types (kiểu dữ liệu)
- Print function
- Strings & string methods
- Functions
- Conditionals (if-elif-else)
- Loops (for, while)
- Lists
- Dictionaries
- Tuples
- Sets
- List comprehension
- Exception handling
- Modules
- *args & **kwargs
- Recursion
- Boolean
- Arithmetic operators
- Logical operators
- Break/Continue/Pass
- File operations
- JSON
- Decorators
- Generators & Iterators

### Difficulty Distribution:
- **Easy**: 30+ questions (basic concepts)
- **Medium**: 20+ questions (application & understanding)
- **Hard**: 10+ questions (advanced concepts & edge cases)

## How to Add More Questions

Edit `/lib/quizData.ts` and add new questions following this format:

```typescript
{
  topic: 'topic-slug',
  topicTitle: 'Display Name',
  level: 'easy', // or 'medium', 'hard'
  question: 'Your question text here?',
  options: [
    'Option A',
    'Option B',
    'Option C',
    'Option D'
  ],
  correctAnswer: 2, // Index 0-3
  explanation: 'Explanation of why this is correct...',
  relatedTopicUrl: '/ngon-ngu-python/topic-slug'
}
```

## Installation

The quiz system requires these dependencies (already added to package.json):

```bash
npm install dexie dexie-react-hooks
```

Or with yarn:
```bash
yarn add dexie dexie-react-hooks
```

## Usage Flow

1. **User clicks "📝 Làm bài Quiz"** button in the navbar
2. **Topic Selection** (`/quiz`)
   - Database initializes with questions
   - User selects topics and levels
   - Clicks "Bắt đầu Quiz"
3. **Taking Quiz** (`/quiz/take`)
   - Shows randomized questions based on selection
   - User answers and sees immediate feedback
   - Links to related topics for review
4. **View Results** (`/quiz/results`)
   - See overall performance
   - Get recommended topics to study
   - Option to start new quiz

## Performance Considerations

- Questions are loaded once and cached in IndexedDB
- No network requests during quiz (100% offline capable)
- Fast random selection using Array.sort(() => Math.random() - 0.5)
- Maximum 20 questions per quiz to keep sessions manageable
- Results stored locally for future analytics potential

## Future Enhancements

Potential features to add:

1. **Quiz History**
   - View past quiz results
   - Track progress over time
   - Performance trends

2. **More Questions**
   - Expand to 200+ questions
   - Cover all 50 topics
   - More hard-level questions

3. **Timed Quizzes**
   - Optional time limit per question
   - Speed challenge mode

4. **Bookmarking**
   - Save questions for later review
   - Flag difficult questions

5. **Leaderboard** (if backend added)
   - Compare scores with other students
   - Achievement badges

6. **Question Feedback**
   - Allow users to report issues
   - Rate question quality

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (IndexedDB available)
- Mobile browsers: ✅ Responsive design

## Notes

- All quiz data is stored locally in the browser
- No user authentication required
- No server-side processing needed
- Quiz button appears on all pages in the navbar
- Questions are in Vietnamese to match the documentation language
