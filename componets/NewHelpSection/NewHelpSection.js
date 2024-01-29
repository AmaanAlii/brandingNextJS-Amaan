import React from "react";
import "./NewHelpSection.css";

import companyData from "../CompanyData";

import QuoteForm from "../QuoteForm/QuoteForm";

import HomeHelpBgImg from "../../public/Assets/Home/HomeHelpBgImg.jpeg";
import Link from "next/link";


function NewHelpSection({ textColor }) {
  const homeHelpStyle = {
    backgroundImage: `url("/Assets/Home/HomeHelpBgImg.jpeg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleCallButtonClick = () => {
    window.location.href = `tel:${companyData.companyPhone}`;
  };

  return (
    <div className="new-help-section" style={homeHelpStyle}>
      <div className="new-help-section-left-form">
        <QuoteForm textColor={textColor} />
      </div>
      <div className="new-help-section-border" />
      <div className="new-help-section-right">
        <p>
          Give us a Call Now to Learn How Our Strategies Can Accelerate the
          Growth of Your Brand!
        </p>
        <button onClick={handleCallButtonClick}>Call us now!</button>
        <h3>OR</h3>
        <Link href={'/'}>
          <button>Message Us!</button>
        </Link>
      </div>
    </div>
  );
}

export default NewHelpSection;
