import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/quiz';
import Answer from './Answer';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div className="h-full flex-col flex justify-between pb-20">
      <h2 className="font-semibold text-2xl text-white">{currentQuestion.question}</h2>
      <div className="flex flex-col gap-4">
        {currentQuestion.answers.map((title, index) => (
          <Answer title={title} key={title} />
        ))}
      </div>
    </div>
  );
};

export default Question;
