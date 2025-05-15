import React from 'react';

const BlackBoxSection = ({ text }) => {
  return (
    <div className="bg-black w-full py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center border-4 border-amber-50 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-8 mx-auto sm:mx-4 md:mx-8">
          <h2 className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-bold break-words">{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlackBoxSection;