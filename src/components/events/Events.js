import React, { useEffect, useState } from "react";

export const Events = () => {
  const [news, setEvents] = useState();

  useEffect(() => {
    fetch("https://sih-backend.azurewebsites.net/api/notice/all")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  news && news.sort((a, b) => b.date - a.date);

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
              Alumni Affairs Events
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
          <div
            className="row justify-content-md-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <h3 className="text-center">
              <b>Recent Events</b>
            </h3>
            {news &&
              news.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    class="card"
                    style={{
                      margin: "20px",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    <img
                      class="card-img-top"
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/480x360"
                      }
                      alt="events"
                      minWidth={640}
                      minHeight={480}
                    />
                    <div class="card-body">
                      <p class="card-text">
                        <b>{item.name}</b>
                      </p>
                      <span>{item.description}</span>
                      <br />
                      <span>
                        <i>Date: {item.date}</i>
                      </span>
                      <br />
                      <span>
                        <i>Time:{item.time}</i>
                      </span>
                      <br />
                      <span>
                        <i>Venue: {item.venue}</i>
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
