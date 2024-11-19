import React, { useState } from 'react';

const Main = ({ selectedOption }) => {
  const [showFAQ, setShowFAQ] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});

  const toggleFAQ = (questionId) => {
    setShowFAQ((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleFileUpload = (event, sectionId) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFiles((prev) => ({
          ...prev,
          [sectionId]: e.target.result,
        }));
      };
      reader.readAsText(file);
    }
  };

  const renderFileContent = (sectionId) => {
    if (uploadedFiles[sectionId]) {
      return (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold mb-2">File Content:</h3>
          <pre className="whitespace-pre-wrap">{uploadedFiles[sectionId]}</pre>
        </div>
      );
    }
    return null;
  };

  const faqData = [
    {
      id: 1,
      question: '1. What is a Patent?',
      answer:
        'A Patent is a statutory right for an invention granted for a limited period of time to the patentee by the Government, in exchange for full disclosure of the invention, excluding others from making, using, selling, or importing the patented product or process without consent.',
    },
    {
      id: 2,
      question: '2. What is the term of a patent in the Indian system?',
      answer:
        'The term of every patent granted is 20 years from the date of filing of the application. For applications filed under the national phase of the Patent Cooperation Treaty (PCT), the term is 20 years from the international filing date.',
    },
    // ... (include all other FAQ items here)
  ];

  const publishedPatents = [
    {
      title: 'A Shopping Trolley with Automatic Billing System',
      inventors: 'Deepti C',
      number: '541176',
      year: '2024',
      link: 'https://drive.google.com/file/d/1b7W9i5Fl0iwnI_-OHWrt_ozehG0Vw367/view?usp=sharing',
    },
    {
      title: 'Fruit Picker',
      inventors: 'Dr. Suja C M',
      number: '409651-001',
      year: '2024',
      link: 'https://drive.google.com/file/d/1MaY6AQ6vh7p8pmznTol1oPGwus2gtu8d/view?usp=sharing',
    },
    {
      title: 'Blockchain and IoT Based Electronics Health Record Device',
      inventors: 'Prof. Surbhi Choudhary',
      number: '415054-001',
      year: '2024',
      link: 'https://drive.google.com/file/d/1Qp39yg64O7r45sng_Vl03thijVBdKh0-/view',
    },
    {
      title: 'An Author Strain Independent Scoring System to Measure Scientific Independence',
      inventors: 'Dr. Sudeepa Roy Dey',
      number: '20 2022 101 927.4 (German)',
      year: '2022',
      link: '#',  
    },
    {
      title: 'A System For Streaming And Storing The Heterogeneous Streamed Sensor Data Using Microservices Architecture Model',
      inventors: 'DJ Ruby Dinakar',
      number: '202022103462 (German)',
      year: '2022',
      link: '#',  
    },
  ];
  
  const renderSection = () => {
    switch (selectedOption) {
      case 'processes':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Process of Claiming a Patent in India
            </h2>
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-2/3">
                <img
                  src="/img/patent-procedure.png"
                  alt="Patent Filing Process in India"
                  className="w-full mb-6 rounded-md shadow"
                />
              </div>
              <div className="md:w-1/3 md:pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Useful Links
                </h3>
                <ul className="list-disc list-inside space-y-2 text-indigo-600">
                  <li>
                    <a
                      href="https://www.uspto.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      USA Patents
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.epo.org/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      European Patents
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ipindia.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Indian Patents
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200 pb-4">
                    <button
                      className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-200 ${
                          showFAQ[faq.id] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {showFAQ[faq.id] && (
                      <p className="mt-4 text-gray-700">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p>
                Link to Guidelines for Claiming a Patent{' '}
                <a
                  href="/appdx-c-patents.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  Here
                </a>
              </p>
            </div>
          </div>
        );

      case 'published':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Patents Published
            </h2>
            <div className="space-y-6">
              {publishedPatents.map((patent, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                    {patent.title}
                  </h3>
                  <p className="text-gray-700 mb-1">
                    <strong>Inventor(s):</strong> {patent.inventors}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Patent Number:</strong> {patent.number}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Year of Publication:</strong> {patent.year}
                  </p>
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    View Patent Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        );

      case 'claimed':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Apply for a Patent
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Click the button below to download the form to apply for a patent.
            </p>
            <a
              href="/patent-form.docx"
              download
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
            >
              Download Patent Application Form
            </a>
            <p className="text-lg text-gray-700 mt-6">
              You can edit the document and submit it.
            </p>
            <div className="mt-6">
              <p className="text-lg text-gray-700 mb-2">
                Upload the filled form:
              </p>
              <label className="block">
                <input
                  type="file"
                  name="file"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
                />
              </label>
              <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-200">
                Submit
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedOption.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </h2>
            <div className="mt-4">
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, selectedOption)}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
              />
            </div>
            {renderFileContent(selectedOption)}
          </div>
        );
    }
  };

  return renderSection();
};

export default Main;