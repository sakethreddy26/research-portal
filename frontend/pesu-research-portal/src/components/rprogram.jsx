// import Navbar from "./Navbar";
// import React, { useState } from "react";

// const Research = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const renderContent = () => {
//     switch (selectedOption) {
//       case "Research Scholar Details":
//         const scholars = [
//           { name: "Richa Sharma", year: 2019, duration: "3 years", fellowship: "Full time", exam: "PESU, PhD entrance" },
//           { name: "Smrithi S", year: 2020, duration: "3 years", fellowship: "Full time", exam: "PESU, PhD entrance" },
//           { name: "Divyaprabha K N", year: 2019, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
//           { name: "Shruthi L", year: 2022, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
//           { name: "Rohit Vaidya K", year: 2022, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
//           { name: "Kundavai K R", year: 2024, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
//           { name: "Pallabi Kar", year: 2023, duration: "5 years", fellowship: "Internal Part time", exam: "PESU, PhD entrance" },
//           { name: "Afshman Rehaman", year: 2019, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Niveditha N Reddy", year: 2021, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Priya K", year: 2019, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Gururaj P", year: 2022, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "U Ananthanagu", year: 2020, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Asha Kurian", year: 2019, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Vishwachetan D", year: 2022, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Suguna A", year: 2024, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Ranjith Gnana Suthakar", year: 2022, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Nagamanoj K", year: 2024, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//           { name: "Abhay Srivastav", year: 2024, duration: "5 years", fellowship: "External Part time", exam: "PESU, PhD entrance" },
//         ];

//         return (
//           <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
//             <h2 className="text-2xl font-bold mb-4 text-center">Research Scholar Details</h2>
//             <div className="grid grid-cols-1 gap-4">
//               {scholars.map((scholar, index) => (
//                 <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
//                   {/* <h3 className="text-xl font-semibold mb-2">Scholar {index + 1}</h3> */}
//                   <p><strong>Name:</strong> {scholar.name}</p>
//                   <p><strong>Year of Enrolment:</strong> {scholar.year}</p>
//                   <p><strong>Duration:</strong> {scholar.duration}</p>
//                   <p><strong>Type of Fellowship:</strong> {scholar.fellowship}</p>
//                   <p><strong>Qualifying Exam:</strong> {scholar.exam}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case "circulars":
//         return (
//           <iframe
//             src="guidelines.pdf"
//             width="100%"
//             height="100vh"
//             title="PDF Viewer"
//             className="w-full h-full"
//           ></iframe>
//         );
//       case "fee-details":
//         return (
//           <iframe
//             src="app_b.pdf"
//             width="100%"
//             height="100vh"
//             title="PDF Viewer"
//             className="w-full h-full"
//           ></iframe>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="research h-screen flex flex-col">
//       <Navbar />
//       <div
//         className="flex flex-1 overflow-hidden"
//         style={{
//           backgroundImage: "url('/img/pixelcut-export.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div className="flex flex-1">
//           <div className="bg-white bg-opacity-80 w-1/5 h-[100vh] p-5">
//             <div className="text-center">
//               <ul className="leading-10 font-serif text-xl">
//                 <li className="cursor-pointer" onClick={() => handleOptionClick("Research Scholar Details")}>
//                   Research Scholar Details
//                 </li>
//                 <li className="cursor-pointer" onClick={() => handleOptionClick("circulars")}>
//                   Circulars
//                 </li>
//                 <li className="cursor-pointer" onClick={() => handleOptionClick("fee-details")}>
//                   Fee Details
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex-1 p-4 mt-2">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Research;


import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

const Research = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [scholars, setScholars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (selectedOption === "Research Scholar Details") {
      fetch("http://localhost:4000/v1/api/getAllscholars")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setScholars(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [selectedOption]);

  const renderContent = () => {
    switch (selectedOption) {
      case "Research Scholar Details":
        if (loading) {
          return <p>Loading...</p>;
        }

        if (error) {
          return <p>Error: {error}</p>;
        }

        return (
          <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
            <h2 className="text-2xl font-bold mb-4 text-center">Research Scholar Details</h2>
            <div className="grid grid-cols-1 gap-4">
              {scholars.map((scholar, index) => (
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
          <iframe
            src="guidelines.pdf"
            width="100%"
            height="100vh"
            title="PDF Viewer"
            className="w-full h-full"
          ></iframe>
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
