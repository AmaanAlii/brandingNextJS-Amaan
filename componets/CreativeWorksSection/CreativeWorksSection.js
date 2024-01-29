'use client'
import React, { useRef, useState, useEffect } from "react";
import "./CreativeWorksSection.css";

import { internalLinks } from "../internalLinks";

import HomeCreativeWorksMainLeftImg from "../../public/Assets/Home/HomeCreativeWorksMainLeftImg.webp";
import CreativeWorksMainBgImg from "../../public/Assets/Home/CreativeWorksMainBgImg.webp";
import CreativeWorksCollageImg1 from "../../public/Assets/Home/CreativeWorksCollageImg1.jpeg";
import CreativeWorksCollageImg2 from "../../public/Assets/Home/CreativeWorksCollageImg2.jpeg";
import CreativeWorksCollageImg3 from "../../public/Assets/Home/CreativeWorksCollageImg3.jpeg";
import CreativeWorksCollageImg4 from "../../public/Assets/Home/CreativeWorksCollageImg4.jpeg";
import CreativeWorksCollageImg5 from "../../public/Assets/Home/CreativeWorksCollageImg5.jpeg";
import CreativeWorksCollageImg6 from "../../public/Assets/Home/CreativeWorksCollageImg6.jpeg";
import Link from "next/link";
import Image from "next/image";


function CreativeWorksSection() {
  const collageRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);

  const [animationInterval, setAnimationInterval] = useState(5000);

  const imagesData = [
    {
      image: CreativeWorksCollageImg1,
      heading: "Web Designing & Development",
      text: "We design a dynamic marketing strategy along with an online hub tailored for your business, drawing in fresh prospects and establishing your credibility.",
    },
    {
      image: CreativeWorksCollageImg2,
      heading: "Branding",
      text: "At Branding 360 Neo LLC, our team of imaginative creators and strategic minds in brand marketing is dedicated to crafting remarkable brands that leave a lasting impression.",
    },
    {
      image: CreativeWorksCollageImg3,
      heading: "Creative Designing",
      text: "Our expertise lies in seamlessly blending creative designs with data to address complex communication challenges, establishing us as a innovative branding agency in Dubai.",
    },
    {
      image: CreativeWorksCollageImg4,
      heading: "Social Media Management",
      text: "In a world of routine posting, we bring a specialized touch to strategic social media marketing strategy. Tailored strategies, flawless execution – that's our expertise!",
    },
    {
      image: CreativeWorksCollageImg5,
      heading: "Search Engine Optimization",
      text: "As a top SEO Company in Dubai, Branding 360 Neo LLC delivers ethical, results-driven SEO services. Utilizing cutting-edge tools and strategic trends, we elevate your visibility on search engines for targeted keywords.",
    },
    {
      image: CreativeWorksCollageImg6,
      heading: "Performance Marketing",
      text: "More than your typical performance marketing agency, Branding 360 Neo LLC embodies a brand focused on growth. Our team of seasoned experts is dedicated to maximizing conversion rates.",
    },
  ];

  useEffect(() => {
    // setSelectedImageIndex((prevIndex) => (prevIndex + 1) % collage.length);
    let count = 0;
    const interval = setInterval(() => {
      count = count + 1;
      if (count > imagesData.length - 1) {
        setTimeout(() => {
          setSelectedImageIndex(0);
          if (collageRef.current) {
            collageRef.current.scrollLeft = 0;
            count = 0;
          }
        }, 500);
      }
      setSelectedImageIndex((lasIndex) => (lasIndex + 1) % imagesData.length);
      scrollRight();
    }, animationInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //   const scrollLeft = () => {
  //     if (collageRef.current && selectedImageIndex > 0) {
  //       setIsAnimation(true);
  //       setTimeout(() => {
  //         setSelectedImageIndex(selectedImageIndex - 1);
  //         collageRef.current.scrollLeft -= 250;
  //         setIsAnimation(false);
  //       }, 250);
  //     }
  //   };
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);

    setAnimationInterval(5000);

    setTimeout(() => {
      setAnimationInterval(3000);
    }, 5000);
  };
  const scrollRight = () => {
    if (
      collageRef.current &&
      selectedImageIndex < collageRef.current.childElementCount - 1
    ) {
      setIsAnimation(true);
      setTimeout(() => {
        // setSelectedImageIndex(selectedImageIndex + 1);
        if (collageRef.current) {
          collageRef.current.scrollLeft += 250;
        }
        setIsAnimation(false);
      }, 250);
    }
  };

  return (
    <div className="creative-works-section">
      <div className="creative-works-top">
        <div>
          <h3>What to Know More?</h3>
          <span className="app-yellow-text" style={{ color: "#3d3d3d" }}>
            Explore a selection of case studies showcasing how our
            customer-focused marketing agency played a pivotal role in assisting
            our clients to achieve substantial growth.
          </span>
        </div>

        <Link href={'/'}>
          <button className="app-yellow-buttons">View All Work</button>
        </Link>
      </div>
      <div className="creative-works-main">
        <div className="creative-works-main-left">
          <Image width={0} height={0} src={HomeCreativeWorksMainLeftImg} alt="Creative Works" />
          <div className={` ${isAnimation === true ? "fade-out" : "fade-in"}`}>
            {selectedImageIndex < imagesData.length && (
              <>
                <h4>{imagesData[selectedImageIndex].heading}</h4>
                <p>{imagesData[selectedImageIndex].text}</p>
                <Link
                  href={`/portfolio/#${imagesData[selectedImageIndex].heading
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <button>Know More</button>
                </Link>
              </>
            )}
          </div>

          {/* <div className="creative-works-main-left-buttons">
            <button onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="24"
                viewBox="0 0 101 24"
                fill="none"
              >
                <path
                  d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM101 13.5H2V10.5H101V13.5Z"
                  fill="#464646"
                />
              </svg>
            </button>
            <button onClick={scrollRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="24"
                viewBox="0 0 101 24"
                fill="none"
              >
                <path
                  d="M100.061 13.0607C100.646 12.4749 100.646 11.5251 100.061 10.9393L90.5147 1.3934C89.9289 0.807611 88.9792 0.807611 88.3934 1.3934C87.8076 1.97919 87.8076 2.92893 88.3934 3.51472L96.8787 12L88.3934 20.4853C87.8076 21.0711 87.8076 22.0208 88.3934 22.6066C88.9792 23.1924 89.9289 23.1924 90.5147 22.6066L100.061 13.0607ZM0 13.5H99V10.5H0V13.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div className="creative-works-main-right">
          <div className="creative-works-main-right-bg-layer">
            <Image width={0} height={0} src={CreativeWorksMainBgImg} alt="Bg" />
          </div>
          <div className="creative-works-main-collage" ref={collageRef}>
            {/* <img src={CreativeWorksCollageImg1} alt="collage 1" />
            <img src={CreativeWorksCollageImg2} alt="collage 2" />
            <img src={CreativeWorksCollageImg1} alt="collage 1" /> */}
            {imagesData.map((data, index) => (
              <Image width={0} height={0}
                onClick={() => {
                  handleImageClick(index);
                }}
                key={index}
                src={data.image}
                alt={`collage ${index + 1}`}
                className={`${
                  index === selectedImageIndex ? "slected-image" : "none"
                }`}
                // style={{
                //   border:
                //     index === selectedImageIndex ? "2px solid yellow" : "none",
                // }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeWorksSection;
