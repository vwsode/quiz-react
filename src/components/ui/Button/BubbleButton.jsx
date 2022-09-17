import cn from 'classnames';

const Button = ({ title, color, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        'transition-colors flex items-center justify-center relative font-bold rounded-full overflow-hidden text-xl py-5 px-12 bg-blue-600',
        {
          'bg-gray-600 text-gray-400': disabled,
        },
      )}
      {...props}
    >
      <div
        className={cn(
          'transition-colors absolute rounded-full w-[50px] h-[50px] bg-blue-500 -top-3 z-0 left-4',
          {
            '!bg-gray-500': disabled,
          },
        )}
      ></div>
      <div
        className={cn(
          'transition-colors absolute rounded-full w-[16px] h-[16px] bg-blue-500 bottom-3 z-0 left-6',
          {
            '!bg-gray-500': disabled,
          },
        )}
      ></div>
      <div
        className={cn(
          'transition-colors absolute rounded-full w-[70px] h-[70px] bg-blue-500 -bottom-1/2 z-0 right-2',
          {
            '!bg-gray-500': disabled,
          },
        )}
      ></div>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default Button;
