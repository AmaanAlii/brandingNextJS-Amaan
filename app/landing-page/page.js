'use client'
import React, { useEffect, useRef, useState } from 'react'

import QuoteForm from "../../componets/QuoteForm/QuoteForm";
import { internalLinks } from "../../componets/internalLinks";
import NeedHelpMain from "../../componets/NeedHelpMain/NeedHelpMain";

import LandingPageBannerBgImg from "../../public/Assets/LandingPage/LandingPageBannerBgImg.webp";
import LandingPageBannerLeftImg from "../../public/Assets/LandingPage/LandingPageBannerLeftImg.webp";

import LandingPageBannerLeftImg1 from "../../public/Assets/LandingPage/LandingPageBannerLeftImg1.jpeg";
import LandingPageBannerLeftImg2 from "../../public/Assets/LandingPage/LandingPageBannerLeftImg2.jpeg";
import LandingPageBannerLeftImg3 from "../../public/Assets/LandingPage/LandingPageBannerLeftImg3.jpeg";
import LandingPageBannerLeftImg4 from "../../public/Assets/LandingPage/LandingPageBannerLeftImg4.webp";

import LandingPageBannerRightImg1 from "../../public/Assets/LandingPage/LandingPageBannerRightImg1.jpeg";
import LandingPageBannerRightImg2 from "../../public/Assets/LandingPage/LandingPageBannerRightImg2.jpeg";
import LandingPageBannerRightImg3 from "../../public/Assets/LandingPage/LandingPageBannerRightImg3.webp";

import LandingWhatWeDoMainImg from "../../public/Assets/LandingPage/LandingWhatWeDoMainImg.webp";
import LandingWhatWeDoRightImg from "../../public/Assets/LandingPage/LandingWhatWeDoRightImg.webp";

import LandingServicesIcon1 from "../../public/Assets/LandingPage/LandingServicesIcon1.webp";
import LandingServicesIcon2 from "../../public/Assets/LandingPage/LandingServicesIcon2.webp";
import LandingServicesIcon3 from "../../public/Assets/LandingPage/LandingServicesIcon3.webp";
import LandingServicesIcon4 from "../../public/Assets/LandingPage/LandingServicesIcon4.webp";
import LandingServicesIcon5 from "../../public/Assets/LandingPage/LandingServicesIcon5.webp";
import LandingServicesIcon6 from "../../public/Assets/LandingPage/LandingServicesIcon6.webp";

import BannerCarousalLeftImage from "../../public/Assets/LandingPage/BannerCarousalLeftImage.webp";
import BannerCarousalRightImage from "../../public/Assets/LandingPage/BannerCarousalRightImage.webp";

import LandingPageLastImg from "../../public/Assets/LandingPage/LandingPageLastImg.webp";

import HomeClientsBgImg from "../../public/Assets/Home/HomeClientsBgImg.jpeg";
import HomeOurTeamCatImg from "../../public/Assets/Home/HomeOurTeamCatImg.webp";
import HomeTeramPolygonImg from "../../public/Assets/Home/HomeTeramPolygon.webp";
import HomeOurClientsBgImg from "../../public/Assets/Home/HomeOurClientsBgImg.webp";
import HomeClientsDogImg from "../../public/Assets/Home/HomeClientsDogImg.webp";

import ClientsImages from "../../public/Assets/Home/ClientsImages.webp";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import NewHelpSection from "../../Components/NewHelpSection/NewHelpSection";
// import EnquiryModal from "../../Components/EnquiryModal/EnquiryModal";
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import NewHelpSection from '@/componets/NewHelpSection/NewHelpSection';
import EnquiryModal from '@/componets/EnquiryModal/EnquiryModal';
import Image from 'next/image';
import '@/styles/globals.css'

