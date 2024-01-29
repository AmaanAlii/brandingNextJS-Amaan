import React from "react";

import "./ServicesLatestWork.css";

import { showcaseData } from "../portfolioShowcaseData";



import PortfolioSeeMoreButtonImg from "../../public/Assets/Portfolio/PortfolioSeeMoreButtonImg.webp";
import Link from "next/link";
import Image from "next/image";

function ServicesLatestWork({ serviceName }) {
  const serviceData = showcaseData.find(
    (service) => service.heading === serviceName
  );

  const imagesToShow = serviceData ? serviceData.collage.slice(0, 3) : [];

  return (
    <div className="services-latest-work-container">
      <h2>Latest Work</h2>
      <div className="services-latest-work-gallery">
        <div className="services-latest-work-gallery-images">
          {imagesToShow.map((image, index) => (
            <Image width={0} height={0}
              key={index}
              src={image}
              alt={`Service ${serviceName} ${index + 1}`}
            />
          ))}
        </div>

        <Link
          href={`/portfolio/#${serviceName.toLowerCase().replace(/\s/g, "-")}`}
        >
          <Image width={0} height={0}
            src={PortfolioSeeMoreButtonImg}
            alt={`See more of ${serviceName}`}
          />
        </Link>
      </div>
    </div>
  );
}

export default ServicesLatestWork;
