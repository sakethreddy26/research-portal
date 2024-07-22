import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Professors from './components/Professors';
import ProfessorDetail from './components/ProfessorDetail';
import Centres from './components/Centres';
import ResearchSupport from "./components/ResearchSupport";
import Patents from './components/Patents';
import Signup from './components/Signup';
import Reasearch from './components/rprogram'; // Import the reasearch component
import Conference from './components/Conference';
import Journals from './components/Journals';
import ResearchGrants from './components/ResearchGrants';
import Contact from './components/Contact';
// import axios from "axios";

// axios.defaults.withCredentials=true

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/Professors" element={<Professors/>} />
                <Route path="/rprogram" element={<Reasearch />} /> {/* Add the route for the reasearch component */}
                <Route path="/getProfessorbyid/:id" element={<ProfessorDetail/>} />
                <Route path="/centres" element={<Centres/>} />
                <Route path="/research-support" element={<ResearchSupport/>} />
                <Route path="/patent-process" element={<Patents/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/conference" element={<Conference />} />
                <Route path="/journals" element={<Journals />} />
                <Route path="/ResearchGrants" element={<ResearchGrants />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
