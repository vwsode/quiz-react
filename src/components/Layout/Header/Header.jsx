import React from 'react';
import { QuizLogo } from '../../ui';

const Header = () => {
  return (
    <header className="pb-10 flex justify-between items-center">
      <QuizLogo />
      <div></div>
    </header>
  );
};

export default Header;
