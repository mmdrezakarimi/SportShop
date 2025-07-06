import React from 'react';

const Loading = () => {
  const letters = 'SPORTSHOP'.split('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-400 text-white overflow-hidden">
      <div className="flex space-x-2 text-4xl font-bold font-mono">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="animate-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
