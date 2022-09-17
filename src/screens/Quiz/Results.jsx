import React, { useContext } from 'react';
import DefaultButton from '../../components/ui/Button/DefaultButton';
import Img from '../../assets/gift.svg';
import CheckImg from '../../assets/check.svg';
import { QuizContext } from '../../contexts/quiz';
import Confetti from 'react-confetti';

const Results = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="w-full flex flex-col h-full justify-between">
      <Confetti numberOfPieces={1000} recycle={false} className="w-full h-full" />
      <h1 className="w-full font-semibold text-3xl text-white border-white py-3 mb-3">
        Congratulations 🎉
      </h1>
      <div className="flex flex-col items-center gap-10 mb-10">
        <img className="select-none pointer-events-none" src={Img} alt="" />
        <h2 className=" text-2xl font-semibold">Results of ... quest</h2>
        <div className="flex flex-col w-full gap-2">
          <div className="bg-accent-100 text-md w-full rounded-xl p-5 flex items-center justify-between">
            <span className="flex items-center gap-4 upp">
              <img className="p-2 bg-accent-bg rounded-full" src={CheckImg} alt="" />
              Correct Predictions
            </span>
            <span className="font-semibold">{quizState.correctAnswersCount}</span>
          </div>
        </div>
      </div>
      <DefaultButton title="Okay" />
    </div>
  );
};

export default Results;
