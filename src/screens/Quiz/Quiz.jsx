import React, { useContext } from 'react';
import BubbleButton from '../../components/ui/Button/BubbleButton';
import { QuizContext } from '../../contexts/quiz';
import Pagination from './Pagination';
import Question from './Question';
import Results from './Results';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="flex flex-col items-center justify-around h-[calc(100%-100px)] w-full">
      {!quizState.showResults ? (
        <>
          <h1 className="w-full font-semibold text-3xl text-accent border-b-2 border-dashed border-accent pb-6 mb-6">
            Question {quizState.currentQuestionIndex + 1}
            <span className="text-lg font-light">/{quizState.questions.length}</span>
          </h1>
          <Question />
          <BubbleButton
            title="Next"
            color="blue"
            disabled={quizState.disabledButton}
            onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
          />
          <Pagination />
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
