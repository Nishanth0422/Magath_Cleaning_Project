import React from "react";
import founderImg from "../../assets/images/Customer_images/customer2.jpg"; // replace with your actual founder image
import "./about.css";

function About() {
  return (
    <div className="about-section container mt-5 mb-3">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h5 className="about-subtitle fw-bold">ABOUT US</h5>
          <h2 className="about-title fw-bold mb-4">
            Bringing Clean, Comfort, and Care Together
          </h2>
          <p className="about-desc text-muted">
            Magath Cleaning Services has over 10 years of solid experience in
            the cleaning industry. Whether it's your home, apartment, office,
            school, hospital, or even a construction site — we’re equipped to
            handle all types of cleaning needs with utmost professionalism.
          </p>

          <p className="about-desc text-muted">
            We proudly serve the entire Coimbatore region and are expanding
            across Tamil Nadu. Our expert team is trained to deliver top-quality
            cleaning services, including deep cleaning, move-in/move-out
            cleaning, sofa and carpet cleaning, hospital-grade disinfection, and
            commercial floor scrubbing — all tailored to your specific
            requirements.
          </p>

          <p className="about-desc text-muted">
            Our mission is simple: to provide safe, hygienic, and welcoming
            spaces for homes and businesses. We use modern equipment,
            eco-friendly products, and skilled manpower to ensure each space we
            clean is left spotless and refreshed.
          </p>

          <p className="about-desc text-muted">
            No matter what name or type of cleaning service you need, at Magath
            Cleaning, we make it possible — professionally, efficiently, and
            with care.
          </p>
        </div>

        {/* Founder Section */}
        <div className="col-md-6 text-center">
          <img
            src={founderImg}
            alt="Founder"
            className="img-fluid rounded-circle shadow-sm mb-3 founder-img"
            style={{ width: "450px", height: "450px", objectFit: "cover" }}
          />
          <h5 className="fw-bold mt-2 fs-4">P. RANJITHKUMAR</h5>
          <p className="text-muted">MA (Public Administration) - Founder</p>
        </div>
      </div>
    </div>
  );
}

export default About;
