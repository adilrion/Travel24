import React, { useState, useEffect, useRef } from "react";
import "./Banner.css";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import img1 from "../../Images/images1.jpg";
import img2 from "../../Images/images2.jpg";
import img3 from "../../Images/images3.jpg";
import SocialMedia from "../../Shared/SocialMedia";

const featuredProducts = [`${img1}`, `${img2}`, `${img3}`];

let count = 0;
let slideInterval;
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 7000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <section className="banner-section">
      <div className="banner-details max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div
          ref={slideRef}
          className="select-none banner-page  mt-28 md:mt-10 relative"
        >
          <div className="banner">
            <img src={featuredProducts[currentIndex]} alt="" />
          </div>
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnPrevClick}
            >
              <AiOutlineVerticalRight size={30} />
            </button>
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnNextClick}
            >
              <AiOutlineVerticalLeft size={30} />
            </button>
          </div>
        </div>
        <SocialMedia></SocialMedia>
      </div>
    </section>
  );
};

export default Banner;
