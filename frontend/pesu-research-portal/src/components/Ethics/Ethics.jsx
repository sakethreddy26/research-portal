// Ethics.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

const Ethics = () => {
  const [selectedOption, setSelectedOption] = useState('researchEthics');

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/img/ethics-background.jpg)',
      }}
    >
      <div className="bg-white bg-opacity-90 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Ethics in Research
          </h1>
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="md:w-1/4 md:pr-8 mb-8 md:mb-0">
              <Sidebar
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Main selectedOption={selectedOption} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethics;
