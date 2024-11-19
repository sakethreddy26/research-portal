// import Navbar from "./Navbar";
// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import { Link, useLocation } from "react-router-dom";
// import PublicationNavbar from "./PublicationNavbar";
// const Journals = () => {
//   useEffect(() => {
//     const questions = document.querySelectorAll("[data-question]");
//     const answers = document.querySelectorAll("[data-answer-content]");
//     if (questions.length === 0 || answers.length === 0) {
//       console.error("Questions or answers not found");
//       return;
//     }
//     answers.forEach((answer) => {
//       if (answer.id !== "a1") {
//         answer.classList.add("hidden");
//       } else {
//         answer.classList.remove("hidden");
//       }
//     });

//     // Highlight the corresponding question
//     questions.forEach((question) => {
//       if (question.getAttribute("data-answer") === "a1") {
//         question.classList.add("text-blue-600");
//       }
//     });

//     // Function to toggle visibility of the answer
//     const toggleAnswer = (event) => {
//       // Hide all answers first
//       answers.forEach((answer) => {
//         answer.classList.add("hidden");
//       });

//       questions.forEach((question) => {
//         question.classList.remove("text-blue-600");
//       });
//       // Show the clicked answer
//       const answerId = event.currentTarget.getAttribute("data-answer");
//       const answer = document.getElementById(answerId);

//       if (answer) {
//         answer.classList.remove("hidden");
//       }
//       event.currentTarget.classList.add("text-blue-600");

//       // Add the class to the clicked question
//     };

//     // Add event listeners to each question
//     questions.forEach((question) => {
//       question.addEventListener("click", toggleAnswer);
//     });

//     // Cleanup function to remove event listeners
//     return () => {
//       questions.forEach((question) => {
//         question.removeEventListener("click", toggleAnswer);
//       });
//     };
//   }, []); // Empty dependency array ensures this effect runs once
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("all");
//   const [nameFilter, setNameFilter] = useState("");
//   const getAllConference = async () => {
//     try {
//       const response = await fetch(
//         "/v1/api/getAllPublications/",
//         {
//           method: "GET",
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Error fetching data");
//       }
//       const res = await response.json();
//       setData(res);
//       setFilteredData(
//         res.filter((item) => item["Publication Type"] === "Article")
//       );
//     } catch (error) {
//       console.log("Error in fetching data");
//       setData(["error in fetching data"]);
//       setFilteredData(["error in fetching data"]);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     getAllConference();
//   }, []);

//   const filterData = () => {
//     let filtered = data.filter(
//       (item) => item["Publication Type"] === "Article"
//     );
//     if (selectedYear !== 0) {
//       filtered = filtered.filter(
//         (item) => item.Year === parseInt(selectedYear)
//       );
//     } else {
//     }
//     if (nameFilter) {
//       filtered = filtered.filter((item) =>
//         item.First_Name.toLowerCase().includes(nameFilter.toLowerCase())
//       );
//     }
//     setFilteredData(filtered);
//     setCurrentPage(0);
//   };
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 9;
//   const [filteredData, setFilteredData] = useState([]);
//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };
//   const [doi, setDoi] = useState("");

