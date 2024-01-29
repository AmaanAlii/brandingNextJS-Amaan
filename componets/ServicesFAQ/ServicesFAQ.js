'use client'
import React, { useState } from "react";

import "./ServicesFAQ.css";

import ServicesFaqHeadRightImg from "../../public/Assets/ServicesFAQ/ServicesFaqHeadRightImg.png";
import ServicesFaqHeadBottomImg from "../../public/Assets/ServicesFAQ/ServicesFaqHeadBottomImg.png";
import ServicesFaqBottomImg from "../../public/Assets/ServicesFAQ/ServicesFaqBottomImg.jpg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

function ServicesFAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="services-faq-section">
      <div className="services-faq-heading-section">
        <div className="services-faq-heading-top">
          <h2>FAQ</h2>
          <Image width={0} height={0} src={ServicesFaqHeadRightImg} alt="FAQ" />
        </div>
        <Image width={0} height={0} src={ServicesFaqHeadBottomImg} alt="FAQ" />
      </div>
      <div className="services-faq-qa-section">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleDropdownClick(index)}
            >
              {item.ques}
              <span className="dropdown-icon">
                <ExpandMoreIcon />
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
            >
              {item.ans.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Image width={0} height={0} src={ServicesFaqBottomImg} alt="FAQ" />
    </div>
  );
}

export default ServicesFAQ;
