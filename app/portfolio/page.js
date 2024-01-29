'use client'
import React, { useEffect, useRef } from 'react'
import '@/styles/globals.css'
import Marquee from 'react-fast-marquee';
import HomeOurClientsBgImg from "../../public/Assets/Home/HomeOurClientsBgImg.webp";
import HomeClientsDogImg from "../../public/Assets/Home/HomeClientsDogImg.webp";
import AboutUsClientsMarqueeImg1 from "../../public/Assets/AboutUs/AboutUsClientsMarqueeImg1.png";
import AboutUsClientsMarqueeImg2 from "../../public/Assets/AboutUs/AboutUsClientsMarqueeImg2.png";
import { showcaseData } from "../../componets/portfolioShowcaseData";
import PortfolioShowcase from '../../componets/PortfolioShowcase/PortfolioShowcase'
import Image from 'next/image';
const page = () => {
    const containerRef = useRef(null);
    useEffect(() => {
      const { hash } = window.location;
  
      // Scroll to the top if there is no hash
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll to the element with the hash ID
        const targetElement = document.getElementById(hash.substr(1));
        if (targetElement) {
          // console.log("target", targetElement);
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, []);
  
    const homeClientsShowcaseStyle = {
      backgroundImage: `url("${HomeOurClientsBgImg}")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  return (
    <div className="app-sections portfolio-section" ref={containerRef}>
        <h1>Portfolio</h1>
      <div className="app-main-sections">
        {showcaseData.map((data, index) => (
          <PortfolioShowcase
            key={index}
            heading={data.heading}
            description={data.description}
            collage={data.collage}
            rightImg={data.rightImage}
            leftImg={data.leftImage}
          />
        ))}
      </div>
      <div className="home-our-clients-showcase-section">
        <Image width={0} height={0} src={HomeClientsDogImg} alt="Dog" />
        <div
          className="home-our-clients-showcase"
          style={homeClientsShowcaseStyle}
        >
          <div className="home-clinets-showcase-left">
            <h3>CLIENTS</h3>
            <h2 className="app-yellow-text">Clients We Worked With!</h2>
            <h4>We've helped exceptional brands soar to new heights.</h4>
          </div>
          <div className="about-us-clients-marquee-section">
            <Marquee direction="left">
              <Image width={0} height={0} src={AboutUsClientsMarqueeImg1} alt="Our Clients" />
            </Marquee>
            <br />
            <Marquee direction="right">
              <Image width={0} height={0} src={AboutUsClientsMarqueeImg2} alt="Our Clients" />
            </Marquee>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page