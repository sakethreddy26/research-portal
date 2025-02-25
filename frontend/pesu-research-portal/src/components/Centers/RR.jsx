import React, { useEffect } from "react";
import Navbar from "../Navbar";

const RR = () => {
  useEffect(() => {
    const answer = document.getElementById("a1");
    if (answer) {
      answer.classList.remove("hidden");
    }
  }, []);

  const centres = [
    {
      href: "https://research.pes.edu/cloud-computing-big-data/",
      text: "Centre for Cloud Computing & Big Data",
      bgImage: "/img-c/CloudComputing.png",
    },
    {
      href: "https://research.pes.edu/knowledge-analytics-ont-ological-engineering-kanoe/",
      text: "Knowledge Analytics & Ont-ological Engineering (KANOE)",
      bgImage: "/img-c/KANOE.png",
    },
    {
      href: "https://research.pes.edu/center-for-pattern-recognition/",
      text: "Center for Pattern Recognition",
      bgImage: "/img-c/PatternRecognition.png",
    },
    {
      href: "https://research.pes.edu/crsst/",
      text: "Centre for Research in Space Science and Technology (CRSST)",
      bgImage: "/img-c/CRSST.png",
    },
    {
      href: "https://research.pes.edu/center-for-data-sciences-and-applied-machine-learning/",
      text: "Center for Data Sciences and Applied Machine Learning (CDSAML)",
      bgImage: "/img-c/CDSAML.png",
    },
    {
      href: "https://www.isfcr.pes.edu/",
      text: "Center of Excellence in Information Security, Forensics and Cyber Resilience (C-ISFCR)",
      bgImage: "/img-c/ISFCR.png",
    },
    {
      href: "https://www.iot.pes.edu/",
      text: "Center of Excellence in Internet of Things (C-IoT)",
      bgImage: "/img-c/CIoT.png",
    },
  ];

  return (
    
      <div>
        <div className="bg-white bg-opacity-75">
        <h1 className="text-center text-2xl font-bold p-5 text-[#0A4C82]">Research Centers @ RR Campus</h1>
        </div>
      <div
        className="relative w-full bg-white bg-opacity-75"
      >
        
        {/* Light gray transparent overlay */}
        <div className="absolute inset-0 bg-[#F5F5F5] bg-opacity-50"></div>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {centres.map((item, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden bg-white flex flex-col transform transition-transform duration-300 hover:scale-102 cursor-pointer hover:border hover:border-[#007ACC]"
              onClick={() => window.open(item.href, "_blank")}
            >
              {/* Image section */}
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  padding: "10px",
                }}
              ></div>

              {/* Title section */}
              <div className="p-4 text-[#0A4C82] text-center">
                <h3 className="text-lg font-bold">{item.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default RR;
