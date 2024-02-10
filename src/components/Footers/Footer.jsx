import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
    <footer className="m-0">
      <div className="details">
        <div className="container">
          <div className="row py-5 text-center">
            <div className="col-md-4">
              <h3 className="text-uppercase text-white">location</h3>
              <p className="text-capitalize text-white">
                2215 John Daniel Drive
              </p>
              <p className="text-capitalize text-white">Clark, MO 65243</p>
            </div>

            <div className="col-md-4 ">
              <h3 className="text-uppercase text-white">around the web</h3>
              <div className="icons text-center">
                <i className="fab fa-facebook-f mx-1 text-white"></i>
                <i className="fab fa-twitter mx-1 text-white"></i>
                <i className="fab fa-linkedin-in mx-1 text-white"></i>
                <i className="fab fa-dribbble mx-1 text-white"></i>
              </div>
            </div>

            <div className="col-md-4 ">
              <h3 className="text-uppercase text-white">about freelancer</h3>
              <p className="text-capitalize text-white text-center">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy text-center ">
        <p className="text-white py-4 text-capitalize">
          copyright &#169; Your website 2021{" "}
        </p>
      </div>
      </footer>
    </>
  );
}
