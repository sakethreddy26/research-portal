
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const Professors = () => {
//   const [professors, setProfessors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedDomain, setSelectedDomain] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDesignation, setSelectedDesignation] = useState('');
//   const [selectedCampus, setSelectedCampus] = useState('');
//   const [departments, setDepartments] = useState([]);
//   const [openDropdown, setOpenDropdown] = useState('');
//   const professorsPerPage = 8;
//   const navigate = useNavigate();

//   const rrCampusDepartments = [
//     'biotechnology',
//     'civil',
//     'computer-science-AIML',
//     'computer-science',
//     'electrical-&-electronics',
//     'electronics-&-communications',
//     'mechanical',
//   ];

//   const ecCampusDepartments = [
//     'Computer Science',
//     'electronics-&-communications',
//   ];

//   useEffect(() => {
//     const fetchProfessors = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/v1/api/getProfessors');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProfessors(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessors();
//   }, []);

//   const handleCampusClick = (campus) => {
//     if (openDropdown === campus) {
//       setOpenDropdown(''); // close the dropdown if it's already open
//     } else {
//       setOpenDropdown(campus); // open the dropdown
//       setSelectedCampus(campus);
//       setSelectedDomain(''); // clear the selected domain
//       if (campus === 'RR Campus') {
//         setDepartments(rrCampusDepartments);
//       } else if (campus === 'EC Campus') {
//         setDepartments(ecCampusDepartments);
//       }
//     }
//   };

//   const handleDomainClick = (dept) => {
//     setSelectedDomain(dept);
//     setOpenDropdown(''); // close the dropdown when a department is selected
//   };

//   const filteredProfessors = professors.filter((professor) =>
//   (selectedDomain ? professor.department.toLowerCase() === selectedDomain.toLowerCase() : true) &&
//   (selectedDesignation ? professor.designation?.toLowerCase().includes(selectedDesignation.toLowerCase()) : true) &&
//   (searchTerm ? professor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
// );

//   const indexOfLastProfessor = currentPage * professorsPerPage;
//   const indexOfFirstProfessor = indexOfLastProfessor - professorsPerPage;
//   const currentProfessors = filteredProfessors.slice(indexOfFirstProfessor, indexOfLastProfessor);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCardClick = (id) => {
//     navigate(`/getProfessorbyid/${id}`);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="opacity-80 h-screen" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)' }}>
//         <div className="flex">
//           <div className="flex flex-col items-center w-1/5 bg-white bg-opacity-80 h-screen p-4">
//             <nav className="text-center">
//               <ul>
//                 <li className="mb-4">
//                   <button
//                     className="text-blue-800 hover:underline transition ease-out duration-500"
//                     onClick={() => handleCampusClick('RR Campus')}
//                   >
//                     RR Campus
//                   </button>
//                   {openDropdown === 'RR Campus' && (
//                     <ul>
//                       {rrCampusDepartments.map((dept) => (
//                         <li key={dept} className="mb-2">
//                           <button
//                             className="text-blue-600 hover:underline transition ease-out duration-500"
//                             onClick={() => handleDomainClick(dept)}
//                           >
//                             {dept.replace(/-/g, ' ')}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//                 <li className="mb-4">
//                   <button
//                     className="text-blue-800 hover:underline transition ease-out duration-500"
//                     onClick={() => handleCampusClick('EC Campus')}
//                   >
//                     EC Campus
//                   </button>
//                   {openDropdown === 'EC Campus' && (
//                     <ul>
//                       {ecCampusDepartments.map((dept) => (
//                         <li key={dept} className="mb-2">
//                           <button
//                             className="text-blue-600 hover:underline transition ease-out duration-500"
//                             onClick={() => handleDomainClick(dept)}
//                           >
//                             {dept.replace(/-/g, ' ')}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="flex-1 p-8 overflow-auto">
//             {isSelected && ()}
//             {selectedDomain && (
//               <div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {currentProfessors.map((professor) => (
//                     <div
//                       key={professor._id}
//                       className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
//                       onClick={() => handleCardClick(professor._id)}
//                     >
//                       <div className="mb-4">
//                         <img
//                           src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
//                           alt="Professor"
//                           className="w-full h-auto rounded-md mb-2"
//                         />
//                       </div>
//                       <h2 className="text-xl font-semibold mb-2">{professor.name}</h2>
//                       <p className="text-gray-700 mb-1">Department: {professor.department || 'N/A'}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex justify-center mt-6">
//                   <nav>
//                     <ul className="inline-flex -space-x-px">
//                       {Array.from({ length: Math.ceil(filteredProfessors.length / professorsPerPage) }, (_, index) => (
//                         <li key={index}>
//                           <button
//                             onClick={() => paginate(index + 1)}
//                             className={`px-3 py-2 leading-tight ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-200'} rounded-lg`}
//                           >
//                             {index + 1}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Professors;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const Professors = () => {
//   const [professors, setProfessors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedDomain, setSelectedDomain] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDesignation, setSelectedDesignation] = useState('');
//   const [selectedCampus, setSelectedCampus] = useState('');
//   const [departments, setDepartments] = useState([]);
//   const [openDropdown, setOpenDropdown] = useState('');
//   const professorsPerPage = 8;
//   const navigate = useNavigate();

//   const rrCampusDepartments = [
//     'biotechnology',
//     'civil',
//     'computer-science-AIML',
//     'computer-science',
//     'electrical-&-electronics',
//     'electronics-&-communications',
//     'mechanical',
//   ];

//   const ecCampusDepartments = [
//     'Computer Science',
//     'electronics-&-communications',
//   ];

//   useEffect(() => {
//     const fetchProfessors = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/v1/api/getProfessors');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProfessors(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfessors();
//   }, []);

//   const handleCampusClick = (campus) => {
//     if (openDropdown === campus) {
//       setOpenDropdown(''); // close the dropdown if it's already open
//     } else {
//       setOpenDropdown(campus); // open the dropdown
//       setSelectedCampus(campus);
//       setSelectedDomain(''); // clear the selected domain
//       if (campus === 'RR Campus') {
//         setDepartments(rrCampusDepartments);
//       } else if (campus === 'EC Campus') {
//         setDepartments(ecCampusDepartments);
//       }
//     }
//   };

//   const handleDomainClick = (dept) => {
//     setSelectedDomain(dept);
//     setOpenDropdown(''); // close the dropdown when a department is selected
//     if (dept === 'Computer Science' && selectedCampus === 'EC Campus') {
//       setSearchTerm(''); // Clear search term when Computer Science under EC Campus is selected
//     }
//   };

//   const filteredProfessors = professors.filter((professor) =>
//     (selectedDomain ? professor.department.toLowerCase() === selectedDomain.toLowerCase() : true) &&
//     (selectedDesignation ? professor.designation?.toLowerCase().includes(selectedDesignation.toLowerCase()) : true) &&
//     (searchTerm ? professor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
//   );

//   const indexOfLastProfessor = currentPage * professorsPerPage;
//   const indexOfFirstProfessor = indexOfLastProfessor - professorsPerPage;
//   const currentProfessors = filteredProfessors.slice(indexOfFirstProfessor, indexOfLastProfessor);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCardClick = (id) => {
//     navigate(`/getProfessorbyid/${id}`);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="opacity-80 h-screen" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)' }}>
//         <div className="flex">
//           <div className="flex flex-col items-center w-1/5 bg-white bg-opacity-80 h-screen p-4">
//             <nav className="text-center">
//               <ul>
//                 <li className="mb-4">
//                   <button
//                     className="text-blue-800 hover:underline transition ease-out duration-500"
//                     onClick={() => handleCampusClick('RR Campus')}
//                   >
//                     RR Campus
//                   </button>
//                   {openDropdown === 'RR Campus' && (
//                     <ul>
//                       {rrCampusDepartments.map((dept) => (
//                         <li key={dept} className="mb-2">
//                           <button
//                             className="text-blue-600 hover:underline transition ease-out duration-500"
//                             onClick={() => handleDomainClick(dept)}
//                           >
//                             {dept.replace(/-/g, ' ')}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//                 <li className="mb-4">
//                   <button
//                     className="text-blue-800 hover:underline transition ease-out duration-500"
//                     onClick={() => handleCampusClick('EC Campus')}
//                   >
//                     EC Campus
//                   </button>
//                   {openDropdown === 'EC Campus' && (
//                     <ul>
//                       {ecCampusDepartments.map((dept) => (
//                         <li key={dept} className="mb-2">
//                           <button
//                             className="text-blue-600 hover:underline transition ease-out duration-500"
//                             onClick={() => handleDomainClick(dept)}
//                           >
//                             {dept.replace(/-/g, ' ')}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="flex-1 p-8 overflow-auto">
//             {selectedDomain === 'Computer Science' && selectedCampus === 'EC Campus' && (
//                 <input
//                   type="text"
//                   placeholder="Search professors..."
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   className="mb-4 p-2 border border-gray-300 rounded"
//                 />
//               )}
//             {selectedDomain && (
//               <div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {/* {currentProfessors.map((professor) => (
//                     <div
//                       key={professor._id}
//                       className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
//                       onClick={() => handleCardClick(professor._id)}
//                     >
//                       <div className="mb-4">
//                         <img
//                           src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
//                           alt="Professor"
//                           className="w-full h-auto rounded-md mb-2"
//                         />
//                       </div>
//                       <h2 className="text-xl font-semibold mb-2">{professor.name}</h2>
//                       <p className="text-gray-700 mb-1">Department: {professor.department || 'N/A'}</p>
//                     </div>
//                   ))} */}
//                 </div>
//                 <div className="flex justify-center mt-6">
//                   <nav>
//                     <ul className="inline-flex -space-x-px">
//                       {Array.from({ length: Math.ceil(filteredProfessors.length / professorsPerPage) }, (_, index) => (
//                         <li key={index}>
//                           <button
//                             onClick={() => paginate(index + 1)}
//                             className={`px-3 py-2 leading-tight ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-200'} rounded-lg`}
//                           >
//                             {index + 1}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Professors;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Professors = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [departments, setDepartments] = useState([]);
  const [openDropdown, setOpenDropdown] = useState('');
  const professorsPerPage = 8;
  const navigate = useNavigate();

  const rrCampusDepartments = [
    'biotechnology',
    'civil',
    'computer-science-AIML',
    'computer-science',
    'electrical-&-electronics',
    'electronics-&-communications',
    'mechanical',
  ];

  const ecCampusDepartments = [
    'Computer Science',
    'electronics-&-communications',
  ];

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await fetch('http://localhost:4000/v1/api/getProfessors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProfessors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []);

  const handleCampusClick = (campus) => {
    if (openDropdown === campus) {
      setOpenDropdown(''); // close the dropdown if it's already open
    } else {
      setOpenDropdown(campus); // open the dropdown
      setSelectedCampus(campus);
      setSelectedDomain(''); // clear the selected domain
      if (campus === 'RR Campus') {
        setDepartments(rrCampusDepartments);
      } else if (campus === 'EC Campus') {
        setDepartments(ecCampusDepartments);
      }
    }
  };

  const handleDomainClick = (dept) => {
    setSelectedDomain(dept);
    setOpenDropdown(''); // close the dropdown when a department is selected
    if (dept === 'Computer Science' && selectedCampus === 'EC Campus') {
      setSearchTerm(''); // Clear search term when Computer Science under EC Campus is selected
    }
  };

  const filteredProfessors = professors.filter((professor) =>
    (selectedDomain ? professor.department.toLowerCase() === selectedDomain.toLowerCase() : true) &&
    (selectedDesignation ? professor.designation?.toLowerCase().includes(selectedDesignation.toLowerCase()) : true) &&
    (searchTerm ? professor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  const indexOfLastProfessor = currentPage * professorsPerPage;
  const indexOfFirstProfessor = indexOfLastProfessor - professorsPerPage;
  const currentProfessors = filteredProfessors.slice(indexOfFirstProfessor, indexOfLastProfessor);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (id) => {
    navigate(`/getProfessorbyid/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <div className="opacity-80 h-screen" style={{
        backgroundImage: "url(/img/pixelcut-export.jpg)",
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        overflow: 'hidden' // Hide any overflow
    }}>

        <div className="flex">
          <div className="flex flex-col items-center w-1/5 bg-white bg-opacity-80 h-screen p-4">
            <nav className="text-center">
              <ul className='text-lg'>
                <li className="mb-4">
                  <button
                    className="text-blue-800 hover:underline transition ease-out duration-500"
                    onClick={() => handleCampusClick('RR Campus')}
                  >
                    RR Campus
                  </button>
                  {openDropdown === 'RR Campus' && (
                    <ul>
                      {rrCampusDepartments.map((dept) => (
                        <li key={dept} className="mb-2">
                          <button
                            className="text-blue-600 hover:underline transition ease-out duration-500"
                            onClick={() => handleDomainClick(dept)}
                          >
                            {dept.replace(/-/g, ' ')}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="mb-4">
                  <button
                    className="text-blue-800 hover:underline transition ease-out duration-500"
                    onClick={() => handleCampusClick('EC Campus')}
                  >
                    EC Campus
                  </button>
                  {openDropdown === 'EC Campus' && (
                    <ul>
                      {ecCampusDepartments.map((dept) => (
                        <li key={dept} className="mb-2">
                          <button
                            className="text-blue-600 hover:underline transition ease-out duration-500"
                            onClick={() => handleDomainClick(dept)}
                          >
                            {dept.replace(/-/g, ' ')}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-1 p-8 overflow-auto">
            {selectedDomain === 'Computer Science' && selectedCampus === 'EC Campus' && (
              <input
                type="text"
                placeholder="Search professors..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="mb-4 p-2 border border-gray-300 rounded"
              />
            )}
            {searchTerm !== '' && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {currentProfessors.length > 0 ? (
                    currentProfessors.map((professor) => (
                      <div
                        key={professor._id}
                        className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
                        onClick={() => handleCardClick(professor._id)}
                      >
                        <div className="mb-4">
                          <img
                            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
                            alt="Professor"
                            className="w-full h-auto rounded-md mb-2"
                          />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{professor.name}</h2>
                        <p className="text-gray-700 mb-1">Department: {professor.department || 'N/A'}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center mt-4">No professors found.</div>
                  )}
                </div>
                <div className="flex justify-center mt-6">
                  <nav>
                    <ul className="inline-flex -space-x-px">
                      {Array.from({ length: Math.ceil(filteredProfessors.length / professorsPerPage) }, (_, index) => (
                        <li key={index}>
                          <button
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-2 leading-tight ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-200'} rounded-lg`}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professors;
