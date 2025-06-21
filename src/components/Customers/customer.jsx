import React from "react";
import customer1 from "../../assets/images/Customer_images/customer.jpg";
import customer2 from "../../assets/images/Customer_images/customer2.jpg";
import customer3 from "../../assets/images/Customer_images/customer3.jpg";
import "./customer.css";

function Customer() {
  const reviews = [
    {
      img: customer1,
      name: "Nishanth",
      text: "Amazing service! Everything was spotless.",
      rating: "★★★★★",
    },
    {
      img: customer2,
      name: "Vicky",
      text: "Quick, reliable, and very polite team.",
      rating: "★★★★☆",
    },
    {
      img: customer3,
      name: "Priedy",
      text: "Very professional and affordable.",
      rating: "★★★★★",
    },
  ];

  return (
    <div className="customer-section container py-2 mb-4">
      <h2 className="section-title text-center fw-bold mb-4 mt-2">
        Our Happy Customers
      </h2>

      {/* Desktop Grid View */}
      <div className="row g-4 d-none d-md-flex">
        {reviews.map((review, index) => (
          <div className="col-md-4" key={index}>
            <div className="customer-card p-4 g-3 h-100 text-center">
              <img
                src={review.img}
                className="customer-img mb-3"
                alt={review.name}
              />
              <h5 className="customer-name">{review.name}</h5>
              <p className="customer-review">"{review.text}"</p>
              <div className="customer-rating">{review.rating}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div
        id="customerCarousel"
        className="carousel slide d-md-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {reviews.map((review, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="customer-card mx-3 p-4 text-center">
                <img
                  src={review.img}
                  className="customer-img mb-3"
                  alt={review.name}
                />
                <h5 className="customer-name">{review.name}</h5>
                <p className="customer-review">"{review.text}"</p>
                <div className="customer-rating">{review.rating}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#customerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#customerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Customer;
