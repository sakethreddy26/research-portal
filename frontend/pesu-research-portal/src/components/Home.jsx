// import React, { useState, useEffect } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import axios from 'axios';
// import Navbar from './Navbar';
// import {Chart, ArcElement,registerables} from 'chart.js'
// Chart.register(ArcElement,...registerables);


// const HomePage = () => {
//   const [professors, setProfessors] = useState([]);
//   const [publications, setPublications] = useState([]);
//   const [publicationsByYear, setPublicationsByYear] = useState({});
//   const [recentPublications2024, setRecentPublications2024] = useState([]); // New state for filtered publications

//   // Fetch professor and publication data on mount
//   useEffect(() => {
//     const fetchProfessors = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/v1/api/getAllprofs");
//         setProfessors(response.data);
//       } catch (error) {
//         console.error("Error fetching professors:", error);
//       }
//     };

//     const fetchPublications = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/v1/api/getAllPublications");
//         setPublications(response.data);
//         // Filter publications for 2024
//         const filtered2024 = response.data.filter((pub) => pub.Year === 2024);
//         setRecentPublications2024(filtered2024); // Update state with recent publications of 2024
//       } catch (error) {
//         console.error("Error fetching publications:", error);
//       }
//     };

//     const fetchPublicationsByYear = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/v1/api/getAllPublications"); // Get all publications first
//         const publicationsData = response.data;

//         // Group publications by year
//         const publicationsByYear = publicationsData.reduce((acc, pub) => {
//           const year = pub.Year; // Default to 'Unknown' if no year
//           if (year) {
//             acc[year] = (acc[year] || 0) + 1; // Increment count for the year
//           }
//           return acc;
//         }, {});

//         setPublicationsByYear(publicationsByYear); // Update state
//       } catch (error) {
//         console.error("Error fetching publications by year:", error);
//       }
//     };

//     fetchProfessors();
//     fetchPublications();
//     fetchPublicationsByYear();
//   }, []);

//   // Refined bar chart data
//   const barChartData = {
//     labels: Object.keys(publicationsByYear),
//     datasets: [{
//       label: "Publications",
//       data: Object.values(publicationsByYear),
//       backgroundColor: "rgba(75, 192, 192, 0.6)",
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 1,
//     }],
//   };

//   // Refined pie chart data
//   const departmentDistribution = professors.reduce((acc, professor) => {
//     const department = professor.department;
//     acc[department] = (acc[department] || 0) + 1;
//     return acc;
//   }, {});

//   const pieChartData = {
//     labels: Object.keys(departmentDistribution),
//     datasets: [{
//       data: Object.values(departmentDistribution),
//       backgroundColor: [
//         "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
//       ],
//     }],
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* <Navbar /> */}
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
//           Welcome To PESU Research Portal
//         </h1>

//         {/* Statistics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {[
//             { title: "Total Conferences", value: publications.filter(item => item["Publication Type"] === "Conference Paper").length },
//             { title: "Total Journals", value: publications.filter(item => item["Publication Type"] === "Article").length },
//             { title: "Total Publications", value: publications.length },
//           ].map((stat, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">{stat.title}</h3>
//               <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Recent Publications */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Recent Publications (2024)</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {recentPublications2024.slice(0, 6).map((pub) => (
//               <div key={pub._id} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{pub.Title}</h3>
//                 <p className="text-gray-600 mb-4">
//                   <span className="font-medium">by {pub.First_Name} {pub.Last_Name}</span>
//                 </p>
//                 <p className="text-gray-500">
//                   Published on:{" "}
//                   <span className="text-gray-700">
//                     {pub["Pub.Date"] ? new Date(pub["Pub.Date"]).toLocaleDateString() : pub.Year || "Unknown"}
//                   </span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Bar Chart: Publications per Year */}
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Publications Per Year</h2>
//             {Object.keys(publicationsByYear).length > 0 ? (
//               <Bar 
//                 data={barChartData} 
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: { display: false },
//                     title: { display: false },
//                   },
//                   scales: {
//                     y: { beginAtZero: true }
//                   }
//                 }}
//               />
//             ) : (
//               <p className="text-gray-500">No data available for publications by year.</p>
//             )}
//           </div>

