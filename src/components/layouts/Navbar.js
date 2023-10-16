import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({isMobile, setIsMobile}) {

const [mobileNavbarOpen,setMobileNavbarOpen] = useState(false);

useEffect(() => {
    if(!isMobile) setMobileNavbarOpen(false);
},[isMobile]);

const handleToggle= (event) => {
  setMobileNavbarOpen(!mobileNavbarOpen);
};

const handleDropdownClick = (e) => {
  const navbar = document.querySelector('#navbar');
  if (navbar.classList.contains('navbar-mobile')) {
    e.preventDefault();
    if(e.target.nextElementSibling && e.target.nextElementSibling.classList){
      e.target.nextElementSibling.classList.toggle('dropdown-active');
    }
  }
}



  return (
    <div>
      <header id="header" class="fixed-top">
        <div class="d-flex align-items-center justify-content-center">
          <nav id="navbar" class={`${isMobile ? (mobileNavbarOpen ? "navbar-mobile":"navbar") : "navbar"}`}>
            <ul class="navbar-ul">
              <li>
                <a
                  href="http://dtu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleToggle}
                >
                  <img
                    src="./assets/img/apple-icon.png"
                    alt="dtu-logo"
                    style={{ maxHeight: "60px" }}
                  />
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/#hero" onClick={handleToggle}>
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link " href="/#director-msg" onClick={handleToggle}>
                  Message of Dean
                </a>
              </li>

              <li>
                <a class="nav-link scrollto" href="/#visionmission" onClick={handleToggle}>
                  Vision & Mission
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/notablealumni" onClick={handleToggle}>
                  Notable Alumni
                </a>
              </li>
              <li class="dropdown" onClick={handleDropdownClick}>
                <a href="#">
                  <span>Donations</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li class="dropdown"></li>
                  <li>
                    <a href="/donations" onClick={handleToggle}>Our Donors</a>
                  </li>
                  <li>
                    <a href="/whydonate" onClick={handleToggle}>Why Donate?</a>
                  </li>
                  <li>
                    <a href="/howtodonate" onClick={handleToggle}>How to Donate?</a>
                  </li>

                  <li class="dropdown" >
                    <a href="#">
                      <span>Donation Oppurtunities</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li class="dropdown"></li>
                      <li>
                        <Link to="/naming-oppurtunities" onClick={handleToggle}>Naming Oppurtunities</Link>
                      </li>
                      <li>
                        <Link to="/medal-scholarship" onClick={handleToggle}>Medal & Scholarship</Link>
                      </li>
                      <li>
                        <Link to="/contribution-fund" onClick={handleToggle}>Contribution Fund</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="/news" onClick={handleToggle}>
                  News
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/events" onClick={handleToggle}>
                  Events
                </a>
              </li>

              <li class="dropdown" onClick={handleDropdownClick}>
                <a href="#">
                  <span>Join Us</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li class="dropdown"></li>
                  <li>
                    <Link to="/joinalumni" onClick={handleToggle}>Alumni</Link>
                  </li>
                  <li>
                    <Link to="/currentstudent" onClick={handleToggle}>Current Student</Link>
                  </li>
                </ul>
              </li>

              <li class="nav-link">
                <a href="/gallery" onClick={handleToggle}>
                  <span>Gallery</span>
                </a>
              </li>

              <li>
                <a class="nav-link scrollto o" href="/#contact" onClick={handleToggle}>
                  Contact Us
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/#downloads" onClick={handleToggle}>
                  Downloads
                </a>
              </li>
            </ul>
            <i class={`${isMobile ? (mobileNavbarOpen ? "bi bi-x mobile-nav-toggle" :"bi bi-list mobile-nav-toggle" ) : "bi bi-x mobile-nav-toggle" }`} onClick={handleToggle} ></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