//   // Calculate the data to display on the current page
//   const offset = currentPage * itemsPerPage;
//   const currentPageData = filteredData.slice(offset, offset + itemsPerPage);
//   const pageCount = Math.ceil(filteredData.length / itemsPerPage);
//   useEffect(() => {
//     filterData();
//   }, [selectedYear, nameFilter]);
//   const route = useLocation();
//   const { pathname } = route;
//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div
//         className="grid grid-cols-5 gap-2 overflow-y-auto"
//         style={{
//           backgroundImage: "url(/img/pixelcut-export.jpg)",
//           backgroundAttachment: "fixed",
//           backgroundSize: "cover", // Ensures the image covers the entire div
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           width: "100vw", // Full viewport width
//           height: "100vh", // Full viewport height
//           //overflow: 'hidden' // Hide any overflow
//         }}
//       >
//         <div className="col-span-1 p-10 mt-2 bg-white h-full justify-evenly text-center bg-opacity-80">
//           <ul className="font-serif text-xl leading-10 cursor-pointer p-15">
//             <li
//               className="hover:text-blue-600"
//               data-question="q1"
//               data-answer="a1"
//             >
//               Levels of Journals
//             </li>
//             <li
//               className="hover:text-blue-600"
//               data-question="q2"
//               data-answer="a2"
//             >
//               Journal Paper Format
//             </li>
//             <li
//               className="hover:text-blue-600"
//               data-question="q3"
//               data-answer="a3"
//             >
//               Journals
//             </li>
//             <li
//               className="hover:text-blue-600"
//               data-question="q4"
//               data-answer="a4"
//             >
//               Incentives
//             </li>
//           </ul>
//           <div className="mt-6">
//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="year"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Year
//                 </label>
//                 <select
//                   id="year"
//                   name="year"
//                   value={selectedYear}
//                   onChange={(e) => {
//                     setSelectedYear(Number(e.target.value));
//                   }}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   {Array.from({ length: 18 }, (_, i) => 2007 + i).map(
//                     (year) => (
//                       <option key={year} value={year}>
//                         {year}
//                       </option>
//                     )
//                   )}
//                   <option value={0}>All Years</option>
//                 </select>
//               </div>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Faculty Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={nameFilter}
//                   onChange={(e) => setNameFilter(e.target.value)}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </form>
//           </div>
//         </div>

