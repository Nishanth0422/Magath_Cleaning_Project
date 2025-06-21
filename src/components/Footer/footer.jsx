import React from "react";
import "./footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/images/logo1.png"; // adjust path as needed

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          {/* LEFT: Logo & Brand */}
          <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img src={logo} alt="Logo" className="footer-logo mb-2" />
            {/* <h5 className="footer-brand">Magath Cleaning Solutions</h5> */}
          </div>

          {/* RIGHT: Contact Info */}
          <div className="col-md-6">
            <h5 className="footer-title mb-3">Get in Touch</h5>
            <ul className="footer-contact list-unstyled">
              <li>
                <p className="footer-address">
                  <FaMapMarkerAlt className="footer-icon pr-2" />
                  18, Indira Nagar, Gokulam Colony,
                  <span className="line-break">
                    {" "}
                    P.N. Pudur, Coimbatore - 641 041.
                  </span>
                </p>
              </li>
              <li>
                <FaPhoneAlt className="footer-icon" />
                <a href="tel:+916381414174">Mobile Number : +91 63814 14174</a>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:kousiranjith16@gmail.com">
                  E-mail : kousiranjith16@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center pt-4">
          <small>
            © {new Date().getFullYear()} AK Technologies. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
