import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Professors from "./components/Professors";
import ProfessorDetail from "./components/ProfessorDetail";
import Centres from "./components/Centres";
import ResearchSupport from "./components/ResearchSupport";
import Patents from "./components/Patents";
import Signup from "./components/Signup";

import Capstone from "./components/Capstone";
import Conference from "./components/Conference";
import Contact from "./components/Contact";
import Journals from "./components/Journals";
import ResearchGrants from "./components/ResearchGrants";
import Reasearch from "./components/rprogram";
import Grant from "./components/Grant";
import Home from "./components/Home";
import Publication from "./components/Publication";
import Homepublications from "./components/Homepublications";
// import axios from "axios";

// axios.defaults.withCredentials=true

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dummy" element={<Homepublications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Professors" element={<Professors />} />
        <Route path="/rprogram" element={<Reasearch />} />{" "}
        {/* Add the route for the reasearch component */}
        <Route path="/getProfessorbyid/:id" element={<ProfessorDetail />} />
        <Route path="/centres" element={<Centres />} />
        <Route path="/research-support" element={<ResearchSupport />} />
        <Route path="/patent-process" element={<Patents />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/publications" element={<Conference />} /> */}
        <Route path="/capstone" element={<Capstone />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/Research-Grant" element={<Grant />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
