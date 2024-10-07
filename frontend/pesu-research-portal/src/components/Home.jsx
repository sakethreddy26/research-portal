import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import axios from 'axios';
import Navbar from './Navbar';

const HomePage = () => {
  const [professors, setProfessors] = useState([]);
  const [publications, setPublications] = useState([]);
  const [publicationsByYear, setPublicationsByYear] = useState({});
  const [recentPublications2024, setRecentPublications2024] = useState([]); // New state for filtered publications

  // Fetch professor and publication data on mount
  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await axios.get("http://localhost:4000/v1/api/getProfessors");
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

  // Data for bar chart: publications per year
  const barChartData = {
    labels: Object.keys(publicationsByYear), // Years as labels
    datasets: [
      {
        label: "Publications",
        data: Object.values(publicationsByYear), // Number of publications per year
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderWidth: 1,
      },
    ],
  };

  // Data for pie chart: distribution of professors by department
  const departmentDistribution = professors.reduce((acc, professor) => {
    const department = professor.department;
    acc[department] = (acc[department] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(departmentDistribution),
    datasets: [
      {
        data: Object.values(departmentDistribution),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div className="w-full p-0">
      <Navbar />
      <div className="w-full mx-0 px-0 py-4">
        <h1 className="text-4xl font-bold mb-4 text-center underline italic">WELCOME TO PESU RESEARCH PORTAL</h1>

        {/* Recent Publications */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Publications (2024)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPublications2024.slice(0, 5).map((pub) => (
              <div
                key={pub._id}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{pub.Title}</h3>
                <p className="text-gray-600 mb-4">
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
        </div>

        {/* Total Professors and Publications */}
        <div className="flex justify-around mb-8">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl">Total Conferences</h3>
            <p className="text-2xl">
              {publications.filter((item) => item["Publication Type"] === "Conference Paper").length}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl">Total Journals</h3>
            <p className="text-2xl">
              {publications.filter((item) => item["Publication Type"] === "Article").length}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl">Total Publications</h3>
            <p className="text-2xl">{publications.length}</p>
          </div>
        </div>

        {/* Bar Chart: Publications per Year */}
        <div className="flex justify-between">
          <div className="w-full">
          <h2 className="text-2xl font-semibold">Publications Per Year</h2>
            {Object.keys(publicationsByYear).length > 0 ? (
              <Bar data={barChartData} />
            ) : (
              <p>No data available for publications by year.</p>
            )}
          </div>

          {/* Pie Chart: Professors by Department */}
          <div className=" w-full flex justify-evenly">
            <div className="w-full max-w-xs">
              <h2 className="text-2xl font-semibold">Professors by Department</h2>
              <Pie data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default HomePage;
