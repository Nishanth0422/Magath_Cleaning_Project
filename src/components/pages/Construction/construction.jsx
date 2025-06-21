import React from 'react';
import './construction.css';

import floor from '../../../assets/images/Construction_images/floor.avif';
import paint from '../../../assets/images/Construction_images/paint.jpeg';
import pressure from '../../../assets/images/Construction_images/pressure.jpg';
import facade from '../../../assets/images/Construction_images/facade.avif';

function Construction() {
  return (
    <div className="construction-container">
      <h1>Post-Construction Cleaning Services</h1>
      <p>
  Our post-construction cleaning service is an all-inclusive solution designed to transform a messy, dust-laden worksite into a pristine, ready-to-occupy space. After the building, remodeling, or renovation process, various residues—including paint splatters, adhesive residues, fine dust, and construction debris—can compromise the safety and appearance of your property. Our expert team meticulously cleans every surface by removing lingering contaminants from walls, floors, and ceilings; scrubbing baseboards, window sills, and door frames; and degreasing and polishing floors for a brilliant shine. We employ advanced equipment and eco-friendly cleaning agents to deeply sanitize air vents, light fixtures, and all hard-to-reach corners, ensuring that every nook and cranny is free of dust and debris. From high-pressure water jetting to remove stubborn stains on exterior walls to thorough interior cleanups that eliminate leftover materials and chemical residues, our service leaves your property not only immaculate but also safe for immediate occupancy. With a focus on detail and efficiency, our professional-grade finish prepares your space for its next chapter—providing a welcoming, healthy environment for residents or businesses right from day one.
</p>


      <div className="service-grid">
        <div className="service-card">
          <img src={floor} alt="Floor Polishing" />
          <h4>Floor & Tile Polishing</h4>
          <p>Deep cleaning and buffing of flooring surfaces, removing dust, stains, and grout residue.</p>
        </div>

        <div className="service-card">
          <img src={paint} alt="Paint Spot Removal" />
          <h4>Paint & Adhesive Removal</h4>
          <p>Scraping off dried paint, caulk, or sticker residue from floors, walls, tiles, and fixtures.</p>
        </div>

        <div className="service-card">
          <img src={pressure} alt="Pressure Washing" />
          <h4>Pressure Washing</h4>
          <p>High-pressure water cleaning of outdoor areas such as pavements, walls, driveways, and garages.</p>
        </div>

        <div className="service-card">
          <img src={facade} alt="Facade Cleaning" />
          <h4>Facade Cleaning</h4>
          <p>Thorough exterior cleaning of glass, metal, or stone building facades to remove dust, stains, and pollutants.</p>
        </div>
      </div>
    </div>
  );
}

export default Construction;
