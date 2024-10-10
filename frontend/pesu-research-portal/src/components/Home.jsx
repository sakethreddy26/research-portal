import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from 'axios';
import Navbar from './Navbar';
import {Chart, ArcElement,registerables} from 'chart.js'
Chart.register(ArcElement,...registerables);


const HomePage = () => {
  const [professors, setProfessors] = useState([]);
  const [publications, setPublications] = useState([]);
  const [publicationsByYear, setPublicationsByYear] = useState({});
  const [recentPublications2024, setRecentPublications2024] = useState([]); // New state for filtered publications

  // Fetch professor and publication data on mount
  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await axios.get("http://localhost:4000/v1/api/getAllprofs");
        setProfessors(response.data);
      } catch (error) {
        console.error("Error fetching professors:", error);
      }
    };

    const fetchPublications = async () => {
      try {
        const response = await axios.get("http://localhost:4000/v1/api/getAllPublications");
        setPublications(response.data);
        // Filter publications for 2024
        const filtered2024 = response.data.filter((pub) => pub.Year === 2024);
        setRecentPublications2024(filtered2024); // Update state with recent publications of 2024
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    const fetchPublicationsByYear = async () => {
      try {
        const response = await axios.get("http://localhost:4000/v1/api/getAllPublications"); // Get all publications first
        const publicationsData = response.data;

        // Group publications by year
        const publicationsByYear = publicationsData.reduce((acc, pub) => {
          const year = pub.Year; // Default to 'Unknown' if no year
          if (year) {
            acc[year] = (acc[year] || 0) + 1; // Increment count for the year
          }
          return acc;
        }, {});

        setPublicationsByYear(publicationsByYear); // Update state
      } catch (error) {
        console.error("Error fetching publications by year:", error);
      }
    };

    fetchProfessors();
    fetchPublications();
    fetchPublicationsByYear();
  }, []);

  // Refined bar chart data
  const barChartData = {
    labels: Object.keys(publicationsByYear),
    datasets: [{
      label: "Publications",
      data: Object.values(publicationsByYear),
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    }],
  };

  // Refined pie chart data
  const departmentDistribution = professors.reduce((acc, professor) => {
    const department = professor.department;
    acc[department] = (acc[department] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(departmentDistribution),
    datasets: [{
      data: Object.values(departmentDistribution),
      backgroundColor: [
        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
      ],
    }],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
          Welcome To PESU Research Portal
        </h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Total Conferences", value: publications.filter(item => item["Publication Type"] === "Conference Paper").length },
            { title: "Total Journals", value: publications.filter(item => item["Publication Type"] === "Article").length },
            { title: "Total Publications", value: publications.length },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Publications */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Recent Publications (2024)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPublications2024.slice(0, 6).map((pub) => (
              <div key={pub._id} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{pub.Title}</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">by {pub.First_Name} {pub.Last_Name}</span>
                </p>
                <p className="text-gray-500">
                  Published on:{" "}
                  <span className="text-gray-700">
                    {pub["Pub.Date"] ? new Date(pub["Pub.Date"]).toLocaleDateString() : pub.Year || "Unknown"}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart: Publications per Year */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Publications Per Year</h2>
            {Object.keys(publicationsByYear).length > 0 ? (
              <Bar 
                data={barChartData} 
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    title: { display: false },
                  },
                  scales: {
                    y: { beginAtZero: true }
                  }
                }}
              />
            ) : (
              <p className="text-gray-500">No data available for publications by year.</p>
            )}
          </div>

          {/* Pie Chart: Professors by Department */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Professors by Department</h2>
            <Pie 
              data={pieChartData} 
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'bottom' },
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;