import React, { useState } from "react";
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { useEffect } from "react";
import ContributionFund from "./components/donations/ContributionFund";
import Donations from "./components/donations/Donations";
import HowToDonate from "./components/donations/HowToDonate";
import MedalScholarship from "./components/donations/MedalScholarship";
import NamingOpp from "./components/donations/NamingOpp";
import WhyDonate from "./components/donations/WhyDonate";
import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";
import GalleryEvents from "./components/gallery/GalleryEvents";
import GalleryMemories from "./components/gallery/GalleryMemories";
import CurrentStudent from "./components/join/CurrentStudent";
import JoinAlumni from "./components/join/JoinAlumni";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import News from "./components/news/News";
import NotableAlumni from "./components/notable-alumni/NotableAlumni";


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 991;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
    <Router>
      <Navbar isMobile={isMobile} setIsMobile={setIsMobile}/>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/gallery-events" element={<GalleryEvents/>}/>
        <Route path="/gallery-memories" element={<GalleryMemories/>}/>
        <Route path="/gallery/*" element={<Gallery/>}/>
        <Route path="/donations" element={<Donations/>} />
        <Route path="/joinalumni" element={<JoinAlumni />} />
        <Route path="/notablealumni" element={<NotableAlumni/>} />
        <Route path="/currentstudent" element={<CurrentStudent />} />
        <Route path="/whydonate" element={<WhyDonate />} />
        <Route path="/howtodonate" element={<HowToDonate />} />
        <Route path="/naming-oppurtunities" element={<NamingOpp />} />
        <Route path="/medal-scholarship" element={<MedalScholarship />} />
        <Route path="/contribution-fund" element={<ContributionFund />} />
        <Route path="/home" element={<Landing />} />      
        <Route path="/*" element={<Landing />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
