import React, { useEffect, useState } from "react";

export const News = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch("https://sih-backend.azurewebsites.net/api/notice/all")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
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
              Alumni Affairs News
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
            <h3 className="text-center"><b>Recent News / Notices</b></h3>
            {news &&
              news.map((item) => (
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
                  <div>
                    <i>Date: {item.date}</i>
                    <p>
                      <b>{item.title}</b>
                    </p>
                    <span>{item.body}</span>
                    {item.ipfs_url &&
                    (
                      <p>
                        <a href={item.ipfs_url} target="_blank" rel="noreferrer">
                          Link
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
