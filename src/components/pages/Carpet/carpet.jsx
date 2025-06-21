import React from "react";
import "./carpet.css";

import carpet from "../../../assets/images/Carpet_images/carpet.avif";
import sofa from "../../../assets/images/Carpet_images/sofa.avif";
import mattress from "../../../assets/images/Carpet_images/mattress.avif";
import curtain from "../../../assets/images/Carpet_images/curtain.avif";

function Carpet() {
  return (
    <div className="carpet-container">
      <h1>Carpet & Upholstery Cleaning Services</h1>
      <p>
        Our Carpet and Upholstery Cleaning service is designed to deeply
        rejuvenate your home and office interiors, restoring both the appearance
        and hygiene of your furnishings. Over time, carpets, sofas, chairs, and
        mattresses become breeding grounds for dust mites, bacteria, allergens,
        pet dander, and tough stains. Routine vacuuming only removes surface
        debris, but deep cleaning is essential to extract embedded grime and
        eliminate odors at their source. Our trained professionals use
        high-powered equipment, hot water extraction, and eco-friendly,
        fabric-safe cleaning solutions to treat each item with care and
        precision.
        <br />
        <br />
        Whether it's a delicate woolen rug, a fabric sofa, a memory foam
        mattress, or lined curtains, we customize our approach based on material
        and condition. Our services include shampooing, steam sanitization,
        stain treatment, deodorizing, and protective coatings to extend fabric
        life. This comprehensive approach not only enhances the look and feel of
        your furnishings but also contributes to a healthier indoor environment
        for your family, employees, or guests. With attention to every detail,
        we ensure that your upholstered furniture and carpets are fresh,
        vibrant, and allergen-free — making your spac
      </p>

      <div className="service-grid">
        <div className="service-card">
          <img src={carpet} alt="Carpet Cleaning" />
          <h4>Carpet Cleaning</h4>
          <p>
            Deep shampooing and hot water extraction to remove dirt, allergens,
            and stains from carpets.
          </p>
        </div>

        <div className="service-card">
          <img src={sofa} alt="Sofa Cleaning" />
          <h4>Sofa & Couch Cleaning</h4>
          <p>
            Steam cleaning and fabric-safe solutions to eliminate dust, odor,
            and pet hair from upholstery.
          </p>
        </div>

        <div className="service-card">
          <img src={mattress} alt="Mattress Cleaning" />
          <h4>Mattress Cleaning</h4>
          <p>
            Sanitizing mattresses to remove dust mites, sweat stains, and
            allergens for a healthier sleep.
          </p>
        </div>

        <div className="service-card">
          <img src={curtain} alt="Curtain Cleaning" />
          <h4>Curtain & Blinds Cleaning</h4>
          <p>
            Dry or steam cleaning of window coverings to remove dust, allergens,
            and pollutants.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carpet;
