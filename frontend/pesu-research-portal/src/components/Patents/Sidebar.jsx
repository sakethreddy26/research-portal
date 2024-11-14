// Sidebar.jsx
import React from 'react';

const Sidebar = ({ selectedOption, setSelectedOption }) => {
  const options = [
    { id: 'processes', label: 'Patent Processes' },
    { id: 'published', label: 'Patents Published' },
    { id: 'claimed', label: 'Apply for a Patent' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* <h2 className="text-2xl font-semibold mb-4 text-gray-800">Menu</h2> */}
      <ul className="space-y-2">
        {options.map((option) => (
          <li key={option.id}>
            <button
              className={`w-full text-left px-4 py-2 rounded-md focus:outline-none transition-colors duration-200 ${
                selectedOption === option.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-indigo-100'
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
