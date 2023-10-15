import React from "react";

export default function HowToDonate() {
  return (
    <div>
      <section>
        <div class="container  " data-aos="fade-up" >
          <div class="section-title">
            <br />
            <h2>How To Donate?</h2>
            <h5>DONATE THROUGH:</h5>
          </div>
          <div
            className="row how-to-donate d-flex justify-content-md-center"
            style={{
              textAlign: "center",
            }}
          >
            <div className="col " style={{ margin: "20px" }}>
              <div
                class="card border-primary"
                style={{  padding: "20px" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <b>BY BANK TRANSFER</b>
                  </h5>
                  <p class="card-text">
                    <br />
                    (IMPS/NEFT/RTGS)
                    <br />
                    <br />
                    Account Number: 36423599642
                    <br />
                    IFSC Code: SBlN0010446
                    <br />
                    Branch Name: Delhi College of Engineering Branch
                  </p>
                </div>
              </div>
            </div>

            <div className="col " style={{ margin: "20px" }}>
              <div
                class="card border-primary"
                style={{  padding: "20px" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <b>BY CHEQUE</b>
                  </h5>
                  <p class="card-text">
                    <br />
                    Cheque Should be made out in favour of, "Registrar, Delhi
                    Technological University"
                    <br />
                    <br />
                    Cheque should be mailed to Dean Alumni Affairs Office, Civil
                    Department, DTU, Bawana Road, Shabad Dairy, Rohini, New
                    Delhi, 110042, New Delhi
                  </p>
                </div>
              </div>
            </div>

            <div className="col " style={{ margin: "20px" }}>
              <div
                class="card border-primary"
                style={{  padding: "20px" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <b>RECURRING DONATION</b>
                  </h5>
                  <p class="card-text">
                    <br />
                    If you considering donating in installments of monthly,
                    Quarterly basis, most welcome.
                    <br />
                    <br />
                    To register yourself please reach out us on
                    deanalumniaffairs@dtu.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
