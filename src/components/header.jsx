/* eslint-env jquery */
import React, { useEffect } from "react";
import PropTypes from 'prop-types';

export const Header = (props) => {
  const images = ["intro-bg-poultry.JPG", "image1.jpg", "image2.jpg", "image3.jpg", "image4.JPG", "image5.JPG"];

  const preloadImages = (imageArray) => {
    for (const imageSrc of imageArray) {
      const img = new Image();
      img.src = `../img/${imageSrc}`;
    }
  };

  useEffect(() => {
    // Preload images before starting the slideshow
    preloadImages(images);
    
    // Add your slideshow initialization code here
    $(".intro").css("background-image", "url(../img/intro-bg-poultry.JPG)");
    startSlideshow();
  }, []);

  const startSlideshow = () => {
    let currentIndex = 0;

    const slideToLeft = () => {
      currentIndex = (currentIndex + 1) % images.length;
      const imageUrl = `url(../img/${images[currentIndex]})`;
  
      $(".intro").css("background-image", imageUrl);
      $(".intro").css("background-position", "100% 50%");
      $(".intro").animate({ backgroundPosition: "0% 50%" }, 2000, "linear", slideToLeft);
    };
  
    slideToLeft(); // Start the initial slide
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#highlights" className="btn btn-custom btn-lg page-scroll">
                  Explore Now
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    // Add more specific prop types as needed
  }).isRequired,
};