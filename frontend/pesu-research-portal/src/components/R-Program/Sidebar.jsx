import React, { useState } from "react";
import { Plus, Trash2, Upload } from "lucide-react";

const DEFAULT_SECTIONS = [
  { id: "research-scholars", title: "Research Scholar Details", allowUpload: true },
  { id: "circulars", title: "Circulars", allowUpload: true },
  { id: "fee-details", title: "Fee Details", allowUpload: true }
];

const Sidebar = ({ handleOptionClick, selectedOption, onFileUpload, isHOD }) => {
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [uploadSection, setUploadSection] = useState(null);

  const handleAddSection = () => {
    if (newSectionTitle.trim()) {
      const newSection = {
        id: newSectionTitle.toLowerCase().replace(/\s+/g, '-'),
        title: newSectionTitle,
        allowUpload: true
      };
      setSections([...sections, newSection]);
      setNewSectionTitle("");
      setShowAddModal(false);
    }
  };

  const handleDeleteSection = (sectionId) => {
    setSections(sections.filter(section => section.id !== sectionId));
    if (selectedOption === sectionId) {
      handleOptionClick(null);
    }
  };

  const handleFileUpload = (sectionId, file) => {
    if (file) {
      onFileUpload(sectionId, file);
      setUploadSection(null);
    }
  };

  return (
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

      {/* Sections List */}
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id} className="relative group">
            <div
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedOption === section.id
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <button
                onClick={() => handleOptionClick(section.id)}
                className="flex-grow text-left font-serif text-lg"
              >
                {section.title}
              </button>
              
              {/* Action buttons - Only visible to HOD */}
              {isHOD && (
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {section.allowUpload && (
                    <div className="relative">
                      <button
                        onClick={() => setUploadSection(section.id)}
                        className="p-1 hover:bg-indigo-100 rounded-full transition-colors duration-200"
                      >
                        <Upload size={18} className="text-indigo-600" />
                      </button>
                      {uploadSection === section.id && (
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(section.id, e.target.files[0])}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept=".pdf,.doc,.docx,.txt"
                        />
                      )}
                    </div>
                  )}
                  <button
                    onClick={() => handleDeleteSection(section.id)}
                    className="p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                  >
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Add Section Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-xl font-semibold mb-4">Add New Section</h3>
            <input
              type="text"
              value={newSectionTitle}
              onChange={(e) => setNewSectionTitle(e.target.value)}
              placeholder="Enter section title"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSection}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;