import React from "react";
import "./Footer.css";
import Logo from "../../../../images/Logo.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-container text-center">
                <img src={Logo} alt="" width="100" height="100" />
                <h4>Tour Booking</h4>

                <p className="mt-4 ">
                  <small className="text-black">
                    These statements have not been evaluated by
                    Tour Booking .
                  </small>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="right-footer-container">
                <h4>Sign up for the newsletter</h4>
                <input
                  className="footer-input text-center"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="btn btn-primary">Subscribe</button>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="text-black">
                    <h5>+88 01861-264567</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="text-black">
                    <p>230 Ghulshan,Dhaka Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="p-2">
            <small className="text-black">
              &copy;Tour Booking . All rights
              reserved, Nazmus Sakib-2023
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
