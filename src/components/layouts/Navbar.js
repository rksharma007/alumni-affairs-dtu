import React from "react";

export default function Navbar() {
  return (
    <div>
      <header id="header" class="fixed-top">
        <div class="d-flex align-items-center justify-content-center">
          <nav id="navbar" class="navbar">
            <ul class="navbar-ul">
              <li>
                <a
                  href="http://dtu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/apple-icon.png"
                    alt="dtu-logo"
                    style={{ maxHeight: "60px" }}
                  />
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link " href="/#director-msg">
                  Message of Dean
                </a>
              </li>

              <li>
                <a class="nav-link scrollto" href="/#visionmission">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/notablealumni">
                  Notable Alumni
                </a>
              </li>
              <li class="dropdown">
                <a href="/donations">
                  <span>Donations</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li class="dropdown"></li>
                  <li>
                    <a href="/donations">Our Donors</a>
                  </li>
                  <li>
                    <a href="/whydonate">Why Donate?</a>
                  </li>
                  <li>
                    <a href="/howtodonate">How to Donate?</a>
                  </li>

                  <li class="dropdown">
                    <a href="#">
                      <span>Donation Oppurtunities</span> <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li class="dropdown"></li>
                      <li>
                        <a href="/naming-oppurtunities">Naming Oppurtunities</a>
                      </li>
                      <li>
                        <a href="/medal-scholarship">Medal & Scholarship</a>
                      </li>
                      <li>
                        <a href="/contribution-fund">Contribution Fund</a>
                      </li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="/news">
                  News
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/events">
                  Events
                </a>
              </li>

              <li class="dropdown">
                <a href="#">
                  <span>Join Us</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li class="dropdown"></li>
                  <li>
                    <a href="/joinalumni">Alumni</a>
                  </li>
                  <li>
                    <a href="/currentstudent">Current Student</a>
                  </li>
                </ul>
              </li>

              

              <li class="nav-link">
                <a href="/gallery">
                  <span>Gallery</span>
                </a>
              </li>

              <li>
                <a class="nav-link scrollto o" href="/#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/#downloads">
                  Downloads
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