const page = () => {
  const [bookInterestModalOpen, setBookInterestModalOpen] = useState(false);

  const handleBookInterestModalOpen = () => {
    setBookInterestModalOpen(true);
  };

  const handleBookInterestModalClose = () => {
    setBookInterestModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleBookInterestModalOpen();
    }, 3000);
  }, []);

  const landingPageBannerBgStyle = {
    backgroundImage: `url("/Assets/LandingPage/LandingPageBannerBgImg.webp")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const homeClientsStyle = {
    backgroundImage: `url("/Assets/Home/HomeClientsBgImg.jpeg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const carousel = useRef(null);

  const smallFormRef = useRef(null);

  const needHelpRef = useRef(null);

  const scrollToSmallForm = () => {
    if (smallFormRef.current) {
      //   smallFormRef.current.scrollIntoView({ behavior: "smooth" });
      //   smallFormRef.current.scrollDown = 0;
      const componentPosition = smallFormRef.current.offsetTop;
      window.scrollTo({
        top: componentPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToNeedHelpForm = () => {
    if (smallFormRef.current) {
      //   smallFormRef.current.scrollIntoView({ behavior: "smooth" });
      //   smallFormRef.current.scrollDown = 0;
      const componentPosition = needHelpRef.current.offsetTop;
      window.scrollTo({
        top: componentPosition,
        behavior: "smooth",
      });
    }
  };

  const clientTestimonials = [
    {
      name: "Hawqr, Dubai!",
      text: "In just a few months with Branding 360 Neo LLC, I've witnessed exceptional results – a surge in website traffic and unprecedented social media engagement. Their team's expertise, creativity, and unwavering commitment have truly fueled the growth of my business.",
    },
    {
      name: "Innisfree, India!",
      text: "Branding 360 Neo LLC has been instrumental in shaping our comprehensive branding and marketing strategy, propelling our business forward. Their expertise in SEO, social media marketing, and content development has been invaluable, leading to a significant increase in both leads and conversions.",
    },
    {
      name: "Caspian Healthcare, India!",
      text: "The Branding 360 NEO LLC team exhibits an exceptional level of responsiveness, consistently partnering with us to achieve our objectives. Their ongoing monitoring and fine-tuning of our campaigns ensure optimal ROI. I wholeheartedly recommend them to anyone in search of a top-notch digital marketing agency.",
    },
    {
      name: "Oleena Shade, Dubai!",
      text: "Among the branding and marketing agencies I've worked with, Branding 360 NEO LLC stands out for delivering exceptional service and results. They invest time in understanding our business and objectives, crafting tailored strategies that produce tangible benefits.",
    },
    {
      name: "Daddy’s Bites, Dubai!",
      text: "Collaborating with Branding 360 Neo LLC has been an extremely positive experience. Their team is knowledgeable, professional, and always ready to help us achieve our marketing goals. Since partnering with them, we've witnessed a significant increase in conversions and sales, and we look forward to continuing this successful collaboration.",
    },
    {
      name: "World Investment Professionals, Dubai!",
      text: "Our partnership with Branding 360 Neo LLC has extended over several months, and we are highly satisfied with the results. Their role in building a strong brand identity and reaching new audiences through creative branding and marketing initiatives has been crucial. I wholeheartedly recommend them to anyone looking to enhance their business.",
    },
    {
      name: "Rocket Advisory, Dubai!",
      text: "In my interactions with different branding and marketing agencies, none have equaled the outstanding service and results that Branding 360 Neo LLC consistently delivers. They take the time to understand our business and objectives, crafting customized strategies that yield concrete and meaningful benefits.",
    },
    {
      name: "Inidi Villas, Sri Lanka!",
      text: "Collaborating with Branding 360 Neo LLC has truly transformed our business. Their assistance in establishing a robust online presence and connecting with new audiences through targeted advertising and content marketing has yielded remarkable results. The outcomes are evident, and we appreciate their expertise and unwavering dedication.",
    },
  ];

  const homeClientTestimonialsCarousalData = clientTestimonials.map(
    (data, index) => (
      <div key={index} className="home-clients-card-main">
        <svg
          fill="#6C5719"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 198 198"
          // xml:space="preserve"
          transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
          className="home-clients-svg-left"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
            </g>{" "}
          </g>
        </svg>

        <p>{data.text}</p>
        <h4>{data.name}</h4>
        <svg
          fill="#6C5719"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 198 198"
          // xml:space="preserve"
          className="home-clients-svg-right"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297 c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"></path>{" "}
              <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297 c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    )
  );
  return (
    <div className="landing-page-section">
    <div className="landing-page-banner" style={landingPageBannerBgStyle}>
      <div className="landing-page-banner-left">
        {/* <marquee
          behavior="scroll"
          direction="up"
          loop="infinite"
          scrollamount="10"
          scrolldelay="0"
        >
          <img src={LandingPageBannerLeftImg1} alt="Landin Page" />
          <img src={LandingPageBannerLeftImg2} alt="Landin Page" />
          <img src={LandingPageBannerLeftImg3} alt="Landin Page" />

          <img src={LandingPageBannerLeftImg1} alt="Landin Page" />
          <img src={LandingPageBannerLeftImg2} alt="Landin Page" />
          <img src={LandingPageBannerLeftImg3} alt="Landin Page" />
        </marquee> */}
        <div className="marquee-container">
          {/* <Marquee className="marquee-main" direction="up">
            <img src={LandingPageBannerLeftImg1} alt="Landing Page" />
            <img src={LandingPageBannerLeftImg2} alt="Landing Page" />
            <img src={LandingPageBannerLeftImg3} alt="Landing Page" />
          </Marquee>
          <Marquee className="marquee-main" direction="down">
            <img src={LandingPageBannerRightImg1} alt="Landing Page" />
            <img src={LandingPageBannerRightImg2} alt="Landing Page" />
            <img src={LandingPageBannerRightImg3} alt="Landing Page" />
          </Marquee> */}
          <div className="marquee">
            <Image width={0} height={0} src={LandingPageBannerLeftImg1} alt="Landing Page" />
            <Image width={0} height={0} src={LandingPageBannerLeftImg2} alt="Landing Page" />
            <Image width={0} height={0} src={LandingPageBannerLeftImg3} alt="Landing Page" />
          </div>
          <div className="marquee-right">
            <Image width={0} height={0} src={LandingPageBannerRightImg1} alt="Landing Page" />
            <Image width={0} height={0} src={LandingPageBannerRightImg2} alt="Landing Page" />
            <Image width={0} height={0} src={LandingPageBannerRightImg3} alt="Landing Page" />
          </div>
        </div>
        {/* <marquee
          behavior="scroll"
          direction="down"
          loop="infinite"
          scrollamount="10"
          scrolldelay="0"
        >
          <img src={LandingPageBannerRightImg1} alt="Landin Page" />
          <img src={LandingPageBannerRightImg2} alt="Landin Page" />
          <img src={LandingPageBannerRightImg3} alt="Landin Page" />
          <img src={LandingPageBannerRightImg1} alt="Landin Page" />
          <img src={LandingPageBannerRightImg2} alt="Landin Page" />
          <img src={LandingPageBannerRightImg3} alt="Landin Page" />
        </marquee> */}
      </div>
      <div className="landing-page-right">
        <QuoteForm />

        <button onClick={scrollToNeedHelpForm}>
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="80"
            viewBox="0 0 65 132"
            fill="none"
          >
            <path
              d="M6.65342 94.0949L0.775597 99.9082L32.6192 131.752L64.5273 99.9082L58.6495 94.0949L36.8176 115.927L36.8822 0.0498047H28.6145L28.5499 115.991L6.65342 94.0949Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="landing-what-we-do-section">
      <div className="landing-what-we-do-section-left">
        <h3> What We Do!</h3>
        <Image width={0} height={0} src={LandingWhatWeDoMainImg} alt="What we do" />
        <button onClick={scrollToSmallForm} className="app-yellow-buttons">
          Let's Start &nbsp;{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M5.5 13.5002L18 6.50023M16.25 24.0002H16.5C17.4938 16.3819 19.6891 8.96921 23.004 2.03823L23.26 1.50023L23 1.24023L22.462 1.49623C15.531 4.81121 8.11838 7.00645 0.5 8.00023V8.25023L5.5 13.2502V21.0002H5.75L7.524 19.3102C8.22291 18.645 8.99952 18.0665 9.837 17.5872L16.25 24.0002Z"
              stroke="black"
            />
          </svg>{" "}
        </button>
      </div>
      <div className="landing-what-we-do-section-right">
        <Image width={0} height={0} src={LandingWhatWeDoRightImg} alt="What WE Do" />
        <h3 className="app-yellow-text">Services Offered</h3>
      </div>
    </div>
    <div ref={needHelpRef}></div>
    <NeedHelpMain />
    <div className="landing-page-services-section">
      <div className="landing-page-services-heading">
        <h3>Growth Driven Strategies & Services We Offer!</h3>
      </div>
      <div className="landing-page-service-cards">
        <Link href={internalLinks.services.webDev}>
          <div className="landing-page-services-card">
            <Image width={0} height={0} src={LandingServicesIcon1} alt="Web Development" />
            <span>Web Development & Design </span>
          </div>
        </Link>
        <Link href={internalLinks.services.branding}>
          <div className="landing-page-services-card">
            <Image width={0} height={0} src={LandingServicesIcon2} alt="Branding" />

            <span>Branding</span>
          </div>
        </Link>
        <Link href={internalLinks.services.creativeDesign}>
          <div className="landing-page-services-card">
            <Image width={0} height={0} src={LandingServicesIcon3} alt="Creative Designing" />

            <span>Creative Designing</span>
          </div>
        </Link>
        <Link href={internalLinks.services.socialMediaManagement}>
          <div className="landing-page-services-card">
            <Image width={0} height={0} src={LandingServicesIcon4} alt="Social Media management" />

            <span>Social Media Management</span>
          </div>
        </Link>
        <Link href={internalLinks.services.seo}>
          <div className="landing-page-services-card">
            <Image width={0} height={0} src={LandingServicesIcon5} alt="SEO" />

            <span>SEO</span>
          </div>
        </Link>
        <Link href={internalLinks.services.performanceMarketing}>
          <div className="landing-page-services-card">
            <Image width={0} height={0} src={LandingServicesIcon6} alt="Performance Marketing" />

            <span>Performance Marketing</span>
          </div>
        </Link>
      </div>
    </div>

    <div className="home-our-clients-section" style={homeClientsStyle}>
      <div className="home-our-clients-top-text">
        <h2 className="app-yellow-text">
          Our Clients Love us and We Love Them
        </h2>
        <span>
          We've assisted outstanding brands in reaching new heights.
        </span>
      </div>

      <div className="home-clients-card">
        <button onClick={(e) => carousel?.current?.slidePrev(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
          >
            <path
              d="M25.5208 13.3384L26.9629 14.8835L19.3402 22.6092L26.9629 30.3349L25.5208 31.88L16.2499 22.6092L25.5208 13.3384Z"
              fill="black"
            />
          </svg>
        </button>
        <AliceCarousel
          items={homeClientTestimonialsCarousalData}
          mouseTracking
          autoPlay
          autoPlayInterval={2000}
          autoPlayStrategy={"all"}
          infinite
          ref={carousel}
          disableDotsControls
          disableButtonsControls
        />
        <button onClick={(e) => carousel?.current?.slideNext(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M18.8249 13.3384L17.3828 14.8835L25.0055 22.6092L17.3828 30.3349L18.8249 31.88L28.0958 22.6092L18.8249 13.3384Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
    <div ref={smallFormRef}></div>

    <NewHelpSection textColor="white" />

    <Image width={0} height={0} src={LandingPageLastImg} alt="Landing Page" />
    <EnquiryModal
      open={bookInterestModalOpen}
      onClose={handleBookInterestModalClose}
      setBookInterestModalOpen={setBookInterestModalOpen}
    />
  </div>
  )
}

export default page