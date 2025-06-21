import React from "react";
import Customer from "../../Customers/customer";
import About from "../../About/about";
import BannerCarousel from "../../BannerCarousel/bannercarousel";
import Services from "../../Services/services";
import Clients from "../../Clients/clients";

function Home() {
  return (
    <div>
      <BannerCarousel />
      <Services />
      <Customer />
      <Clients/>
      <About />
    </div>
  );
}

export default Home;