//           {/* Pie Chart: Professors by Department */}
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Professors by Department</h2>
//             <Pie 
//               data={pieChartData} 
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: { position: 'bottom' },
//                 }
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// HomePage.jsx
import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const HomePage = () => {
  const [professors, setProfessors] = useState([]);
  const [publications, setPublications] = useState([]);
  const [publicationsByYear, setPublicationsByYear] = useState({});
  const [recentPublications, setRecentPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profResponse, pubResponse] = await Promise.all([
          axios.get("http://localhost:4000/v1/api/getAllprofs"),
          axios.get("http://localhost:4000/v1/api/getAllPublications"),
        ]);

        setProfessors(profResponse.data);
        setPublications(pubResponse.data);

        // Group publications by year
        const pubsByYear = pubResponse.data.reduce((acc, pub) => {
          const year = pub.Year || "Unknown";
          acc[year] = (acc[year] || 0) + 1;
          return acc;
        }, {});
        setPublicationsByYear(pubsByYear);

        // Get recent publications (last 2 years)
        const currentYear = new Date().getFullYear();
        const recentPubs = pubResponse.data
          .filter((pub) => pub.Year >= currentYear - 1)
          .slice(0, 6);
        setRecentPublications(recentPubs);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Bar chart data
  const barChartData = {
    labels: Object.keys(publicationsByYear).sort(),
    datasets: [
      {
        label: "Publications",
        data: Object.values(publicationsByYear),
        backgroundColor: "#4F46E5", // Indigo color
        borderColor: "#4F46E5",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  // Pie chart data
  const departmentDistribution = professors.reduce((acc, professor) => {
    const department = professor.department || "Unknown";
    acc[department] = (acc[department] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(departmentDistribution),
    datasets: [
      {
        data: Object.values(departmentDistribution),
        backgroundColor: [
          "#6366F1",
          "#EF4444",
          "#10B981",
          "#F59E0B",
          "#3B82F6",
          "#8B5CF6",
          "#EC4899",
          "#F472B6",
          "#2DD4BF",
        ],
      },
    ],
  };

  // Animated Counter Component
  const AnimatedCounter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMilSecDur = 1000;
      let incrementTime = (totalMilSecDur / end) * 10;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }, [value]);

    return <span>{count}</span>;
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-indigo-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6 animate-fade-in-down">
            Welcome to <span className="text-yellow-400">PESU</span> Research Portal
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-up">
            Explore the groundbreaking research and innovations by our esteemed faculty and researchers.
          </p>
          <a
            href="#statistics"
            className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300 animate-fade-in-up"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        ) : (
          <>
            {/* Statistics Cards */}
            <div id="statistics" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Total Conferences",
                  value: publications.filter(
                    (item) => item["Publication Type"] === "Conference Paper"
                  ).length,
                  icon: (
                    <svg
                      className="w-12 h-12 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h3v-2H5V5h2V3H4zm12 0h-3v2h2v10h-2v2h3a1 1 0 001-1V4a1 1 0 00-1-1z" />
                    </svg>
                  ),
                  color: "indigo",
                },
                {
                  title: "Total Journals",
                  value: publications.filter((item) => item["Publication Type"] === "Article")
                    .length,
                  icon: (
                    <svg
                      className="w-12 h-12 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 2a2 2 0 00-2 2v14l6-3 6 3V4a2 2 0 00-2-2H8z" />
                    </svg>
                  ),
                  color: "green",
                },
                {
                  title: "Total Publications",
                  value: publications.length,
                  icon: (
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2-2 2 2 2-2 2 2v6H9v-6z" />
                      <path d="M4 4h12v4H4V4z" />
                    </svg>
                  ),
                  color: "yellow",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {stat.title}
                  </h3>
                  <p className={`text-5xl font-extrabold text-${stat.color}-600`}>
                    <AnimatedCounter value={stat.value} />
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Publications */}
            {/* <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
                Recent Publications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPublications.map((pub) => (
                  <div
                    key={pub._id}
                    className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                      {pub.Title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">
                        by {pub.First_Name} {pub.Last_Name}
                      </span>
                    </p>
                    <p className="text-gray-500">
                      Published on:{" "}
                      <span className="text-gray-700">
                        {pub["Pub.Date"]
                          ? new Date(pub["Pub.Date"]).toLocaleDateString()
                          : pub.Year || "Unknown"}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Bar Chart: Publications per Year */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Publications Per Year
                </h2>
                {Object.keys(publicationsByYear).length > 0 ? (
                  <Bar
                    data={barChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          backgroundColor: "#1F2937",
                          titleColor: "#F9FAFB",
                          bodyColor: "#F9FAFB",
                        },
                      },
                      scales: {
                        y: { beginAtZero: true },
                      },
                      animation: {
                        duration: 2000,
                      },
                    }}
                  />
                ) : (
                  <p className="text-gray-500">
                    No data available for publications by year.
                  </p>
                )}
              </div>

              {/* Pie Chart: Professors by Department */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Professors by Department
                </h2>
                {Object.keys(departmentDistribution).length > 0 ? (
                  <Pie
                    data={pieChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { position: "bottom", labels: { boxWidth: 20 } },
                        tooltip: {
                          backgroundColor: "#1F2937",
                          titleColor: "#F9FAFB",
                          bodyColor: "#F9FAFB",
                        },
                      },
                      animation: {
                        animateScale: true,
                        duration: 2000,
                      },
                    }}
                  />
                ) : (
                  <p className="text-gray-500">
                    No data available for professors by department.
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">About PESU</h3>
            <p className="text-gray-400">
              PES University is one of the top universities in India, known for its academic excellence and research innovation.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              {/* <li>
                <a href="/about" className="hover:text-yellow-400">About Us</a>
              </li> */}
              <li>
                <a href="/conference" className="hover:text-yellow-400">Research</a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-yellow-400">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          © {new Date().getFullYear()} PES University. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
