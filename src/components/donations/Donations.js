import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router";

const Donations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div class="row justify-content-center">
            <h1 class="d-flex justify-content-center text-center">Donations</h1>
            <br />
            <br />
            <br />
            <br />
            <h4 class="d-flex justify-content-center text-center">
              DELHI TECHNOLOGICAL UNIVERSITY
            </h4>
            <h6 class="d-flex justify-content-center text-center">
              Shahbad, Daulatpur, Main Bawana Road
            </h6>
            <h6 class="d-flex justify-content-center text-center">
              Delhi - 110042
            </h6>
          </div>
        </div>
      </section>
      

      <section >
        <div class="" data-aos="fade-up">
          <div class="section-title">
            <h2>Our Donors</h2>
          </div>
          <Marquee className="our-donors" speed={50} pauseOnHover={true} autoFill={true} style={{}}>
            <div class="card" style={{ width: "15rem", margin:"20px" }}>
              <img
                class="card-img-top"
                src="https://via.placeholder.com/250"
                alt="donors"
              />
              <div class="card-body text-center">
                <p class="card-text">
                  <b>Alumni Name</b> <br /> Donated: &#x20B9;5'00'000
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", margin:"20px" }}>
              <img
                class="card-img-top"
                src="https://via.placeholder.com/250"
                alt="donors"
              />
              <div class="card-body text-center">
                <p class="card-text">
                  <b>Alumni Name</b> <br /> Donated: &#x20B9;5'00'000
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", margin:"20px" }}>
              <img
                class="card-img-top"
                src="https://via.placeholder.com/250"
                alt="donors"
              />
              <div class="card-body text-center">
                <p class="card-text">
                  <b>Alumni Name</b> <br /> Donated: &#x20B9;5'00'000
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", margin:"20px" }}>
              <img
                class="card-img-top"
                src="https://via.placeholder.com/250"
                alt="donors"
              />
              <div class="card-body text-center">
                <p class="card-text">
                  <b>Alumni Name</b> <br /> Donated: &#x20B9;5'00'000
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", margin:"20px" }}>
              <img
                class="card-img-top"
                src="https://via.placeholder.com/250"
                alt="donors"
              />
              <div class="card-body text-center">
                <p class="card-text">
                  <b>Alumni Name</b> <br /> Donated: &#x20B9;5'00'000
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", margin:"20px" }}>
              <img
                class="card-img-top"
                src="https://via.placeholder.com/250"
                alt="donors"
              />
              <div class="card-body text-center">
                <p class="card-text">
                  <b>Alumni Name</b> <br /> Donated: &#x20B9;5'00'000
                </p>
              </div>
            </div>
          </Marquee>
        </div>
      </section>

      <section className="donation-banner">
        <div
          className="row justify-content-md-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className="col col-lg-3 col-md-4 col-sm-12"
            style={{ margin: "20px" }}
          >
            <a href="http://www.dtu.ac.in/Web/quick_links/donors.php" target="_blank" rel="noreferrer">
            <button
              type="button"
              className="btn btn-outline-light"
              style={{ width: "100%", padding: "20px", fontSize: "1.5rem" }}
            >
              
              Wall of Donors
            </button>
            </a>
          </div>
          <div
            className="col col-lg-3 col-md-4 col-sm-12"
            style={{ margin: "20px" }}
          >
            <button
              type="button"
              className="btn btn-outline-light"
              style={{ width: "100%", padding: "20px", fontSize: "1.5rem" }}
              onClick={()=>navigate("/whydonate")}
            >
              Why Donate?
            </button>
          </div>
          <div
            className="col col-lg-3 col-md-4 col-sm-12"
            style={{ margin: "20px" }}
          >
            <button
              type="button"
              className="btn btn-outline-light"
              style={{ width: "100%", padding: "20px", fontSize: "1.5rem" }}
              onClick={()=>navigate("/howtodonate")}
            >
              How to Donate?
            </button>
          </div>
        </div>
      </section>
      <br/>
      
      

      <section className="donation-opp-banner">
      <h2 className="section-title"><b>Donating Oppurtunities</b></h2>
        <div
          className="row justify-content-md-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className="col col-lg-3 col-md-4 col-sm-12"
            style={{ margin: "20px" }}
          >
            
            <button
              type="button"
              className="btn btn-outline-primary"
              style={{ width: "100%", padding: "20px", fontSize: "1.5rem" }}
              onClick={()=>navigate("/naming-oppurtunities")}
            >
              
             Naming Oppurtunities
            </button>
            
          </div>
          <div
            className="col col-lg-3 col-md-4 col-sm-12"
            style={{ margin: "20px" }}
          >
            <button
              type="button"
              className="btn btn-outline-primary"
              style={{ width: "100%", padding: "20px", fontSize: "1.5rem" }}
              onClick={()=>navigate("/medal-scholarship")}
            >
              Medals & Scholarships
            </button>
          </div>
          <div
            className="col col-lg-3 col-md-4 col-sm-12"
            style={{ margin: "20px" }}
          >
            <button
              type="button"
              className="btn btn-outline-primary"
              style={{ width: "100%", padding: "20px", fontSize: "1.5rem" }}
              onClick={()=>navigate("/contribution-fund")}
            >
              Contribution Fund
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Donations;
