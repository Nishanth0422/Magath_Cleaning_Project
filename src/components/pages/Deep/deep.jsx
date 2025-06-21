import React from "react";
import "./deep.css";

import baseboard from "../../../assets/images/Deep_images/baseboard.avif";
import grout from "../../../assets/images/Deep_images/grout.avif";
import appliances from "../../../assets/images/Deep_images/appliances.avif";
import fanvent from "../../../assets/images/Deep_images/fanvent.avif";

function Deep() {
  return (
    <div className="deep-container">
      <h1>Deep Cleaning Services</h1>
      <p>
        Deep cleaning is a comprehensive and detailed approach to cleaning that
        targets areas often overlooked during regular maintenance. It includes
        thorough scrubbing, disinfecting, and sanitizing of hard-to-reach and
        frequently ignored spaces such as behind appliances, under furniture,
        inside cabinets, baseboards, grout lines, ceiling fans, vents, and light
        fixtures. Ideal for seasonal refreshes, move-in/move-out situations, or
        post-renovation cleanup, deep cleaning removes built-up dirt, allergens,
        grease, and bacteria to restore a hygienic and fresh environment. Our
        professional deep cleaning service covers kitchens, bathrooms, living
        areas, and bedrooms with attention to detail, using safe and effective
        products. Whether it’s degreasing the stove and exhaust fan, polishing
        window tracks, or sanitizing high-touch surfaces, we ensure your entire
        space looks and feels truly revitalized.
      </p>

      <div className="service-grid">
        <div className="service-card">
          <img src={baseboard} alt="Baseboard Cleaning" />
          <h4>Baseboard & Edge Cleaning</h4>
          <p>
            Thorough scrubbing of baseboards, corners, and skirting to remove
            dust, stains, and buildup.
          </p>
        </div>

        <div className="service-card">
          <img src={grout} alt="Grout Line Cleaning" />
          <h4>Grout Line Scrubbing</h4>
          <p>
            Restoring tile grout by removing black spots, mold, and deep-seated
            dirt in bathroom and kitchen areas.
          </p>
        </div>

        <div className="service-card">
          <img src={appliances} alt="Appliance Deep Clean" />
          <h4>Appliance Deep Clean</h4>
          <p>
            Interior and exterior cleaning of ovens, refrigerators, microwaves,
            and chimneys using safe degreasers.
          </p>
        </div>

        <div className="service-card">
          <img src={fanvent} alt="Fan and Vent Cleaning" />
          <h4>Fan & Vent Cleaning</h4>
          <p>
            Removal of dust and grease from ceiling fans, exhaust vents, and
            filters to improve air quality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Deep;
