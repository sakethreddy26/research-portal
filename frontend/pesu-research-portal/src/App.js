import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Professors from './components/Professors';
import ProfessorDetail from './components/ProfessorDetail';
// import axios from "axios";

// axios.defaults.withCredentials=true

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/Professors" element={<Professors/>} />
                <Route path="/getProfessorbyid/:id" element={<ProfessorDetail/>} />
            </Routes>
        </Router>
    );
};

export default App;
