// // Main.jsx
// import React from "react";

// const Main = ({
//   selectedOption,
//   professorDetail,
//   circulars,
//   handleAddCircular,
//   newCircularTitle,
//   setNewCircularTitle,
//   setNewCircularFile,
//   searchTerm,
//   setSearchTerm,
//   filteredScholars,
//   isLoading,
// }) => {
//   const renderContent = () => {
//     switch (selectedOption) {
//       case "Research Scholar Details":
//         return (
//           <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
//             <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//               Research Scholar Details
//             </h2>
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//               <input
//                 type="text"
//                 placeholder="Search by Name, SRN, FT/PT, Department"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="p-3 mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             {isLoading ? (
//               <div className="flex justify-center items-center h-64">
//                 <svg
//                   className="animate-spin h-10 w-10 text-indigo-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8H4z"
//                   ></path>
//                 </svg>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredScholars.length > 0 ? (
//                   filteredScholars.map((scholar) => (
//                     <div
//                       key={scholar.SRN}
//                       className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
//                     >
//                       <h3 className="text-xl font-semibold mb-2 text-indigo-600">
//                         {scholar["Name of the Scholar"]}
//                       </h3>
//                       <p className="text-gray-700 mb-1">
//                         <strong>SRN:</strong> {scholar.SRN}
//                       </p>
//                       <p className="text-gray-700 mb-1">
//                         <strong>Type:</strong> {scholar["FT/PT"]}
//                       </p>
//                       <p className="text-gray-700">
//                         <strong>Department:</strong> {scholar["Dept."]}
//                       </p>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500">
//                     No scholars found.
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         );

//       case "circulars":
//         return (
//           <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
//             <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//               Circulars
//             </h2>
//             <ul className="space-y-4 mb-6">
//               {circulars.map((circular, index) => (
//                 <li key={index} className="bg-gray-50 p-4 rounded-md">
//                   <h3 className="text-lg font-semibold text-indigo-600 mb-2">
//                     {circular.title}
//                   </h3>
//                   <a
//                     href={`http://localhost:4000${circular.url}`}
//                     download={circular.title}
//                     className="text-blue-500 hover:text-blue-700 underline"
//                   >
//                     Download {circular.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Add Document Section */}
//             {professorDetail && professorDetail.designation === "HOD" && (
//               <div className="mt-6">
//                 <h3 className="font-semibold text-xl mb-4 text-gray-800">
//                   Add Document to Circulars
//                 </h3>
//                 <input
//                   type="text"
//                   value={newCircularTitle}
//                   onChange={(e) => setNewCircularTitle(e.target.value)}
//                   placeholder="Enter document title"
//                   className="p-3 w-full mb-4 text-sm text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <input
//                   type="file"
//                   onChange={(e) => setNewCircularFile(e.target.files[0])}
//                   className="mb-4"
//                   accept=".pdf,.docx,.txt"
//                 />
//                 <button
//                   onClick={handleAddCircular}
//                   className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full mt-2 cursor-pointer transition-colors duration-200"
//                 >
//                   Add Document
//                 </button>
//               </div>
//             )}
//           </div>
//         );

//       case "fee-details":
//         return (
//           <iframe
//             src="app_b.pdf"
//             width="100%"
//             height="100vh"
//             title="PDF Viewer"
//             className="w-full h-[100vh]"
//           ></iframe>
//         );

//       default:
//         return null;
//     }
//   };

//   return <div>{renderContent()}</div>;
// };

// export default Main;

import React from "react";
import { FileText, Download, Trash2 } from "lucide-react";

const Main = ({
  selectedOption,
  professorDetail,
  circulars,
  handleAddCircular,
  newCircularTitle,
  setNewCircularTitle,
  setNewCircularFile,
  searchTerm,
  setSearchTerm,
  filteredScholars,
  isLoading,
  sectionFiles
}) => {
  const renderContent = () => {
    // If it's a custom section, render the files view
    if (selectedOption && sectionFiles[selectedOption]) {
      return (
        <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {selectedOption.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h2>
          <div className="space-y-4">
            {sectionFiles[selectedOption].map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="text-indigo-600" size={24} />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      Uploaded on {new Date(file.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-indigo-100 rounded-full transition-colors duration-200">
                    <Download size={20} className="text-indigo-600" />
                  </button>
                  <button className="p-2 hover:bg-red-100 rounded-full transition-colors duration-200">
                    <Trash2 size={20} className="text-red-600" />
                  </button>
                </div>
              </div>
            ))}
            {sectionFiles[selectedOption].length === 0 && (
              <p className="text-center text-gray-500 py-8">
                No files uploaded yet. Use the upload button in the sidebar to add files.
              </p>
            )}
          </div>
        </div>
      );
    }

    // Default sections rendering
    switch (selectedOption) {
      case "research-scholars":
        return (
          <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Research Scholar Details
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <input
                type="text"
                placeholder="Search by Name, SRN, FT/PT, Department"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-3 mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <svg
                  className="animate-spin h-10 w-10 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredScholars.length > 0 ? (
                  filteredScholars.map((scholar) => (
                    <div
                      key={scholar.SRN}
                      className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                        {scholar["Name of the Scholar"]}
                      </h3>
                      <p className="text-gray-700 mb-1">
                        <strong>SRN:</strong> {scholar.SRN}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Type:</strong> {scholar["FT/PT"]}
                      </p>
                      <p className="text-gray-700">
                        <strong>Department:</strong> {scholar["Dept."]}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No scholars found.
                  </p>
                )}
              </div>
            )}
          </div>
        );

      case "circulars":
        return (
          <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-1 overflow-y-auto max-h-[70vh]">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Circulars
            </h2>
            <ul className="space-y-4 mb-6">
              {circulars.map((circular, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                    {circular.title}
                  </h3>
                  <a
                    href={`http://localhost:4000${circular.url}`}
                    download={circular.title}
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    Download {circular.title}
                  </a>
                </li>
              ))}
            </ul>

            {professorDetail && professorDetail.designation === "HOD" && (
              <div className="mt-6">
                <h3 className="font-semibold text-xl mb-4 text-gray-800">
                  Add Document to Circulars
                </h3>
                <input
                  type="text"
                  value={newCircularTitle}
                  onChange={(e) => setNewCircularTitle(e.target.value)}
                  placeholder="Enter document title"
                  className="p-3 w-full mb-4 text-sm text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="file"
                  onChange={(e) => setNewCircularFile(e.target.files[0])}
                  className="mb-4"
                  accept=".pdf,.docx,.txt"
                />
                <button
                  onClick={handleAddCircular}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full mt-2 cursor-pointer transition-colors duration-200"
                >
                  Add Document
                </button>
              </div>
            )}
          </div>
        );

      case "fee-details":
        return (
          <iframe
            src="app_b.pdf"
            width="100%"
            height="100vh"
            title="PDF Viewer"
            className="w-full h-[100vh]"
          ></iframe>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">Select a section from the sidebar</p>
          </div>
        );
    }
  };

  return <div className="h-full">{renderContent()}</div>;
};

export default Main;