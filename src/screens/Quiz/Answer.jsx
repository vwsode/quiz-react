import React from 'react';
import cn from 'classnames';

const Answer = ({ title, onSelectAnswer, correctAnswer, currentAnswer }) => {
  const isCorrectAnswer = currentAnswer === correctAnswer && title === correctAnswer;
  const isWrongAnswer = currentAnswer === title && currentAnswer !== correctAnswer;
  const isDisabled = currentAnswer ? true : false;

  return (
    <div
      onClick={() => onSelectAnswer(title)}
      className={cn(
        'flex justify-between items-center border-[5px] border-accent-100 rounded-3xl px-5 py-4 transition-all duration-300',
        {
          '!border-green-500 !text-green-500': isCorrectAnswer,
          '!border-red-500 !text-red-500': isWrongAnswer,
          'border-gray-500 text-gray-500 pointer-events-none no-focus': isDisabled,
        },
      )}
    >
      <span>{title}</span>
      <input
        className={cn(
          'appearance-none transition-all duration-300 w-6 h-6 bg-transparent text-blue-600 rounded-full border-[3px] border-accent-100',
          {
            '!bg-green-500 border-green-500': isCorrectAnswer,
            '!bg-red-500 border-red-500': isWrongAnswer,
            'bg-gray-500 border-gray-500': isDisabled,
          },
        )}
        readOnly={isDisabled}
        type="checkbox"
      />
    </div>
  );
};

export default Answer;
