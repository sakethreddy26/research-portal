import Navbar from "./Navbar";
import React, { useState } from "react";

const Research = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // State for managing circulars and form input fields
  const [circulars, setCirculars] = useState([]);
  const [newCircularTitle, setNewCircularTitle] = useState('');
  const [newCircularFile, setNewCircularFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleAddCircular = () => {
    if (newCircularTitle && newCircularFile) {
      const newCircular = {
        title: newCircularTitle,
        file: newCircularFile,
        url: URL.createObjectURL(newCircularFile), // Create a downloadable URL for the file
      };

      setCirculars([...circulars, newCircular]);
      setNewCircularTitle('');
      setNewCircularFile(null);
    }
  };

  const scholars = [
    { name: "Richa Sharma", year: 2019, duration: "3 years", fellowship: "Full time", exam: "PESU, PhD entrance" },
    { name: "Smrithi S", year: 2020, duration: "3 years", fellowship: "Full time", exam: "PESU, PhD entrance" },
    { name: "Divyaprabha K N", year: 2019, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
    { name: "Shruthi L", year: 2022, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
    { name: "Rohit Vaidya K", year: 2022, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
    { name: "Kundavai K R", year: 2024, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
    { name: "Pallabi Kar", year: 2023, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
    { name: "Afshman Rehaman", year: 2019, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Niveditha N Reddy", year: 2021, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Priya K", year: 2019, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Gururaj P", year: 2022, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "U Ananthanagu", year: 2020, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Asha Kurian", year: 2019, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Vishwachetan D", year: 2022, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Suguna A", year: 2024, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Ranjith Gnana Suthakar", year: 2022, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Nagamanoj K", year: 2024, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
    { name: "Abhay Srivastav", year: 2024, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },

  ];

  const filteredScholars = scholars.filter(scholar => {
    return (
      scholar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.year.toString().includes(searchTerm) ||
      scholar.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.fellowship.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.exam.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const renderContent = () => {
    switch (selectedOption) {
      case "Research Scholar Details":
        return (
          <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
            <h2 className="text-2xl font-bold mb-4 text-center">Research Scholar Details</h2>
            <input
              type="text"
              placeholder="Search by Name, Year, Duration, Fellowship, Exam"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 mb-4 w-full border border-gray-300 rounded"
            />
            <div className="grid grid-cols-1 gap-4">
              {filteredScholars.map((scholar, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                  <p><strong>Name:</strong> {scholar.name}</p>
                  <p><strong>Year of Enrolment:</strong> {scholar.year}</p>
                  <p><strong>Duration:</strong> {scholar.duration}</p>
                  <p><strong>Type of Fellowship:</strong> {scholar.fellowship}</p>
                  <p><strong>Qualifying Exam:</strong> {scholar.exam}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "circulars":
        return (
          <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
            <h2 className="text-2xl font-bold mb-4 text-center">Circulars</h2>
            <ul className="list-disc pl-4 mb-4">
              {circulars.map((circular, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold">{circular.title}</h3>
                  <a
                    href={circular.url}
                    download={circular.title}
                    className="text-blue-500 underline"
                  >
                    Download {circular.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Add Document Section */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Add Document to Circulars</h3>
              <input
                type="text"
                value={newCircularTitle}
                onChange={(e) => setNewCircularTitle(e.target.value)}
                placeholder="Enter document title"
                className="p-2 w-full mb-2 text-sm text-gray-700 border border-gray-300 rounded"
              />
              <input
                type="file"
                onChange={(e) => setNewCircularFile(e.target.files[0])}
                className="mb-2"
                accept=".pdf,.docx,.txt"
              />
              <button
                onClick={handleAddCircular}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2 cursor-pointer"
              >
                Add Document
              </button>
            </div>
          </div>
        );

      case "fee-details":
        return (
          <iframe
            src="app_b.pdf"
            width="100%"
            height="100vh"
            title="PDF Viewer"
            className="w-full h-full"
          ></iframe>
        );

      case "Admission":
        return (
          <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
            <h2 className="text-2xl font-bold mb-4 text-center">Admission</h2>
            <ul className="list-disc pl-4 mb-4">
              {circulars.map((circular, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold">{circular.title}</h3>
                  <a
                    href={circular.url}
                    download={circular.title}
                    className="text-blue-500 underline"
                  >
                    Download {circular.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Add Circular to Admission</h3>
              <input
                type="text"
                value={newCircularTitle}
                onChange={(e) => setNewCircularTitle(e.target.value)}
                placeholder="Enter document title"
                className="p-2 w-full mb-2 text-sm text-gray-700 border border-gray-300 rounded"
              />
              <input
                type="file"
                onChange={(e) => setNewCircularFile(e.target.files[0])}
                className="mb-2"
                accept=".pdf,.docx,.txt"
              />
              <button
                onClick={handleAddCircular}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2 cursor-pointer"
              >
                Add Circular
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="research h-screen flex flex-col">
      <Navbar />
      <div
        className="flex flex-1 overflow-hidden"
        style={{
          backgroundImage: "url('/img/pixelcut-export.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-1">
          <div className="bg-white bg-opacity-80 w-1/5 h-[100vh] p-5">
            <div className="text-center">
              <ul className="leading-10 font-serif text-xl">
                <li className="cursor-pointer" onClick={() => handleOptionClick("Research Scholar Details")}>
                  Research Scholar Details
                </li>
                <li className="cursor-pointer" onClick={() => handleOptionClick("circulars")}>
                  Circulars
                </li>
                <li className="cursor-pointer" onClick={() => handleOptionClick("fee-details")}>
                  Fee Details
                </li>
                <li className="cursor-pointer" onClick={() => handleOptionClick("Admission")}>
                  Admission
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 p-4 mt-2">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
