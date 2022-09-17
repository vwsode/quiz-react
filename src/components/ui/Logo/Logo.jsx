import React from 'react';
import QuizLogo from '../../../assets/quiz-logo.png';

const Logo = ({ ...props }) => {
  return <img src={QuizLogo} width={60} height={60} {...props} />;
};

export default Logo;
