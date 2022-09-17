import React from 'react';
import Layout from './components/Layout/Layout';
import { QuizProvider } from './contexts/quiz';
import Quiz from './screens/Quiz/Quiz';

const App = () => {
  return (
    <div className="app__container h-[100vh]">
      <Layout>
        <QuizProvider>
          <Quiz />
        </QuizProvider>
      </Layout>
    </div>
  );
};

export default App;
