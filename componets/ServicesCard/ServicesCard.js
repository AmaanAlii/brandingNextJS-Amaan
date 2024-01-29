import React from "react";

import "./ServicesCard.css";

import ServicesCardStarsImg from "../../public/Assets/Services-Web-Dev/ServicesCardStarsImg.svg";
import Image from "next/image";

function ServicesCard({ heading, icon, text }) {
  return (
    <div className="services-card">
      <div className="services-card-top">
        <Image width={0} height={0} src={ServicesCardStarsImg} alt="Stars" />
        <div>{icon}</div>
      </div>
      <div className="services-card-text">
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
