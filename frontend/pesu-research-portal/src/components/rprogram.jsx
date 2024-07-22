import Navbar from "./Navbar";
import React, { useState } from "react";

const Reasearch = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "research-scholar-details":
        return (
          <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1">
            <h2 className="text-2xl font-bold mb-4 text-center">Research Scholar Details</h2>
            <p>Here are some details about research scholars.</p>
          </div>
        );
      case "circulars":
        return (
          <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1">
            <h2 className="text-2xl font-bold mb-4 text-center">Circulars</h2>
            <p>Here are some circulars.</p>
          </div>
        );
      case "fee-details":
        return (
          <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg mt-1">
            <h2 className="text-2xl font-bold mb-4 text-center">Fee Details</h2>
            <p>Here are some fee details.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="research h-screen flex flex-col">
      <Navbar />
      <div
        className="flex flex-1 overflow-hidden"
        style={{
          backgroundImage: "url('/img/pixelcut-export.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {isAuthenticated ? (
          <div className="flex flex-1">
            <div className="flex-none w-48 bg-white bg-opacity-75 rounded-lg shadow-lg p-4 ml-4 mt-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2 text-center">Welcome</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1 w-full" onClick={() => setSelectedOption("research-scholar-details")}>
                Research Scholar Details
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1 w-full" onClick={() => setSelectedOption("circulars")}>
                Circulars
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={() => setSelectedOption("fee-details")}>
                Fee Details
              </button>
            </div>
            <div className="flex-1 p-4 mt-2">
              {renderContent()}
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <div className="p-4 bg-white bg-opacity-75 rounded-lg shadow-lg h-80 w-96">
              {isLogin ? (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                  <form className="mb-6">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loginSerialNumber">
                        SRN
                      </label>
                      <input
                        id="loginSerialNumber"
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your SRN"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loginPassword">
                        Password
                      </label>
                      <input
                        id="loginPassword"
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" onClick={handleLogin}>
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-center">
                    <button className="text-blue-500 hover:underline" onClick={toggleForm}>
                      Don't have an account? Register
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                  <form className="mb-6">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerSerialNumber">
                        SRN
                      </label>
                      <input
                        id="registerSerialNumber"
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your serial number"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerPassword">
                        Password
                      </label>
                      <input
                        id="registerPassword"
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" onClick={handleLogin}>
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="text-center">
                    <button className="text-blue-500 hover:underline" onClick={toggleForm}>
                      Already have an account? Login
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reasearch;
