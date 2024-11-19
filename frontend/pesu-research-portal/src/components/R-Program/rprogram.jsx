import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Research = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [professorDetail, setProfessorDetail] = useState({});
  const [circulars, setCirculars] = useState([]);
  const [newCircularTitle, setNewCircularTitle] = useState('');
  const [newCircularFile, setNewCircularFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [scholars, setScholars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sectionFiles, setSectionFiles] = useState({});

  useEffect(() => {
    const fetchScholars = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/v1/api/getAllscholars");
        setScholars(response.data);
      } catch (error) {
        console.error("Error fetching scholars:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchDesignation = async () => {
      try {
        const Response = await fetch(`http://10.2.80.90:8081/api/v1/auth/verifyToken`, {
          credentials: "include",
        });
        if (!Response.ok) {
          throw new Error(`HTTP error! status: ${Response.status}`);
        }
        const professorData = await Response.json();
        setProfessorDetail(professorData.user);
      } catch (err) {
        console.log(err.message);
      }
    };

    const fetchCirculars = async () => {
      try {
        const response = await axios.get("/v1/api/getCirculars");
        setCirculars(response.data);
      } catch (error) {
        console.error("Error fetching circulars:", error);
      }
    };

    fetchDesignation();
    fetchScholars();
    fetchCirculars();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleAddCircular = async () => {
    if (newCircularTitle && newCircularFile) {
      const formData = new FormData();
      formData.append('title', newCircularTitle);
      formData.append('file', newCircularFile);

      try {
        await axios.post('/v1/api/addCircular', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        fetchCirculars();
        setNewCircularTitle('');
        setNewCircularFile(null);
      } catch (error) {
        console.error('Error adding circular:', error);
      }
    }
  };

  const handleFileUpload = async (sectionId, file) => {
    // Here you would typically upload the file to your server
    // For now, we'll just store it in the local state
    setSectionFiles(prev => ({
      ...prev,
      [sectionId]: [...(prev[sectionId] || []), {
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date().toISOString()
      }]
    }));
  };

  const fetchCirculars = async () => {
    try {
      const response = await axios.get("/v1/api/getCirculars");
      setCirculars(response.data);
    } catch (error) {
      console.error("Error fetching circulars:", error);
    }
  };

  const filteredScholars = scholars.filter(scholar => {
    if (!scholar) return false;
    return (
      scholar["Name of the Scholar"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.SRN?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar["FT/PT"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.Dept?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const isHOD = professorDetail && professorDetail.designation === "HOD";

  return (
    <div className="flex flex-1">
      <div className="bg-white bg-opacity-80 w-1/5 h-[100vh] p-5">
        <Sidebar 
          handleOptionClick={handleOptionClick} 
          selectedOption={selectedOption}
          onFileUpload={handleFileUpload}
          isHOD={isHOD}
        />
      </div>
      <div className="flex-1 p-4 mt-2">
        <Main
          selectedOption={selectedOption}
          professorDetail={professorDetail}
          circulars={circulars}
          handleAddCircular={handleAddCircular}
          newCircularTitle={newCircularTitle}
          setNewCircularTitle={setNewCircularTitle}
          newCircularFile={newCircularFile}
          setNewCircularFile={setNewCircularFile}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredScholars={filteredScholars}
          isLoading={isLoading}
          sectionFiles={sectionFiles}
        />
      </div>
    </div>
  );
};

export default Research;