import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useLocation } from "react-router-dom";
import PublicationNavbar from "./PublicationNavbar";
import { motion } from "framer-motion";
const Conference = () => {
  useEffect(() => {
    const questions = document.querySelectorAll("[data-question]");
    const answers = document.querySelectorAll("[data-answer-content]");
    if (questions.length === 0 || answers.length === 0) {
      console.error("Questions or answers not found");
      return;
    }
    answers.forEach((answer) => {
      if (answer.id !== "c1") {
        answer.classList.add("hidden");
      } else {
        answer.classList.remove("hidden");
      }
    });

    // Highlight the corresponding question
    questions.forEach((question) => {
      if (question.getAttribute("data-answer") === "c1") {
        question.classList.add("text-blue-600");
      }
    });
    // Function to toggle visibility of the answer
    const toggleAnswer = (event) => {
      // Hide all answers first
      answers.forEach((answer) => {
        answer.classList.add("hidden");
      });

      questions.forEach((question) => {
        question.classList.remove("text-blue-600");
      });
      // Show the clicked answer
      const answerId = event.currentTarget.getAttribute("data-answer");
      const answer = document.getElementById(answerId);

      if (answer) {
        answer.classList.remove("hidden");
      }
      event.currentTarget.classList.add("text-blue-600");

      // Add the class to the clicked question
    };

    // Add event listeners to each question
    questions.forEach((question) => {
      question.addEventListener("click", toggleAnswer);
    });

    // Cleanup function to remove event listeners
    return () => {
      questions.forEach((question) => {
        question.removeEventListener("click", toggleAnswer);
      });
    };
  }, []); // Empty dependency array ensures this effect runs once

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [nameFilter, setNameFilter] = useState("");
  const [activeTab, setActiveTab] = useState("c1");
  const getAllConference = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/v1/api/getAllPublications/",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const res = await response.json();
      setData(res);
      setFilteredData(
        res.filter((item) => item["Publication Type"] === "Conference Paper")
      );
    } catch (error) {
      console.log("Error in fetching data");
      setData(["error in fetching data"]);
      setFilteredData(["error in fetching data"]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllConference();
  }, []);

  const filterData = () => {
    let filtered = data.filter(
      (item) => item["Publication Type"] === "Conference Paper"
    );
    if (selectedYear !== 0) {
      filtered = filtered.filter(
        (item) => item.Year === parseInt(selectedYear)
      );
    } else {
    }
    if (nameFilter) {
      filtered = filtered.filter((item) =>
        item.First_Name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    setFilteredData(filtered);
    setCurrentPage(0);
  };
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const [filteredData, setFilteredData] = useState([]);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === "c3") {
      getAllConference();
    }
  };
  // Calculate the data to display on the current page
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  useEffect(() => {
    filterData();
  }, [selectedYear, nameFilter]);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div
        className="grid grid-cols-5 gap-4 p-2"
        style={{
          backgroundImage: "url(/img/pixelcut-export.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 p-5 mt-2 bg-white h-full justify-evenly text-center bg-opacity-80"
        >
          <ul className="font-serif text-lg leading-10 cursor-pointer p-15 mt-5 space-y-2">
            {[
              "Levels of Conferences",
              "Conference Paper Format",
              "Conferences",
              "Reimbursement",
            ].map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-blue-100 hover:text-blue-600 focus:outline-none ${
                    activeTab === `c${index + 1}` ? "text-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick(`c${index + 1}`)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          {activeTab === "c3" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value={0}>All Years</option>
                    {Array.from({ length: 18 }, (_, i) => 2007 + i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Faculty Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter faculty name"
                  />
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-4 bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 bg-opacity-90"
        >
          {activeTab === "c3" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Conferences
              </h2>
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-4 text-gray-600">
                    Loading Conference Data... Please Wait
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPageData.length > 0 ? (
                      currentPageData.map((item) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ scale: 1.03 }}
                          className="bg-white border-2 border-gray-200 rounded-lg shadow-sm p-6 transition duration-200 ease-in-out hover:shadow-md"
                        >
                          <h3 className="font-bold text-lg mb-3 text-gray-800">
                            {item.Title_y}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Presented at {item.Journal} in Year: {item.Year}
                          </p>
                          <p className="text-sm text-gray-600 mb-4">
                            Year: {item.Year}
                          </p>
                          <p className="text-xs font-semibold text-gray-700">
                            by {item.First_Name} {item.Last_Name}
                          </p>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <h3 className="text-2xl font-semibold text-gray-700">
                          No Records Found
                        </h3>
                        <p className="mt-2 text-gray-500">
                          Try adjusting your filters
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-8">
                    <ReactPaginate
                      previousLabel={"← Previous"}
                      nextLabel={"Next →"}
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      containerClassName={
                        "flex justify-center items-center space-x-2"
                      }
                      pageClassName={
                        "px-3 py-1 rounded-md border-2 border-gray-300"
                      }
                      pageLinkClassName={"text-gray-700 hover:text-blue-600"}
                      previousClassName={
                        "px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-gray-300"
                      }
                      nextClassName={
                        "px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-gray-300"
                      }
                      disabledClassName={"opacity-50 cursor-not-allowed"}
                      activeClassName={"bg-blue-300 text-white border-blue-500"}
                    />
                  </div>
                </>
              )}
            </div>
          )}
          {activeTab === "c1" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Levels of Conferences
              </h2>
              <p className="text-center text-xl m-2 p-4 text-gray-800">
                Research conferences are often categorized based on their
                reputation and the quality of the papers they attract and
                publish. The A, B, C core rankings are a common way to classify
                conferences, typically in the fields of computer science and
                engineering.{" "}
              </p>{" "}
              <br />
              <div className="p-3 text-center text-xl hover: underline text-blue-500">
                <a href="https://www.core.edu.au/conference-portal">
                  Click Here to know about Standard Conference Rankings
                </a>
              </div>
              <p>
                {" "}
                <h3 className="p-3 text-center text-black text-2xl">
                  A-Core Conferences
                </h3>
                <div className="text-center text-xl text-gray-700">
                  Reputation: Highest prestige, highly selective, and widely
                  recognized in the academic community. <br />
                  Acceptance Rate: Generally low, often below 20%. <br />
                  Quality of Papers: Papers published here are usually
                  considered top-tier and have significant impact in their
                  fields. <br />
                  Some notable examples are: <br />
                  - Computer Science: IEEE Conference on Computer Vision and
                  Pattern Recognition (CVPR), ACM Conference on Computer and
                  Communications Security (CCS)
                  <br />
                  - Engineering: IEEE International Solid-State Circuits
                  Conference (ISSCC), American Control Conference (ACC).
                  <br /> <br />
                  <h3 className="text-black p-3 text-2xl">
                    B-Core Conferences
                  </h3>
                  Reputation: Well-respected, moderately selective, and
                  recognized within their respective fields.
                  <br />
                  Acceptance Rate: Moderate, usually between 20% and 40%. <br />
                  Quality of Papers:Papers are considered solid contributions to
                  their fields and are often cited. <br />
                  Some notable examples are: <br />
                  - Computer Science: International Conference on Information
                  and Knowledge Management (CIKM), IEEE International Conference
                  on Data Engineering (ICDE).
                  <br />- Engineering: IEEE International Conference on
                  Communications (ICC), International Conference on Industrial
                  Electronics (ICIE). <br /> <br />
                  <h3 className="text-black p-3 text-2xl">
                    C-Core Conferences
                  </h3>
                  Reputation: Known within specific subfields, less selective,
                  and have a more regional or niche focus.
                  <br />
                  Acceptance Rate: Higher, often above 40%.
                  <br />
                  Quality of Papers: Papers are considered good contributions
                  but may not have as wide an impact. <br />
                  Some notable examples are: <br />
                  - Computer Science: International Conference on Wireless
                  Networks and Mobile Systems (WINSYS), International Conference
                  on Advances in Computing and Communication (ICACC).
                  <br />
                  - Engineering: IEEE International Symposium on Industrial
                  Electronics (ISIE), International Conference on Control,
                  Automation, Robotics and Vision (ICARCV).
                  <br /> <br />
                </div>
              </p>
            </div>
          )}
          {activeTab === "c2" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                RESEARCH PAPER FOR CONFERENCES{" "}
              </h2>
              <p className="text-xl text-center m-4">
                A conference research paper is a piece of writing that an author
                submits to conference organizers. The papers offer a preview of
                the work the researcher wants to present to let others in their
                field know about it and solicit feedback that could generate
                ideas for improvement.
              </p>
              <h3 className="text-center text-3xl text-gray-700">
                How to structure a conference paper:
              </h3>
              <p className="text-center text-xl m-2">
                {" "}
                Conference papers should be structured around the prime
                objectives of the research being conducted and the summary of
                its findings. Most conference papers start by introducing the
                purpose of the research, the methodology, the results of the
                study, and references of the sources used.{" "}
              </p>{" "}
              <br />
              <h3 className="text-center text-3xl m-1 text-gray-700">
                The Title Page
              </h3>{" "}
              <br />
              <p className="text-xl text-center">
                The title page is used to identify the main pieces of
                information needed in order to identify and evaluate a
                conference paper. It includes the title of the paper, which
                should clearly identify the focus of the research being
                presented. The title page should also include the author's name,
                credentials, the research institution they are affiliated with,
                the submission date, and the name of the conference for which
                the paper is being submitted.{" "}
              </p>{" "}
              <br />
              <h3 className="text-center text-3xl m-1 text-gray-700">
                The Abstract
              </h3>{" "}
              <br />
              <p className="text-xl text-center">
                Conference papers begin with an abstract. An abstract is a short
                summary of the prime objective of your research, your
                hypothesis, the way you plan to conduct the study, the results,
                and the conclusions. Most abstracts are one or two paragraphs
                and kept under 250 words, but it's not always the case so it's
                best to check the guidelines provided by the conference
                organizers.
              </p>{" "}
              <br />
              <h3 className="text-center text-3xl m-2 text-gray-700">
                The Research Methodology
              </h3>{" "}
              <br />
              <p className=" text-xl text-center">
                In order for conference organizers to review and evaluate a
                conference paper, they must understand the methods used by the
                researcher to conduct the study being presented. Include a
                section in your paper that clearly (but briefly) describes your
                methodology, including any dominant theories that the methods
                are based on.
              </p>{" "}
              <br />
              <h3 className="text-center text-3xl m-2 text-gray-700">
                The Results
              </h3>
              <br />
              <p className=" text-xl text-center">
                Clearly outline the results of the study, drawing data-driven
                conclusions. Present the insights uncovered by the research and
                how they can be used to advance your field of study. This will
                generate interest from other researchers in your field,
                potentially leading to partnerships or funding opportunities
                down the road.{" "}
              </p>{" "}
              <br />
              <h3 className="text-center text-3xl m-2 text-gray-700">
                The References
              </h3>{" "}
              <br />
              <p className="text-xl text-center">
                Most conferences will clearly outline the type of references
                they expect in their call-for-papers or advertisement soliciting
                research submissions. Follow these guidelines to reference the
                work used to inform your research.{" "}
              </p>{" "}
              <br />
            </div>
          )}
          {activeTab === "c4" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Reimbursement
              </h2>
              <p className="mb-6">
                You can get reimbursement from here by uploading the necessary
                documents.
              </p>

              <form
                action="/submit-reimbursement"
                method="post"
                enctype="multipart/form-data"
                class="space-y-4"
              >
                <div>
                  <label
                    class="block mb-2 font-medium"
                    for="conference-webpage"
                  >
                    Conference Webpage Print
                  </label>
                  <input
                    class="block w-full px-3 py-2 border rounded"
                    type="file"
                    id="conference-webpage"
                    name="conference-webpage"
                    accept=".pdf"
                  />
                </div>

                <div>
                  <label class="block mb-2 font-medium" for="acceptance-email">
                    Acceptance Email Print
                  </label>
                  <input
                    class="block w-full px-3 py-2 border rounded"
                    type="file"
                    id="acceptance-email"
                    name="acceptance-email"
                    accept=".pdf"
                  />
                </div>

                <div>
                  <label class="block mb-2 font-medium" for="payment-receipt">
                    Payment Receipt Print
                  </label>
                  <input
                    class="block w-full px-3 py-2 border rounded"
                    type="file"
                    id="payment-receipt"
                    name="payment-receipt"
                    accept=".pdf"
                  />
                </div>

                <div>
                  <label class="block mb-2 font-medium" for="ieee-paper">
                    Our IEEE Paper Print
                  </label>
                  <input
                    class="block w-full px-3 py-2 border rounded"
                    type="file"
                    id="ieee-paper"
                    name="ieee-paper"
                    accept=".pdf"
                  />
                </div>

                <div>
                  <label class="block mb-2 font-medium" for="certificates">
                    Certificates Print
                  </label>
                  <input
                    class="block w-full px-3 py-2 border rounded"
                    type="file"
                    id="certificates"
                    name="certificates"
                    accept=".pdf"
                  />
                </div>

                <div>
                  <label class="block mb-2 font-medium" for="university-id">
                    University ID Card
                  </label>
                  <input
                    class="block w-full px-3 py-2 border rounded"
                    type="file"
                    id="university-id"
                    name="university-id"
                    accept=".pdf"
                  />
                </div>

                <div>
                  <label class="block mb-2 font-medium" for="cancelled-cheque">
                    Cancelled Cheque Leaf
                  </label>
                  <input
                    class="block w-full px-3 py-2 border rounded"
                    type="file"
                    id="cancelled-cheque"
                    name="cancelled-cheque"
                    accept=".pdf"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Conference;
