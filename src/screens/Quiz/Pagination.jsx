import { useContext } from 'react';
import { QuizContext } from '../../contexts/quiz';
import cn from 'classnames';

const Pagination = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="mt-2">
      <ul className="flex gap-4 flex-wrap">
        {quizState.questions.map((item, index) => (
          <li
            onClick={() => dispatch({ type: 'CHOOSE_WITH_PAGINATION', payload: index })}
            key={item.question}
          >
            <button className={cn("p-6 rounded-md w-7 h-7 flex items-center justify-center bg-accent-100", {
              'bg-green-500': quizState.allUserAnswers[index] !== '' 
            })}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
