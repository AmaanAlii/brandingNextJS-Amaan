import React from "react";

import "./ServicesInfoContainer.css";

import AnimatedGlobe from "../AnimatedGlobe/AnimatedGlobe";
import Image from "next/image";

function ServicesInfoContainer({
  leftGlobeFrontImg,
  mainHeading,
  text,
  rightSideImg,
}) {
  // console.log(text);
  return (
    <div className="services-info-container">
      <div className="services-info-left">
        <AnimatedGlobe frontImage={leftGlobeFrontImg} />
      </div>
      <div className="services-info-right">
        <div className="services-info-text-section">
          <h3>{mainHeading}</h3>
          {text.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <Image width={0} height={0} src={rightSideImg} alt="Info Container" />
      </div>
    </div>
  );
}

export default ServicesInfoContainer;
