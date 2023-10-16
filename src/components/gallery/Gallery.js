import React from "react";

const Gallery = () => {
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div class="row justify-content-center">
            <h1 class="d-flex justify-content-center text-center">Gallery</h1>
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

      <section>
        <div className="container">
          <div
            className="row justify-content-md-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="col-lg-6 col-md-6 col-sm-12">
              <a href="/gallery-events">
                <div class="card" style={{ margin: "20px" }}>
                  <img
                    class="card-img-top"
                    src="https://via.placeholder.com/640x480"
                    alt="events"
                  />
                  <div class="card-body text-center">
                    <h3 class="card-text">
                      <b>EVENTS</b>
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <a href="/gallery-memories">
                <div class="card" style={{ margin: "20px" }}>
                  <img
                    class="card-img-top"
                    src="https://via.placeholder.com/640x480"
                    alt="memories"
                  />
                  <div class="card-body text-center">
                    <h3 class="card-text">
                      <b>MEMORIES</b>
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
