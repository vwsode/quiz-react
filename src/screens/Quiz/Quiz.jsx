import React, { useContext } from 'react';
import Button from '../../components/ui/Button/Button';
import { QuizContext } from '../../contexts/quiz';
import Question from './Question';
import Results from './Results';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      {!quizState.showResults ? (
        <>
          <h1 className="w-full font-semibold text-3xl text-accent border-b-2 border-dashed border-accent py-3 mb-3">
            Question {quizState.currentQuestionIndex + 1}
            <span className="text-lg font-light">/{quizState.questions.length}</span>
          </h1>
          <Question />
          <Button title="Next" color="gray" onClick={() => dispatch({ type: 'NEXT_QUESTION' })} />
        </>
      ) : (
        <>
          <Results />
        </>
      )}
    </div>
  );
};

export default Quiz;
