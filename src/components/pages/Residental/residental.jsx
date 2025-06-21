import React from "react";
import "./residental.css";

import livingroom from "../../../assets/images/Residental_images/living_room.avif";
import kitchenroom from "../../../assets/images/Residental_images/kitchen_room.avif";
import bathroom from "../../../assets/images/Residental_images/bathroom.avif";
import bedroom from "../../../assets/images/Residental_images/bed_room.avif";

function Residental() {
  return (
    <div className="residental-container">
      <h1>Residential Cleaning Services</h1>
      <p>
        Residential cleaning involves maintaining the cleanliness and hygiene of
        living spaces such as homes and apartments. It includes services like
        dusting, vacuuming, mopping floors, kitchen sanitization, bathroom
        disinfection, bedroom organization, and overall surface cleaning. Our
        residential cleaning ensures every corner of your home — from the living
        room to the bathroom — is spotless, fresh, and welcoming. Whether it's a
        one-time deep clean or regular upkeep, residential cleaning helps create
        a healthy environment for you and your family.
      </p>

      <div className="service-grid">
        <div className="service-card">
          <img src={livingroom} alt="Living Room" />
          <h4>Living Room Cleaning</h4>
          <p>
            Dusting, vacuuming, and furniture wipe-down for a fresh and tidy
            space.
          </p>
        </div>

        <div className="service-card">
          <img src={kitchenroom} alt="Kitchen" />
          <h4>Kitchen Cleaning</h4>
          <p>Deep cleaning of sink, counters, tiles, stove and shelves.</p>
        </div>

        <div className="service-card">
          <img src={bathroom} alt="Bathroom" />
          <h4>Bathroom Cleaning</h4>
          <p>Disinfection of toilets, sinks, taps, mirrors, and floors.</p>
        </div>

        <div className="service-card">
          <img src={bedroom} alt="Bedroom" />
          <h4>Bedroom Cleaning</h4>
          <p>Bed making, dusting, floor cleaning, and wardrobe wipe-downs.</p>
        </div>
      </div>
    </div>
  );
}

export default Residental;
