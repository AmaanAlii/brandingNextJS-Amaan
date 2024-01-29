import React, { useState } from "react";

import "./PortfolioShowcase.css";

import GalleryComp from "../GalleryComp/GalleryComp";
import Image from "next/image";

function PortfolioShowcase({
  heading,
  description,
  rightImg,
  leftImg,
  collage,
}) {
  const [gallerySwitch, setGallerySwitch] = useState(true);

  const toggleGallerySwitch = () => {
    setGallerySwitch(!gallerySwitch);
  };

  const topThreeImages = collage.slice(0, 3);
  return (
    <div
      id={heading.toLowerCase().replace(/\s/g, "-")}
      className="portfolio-main-section app-container"
    >
      <Image width={0} height={0} src={rightImg} />
      <div className="portfolio-top app-container">
        <div className="portfolio-heading ">
          <h2>{heading}</h2>
        </div>
        <div className="porfolio-top-right">
          <button onClick={toggleGallerySwitch} className="app-yellow-buttons">
            View All Work
          </button>
        </div>
      </div>

      <div className={`portfolio-mid-section app-container `}>
        <div
          className={`portfolio-mid-left ${
            gallerySwitch ? "mid-no-width" : "mid-full-width"
          }`}
        >
          <Image width={0} height={0} src={leftImg} />
          <p>{description}</p>
        </div>
        <div
          className={`app-container gallery-container-main ${
            gallerySwitch ? "gallery-open" : "gallery-close"
          }`}
        >
          <GalleryComp
            collage={collage}
            gallerySwitch={gallerySwitch}
            toggleGallerySwitch={toggleGallerySwitch}
          />
        </div>
        <div className="portfolio-mid-mobile-button">
          <button onClick={toggleGallerySwitch} className="app-yellow-buttons">
            View All Work
          </button>
        </div>

        <div
          className={`portfolio-mid-right app-container ${
            gallerySwitch ? "mid-no-width" : "mid-full-width"
          }`}
        >
          {topThreeImages.map((img, index) => (
            <div
              className="portfolio-image-container app-container"
              key={index}
              onClick={toggleGallerySwitch}
            >
              <Image width={0} height={0}
                src={img}
                alt={`Image ${index}`}
                className="portfolio-image"
              />
              <div className="hover-text">View More</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioShowcase;
