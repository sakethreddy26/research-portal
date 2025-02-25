import React from "react";
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Centres from "./components/Centers/Centres";
import ResearchSupport from "./components/Research-Support/ResearchSupport";
import Patents from "./components/Patents/Patents";
import Capstone from "./components/Capstone/Capstone";
import Conference from "./components/Publications/Conference";
import Contact from "./components/Contact-Us/Contact";
import Journals from "./components/Publications/Journals";
import Research from "./components/R-Program/rprogram";
import Grant from "./components/Research-Grant/Grant";
import Home from "./components/Home";
import Ethics from "./components/Ethics/Ethics";
import RR from "./components/Centers/RR";
import EC from "./components/Centers/EC";
import Faculty from "./components/Faculty/Faculty";
import FacultyDetail from "./components/Faculty/FacultyDetails";
import AuthPages from "./components/login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All routes are nested under Layout */}
        <Route element={<Layout />}>
          <Route path="/login" element={<AuthPages/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/rprogram" element={<Research />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/:email" element={<FacultyDetail />} />
          <Route path="/patent-process" element={<Patents />} />
          <Route path="/Research-Grant" element={<Grant />} />
          <Route path="/centres" element={<Centres />} />
          <Route path="/centres/rr" element={<RR />} />
          <Route path="/centres/ec" element={<EC />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/research-support" element={<ResearchSupport />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/publications" element={<Conference />} />
        </Route>

        {/* Any routes that should not have a layout can be added outside */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