//         <div
//           className="col-span-4 mt-2 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10"
//           id="a1"
//           data-answer-content
//         >
//           <h2 className="text-center text-3xl m-2"> LEVELS OF JOURNALS </h2>
//           <p className="text-center text-xl m-2 p-4 text-gray-800">
//             Scientific journals are classified and ranked, and these
//             classifications and rankings are key for authors, publishers and
//             journal editors. The ranking of journals is common in academia and
//             journal rankings count when a researcher is putting forward their
//             file for retention, tenure and promotion. Researchers aim to publish
//             in top-tier and high-ranking journals. So it is important for them
//             to know how a journal is classified and ranked.
//           </p>
//           <p className="text-center text-xl m-2 text-gray-800">
//             The number of citations for journal publications is an influencing
//             factor, called the impact factor, which is used to rank journal
//             ranks. Journals are also categorised into four quartiles: Q1, Q2, Q3
//             and Q4. Journals in Q1 and Q2 are considered top-tier journals while
//             the lower-tier journals are classified as Q3 and Q4. Q1 and Q2
//             journals have a higher impact factor than Q3 and Q4 ranked journals.
//           </p>{" "}
//           <br />
//           <div className="p-3 text-center text-xl hover: underline text-blue-500">
//             <a href="https://www.scimagojr.com/">
//               Click Here to know about Standard Journal Rankings
//             </a>
//           </div>
//           <p>
//             {" "}
//             <h3 className="p-3 text-center text-black text-2xl">Q1 JOURNALS</h3>
//             <div className="text-center text-xl text-gray-700 leading-8">
//               - Q1 journals are in the top 25% of journals in a particular
//               field. They typically have the highest impact factors in their
//               field.
//               <br />
//               - The peer-review process is usually very rigorous and thorough.
//               <br />
//               - Acceptance rates are low, meaning these journals are highly
//               selective about the papers they publish. <br />
//               - Articles in Q1 journals receive high visibility and are
//               frequently cited.
//               <br />
//               <br />
//               <h3 className="text-black p-3 text-2xl">Q2 JOURNALS</h3>
//               - Q2 journals fall within the 25% to 50% range in their field.
//               They have a respectable impact factor, though not as high as Q1
//               journals. <br />
//               - The peer-review process is quite rigorous.
//               <br />
//               - These journals are moderately selective <br />
//               - Articles in Q2 journals have good visibility and are frequently
//               cited.
//               <br />
//               <br />
//               <h3 className="text-black p-3 text-2xl">Q3 JOURNALS</h3>
//               - Q3 journals are in the 50% to 75% range in their field.
//               <br />
//               - Less stringent review process. <br />
//               - The acceptance rates are generally higher, making them less
//               selective than Q1 and Q2 journals. <br />
//               - Articles in Q3 journals have moderate visibility and are cited
//               less frequently. <br />
//               <br />
//             </div>
//           </p>
//         </div>
//         <div
//           className="grid grid-cols-3 col-span-4 m-3 h-full"
//           id="a3"
//           data-answer-content
//         >
//           {loading ? (
//             <div className="text-center py-4 w-full col-span-4 bg-white">
//               Loading Journals Data... Please Wait
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-3 col-span-4 gap-4 h-full">
//                 {currentPageData.length > 0 ? (
//                   currentPageData.map((item) => (
//                     <div
//                       key={item.id}
//                       className="w-full p-2 border border-gray-200 bg-white"
//                     >
//                       <h1 className="font-bold text-lg mb-5">{item.Title_y}</h1>
//                       <h1 className="font-medium text-sm mb-5">
//                         Presented at {item.Journal} in Year: {item.Year}
//                       </h1>
//                       <h1 className="font-medium text-sm mb-5">
//                         Year: {item.Year}
//                       </h1>
//                       <h1 className="font-semibold text-xs">
//                         by {item.First_Name} {item.Last_Name}
//                       </h1>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center py-4 w-full col-span-4 bg-white flex items-center justify-center">
//                     <h1 className="text-4xl text-center">No Records Found</h1>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//           <div className="col-span-4 bg-white flex items-center justify-center m-3 h-[50px]">
//             <ReactPaginate
//               previousLabel={"Previous"}
//               nextLabel={"Next"}
//               breakLabel={"..."}
//               pageCount={pageCount}
//               marginPagesDisplayed={2}
//               pageRangeDisplayed={5}
//               onPageChange={handlePageClick}
//               containerClassName={"col-span-4 flex flex-row"}
//               pageClassName={"mx-1"}
//               pageLinkClassName={"px-3 py-1 border border-gray-300 rounded"}
//               previousClassName={"mx-1"}
//               previousLinkClassName={"px-3 py-1 border border-gray-300 rounded"}
//               nextClassName={"mx-1"}
//               nextLinkClassName={"px-3 py-1 border border-gray-300 rounded"}
//               breakLinkClassName={"px-3 py-1 border border-gray-300 rounded"}
//               activeClassName={"bg-blue-300 text-white"}
//             />
//           </div>
//         </div>
//         <div
//           className="col-span-4 col-start-2 mt-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10"
//           id="a2"
//           data-answer-content
//         >
//           <h2 className="text-center text-3xl m-2">
//             {" "}
//             RESEARCH PAPER FOR JOURNALS{" "}
//           </h2>
//           <p className="text-xl text-center m-4">
//             Journal papers are scholarly articles published in academic
//             journals, and undergo a rigorous peer-review process to ensure the
//             quality, validity, and significance of the research. They contribute
//             to the existing body of knowledge by presenting new theories,
//             methodologies, empirical studies, or literature reviews.
//           </p>
//           <h3 className="text-center text-3xl text-gray-700">
//             How to structure a journal paper:
//           </h3>
//           <p className="text-center text-xl m-2">
//             {" "}
//             Most academic journals conventionally accept original research
//             articles in the following format: Abstract, followed by the
//             Introduction, Methods, Results, and Discussion sections, also known
//             as the IMRaD, which is a brilliant way of structuring a research
//             paper outline in a simplified and layered format.
//           </p>{" "}
//           <br />
//           <h3 className="text-center text-3xl m-1 text-gray-700">
//             Abstract
//           </h3>{" "}
//           <br />
//           <p className="text-xl text-center">
//             All information provided in the abstract must be present in the
//             manuscript, it should include a stand-alone summary of the research,
//             the main findings, the abbreviations should be defined separately in
//             this section, and this section should be clear, decluttered, and
//             concise.{" "}
//           </p>{" "}
//           <br />
//           <h3 className="text-center text-3xl m-2 text-gray-700">
//             Introduction
//           </h3>{" "}
//           <br />
//           <p className=" text-xl text-center">
//             This section should begin with a background of the study topic,
//             i.e., what is already known, moving on to the knowledge gaps that
//             exist, and finally, end with how the present study aims to fill
//             these gaps, or any hypotheses that the authors may have proposed.
//           </p>{" "}
//           <br />
//           <h3 className="text-center text-3xl m-2 text-gray-700">Methods</h3>
//           <br />
//           <p className=" text-xl text-center">
//             The ultimate factor to consider while producing the methods section
//             is reproducibility; this section should be detailed enough for other
//             researchers to reproduce your study and validate your results. It
//             should include ethical information (ethical board approval, informed
//             consent, etc.) and must be written in the past tense.{" "}
//           </p>{" "}
//           <br />
//           <h3 className="text-center text-3xl m-2 text-gray-700">
//             Results
//           </h3>{" "}
//           <br />
//           <p className="text-xl text-center">
//             This section typically presents the findings of the study, with no
//             explanations or interpretations. Here, the findings are simply
//             stated alongside figures or tables mentioned in the text in the
//             correct sequential order. Because you are describing what you found,
//             this section is also written in the past tense.{" "}
//           </p>{" "}
//           <br />
//           <h3 className="text-center text-3xl m-2 text-gray-700">
//             Discussion and conclusion
//           </h3>{" "}
//           <br />
//           <p className="text-xl text-center">
//             This section begins with a summary of your findings and is meant for
//             you to interpret your results, compare them with previously
//             published papers, and elaborate on whether your findings are
//             comparable or contradictory to previous literature. <br />
//             This section also contains the strengths and limitations of your
//             study, and the latter can be used to suggest future research. End
//             this section with a conclusion paragraph, briefly summarizing and
//             highlighting the main findings and novelty of your study.
//           </p>{" "}
//           <br />
//           <h3 className="text-center text-3xl m-2 text-gray-700">
//             Citing References
//           </h3>{" "}
//           <br />
//           <p className="text-xl text-center">
//             Most sections of your paper majorly rely on external sources of
//             information that have already been published. Therefore, it is
//             absolutely indispensable to extract and cite these statements from
//             appropriate, credible, recent, and relevant literature to support
//             your claims.{" "}
//           </p>{" "}
//           <br />
//         </div>
//         <div
//           className="col-span-4 col-start-2 mt-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10"
//           id="a4"
//           data-answer-content
//         >
//           <h2 className="text-center text-3xl m-2"> INCENTIVES </h2> <br />{" "}
//           <br />
//           <div className="text-center">
//             <h3 className="text-center text-3xl m-2 text-gray-700">
//               Name of Journal
//             </h3>
//             <input
//               type="text"
//               className="border border-gray-300 p-2 rounded w-full mb-4"
//               placeholder="Enter journal names"
//             />
//             <h3 className="text-center text-3xl m-2 text-gray-700">
//               Journal Indexing
//             </h3>
//             <input
//               type="text"
//               className="border border-gray-300 p-2 rounded w-full mb-4"
//               placeholder="Enter indexing"
//             />
//             <h3 className="text-center text-3xl m-2 text-gray-700">
//               {" "}
//               Digital Object Identifier (DOI)
//             </h3>
//             <input
//               type="text"
//               onChange={(e) => setDoi(e.target.value)}
//               value={doi}
//               className="border border-gray-300 p-2 rounded w-full mb-4"
//               placeholder="Enter DOI"
//             />
//             <a
//               href={doi}
//               className="text-3xl text-blue-500 mt-5"
//               target="_blank"
//             >
//               {doi}
//             </a>
//             <label
//               htmlFor="fileUpload"
//               className="block text-center text-3xl m-2 text-gray-700"
//             >
//               Upload Journal Paper
//             </label>
//             <input
//               type="file"
//               id="fileUpload"
//               name="fileUpload"
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journals;

