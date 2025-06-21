import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./services.css";
import residential from "../../assets/images/Services_images/residential.png";
import commercial from "../../assets/images/Services_images/commercial.png";
import deep from "../../assets/images/Services_images/deep.png";
import in_out from "../../assets/images/Services_images/in_out.png";
import construction from "../../assets/images/Services_images/construction.png";
import carpet from "../../assets/images/Services_images/carpet.png";

const services = [
  {
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    desc: "General cleaning for homes including dusting, vacuuming, and kitchen or bathroom maintenance.",
    image: residential,
  },
  {
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    desc: "Office desks, floors, and common areas to maintain a professional work environment.",
    image: commercial,
  },
  {
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    desc: "Thorough cleaning of hard-to-reach places, baseboards, grout lines, and appliances.",
    image: deep,
  },
  {
    title: "Move-In/Out Cleaning",
    slug: "move-in-out-cleaning",
    desc: "Cleaning for homes being vacated or occupied. Focused on stains, dust, and sanitation.",
    image: in_out,
  },
  {
    title: "Post-Construction Cleaning",
    slug: "post-construction-cleaning",
    desc: "Removal of debris and dust post-renovation or new construction.",
    image: construction,
  },
  {
    title: "Carpet & Upholstery",
    slug: "carpet-upholstery",
    desc: "Deep clean for rugs, carpets, and upholstered furniture using professional tools.",
    image: carpet,
  },
];

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="services-wrapper py-5">
      <div className="transparent-bg"></div>

      <div className="text-center mb-4">
        <h2 className="title">Our Cleaning Services</h2>
        <p className="subtitle">
          From a quick refresh to a deep clean — we bring sparkle to your space.
        </p>
      </div>

      <div className="service-grid-ser">
        {services.map((service, i) => (
          <Link
            key={i}
            to={`/services/${service.slug}`}
            className="service-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={service.image} alt={service.title} />
            <div className="card-info">
              <h5>{service.title}</h5>
              <p>{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
