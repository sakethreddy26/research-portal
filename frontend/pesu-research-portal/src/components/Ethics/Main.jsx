// Main.jsx
import React from 'react';

const Main = ({ selectedOption }) => {
  switch (selectedOption) {
    case 'researchEthics':
      return (
        <div className="p-10 bg-gradient-to-b from-blue-50 to-blue-100 opacity-95 mr-10 rounded-xl min-h-screen shadow-xl">
          {/* Main Heading */}
          <h1 className="text-center text-indigo-800 text-4xl font-extrabold mb-10 tracking-wide">
            Research Ethics
          </h1>

          {/* Intro Paragraph */}
          <div className="bg-blue-200 rounded-lg p-8 mb-10 shadow-md">
            <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Research ethics represents a set of principles and guidelines that scholars and researchers adhere to, ensuring that their inquiries and examinations uphold the highest standards of integrity, respect, and care. It's a commitment to ensuring that the pursuit of knowledge remains trustworthy and beneficial for participants and society. Embracing research ethics means prioritizing the well-being and rights of study participants, maintaining accuracy in data collection and reporting, and fostering a transparent and honest environment throughout the research process.
            </p>
          </div>

          {/* Principles Section */}
          <section className="bg-white rounded-lg p-8 mb-12 shadow-lg">
            <h2 className="text-center text-indigo-900 text-3xl font-semibold mb-6">
              Principles of Ethical Research
            </h2>
            <p className="text-center text-gray-600 text-lg mb-10 max-w-xl mx-auto">
              Key principles in ethical research to ensure beneficial outcomes.
            </p>

            <div className="space-y-6 text-gray-800 text-md leading-relaxed max-w-2xl mx-auto">
              <p>
                <span className="font-semibold text-indigo-700">Justice:</span> The benefits of research outcomes should be accessible to all.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Respect the rights and dignity of participants:</span> Privacy and confidentiality of participants’ data should be ensured.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Integrity:</span> Researchers should maintain honesty and respect towards participants.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Fidelity and responsibility:</span> Researchers should contribute findings for the welfare of society.
              </p>
            </div>
          </section>

          {/* Components Section */}
          <section className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <h2 className="text-center text-indigo-900 text-3xl font-semibold mb-6">
              Components of Ethical Research
            </h2>

            <div className="space-y-6 text-gray-800 text-md leading-relaxed max-w-2xl mx-auto">
              <p>
                <span className="font-semibold text-indigo-700">Integrity:</span> Researchers must maintain honesty in findings and adhere to moral practices.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Objectivity:</span> Research should be purposeful and directed towards a well-defined goal.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Professional competency:</span> Researchers should be capable of accurately analyzing and interpreting data.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Confidentiality:</span> Participants’ anonymity should be protected to avoid potential harm.
              </p>
              <p>
                <span className="font-semibold text-indigo-700">Professional behavior:</span> Researchers should conduct themselves professionally to maintain a bias-free outcome.
              </p>
            </div>
          </section>
        </div>
      );

    default:
      return null;
  }
};

export default Main;
