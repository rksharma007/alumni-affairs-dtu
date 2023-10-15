import React from "react";
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Donations from "./components/donations/Donations";
import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";
import CurrentStudent from "./components/join/CurrentStudent";
import JoinAlumni from "./components/join/JoinAlumni";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import News from "./components/news/News";
import NotableAlumni from "./components/notable-alumni/NotableAlumni";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/donations" element={<Donations/>} />
        <Route path="/joinalumni" element={<JoinAlumni />} />
        <Route path="/notablealumni" element={<NotableAlumni/>} />
        <Route path="/currentstudent" element={<CurrentStudent />} />
        <Route path="/home" element={<Landing />} />      
        <Route path="/*" element={<Landing />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
