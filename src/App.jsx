import React from 'react';
import { QuizProvider } from './contexts/quiz';
import Quiz from './screens/Quiz/Quiz';

const App = () => {
  return (
    <div className="app__container h-[100vh]">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
};

export default App;
