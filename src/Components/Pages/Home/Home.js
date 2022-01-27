import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import NextTrip from "../NextTrip/NextTrip";

const Home = () => {
  return (
    <div id="home">
      <Navigation></Navigation>
      <Banner></Banner>
      <Blog></Blog>
      <NextTrip></NextTrip>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
