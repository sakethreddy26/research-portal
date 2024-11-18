import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

const Patents = () => {
  const [selectedOption, setSelectedOption] = useState('processes');
  const [sections, setSections] = useState([]);
  const [professorData, setProfessorData] = useState(null);

  useEffect(() => {
    fetchDesignation();
  }, []);

  const fetchDesignation = async () => {
    try {
      const response = await fetch(`http://10.2.80.90:8081/api/v1/auth/verifyToken`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProfessorData(data.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addNewSection = (newSection) => {
    setSections([...sections, newSection]);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(/img/pixelcut-export.jpg)',
      }}
    >
      <div className="bg-white bg-opacity-80 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Patents
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 md:pr-8 mb-8 md:mb-0">
              <Sidebar
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                addNewSection={addNewSection}
                isHOD={professorData?.designation === "HOD"}
              />
            </div>
            <div className="flex-1">
              <Main selectedOption={selectedOption} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patents;