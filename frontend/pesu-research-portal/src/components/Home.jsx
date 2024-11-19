'use client'

import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { motion } from "framer-motion";

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const HomePage = () => {
  const [professors, setProfessors] = useState([]);
  const [publications, setPublications] = useState([]);
  const [publicationsByYear, setPublicationsByYear] = useState({});
  const [recentPublications, setRecentPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profResponse, pubResponse] = await Promise.all([
          axios.get("/v1/api/getAllprofs"),
          axios.get("/v1/api/getAllPublications"),
        ]);

        setProfessors(profResponse.data);
        setPublications(pubResponse.data);

        const pubsByYear = pubResponse.data.reduce((acc, pub) => {
          const year = pub.Year || "Unknown";
          acc[year] = (acc[year] || 0) + 1;
          return acc;
        }, {});
        setPublicationsByYear(pubsByYear);

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

  const barChartData = {
    labels: Object.keys(publicationsByYear).sort(),
    datasets: [
      {
        label: "Publications",
        data: Object.values(publicationsByYear),
        backgroundColor: "rgba(79, 70, 229, 0.8)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

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
          "#6366F1", "#EF4444", "#10B981", "#F59E0B", "#3B82F6",
          "#8B5CF6", "#EC4899", "#F472B6", "#2DD4BF",
        ],
      },
    ],
  };

  const AnimatedCounter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMilSecDur = 2000;
      let incrementTime = (totalMilSecDur / end) * 10;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{count}</span>;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PESU Research Portal</h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : (
            <>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                {[
                  {
                    title: "Total Conferences",
                    value: publications.filter(item => item["Publication Type"] === "Conference Paper").length,
                    icon: "🎤",
                    color: "bg-blue-100 text-blue-800",
                  },
                  {
                    title: "Total Journals",
                    value: publications.filter(item => item["Publication Type"] === "Article").length,
                    icon: "📚",
                    color: "bg-green-100 text-green-800",
                  },
                  {
                    title: "Total Publications",
                    value: publications.length,
                    icon: "📝",
                    color: "bg-yellow-100 text-yellow-800",
                  },
                ].map((stat, index) => (
                  <div key={index} className={`${stat.color} rounded-lg shadow-lg p-6 text-center`}>
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                    <p className="text-3xl font-bold">
                      <AnimatedCounter value={stat.value} />
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Publications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentPublications.map((pub) => (
                    <div key={pub._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-lg font-semibold text-indigo-600 mb-2">{pub.Title}</h3>
                      <p className="text-gray-600 mb-2">
                        by {pub.First_Name} {pub.Last_Name}
                      </p>
                      <p className="text-gray-500">
                        Published: {pub["Pub.Date"] ? new Date(pub["Pub.Date"]).toLocaleDateString() : pub.Year || "Unknown"}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Publications Per Year</h2>
                  {Object.keys(publicationsByYear).length > 0 ? (
                    <Bar
                      data={barChartData}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: { display: false },
                          tooltip: {
                            backgroundColor: "rgba(0,0,0,0.8)",
                            titleColor: "#ffffff",
                            bodyColor: "#ffffff",
                            cornerRadius: 4,
                          },
                        },
                        scales: {
                          y: { beginAtZero: true, title: { display: true, text: 'Number of Publications' } },
                          x: { title: { display: true, text: 'Year' } },
                        },
                        animation: {
                          duration: 2000,
                          easing: 'easeInOutQuart',
                        },
                      }}
                    />
                  ) : (
                    <p className="text-gray-500">No data available for publications by year.</p>
                  )}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Professors by Department</h2>
                  {Object.keys(departmentDistribution).length > 0 ? (
                    <Pie
                      data={pieChartData}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: { position: "bottom", labels: { boxWidth: 12, padding: 20 } },
                          tooltip: {
                            backgroundColor: "rgba(0,0,0,0.8)",
                            titleColor: "#ffffff",
                            bodyColor: "#ffffff",
                            cornerRadius: 4,
                          },
                        },
                        animation: {
                          animateRotate: true,
                          animateScale: true,
                          duration: 2000,
                          easing: 'easeInOutQuart',
                        },
                      }}
                    />
                  ) : (
                    <p className="text-gray-500">No data available for professors by department.</p>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} PES University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;