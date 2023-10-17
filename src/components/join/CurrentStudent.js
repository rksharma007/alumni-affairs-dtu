import React, { useState } from "react";

export const CurrentStudent = () => {
  const [submitted, setsubmitted] = useState(false);
  const [submitError, setsubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name:"", email:"", phone:"", batch:"", course:"", passingYear:"", branch:"", roll:""
  });

  const { name, email, phone, batch, course, passingYear, branch, roll } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form successfully submitted.");
        setsubmitted(true);
        setFormData({
          name:"", email:"", phone:"", batch:"", course:"", passingYear:"", branch:"", roll:""
        });
      } else {
        console.error("Error submitting form.");
        setsubmitError(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div class="row justify-content-center">
            <h1 class="d-flex justify-content-center text-center">
              Join as Current Student
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
      <section>
        <div className="container">
          <h3 className="text-center">
            <b>Fill the form to join</b>
          </h3>
          <br />

          <div
            className="row justify-content-md-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              style={{
                marginTop: "20px",
                padding: "20px",
                border: "1px solid white",
                backgroundColor: "white",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                maxWidth: "80%",
              }}
            >
              <form
                onSubmit={(e) => handleSubmit(e)}
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
                      placeholder="Your Full Name"
                      required
                      value={name}
                      onChange={(e) => onChange(e)}
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
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="batch"
                      class="form-control"
                      id="batch"
                      placeholder="Your Batch"
                      required
                      value={batch}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="roll"
                      id="roll"
                      placeholder="Your Roll Number"
                      required
                      value={roll}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="branch"
                      class="form-control"
                      id="branch"
                      placeholder="Your Branch"
                      required
                      value={branch}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="course"
                      id="course"
                      placeholder="Your Course"
                      required
                      value={course}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="passingYear"
                      class="form-control"
                      id="passingYear"
                      placeholder="Your Passing Year"
                      required
                      value={passingYear}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone Number"
                      required
                      value={phone}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div class="my-3 col-12">
                    {submitError && <div class="error-message"></div>}
                    {submitted && (
                      <div class="sent-message text-center">
                        Form Submitted Successfully. Thank you!
                      </div>
                    )}
                  </div>
                  <div class="text-center col-12">
                    <button className="btn btn-outline-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentStudent;
