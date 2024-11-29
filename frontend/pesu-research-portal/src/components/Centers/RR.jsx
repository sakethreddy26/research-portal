import Navbar from "../Navbar";
import React, { useState, useEffect } from "react";

const RR = () => {
  const [activeTab, setActiveTab] = useState("q1");

  useEffect(() => {
    const answer = document.getElementById("a1");
    if (answer) {
      answer.classList.remove("hidden");
    }
  }, []);

  const toggleAnswer = (questionId) => {
    setActiveTab(questionId);
  };

  const centres = [
    {
      href: "https://research.pes.edu/cloud-computing-big-data/",
      text: "Centre for Cloud Computing & Big Data",
    },
    {
      href: "https://research.pes.edu/knowledge-analytics-ont-ological-engineering-kanoe/",
      text: "Knowledge Analytics & Ont-ological Engineering (KANOE)",
    },
    {
      href: "https://research.pes.edu/center-for-pattern-recognition/",
      text: "Center for Pattern Recognition",
    },
    {
      href: "https://research.pes.edu/crsst/",
      text: "Centre for Research in Space Science and Technology (CRSST)",
    },
    {
      href: "https://research.pes.edu/center-for-data-sciences-and-applied-machine-learning/",
      text: "Center for Data Sciences and Applied Machine Learning (CDSAML)",
    },
    {
      href: "https://www.isfcr.pes.edu/",
      text: "Center of Excellence in Information Security, Forensics and Cyber Resilience (C- ISFCR)",
    },
    {
      href: "https://www.iot.pes.edu/",
      text: "Center of Excellence in Internet of Things (C-IoT)",
    },
  ];

  return (
    <div>
      <div>
        {/* <Navbar /> */}
      </div>

      <div
        className="grid grid-cols-4 gap-2"
        style={{
          backgroundImage: "url(/img/pixelcut-export.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="col-span-1 p-10 bg-white bg-opacity-80 w-4/5 h-full">
          <ul className="font-serif text-lg space-y-4 cursor-pointer w-full">
            <li
              className={`transition-all duration-300 p-3 rounded-lg text-blue-600 ${
                activeTab === "q1" ? "hover:text-blue-600" : "hover:bg-blue-100"
              }`}
              onClick={() => toggleAnswer("q1")}
            >
              RR Campus
            </li>
          </ul>
        </div>

        {/* Ring Road */}
        <div
          className="font-serif p-10 md:text-xl col-span-3 col-start-2"
          id="a1"
        >
          <div className="bg-white opacity-90 rounded-lg shadow-lg overflow-hidden">
            {centres.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block p-5 hover:bg-blue-50 transition-all duration-300 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center gap-4 group">
                  <img
                    className="object-fill h-6 w-6 mt-1"
                    src="/img-c/button.png"
                    alt=""
                  />
                  <span className="group-hover:text-blue-800 transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RR;
