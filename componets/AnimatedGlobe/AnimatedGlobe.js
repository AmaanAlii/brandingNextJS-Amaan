import React from "react";

import "./AnimatedGlobe.css";

import GlobeTopImg from "../../public/Assets/Globe/GlobeTopImg.webp";
import GlobeBGImg from "../../public/Assets/Globe/GlobeBGImg.webp";
import Image from "next/image";

function AnimatedGlobe({ frontImage }) {
  return (
    <div className="services-globe-container">
      <Image width={0} height={0} src={GlobeBGImg} className="services-globe-container-background" />
      <Image width={0} height={0} src={GlobeTopImg} className="services-globe-container-top" />
      <Image width={0} height={0} src={frontImage} className="services-globe-container-top-main" />
    </div>
  );
}

export default AnimatedGlobe;
