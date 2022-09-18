import { createContext, useReducer } from 'react';
import { QUESTION_DATA } from '../core/data/question-data';

const initialState = {
  questions: QUESTION_DATA,
  currentQuestionIndex: 0,
  currentAnswer: '',
  correctAnswersCount: 0,
  allUserAnswers: Array(QUESTION_DATA.length).fill(''),
  disabledButton: true,
  showResults: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHOOSE_WITH_PAGINATION': {
      const currentQuestionIndex = action.payload;
      const currentAnswer = state.allUserAnswers[currentQuestionIndex];
      const disabledButton = state.allUserAnswers[currentQuestionIndex] === '' ? true : false;
      return {
        ...state,
        currentQuestionIndex,
        currentAnswer,
        disabledButton,
      };
    }
    case 'SELECT_ANSWER': {
      const disabledButton = false;
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].answers[
          state.questions[state.currentQuestionIndex].correctIndex
        ]
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
        disabledButton,
      };
    }
    case 'NEXT_QUESTION': {
      // console.log(action.payload)
      const showResults = state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
      const allUserAnswers = state.allUserAnswers;
      allUserAnswers[state.currentQuestionIndex] = state.currentAnswer;
      const currentAnswer = state.allUserAnswers[currentQuestionIndex];
      const disabledButton = state.allUserAnswers[state.currentQuestionIndex + 1] === '' ? true : false;;
      
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        currentAnswer,
        disabledButton,
        allUserAnswers,
      };
    }
    default: {
      state;
    }
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
