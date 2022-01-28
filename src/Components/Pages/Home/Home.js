import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import BlogUploadForm from "../Blog/BlogUploadForm";
import NextTrip from "../NextTrip/NextTrip";
import Footer from "../../Shared/Footer/Footer";
const Home = () => {
  return (
    <div id="home">
      <Navigation></Navigation>
      <Banner></Banner>
      <Blog></Blog>
      <BlogUploadForm></BlogUploadForm>
      <NextTrip></NextTrip>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
