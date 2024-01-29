import React from "react";

import "./ServicesCardsContainer.css";

import ServicesCard from "../ServicesCard/ServicesCard";

function ServicesCardsContainer({ cardsContainerData }) {
  return (
    <div className="services-cards-container">
      <div className="services-cards-background-heading">
        <h2>{cardsContainerData.bgHeading}</h2>
      </div>
      <div className="services-cards-top-content">
        <h3>{cardsContainerData.mainHeading}</h3>
        <div className="services-cards-container-cards-section">
          {cardsContainerData.cardsData.map((card, index) => (
            <ServicesCard
              icon={card.icon}
              heading={card.heading}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesCardsContainer;
