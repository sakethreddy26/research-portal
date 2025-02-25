import React, { useEffect } from "react";
import Navbar from "../Navbar";

const EC = () => {
  useEffect(() => {
    const answer = document.getElementById("a1");
    if (answer) {
      answer.classList.remove("hidden");
    }
  }, []);

  const centres = [
    {
      href: "https://cie.pes.edu/",
      text: "Centre for Innovation and Entrepreneurship (CIE)",
      bgImage: "/img-c/CIE.png",
    },
    {
      href: "https://www.pesuventurelabs.com/",
      text: "PESU Venture Labs (PVL)",
      bgImage: "/img-c/PVL.png",
    },
    {
      href: "https://research.pes.edu/centre-of-data-modelling-analytics-and-visualization-codmav/",
      text: "Centre for Data Modelling Analytics and Visualization (CoDMAV)",
      bgImage: "/img-c/CoDMAV.jpg",
    },
    {
      href: "https://research.pes.edu/centre-of-cognitive-computing-and-computational-intelligence-c3i/",
      text: "Centre of Cognitive Computing and Computational Intelligence (C3I)",
      bgImage: "/img-c/C3I.png",
    },
    {
      href: "https://research.pes.edu/center-for-computer-networks-and-cyber-security-ccncs/",
      text: "Centre for Computer Networks and Cyber Security (CCNCS)",
      bgImage: "/img-c/CCNCS.png",
    },
  ];

  return (
    
    <div  >
      <div className="bg-[#355681] bg-opacity-70">
        <h1 className="text-center text-2xl font-bold p-5 text-white">Research Centers @ EC Campus</h1>
        </div>
    <div
      className="relative w-full bg-[#355681] bg-opacity-70"
    >
      
      {/* Light gray transparent overlay */}
      <div className="absolute inset-0 bg-[#F5F5F5] bg-opacity-0"></div>

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

export default EC;
