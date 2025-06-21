import React from "react";
import "./commercial.css";

import office from "../../../assets/images/Commercial_images/office_cleaning.avif";
import retail from "../../../assets/images/Commercial_images/retail_store.avif";
import hospital from "../../../assets/images/Commercial_images/hospital.avif";
import school from "../../../assets/images/Commercial_images/school.avif";

function Commercial() {
  return (
    <div className="commercial-container">
      <h1>Commercial Cleaning Services</h1>
      <p>
        Commercial cleaning plays a crucial role in maintaining clean, safe, and
        productive environments for businesses across various industries.
        Whether it's a corporate office, a bustling retail store, a healthcare
        facility, or an educational institution, each space requires specialized
        cleaning to meet industry standards and health regulations. Our
        experienced team provides tailored cleaning solutions using
        industry-grade equipment and eco-friendly products to ensure every area
        — from workstations and restrooms to lobbies and high-touch surfaces —
        remains spotless, sanitized, and welcoming. With flexible scheduling and
        attention to detail, we help you create a professional image and a
        healthier environment for both employees and visitors.
      </p>

      <div className="service-grid">
        <div className="service-card">
          <img src={office} alt="Office Cleaning" />
          <h4>Office Cleaning</h4>
          <p>
            Desk dusting, floor mopping, bin cleaning, and sanitizing high-touch
            areas to maintain a productive and clean workspace.
          </p>
        </div>

        <div className="service-card">
          <img src={retail} alt="Retail Store Cleaning" />
          <h4>Retail Store Cleaning</h4>
          <p>
            Cleaning display shelves, entrance glass, fitting rooms, and floors
            to keep your store spotless and inviting for customers.
          </p>
        </div>

        <div className="service-card">
          <img src={hospital} alt="Hospital Cleaning" />
          <h4>Hospital Cleaning</h4>
          <p>
            Disinfection of medical areas, waiting rooms, restrooms, and
            equipment to meet healthcare hygiene standards.
          </p>
        </div>

        <div className="service-card">
          <img src={school} alt="School Cleaning" />
          <h4>School Cleaning</h4>
          <p>
            Cleaning of classrooms, staff rooms, corridors, and toilets to
            ensure a safe and clean learning environment for students.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Commercial;
