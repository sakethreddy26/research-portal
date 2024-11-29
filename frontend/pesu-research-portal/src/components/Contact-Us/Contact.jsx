// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed overflow-y-auto"
      style={{
        backgroundImage: "url('/img/pesit-v2.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header Section */}
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
            <h2 className="text-2xl md:text-3xl font-medium">
              Get In Touch
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch">
            {/* RR Campus */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg m-4 p-6 w-full md:w-1/3">
              <img
                src="/img/rrc.jpg"
                alt="RR Campus"
                className="rounded-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                PES University
                <br />
                <span className="text-xl text-gray-700">
                  Ring Road Campus
                </span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13 12m0 0l-4.657 4.657M13 12l4.657-4.657M13 12l-4.657-4.657"
                    />
                  </svg>
                  <p>
                    PES University, 100 Feet Ring Road BSK III Stage,
                    Bangalore - 560085
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M2.25 6.75a3 3 0 013-3h1.4a1.5 1.5 0 011.39.994l1.12 3.365a1.5 1.5 0 01-.587 1.668l-1.293.97a1.125 1.125 0 00-.112 1.686 11.284 11.284 0 006.25 3.438 1.125 1.125 0 001.418-.94l.243-1.457a1.5 1.5 0 011.273-1.273l1.457-.243a1.125 1.125 0 00.94-1.418 11.284 11.284 0 00-3.438-6.25 1.125 1.125 0 00-1.686.112l-.97 1.293a1.5 1.5 0 01-1.668.587L6.744 4.6A1.5 1.5 0 005.75 3.25H4.5a3 3 0 00-3 3v.5z" />
                  </svg>
                  <p>
                    +91 80 26721983 <br />
                    +91 80 26722108
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16.5 8.25v7.5M7.5 8.25v7.5M3.75 15h16.5M3.75 15a2.25 2.25 0 012.25-2.25h11.25a2.25 2.25 0 012.25 2.25M3.75 15v1.5a2.25 2.25 0 002.25 2.25h11.25a2.25 2.25 0 002.25-2.25V15" />
                  </svg>
                  <p>
                    Admissions Only: <br />
                    080-10-297 297
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M2.25 6.75a3 3 0 013-3h1.4a1.5 1.5 0 011.39.994l1.12 3.365a1.5 1.5 0 01-.587 1.668l-1.293.97a1.125 1.125 0 00-.112 1.686 11.284 11.284 0 006.25 3.438 1.125 1.125 0 001.418-.94l.243-1.457a1.5 1.5 0 011.273-1.273l1.457-.243a1.125 1.125 0 00.94-1.418 11.284 11.284 0 00-3.438-6.25 1.125 1.125 0 00-1.686.112l-.97 1.293a1.5 1.5 0 01-1.668.587L6.744 4.6A1.5 1.5 0 005.75 3.25H4.5a3 3 0 00-3 3v.5z" />
                  </svg>
                  <p>
                    <a
                      href="mailto:admissions@pes.edu"
                      className="text-indigo-600 hover:underline"
                    >
                      admissions@pes.edu
                    </a>
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12h3.75m-7.5 0h3.75M12 12V3.75M12 12v3.75M12 12H8.25M12 12H4.5M12 12l4.5 4.5M12 12l-4.5 4.5" />
                  </svg>
                  <p>
                    <a
                      href="https://goo.gl/maps/eBTxHeqL78eRxwve8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* EC Campus */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg m-4 p-6 w-full md:w-1/3">
              <img
                src="/img/ecc.jpg"
                alt="EC Campus"
                className="rounded-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                PES University
                <br />
                <span className="text-xl text-gray-700">
                  Electronic City Campus
                </span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13 12m0 0l-4.657 4.657M13 12l4.657-4.657M13 12l-4.657-4.657"
                    />
                  </svg>
                  <p>
                    Hosur Road, 1 km before Electronic City, Bengaluru,
                    Karnataka - 560100
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M2.25 6.75a3 3 0 013-3h1.4a1.5 1.5 0 011.39.994l1.12 3.365a1.5 1.5 0 01-.587 1.668l-1.293.97a1.125 1.125 0 00-.112 1.686 11.284 11.284 0 006.25 3.438 1.125 1.125 0 001.418-.94l.243-1.457a1.5 1.5 0 011.273-1.273l1.457-.243a1.125 1.125 0 00.94-1.418 11.284 11.284 0 00-3.438-6.25 1.125 1.125 0 00-1.686.112l-.97 1.293a1.5 1.5 0 01-1.668.587L6.744 4.6A1.5 1.5 0 005.75 3.25H4.5a3 3 0 00-3 3v.5z" />
                  </svg>
                  <p>+91 80 66186610</p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16.5 8.25v7.5M7.5 8.25v7.5M3.75 15h16.5M3.75 15a2.25 2.25 0 012.25-2.25h11.25a2.25 2.25 0 012.25 2.25M3.75 15v1.5a2.25 2.25 0 002.25 2.25h11.25a2.25 2.25 0 002.25-2.25V15" />
                  </svg>
                  <p>
                    Admissions Only: <br />
                    080-10-297 297
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16.5 8.25v7.5M7.5 8.25v7.5M3.75 15h16.5M3.75 15a2.25 2.25 0 012.25-2.25h11.25a2.25 2.25 0 012.25 2.25M3.75 15v1.5a2.25 2.25 0 002.25 2.25h11.25a2.25 2.25 0 002.25-2.25V15" />
                  </svg>
                  <p>
                    For Hospital: <br />
                    080-10-728-728
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M2.25 6.75a3 3 0 013-3h1.4a1.5 1.5 0 011.39.994l1.12 3.365a1.5 1.5 0 01-.587 1.668l-1.293.97a1.125 1.125 0 00-.112 1.686 11.284 11.284 0 006.25 3.438 1.125 1.125 0 001.418-.94l.243-1.457a1.5 1.5 0 011.273-1.273l1.457-.243a1.125 1.125 0 00.94-1.418 11.284 11.284 0 00-3.438-6.25 1.125 1.125 0 00-1.686.112l-.97 1.293a1.5 1.5 0 01-1.668.587L6.744 4.6A1.5 1.5 0 005.75 3.25H4.5a3 3 0 00-3 3v.5z" />
                  </svg>
                  <p>
                    <a
                      href="mailto:admissions@pes.edu"
                      className="text-indigo-600 hover:underline"
                    >
                      admissions@pes.edu
                    </a>
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12h3.75m-7.5 0h3.75M12 12V3.75M12 12v3.75M12 12H8.25M12 12H4.5M12 12l4.5 4.5M12 12l-4.5 4.5" />
                  </svg>
                  <p>
                    <a
                      href="https://maps.app.goo.gl/FGN7p2jWEz5uHmAz6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* HN Campus */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg m-4 p-6 w-full md:w-1/3">
              <img
                src="/img/hnc.jpg"
                alt="HN Campus"
                className="rounded-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                PES University
                <br />
                <span className="text-xl text-gray-700">
                  Hanumantha Nagar Campus
                </span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13 12m0 0l-4.657 4.657M13 12l4.657-4.657M13 12l-4.657-4.657"
                    />
                  </svg>
                  <p>
                    50 Feet Road, Phase 1 Banashankari Stage I, Hanumanthanagar,
                    Bengaluru, Karnataka - 560050
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M2.25 6.75a3 3 0 013-3h1.4a1.5 1.5 0 011.39.994l1.12 3.365a1.5 1.5 0 01-.587 1.668l-1.293.97a1.125 1.125 0 00-.112 1.686 11.284 11.284 0 006.25 3.438 1.125 1.125 0 001.418-.94l.243-1.457a1.5 1.5 0 011.273-1.273l1.457-.243a1.125 1.125 0 00.94-1.418 11.284 11.284 0 00-3.438-6.25 1.125 1.125 0 00-1.686.112l-.97 1.293a1.5 1.5 0 01-1.668.587L6.744 4.6A1.5 1.5 0 005.75 3.25H4.5a3 3 0 00-3 3v.5z" />
                  </svg>
                  <p>+91 80 22429391</p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M2.25 6.75a3 3 0 013-3h1.4a1.5 1.5 0 011.39.994l1.12 3.365a1.5 1.5 0 01-.587 1.668l-1.293.97a1.125 1.125 0 00-.112 1.686 11.284 11.284 0 006.25 3.438 1.125 1.125 0 001.418-.94l.243-1.457a1.5 1.5 0 011.273-1.273l1.457-.243a1.125 1.125 0 00.94-1.418 11.284 11.284 0 00-3.438-6.25 1.125 1.125 0 00-1.686.112l-.97 1.293a1.5 1.5 0 01-1.668.587L6.744 4.6A1.5 1.5 0 005.75 3.25H4.5a3 3 0 00-3 3v.5z" />
                  </svg>
                  <p>
                    <a
                      href="mailto:admissions@pes.edu"
                      className="text-indigo-600 hover:underline"
                    >
                      admissions@pes.edu
                    </a>
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12h3.75m-7.5 0h3.75M12 12V3.75M12 12v3.75M12 12H8.25M12 12H4.5M12 12l4.5 4.5M12 12l-4.5 4.5" />
                  </svg>
                  <p>
                    <a
                      href="https://maps.app.goo.gl/j6XcmhLkAdRxvT7u5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Dean of Research */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg m-4 p-6 w-full md:w-1/3">
              <div className="flex flex-col items-center">
                <img
                  src="https://research.pes.edu/wp-content/uploads/2021/11/dean.jpg"
                  alt="Dean of Research"
                  className="rounded-full mb-6 w-32 h-32 object-cover"
                />
                <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                  Dean of Research
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-indigo-600 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M2.25 6.75a3 3 0 013-3h1.4a1.5 1.5 0 011.39.994l1.12 3.365a1.5 1.5 0 01-.587 1.668l-1.293.97a1.125 1.125 0 00-.112 1.686 11.284 11.284 0 006.25 3.438 1.125 1.125 0 001.418-.94l.243-1.457a1.5 1.5 0 011.273-1.273l1.457-.243a1.125 1.125 0 00.94-1.418 11.284 11.284 0 00-3.438-6.25 1.125 1.125 0 00-1.686.112l-.97 1.293a1.5 1.5 0 01-1.668.587L6.744 4.6A1.5 1.5 0 005.75 3.25H4.5a3 3 0 00-3 3v.5z" />
                    </svg>
                    <p>
                      <a
                        href="mailto:dean.research@pes.edu"
                        className="text-indigo-600 hover:underline"
                      >
                        dean.research@pes.edu
                      </a>
                    </p>
                  </div>
                  {/* Add any additional contact details if available */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End of Overlay Div */}
    </div>
  );
};

export default Contact;
