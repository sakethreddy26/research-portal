import Navbar from "../components/Navbar";
import React, { useEffect } from "react";

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
    },
    {
      href: "https://www.pesuventurelabs.com/",
      text: "PESU Venture Labs (PVL)",
    },
    {
      href: "https://research.pes.edu/centre-of-data-modelling-analytics-and-visualization-codmav/",
      text: "Centre for Data Modelling Analytics and Visualization (CoDMAV)",
    },
    {
      href: "https://research.pes.edu/centre-of-cognitive-computing-and-computational-intelligence-c3i/",
      text: "Centre of Cognitive Computing and Computational Intelligence (C3I)",
    },
    {
      href: "https://research.pes.edu/center-for-computer-networks-and-cyber-security-ccncs/",
      text: "Centre for Computer Networks and Cyber Security (CCNCS)",
    },
  ];

  return (
    <div>
      <div>
        <Navbar />
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
            <li className="transition-all duration-300 p-3 rounded-lg text-blue-600 hover:bg-blue-100">
              EC Campus
            </li>
          </ul>
        </div>

        {/* Electronic City */}
        <div
          className="font-serif p-10 md:text-xl col-span-3 col-start-2"
          id="a1"
        >
          <div className="bg-white opacity-90 rounded-lg pr-6">
            {centres.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-5 flex text-center gap-7 hover:text-blue-800 hover:shadow-xl"
              >
                <img
                  className="object-fill h-6 w-6 mt-1"
                  src="/img-c/button.png"
                  alt=""
                />
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EC;
