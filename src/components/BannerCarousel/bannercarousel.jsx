import React from "react";
import banner1 from "../../assets/images/Banner/banner1.png";
import banner2 from "../../assets/images/Banner/banner2.png";
import banner3 from "../../assets/images/Banner/banner3.png";
import "./bannercarousel.css";

function BannerCarousel() {
  return (
    <div className="container-fluid">
      <div className="row mx-0">
        <div className="col-12 px-0">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={banner1}
                  className="d-block w-100 carousel-img"
                  alt="Banner 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={banner2}
                  className="d-block w-100 carousel-img"
                  alt="Banner 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={banner3}
                  className="d-block w-100 carousel-img"
                  alt="Banner 3"
                />
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
