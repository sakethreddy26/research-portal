// Main.jsx
import React from 'react';

const Main = ({ selectedOption }) => {
  switch (selectedOption) {
    case 'researchEthics':
      return (
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center font-serif">
            Research Ethics
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 font-sans">
            Research ethics represents a set of principles and guidelines that
            scholars and researchers adhere to, ensuring that their inquiries
            and examinations uphold the highest standards of integrity, respect,
            and care. It's a commitment to ensuring that the pursuit of
            knowledge remains trustworthy and beneficial for participants and
            society. Embracing research ethics means prioritizing the well-being
            and rights of study participants, maintaining accuracy in data
            collection and reporting, and fostering a transparent and honest
            environment throughout the research process.
          </p>

          <h2 className="text-3xl font-semibold mb-6 text-indigo-700 font-serif">
            Principles of Ethical Research
          </h2>
          <p className="text-gray-700 mb-6 font-sans">
            Key principles in ethical research to ensure beneficial outcomes:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 mb-10 font-sans">
            <li>
              <span className="font-semibold text-indigo-600">Justice:</span> The
              benefits of research outcomes should be accessible to all.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">
                Respect the rights and dignity of participants:
              </span>{' '}
              Privacy and confidentiality of participants’ data should be
              ensured.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Integrity:</span>{' '}
              Researchers should maintain honesty and respect towards
              participants.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">
                Fidelity and responsibility:
              </span>{' '}
              Researchers should contribute findings for the welfare of society.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mb-6 text-indigo-700 font-serif">
            Components of Ethical Research
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 font-sans">
            <li>
              <span className="font-semibold text-indigo-600">Integrity:</span>{' '}
              Researchers must maintain honesty in findings and adhere to moral
              practices.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Objectivity:</span>{' '}
              Research should be purposeful and directed towards a well-defined
              goal.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">
                Professional competency:
              </span>{' '}
              Researchers should be capable of accurately analyzing and
              interpreting data.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">
                Confidentiality:
              </span>{' '}
              Participants’ anonymity should be protected to avoid potential
              harm.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">
                Professional behavior:
              </span>{' '}
              Researchers should conduct themselves professionally to maintain a
              bias-free outcome.
            </li>
          </ul>
        </div>
      );

    default:
      return null;
  }
};

export default Main;
