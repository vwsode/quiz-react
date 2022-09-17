import { useContext } from 'react';
import { QuizContext } from '../../contexts/quiz';

const Pagination = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState.allUserAnswers);
  return (
    <div className="mt-2">
      <ul className="flex gap-4 flex-wrap">
        {quizState.questions.map((item, index) => (
          <li
            onClick={() => dispatch({ type: 'CHOOSE_WITH_PAGINATION', payload: index })}
            key={item.question}
          >
            <button className="p-6 rounded-md w-7 h-7 flex items-center justify-center bg-accent-100">
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
