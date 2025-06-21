import React from "react";
import "./in_out.css";

import garden from "../../../assets/images/In_Out_images/garden.jpg";
import driveway from "../../../assets/images/In_Out_images/driveway.avif";
import parking from "../../../assets/images/In_Out_images/parking.avif";
import trash from "../../../assets/images/In_Out_images/trash.avif";

function MoveInOut() {
  return (
    <div className="moveinout-container">
      <h1>Move-In / Move-Out Cleaning Services</h1>
      <p>
        Our move-in/move-out cleaning services are designed to provide a
        seamless and stress-free transition between homes or tenants. Whether
        you're settling into a new space or vacating one, we ensure every room,
        corner, and surface is thoroughly cleaned, sanitized, and prepared for
        the next phase. This detailed service goes beyond basic dusting and
        mopping — we deep clean bathrooms, kitchens, bedrooms, living areas, and
        sanitize high-touch points like door handles, switches, and appliance
        surfaces. In kitchens, we clean inside cabinets, ovens, exhaust fans,
        and refrigerators to remove any hidden grease or debris. Bathrooms are
        scrubbed to perfection, ensuring no soap scum, stains, or germs remain.
        In addition to the interiors, we extend our services outdoors. We clear
        out garden debris, trim overgrown hedges, pressure-wash driveways, and
        tidy up balconies, walkways, and parking areas — creating a complete
        clean-up experience from inside out. Perfect for landlords, tenants,
        homeowners, or property managers, our move-in/move-out cleaning
        guarantees a space that looks, feels, and smells like new. With flexible
        scheduling, experienced staff, and eco-friendly products, we help you
        save time, reduce stress, and move with peace of mind.
      </p>

      <div className="service-grid">
        <div className="service-card">
          <img src={garden} alt="Garden Cleaning" />
          <h4>Garden / Yard Cleaning</h4>
          <p>
            Removal of dried leaves, trimming overgrowth, and cleaning walkways
            to restore garden freshness.
          </p>
        </div>

        <div className="service-card">
          <img src={driveway} alt="Driveway Cleaning" />
          <h4>Road & Driveway Cleaning</h4>
          <p>
            Pressure washing and sweeping of driveways, removing mud, dust, and
            oil stains.
          </p>
        </div>

        <div className="service-card">
          <img src={parking} alt="Parking Area Cleaning" />
          <h4>Parking Area Cleaning</h4>
          <p>
            Thorough floor scrubbing and dust removal to maintain a neat, tidy
            parking space.
          </p>
        </div>

        <div className="service-card">
          <img src={trash} alt="Trash Removal" />
          <h4>Trash & Debris Removal</h4>
          <p>
            Removal of unwanted junk, construction debris, and garbage to leave
            the property clean and clutter-free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoveInOut;
