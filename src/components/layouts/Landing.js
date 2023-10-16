import React from "react";
import CountUp from "react-countup";

const Landing = () => {
  return (
    <div className="landing">
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div class="row justify-content-center">
            <h1 class="d-flex justify-content-center text-center">
              Alumni Affairs
            </h1>
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

      <main id="main">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="section-title row justify-content-end">
              <div>
                <h2>About Alumni Affairs</h2>
              </div>
              <div>
                <p class="text-justify">
                  To monitor standards of the higher educational institutions
                  the UGC has established the National Assessment and
                  Accreditation Council (NAAC) as an autonomous body, under
                  section 12(ccc) of its Act in September 1994. NAAC has been
                  instilling a momentum of quality consciousness amongst Higher
                  Educational Institutions, aiming for continuous improvement.
                  The Delhi Technological University, Delhi has emerged as one
                  the premier technological institutions of our great country
                  with state-of-the-art facilities, world class education,
                  training, research and consultancy in the arena of engineering
                  and technology, applied science and management and has become
                  fully networked with industries on one hand and the academic
                  and scientific community in the world on the other. As an
                  internal mechanism for sustenance, assurance and enhancement
                  of the quality culture of education, Delhi Technological
                  University (DTU) has established the Internal Quality
                  Assurance Cell (IQAC) for maintaining the momentum of quality
                  consciousness. DTU-IQAC, in fact, is conceived as a mechanism
                  to build and ensure a quality culture at the University level
                  to meet the diverse needs of the stakeholders.
                  <br />
                  <br />
                  The DTU-IQAC is meant for planning, guiding and monitoring
                  Quality Assurance and Quality Enhancement activities of the
                  University. The IQAC channelizes and systematizes the efforts
                  and measures of the University towards academic excellence and
                  is a facilitative and participative organ of the University.
                  The DTU-IQAC is a driving force for ushering in quality by
                  working out intervention strategies to remove deficiencies and
                  enhance qualities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" class="counts">
          <div class="container">
            <div class="row justify-content-end">
              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <CountUp start={0} end={12} delay={1} duration={2}/>
                  <p>Core Team Members</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <CountUp start={0} end={14} delay={1} duration={2}/>
                  <p>Constitutional Members</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <CountUp start={0} end={5} delay={1} duration={2}/>
                  <p>Co-Ordinators</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <CountUp start={0} end={9} delay={1} duration={2}/>
                  <p>Dy. Co-Ordinators</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="director-msg" class="director-msg">
          <div class="container" data-aos="fade-up">
            <div class="section-title mb-3">
              <div>
                <h2 style={{color:'white'}}>Message of Dean</h2>
              </div>

              <div class="row">
                <div
                  class="col-lg-4 d-flex justify-content-center"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div class="column">
                    <div class="row d-flex justify-content-center ">
                      <img
                        src="assets/img/dean-img.png"
                        class="img-fluid"
                        alt="director"
                      />
                    </div>
                    <div class="row d-flex align-items-stretch ">
                      <a
                        href="https://dtu.irins.org/profile/66991"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          class="btn"
                          style={{
                            backgroundColor: "#124265",
                            color: "white",
                            width: "100%",
                            marginTop: "10px",
                          }}
                        >
                          <div>(Prof. Rajesh Rohilla)</div>
                          <div>Dean (Alumni Affairs)</div>
                          <div>Aug 2022 - Present</div>
                          <div>Delhi Technological University</div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-8 pt-3 pt-lg-0 content border border-dark bg-light"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <p>
                    <br />
                    The Delhi Technological University, Delhi, is one of the
                    premier technological institutions in India with top-notch
                    education, cutting-edge facilities, training, research and
                    consultancy in engineering & technology, applied science and
                    management. On the one hand, it has now become fully
                    networked with industries and, on the other, the academic
                    and scientific community worldwide.
                    <br />
                    <br />
                    DTU-IQAC has formulated a procedure to build and ensure a
                    quality culture at the university level to meet the varied
                    requirements of the stakeholders. The IQAC directs and
                    organises the efforts and actions of the university toward
                    academic excellence and is a promotive and participative
                    unit of the university.
                    <br />
                    <br />
                    The IQAC works parallelly with academic and administrative
                    departments across the university. The activities under IQAC
                    include preparation and revision of the Quality Manual, SOPs
                    and Annual reports, Attendance automation, Examination and
                    result system, and Training leading to quality improvement.
                    Apart from these, IQAC engages in ISO Certification, Audits,
                    NBA & NAAC accreditation, Standardisation of question
                    papers, Stakeholder feedback analysis, and Improvement
                    guidelines. The IQAC ensures the development of a quality
                    system for a conscious, consistent and catalytic strategy to
                    boost the academic and administrative performance of the
                    university.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="past-director" class="past-director">
          <div class="past-director text-center">
            <br />
            <br />
            <h2 class="light">DISTINGUISHED ALUMNI</h2>
            <div class="row">
              <div class="col">
                <img src="./assets/img/director1.jpg" alt="director" />
                <p class="border border-dark bg-light">
                  Vinod Dham
                  <br />
                  Professor, EE, DTU
                  <br />
                </p>
              </div>
              <div class="col">
                <img src="./assets/img/director1.jpg" alt="director" />
                <p class="border border-dark bg-light">
                  Durga D Aggarwal
                  <br />
                  Professor, EE, DTU
                  <br />
                </p>
              </div>
              <div class="col">
                <img src="./assets/img/director1.jpg" alt="director" />
                <p class="border border-dark bg-light">
                  Raj Soin
                  <br />
                  Professor, EE, DTU
                  <br />
                </p>
              </div>
              <div class="col">
                <img src="./assets/img/director2.jpg" alt="director" />
                <p class="border border-dark bg-light">
                  Vijay Shekhar Sharma
                  <br />
                  Professor, EE, DTU
                  <br />
                </p>
              </div>
              <div class="col">
                <img src="./assets/img/director3.jpg" alt="director" />
                <p class="border border-dark bg-light">
                  Yogi Goswami
                  <br />
                  Professor, CE, DTU
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="visionmission" class="visionmission">
          <div class="row">
            <div class="col" data-aos="fade-up">
              <div class="section-title mb-3">
                <div>
                  <h2>Vision & Mission</h2>
                </div>
                <div>
                  <img
                    alt="vision mission"
                    src="./assets/img/vision-mission.svg"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
            </div>
            <div class="col" data-aos="fade-up">
              <div class="section-title mb-3">
                <div>
                  <h2>Core Values</h2>
                </div>
                <div>
                  <img
                    alt="core values"
                    src="./assets/img/corevalues.jpg"
                    data-aos="zoom-in"
                    style={{ padding: "50px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="banner" id="banner">
          <div style={{ color: "white" }} class="text-center">
            <div class="row">
              <div class="col">
                <h1 class="vertical-center">Alumni Affairs Activities</h1>
              </div>
              <div class="col">
                <img
                  class="activity"
                  src="./assets/img/activities.svg"
                  alt="activity"
                />
              </div>
            </div>
          </div>
        </div>

        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
             
            </div>

            <div>
              <iframe
                style={{ border: "0", width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.8853197472552!2d77.11644857143698!3d28.750209858939076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0127740024fd%3A0x38f05b6a9238d09f!2sDepartment%20of%20Training%20and%20Placement%2C%20Delhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1697380634407!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
              ></iframe>
            </div>

            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row gy-2 gx-md-3">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div class="form-group col-12">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-group col-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div class="my-3 col-12">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div class="text-center col-12">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="downloads" class="downloads">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <div>
                <h2>Downloads</h2>
              </div>

              <div class="row justify-content-center">
                <div class="col-md-2 col-lg-3 download-item">
                  Alumni Feedback Form
                  <div class="small">
                    <a
                      href="#"
                      target="_blank"
                    >
                      <icon class="bi bi-download">&nbsp;PDF</icon>
                    </a>
                    &emsp;
                    <a
                      href="https://forms.gle/#############"
                      target="_blank"
                    >
                      <icon class="bi bi-list-ul"></icon>&nbsp;Google Form
                    </a>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
