// Main.jsx
import React from 'react';

const Main = ({ selectedCampus }) => {
  const campusContent = {
    'RR Campus': [
      {
        href: 'https://research.pes.edu/cloud-computing-big-data/',
        text: 'Centre for Cloud Computing & Big Data',
      },
      {
        href: 'https://research.pes.edu/knowledge-analytics-ont-ological-engineering-kanoe/',
        text: 'Knowledge Analytics & Ontological Engineering (KANOE)',
      },
      {
        href: 'https://research.pes.edu/center-for-pattern-recognition/',
        text: 'Center for Pattern Recognition',
      },
      {
        href: 'https://research.pes.edu/crsst/',
        text: 'Centre for Research in Space Science and Technology (CRSST)',
      },
      {
        href: 'https://research.pes.edu/center-for-data-sciences-and-applied-machine-learning/',
        text: 'Center for Data Sciences and Applied Machine Learning (CDSAML)',
      },
      {
        href: 'https://www.isfcr.pes.edu/',
        text: 'Center of Excellence in Information Security, Forensics and Cyber Resilience (C-ISFCR)',
      },
      {
        href: 'https://www.iot.pes.edu/',
        text: 'Center of Excellence in Internet of Things (C-IoT)',
      },
    ],
    'EC Campus': [
      {
        href: 'https://cie.pes.edu/',
        text: 'Centre for Innovation and Entrepreneurship (CIE)',
      },
      {
        href: 'https://www.pesuventurelabs.com/',
        text: 'PESU Venture Labs (PVL)',
      },
      {
        href: 'https://research.pes.edu/centre-of-data-modelling-analytics-and-visualization-codmav/',
        text: 'Centre for Data Modelling Analytics and Visualization (CoDMAV)',
      },
      {
        href: 'https://research.pes.edu/centre-of-cognitive-computing-and-computational-intelligence-c3i/',
        text: 'Centre of Cognitive Computing and Computational Intelligence (C3I)',
      },
      {
        href: 'https://research.pes.edu/center-for-computer-networks-and-cyber-security-ccncs/',
        text: 'Centre for Computer Networks and Cyber Security (CCNCS)',
      },
    ],
  };

  if (!selectedCampus || !campusContent[selectedCampus]) {
    return (
      <div className="text-center text-gray-600 mt-10">
        <p>Please select a campus to view its research centres.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {selectedCampus} - Research Centres
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {campusContent[selectedCampus].map((centre, index) => (
          <a
            key={index}
            href={centre.href}
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center">
              <img
                className="w-10 h-10 mr-4"
                src="/img-c/button.png"
                alt="Centre Icon"
              />
              <span className="text-lg font-medium text-gray-700">
                {centre.text}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Main;
