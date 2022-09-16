import React from 'react';
import { useState } from 'react';
import cn from 'classnames';

const Answer = ({ title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex justify-between items-center border-[5px] border-accent-100 rounded-3xl px-5 py-4">
      <span>{title}.</span>
      <input
        className={cn(
          'appearance-none transition-all duration-300 w-6 h-6 bg-transparent text-blue-600 bg-gray-100 rounded-full border-[3px] border-accent-100',
          {
            'dark:bg-blue-500 border-blue-500': checked,
          },
        )}
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </label>
  );
};

export default Answer;
