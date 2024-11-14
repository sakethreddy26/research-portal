// Sidebar.jsx
import React from "react";

const Sidebar = ({ handleOptionClick, selectedOption }) => {
  return (
    <div className="text-center">
      <ul className="leading-10 font-serif text-xl">
        <li
          className={`cursor-pointer ${selectedOption === "Research Scholar Details" ? "text-blue-600" : ""}`}
          onClick={() => handleOptionClick("Research Scholar Details")}
        >
          Research Scholar Details
        </li>
        <li
          className={`cursor-pointer ${selectedOption === "circulars" ? "text-blue-600" : ""}`}
          onClick={() => handleOptionClick("circulars")}
        >
          Circulars
        </li>
        <li
          className={`cursor-pointer ${selectedOption === "fee-details" ? "text-blue-600" : ""}`}
          onClick={() => handleOptionClick("fee-details")}
        >
          Fee Details
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