import Navbar from "../Navbar";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useLocation } from "react-router-dom";
import PublicationNavbar from "./PublicationNavbar";
import { motion } from "framer-motion";

const Journals = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [nameFilter, setNameFilter] = useState("");
  const [activeTab, setActiveTab] = useState("a1");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [doi, setDoi] = useState("");

  const itemsPerPage = 9;

  const getAllJournals = async () => {
    try {
      const response = await fetch(
        "/v1/api/getAllPublications/",
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
        res.filter((item) => item["Publication Type"] === "Article")
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
    getAllJournals();
  }, []);

  const filterData = () => {
    let filtered = data.filter(
      (item) => item["Publication Type"] === "Article"
    );
    if (selectedYear !== 0) {
      filtered = filtered.filter(
        (item) => item.Year === parseInt(selectedYear)
      );
    }
    if (nameFilter) {
      filtered = filtered.filter((item) =>
        item.First_Name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    setFilteredData(filtered);
    setCurrentPage(0);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === "a3") {
      getAllJournals();
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
      {/* <Navbar /> */}

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
              "Levels of Journals",
              "Journal Paper Format",
              "Journals",
              "Incentives",
            ].map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-blue-100 hover:text-blue-600 focus:outline-none ${
                    activeTab === `a${index + 1}` ? "text-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick(`a${index + 1}`)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          {activeTab === "a3" && (
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
          {activeTab === "a3" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Journals
              </h2>
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-4 text-gray-600">
                    Loading Journal Data... Please Wait
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
                            Published in {item.Journal} in Year: {item.Year}
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
          {activeTab === "a1" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Levels of Journals
              </h2>
              <p className="text-center text-xl m-2 p-4 text-gray-800">
                Scientific journals are classified and ranked, and these
                classifications and rankings are key for authors, publishers and
                journal editors. The ranking of journals is common in academia
                and journal rankings count when a researcher is putting forward
                their file for retention, tenure and promotion. Researchers aim
                to publish in top-tier and high-ranking journals. So it is
                important for them to know how a journal is classified and
                ranked.
              </p>
              <p className="text-center text-xl m-2 text-gray-800">
                The number of citations for journal publications is an
                influencing factor, called the impact factor, which is used to
                rank journal ranks. Journals are also categorised into four
                quartiles: Q1, Q2, Q3 and Q4. Journals in Q1 and Q2 are
                considered top-tier journals while the lower-tier journals are
                classified as Q3 and Q4. Q1 and Q2 journals have a higher impact
                factor than Q3 and Q4 ranked journals.
              </p>
              <div className="p-3 text-center text-xl hover:underline text-blue-500">
                <a href="https://www.scimagojr.com/">
                  Click Here to know about Standard Journal Rankings
                </a>
              </div>
              <div className="space-y-6">
                <h3 className="p-3 text-center text-black text-2xl">
                  Q1 JOURNALS
                </h3>
                <ul className="text-center text-xl text-gray-700 leading-8 list-disc list-inside">
                  <li>
                    Q1 journals are in the top 25% of journals in a particular
                    field. They typically have the highest impact factors in
                    their field.
                  </li>
                  <li>
                    The peer-review process is usually very rigorous and
                    thorough.
                  </li>
                  <li>
                    Acceptance rates are low, meaning these journals are highly
                    selective about the papers they publish.
                  </li>
                  <li>
                    Articles in Q1 journals receive high visibility and are
                    frequently cited.
                  </li>
                </ul>
                <h3 className="text-black p-3 text-center text-2xl">
                  Q2 JOURNALS
                </h3>
                <ul className="text-center text-xl text-gray-700 leading-8 list-disc list-inside">
                  <li>
                    Q2 journals fall within the 25% to 50% range in their field.
                    They have a respectable impact factor, though not as high as
                    Q1 journals.
                  </li>
                  <li>The peer-review process is quite rigorous.</li>
                  <li>These journals are moderately selective.</li>
                  <li>
                    Articles in Q2 journals have good visibility and are
                    frequently cited.
                  </li>
                </ul>
                <h3 className="text-black p-3 text-center text-2xl">
                  Q3 JOURNALS
                </h3>
                <ul className="text-center text-xl text-gray-700 leading-8 list-disc list-inside">
                  <li>
                    Q3 journals are in the 50% to 75% range in their field.
                  </li>
                  <li>Less stringent review process.</li>
                  <li>
                    The acceptance rates are generally higher, making them less
                    selective than Q1 and Q2 journals.
                  </li>
                  <li>
                    Articles in Q3 journals have moderate visibility and are
                    cited less frequently.
                  </li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === "a2" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Research Paper for Journals
              </h2>
              <p className="text-xl text-center m-4">
                Journal papers are scholarly articles published in academic
                journals, and undergo a rigorous peer-review process to ensure
                the quality, validity, and significance of the research. They
                contribute to the existing body of knowledge by presenting new
                theories, methodologies, empirical studies, or literature
                reviews.
              </p>
              <h3 className="text-center text-2xl text-gray-700">
                How to structure a journal paper:
              </h3>
              <p className="text-center text-xl m-2">
                Most academic journals conventionally accept original research
                articles in the following format: Abstract, followed by the
                Introduction, Methods, Results, and Discussion sections, also
                known as the IMRaD, which is a brilliant way of structuring a
                research paper outline in a simplified and layered format.
              </p>
              <div className="space-y-6">
                <h3 className="text-center text-2xl text-gray-700">Abstract</h3>
                <p className="text-xl text-center">
                  All information provided in the abstract must be present in
                  the manuscript, it should include a stand-alone summary of the
                  research, the main findings, the abbreviations should be
                  defined separately in this section, and this section should be
                  clear, decluttered, and concise.
                </p>

                <h3 className="text-center text-2xl text-gray-700">
                  Introduction
                </h3>
                <p className="text-xl text-center">
                  This section should begin with a background of the study
                  topic, i.e., what is already known, moving on to the knowledge
                  gaps that exist, and finally, end with how the present study
                  aims to fill these gaps, or any hypotheses that the authors
                  may have proposed.
                </p>

                <h3 className="text-center text-2xl text-gray-700">Methods</h3>
                <p className="text-xl text-center">
                  The ultimate factor to consider while producing the methods
                  section is reproducibility; this section should be detailed
                  enough for other researchers to reproduce your study and
                  validate your results. It should include ethical information
                  (ethical board approval, informed consent, etc.) and must be
                  written in the past tense.
                </p>

                <h3 className="text-center text-2xl text-gray-700">Results</h3>
                <p className="text-xl text-center">
                  This section typically presents the findings of the study,
                  with no explanations or interpretations. Here, the findings
                  are simply stated alongside figures or tables mentioned in the
                  text in the correct sequential order. Because you are
                  describing what you found, this section is also written in the
                  past tense.
                </p>

                <h3 className="text-center text-2xl text-gray-700">
                  Discussion and conclusion
                </h3>
                <p className="text-xl text-center">
                  This section begins with a summary of your findings and is
                  meant for you to interpret your results, compare them with
                  previously published papers, and elaborate on whether your
                  findings are comparable or contradictory to previous
                  literature. <br />
                  This section also contains the strengths and limitations of
                  your study, and the latter can be used to suggest future
                  research. End this section with a conclusion paragraph,
                  briefly summarizing and highlighting the main findings and
                  novelty of your study.
                </p>

                <h3 className="text-center text-2xl text-gray-700">
                  Citing References
                </h3>
                <p className="text-xl text-center">
                  Most sections of your paper majorly rely on external sources
                  of information that have already been published. Therefore, it
                  is absolutely indispensable to extract and cite these
                  statements from appropriate, credible, recent, and relevant
                  literature to support your claims.
                </p>
              </div>
            </div>
          )}
          {activeTab === "a4" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Incentives
              </h2>
              <div className="text-center space-y-4">
                <h3 className="text-2xl text-gray-700">Name of Journal</h3>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Enter journal names"
                />

                <h3 className="text-2xl text-gray-700">Journal Indexing</h3>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Enter indexing"
                />

                <h3 className="text-2xl text-gray-700">
                  Digital Object Identifier (DOI)
                </h3>
                <input
                  type="text"
                  onChange={(e) => setDoi(e.target.value)}
                  value={doi}
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Enter DOI"
                />
                <a
                  href={doi}
                  className="text-xl text-blue-500 block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doi}
                </a>

                <label
                  htmlFor="fileUpload"
                  className="block text-2xl text-gray-700 mt-4"
                >
                  Upload Journal Paper
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Journals;
