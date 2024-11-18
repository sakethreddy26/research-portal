import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const Sidebar = ({ selectedOption, setSelectedOption, addNewSection, isHOD }) => {
  const [options, setOptions] = useState([
    { id: 'processes', label: 'Patent Processes' },
    { id: 'published', label: 'Patents Published' },
    { id: 'claimed', label: 'Apply for a Patent' },
  ]);
  const [newSectionName, setNewSectionName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddSection = () => {
    if (newSectionName.trim()) {
      const newSection = {
        id: newSectionName.toLowerCase().replace(/\s+/g, '-'),
        label: newSectionName,
      };
      setOptions([...options, newSection]);
      addNewSection(newSection);
      setNewSectionName('');
      setShowAddModal(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative h-full">
        {/* Add Section Button - Only visible to HOD */}
        {isHOD && (
          <button
            onClick={() => setShowAddModal(true)}
            className="mb-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <Plus size={20} />
            <span>Add New Section</span>
          </button>
        )}
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

      {/* Add Section Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Add New Section</h3>
            <input
              type="text"
              value={newSectionName}
              onChange={(e) => setNewSectionName(e.target.value)}
              placeholder="New section name"
              className="w-full px-3 py-2 border rounded-md mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSection}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Add Section
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;