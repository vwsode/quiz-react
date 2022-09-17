import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/quiz';
import Answer from './Answer';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div className="w-full flex-col flex justify-between">
      <h2 className="mb-10 font-semibold text-2xl text-white">{currentQuestion.question}</h2>
      <div className="flex flex-col gap-4">
        {currentQuestion.answers.map((title, index) => (
          <Answer
            key={title}
            title={title}
            correctAnswer={currentQuestion.answers[currentQuestion.correctIndex]}
            currentAnswer={quizState.currentAnswer}
            onSelectAnswer={(title) => dispatch({ type: 'SELECT_ANSWER', payload: title })}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
