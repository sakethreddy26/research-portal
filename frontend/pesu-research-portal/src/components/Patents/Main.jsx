// Main.jsx
import React, { useState } from 'react';

const Main = ({ selectedOption }) => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (questionId) => {
    setShowFAQ((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

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
          {/* FAQ Section */}
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
          <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
          <p className="text-gray-700 mt-4">
            Please select an option from the menu to get started.
          </p>
        </div>
      );
  }
};

export default Main;

// Data for FAQ
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
  {
    id: 3,
    question: '3. Does an Indian Patent give protection worldwide?',
    answer:
      'No. Patent protection is a territorial right, effective only within India. There is no concept of a global patent. However, filing an application in India enables the applicant to file corresponding applications in convention countries or under the PCT within 12 months.',
  },
  {
    id: 4,
    question: '4. What can be patented?',
    answer:
      'An invention relating to a product or process that is new, involves an inventive step, and is capable of industrial application can be patented. It must not fall under non-patentable inventions as per sections 3 and 4 of the Indian Patent Act.',
  },
  {
    id: 5,
    question: '5. Who can apply for a patent?',
    answer:
      'A patent application can be filed by the true and first inventor or their assignee, either alone or jointly with others. Legal representatives of deceased persons can also apply.',
  },
  {
    id: 6,
    question: '6. What timelines are to be adhered to while prosecuting a patent application in India?',
    answer:
      'Some important timelines include: filing the request for examination within 48 months, responding to examination reports within 6 months, and paying renewal fees annually after grant.',
  },
  {
    id: 7,
    question: '7. Where to file a patent application?',
    answer:
      'You can file a patent application at the appropriate patent office based on your region (Chennai, Delhi, Mumbai, or Kolkata) or use the e-filing portal of the Indian Patent Office.',
  },
  {
    id: 8,
    question: '8. What are the fees for filing a patent application in India?',
    answer:
      'The fees vary depending on the type of applicant (individual, small entity, or others) and the nature of the application. It includes filing fees, examination fees, and fees for other optional services.',
  },
  {
    id: 9,
    question: '9. Can a patent be renewed after its term expires?',
    answer:
      'No, a patent cannot be renewed after its 20-year term expires. After expiration, the invention falls into the public domain.',
  },
  {
    id: 10,
    question: '10. What is the process for patent infringement action?',
    answer:
      'If someone infringes on a patent, the patentee can file a civil lawsuit in the appropriate court. Remedies may include injunctions, damages, or accounts of profits.',
  },
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
    title: 'Blockchain and IoT Based Electronic Health Record Device',
    inventors: 'Prof. Surbhi Choudhary',
    number: '415054-001',
    year: '2024',
    link: 'https://drive.google.com/file/d/1Qp39yg64O7r45sng_Vl03thijVBdKh0-/view',
  },
  {
    title:
      'An Author Strain Independent Scoring System to Measure Scientific Independence',
    inventors: 'Dr. Sudeepa Roy Dey',
    number: '20221019274 (German)',
    year: '2022',
    link: '#',
  },
  {
    title:
      'A System for Streaming and Storing Heterogeneous Streamed Sensor Data Using Microservices Architecture Model',
    inventors: 'DJ Ruby Dinakar',
    number: '202022103462 (German)',
    year: '2022',
    link: '#',
  },
];
