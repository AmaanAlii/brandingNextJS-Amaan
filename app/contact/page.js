'use client'
import BannerMain from '@/componets/BannerMain/BannerMain';
import ContactForm from '@/componets/ContactForm/ContactForm';
import React, { useEffect, useState } from 'react'
import ContactUsBannerImg from "../../public/Assets/ContactUs/ContactUsBannerImg.jpeg";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import companyData from "../../componets/CompanyData";


const page = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  return (
    <div className="contact-us-section">
    <BannerMain currentPage="" bgImage={'Assets/ContactUs/ContactUsBannerImg.jpeg'} />
    <div className="contact-us-contact-details">
      <div className="contact-details-section">
        <div className="contact-details-left">
          <div className="contact-heading">
            <h2>Connect with Us</h2>

            <span>
              Reach out to explore a range of branding and marketing
              strategies available for consistent business growth.
            </span>
          </div>
          <div className="contact-details-left-adress-section">
            <div className="contact-cards">
              <h2>Dubai</h2>
              <div>
                <PinDropIcon />
                <span>{companyData.companyAddress2}</span>
              </div>

              <div>
                <CallIcon />
                <span>{companyData.companyPhone2}</span>
              </div>
              <div>
                <SupportAgentIcon />
                <span>{companyData.companyEmail2}</span>
              </div>
            </div>
          </div>
          <div className="contact-details-left-adress-section">
            <div className="contact-cards">
              <h2>India</h2>
              <div>
                <PinDropIcon />
                <span>{companyData.companyAddress}</span>
              </div>
              <div>
                <CallIcon />
                <span>{companyData.companyPhone}</span>
              </div>
              <div>
                <SupportAgentIcon />
                <span>{companyData.companyEmail}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-details-right">
          <ContactForm />
        </div>
      </div>
    </div>
    {/* <div className="contact-location-section">
      <div className="contact-location-left">
        <iframe
          src="https://shorturl.at/twGV4"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d222.47532547467245!2d80.95250116677549!3d26.852506437937997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzA5LjEiTiA4MMKwNTcnMDkuMyJF!5e0!3m2!1sen!2sin!4v1698669802533!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-location-right">
        <img src={ContactLocationRightImg} alt="Come Here" />
      </div>
    </div> */}
  </div>
  )
}

export default page