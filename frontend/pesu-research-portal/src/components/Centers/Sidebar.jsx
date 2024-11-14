// Sidebar.jsx
import React from 'react';

const Sidebar = ({ setSelectedCampus, selectedCampus }) => {
  const campuses = ['RR Campus', 'EC Campus'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Campuses</h2>
      <ul className="space-y-2">
        {campuses.map((campus, index) => (
          <li key={index}>
            <button
              className={`w-full text-left px-4 py-2 rounded-md focus:outline-none transition-colors duration-200 ${
                selectedCampus === campus
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-indigo-100'
              }`}
              onClick={() => setSelectedCampus(campus)}
            >
              {campus}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
