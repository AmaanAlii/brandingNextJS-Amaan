'use client'
import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import MobileNav from "../MobileNav/MobileNav";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { internalLinks } from "@/componets/internalLinks";
import MainLogo from "@/./public/Assets/Logos/MainLogo.webp";
import NavServiceWebDevImg from "@/./public/Assets/NavBar/NavServiceWebDevImg.jpeg";
import NavServiceBrandingImg from "@/./public/Assets/NavBar/NavServiceBrandingImg.jpeg";
import NavServiceCreativeDesignImg from "@/./public/Assets/NavBar/NavServiceCreativeDesignImg.jpeg";
import NavServiceSMMImg from "@/./public/Assets/NavBar/NavServiceSMMImg.jpeg";
import NavServiceSEOImg from "@/./public/Assets/NavBar/NavServiceSEOImg.jpeg";
import NavServicePerfMarketingImg from "@/./public/Assets/NavBar/NavServicePerfMarketingImg.jpeg";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Image from "next/image";

function NavBar() {
  const [shrink, setShrink] = useState(false);

  const handleShrink = () => {
    setShrink(!shrink);
  };
  const location = usePathname();
  const currentPath = location;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPath]);

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 820;

  const [serviceMenuSwitch, setServiceMenuSwitch] = useState(false);

  const handleServiceMenuToggle = () => {
    setServiceMenuSwitch(!serviceMenuSwitch);
  };

  const serviceMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutsideMenu(event) {
      if (
        serviceMenuRef.current &&
        !serviceMenuRef.current.contains(event.target)
      ) {
        setServiceMenuSwitch(false);
      }
    }
    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [serviceMenuSwitch]);

  //   const servicesLinks = {
  //     webDev: "/web-development",
  //     digitalMarketing: "/digital-marketing",
  //     seo: "/seo-optimization",
  //     emailMarketing: "/email-marketing",
  //     contentMarketing: "/content-marketing",
  //     graphicDesign: "/graphic-design",
  //   };

  //   const internalLinks = {
  //     home: "/",
  //     aboutUs: "/about-us",
  //     project: "/project",
  //     contact: "/contact",
  //     privacyPolicy: "/privacy-policy",
  //     terms: "/terms-and-conditions",
  //   };

  return (
    <nav className="main-nav">
      {isMobile ? (
        <MobileNav isMobile={isMobile} handleShrink={handleShrink} />
        // <h1>gg</h1>
      ) : (
        <>
          <div className="nav-main-logo">
            <Link href={'/'}>
              <Image width={164} height={44} src={MainLogo} alt="Nav Rec" />
            </Link>
          </div>
          <ul>
            <li>
              <Link
                href={'/'}
                className={
                  currentPath === internalLinks.home
                    ? "active-link"
                    : "inactive=link"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={'/portfolio'}
                className={
                  currentPath === internalLinks.portfolio
                    ? "active-link"
                    : "inactive=link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li
              onClick={handleServiceMenuToggle}
              className="main-nav-services-li"
              ref={serviceMenuRef}
            >
              <span
                className={
                  currentPath.startsWith("/services")
                    ? "active-link"
                    : "inactive-link"
                }
              >
                Services <KeyboardArrowDownIcon />
              </span>
              <ul
                className={`main-nav-service-menu ${
                  serviceMenuSwitch
                    ? "service-menu-open"
                    : "service-menu-closed"
                }`}
              >
                <div>
                  <li>
                    <Link href={'/services/web-development'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="95"
                        height="39"
                        viewBox="0 0 95 39"
                        fill="none"
                      >
                        <circle
                          cx="75.5"
                          cy="19.5"
                          r="19"
                          stroke="white"
                          stroke-dasharray="4.15 4.15"
                        />
                        <path
                          d="M77.9906 19.663C78.2335 19.4201 78.2335 19.0262 77.9906 18.7833L74.0318 14.8245C73.7888 14.5816 73.395 14.5816 73.152 14.8245C72.9091 15.0674 72.9091 15.4613 73.152 15.7042L76.671 19.2231L73.152 22.7421C72.9091 22.985 72.9091 23.3789 73.152 23.6218C73.395 23.8647 73.7888 23.8647 74.0318 23.6218L77.9906 19.663ZM0 19.8452H77.5507V18.6011H0V19.8452Z"
                          fill="#FFBB00"
                        />
                      </svg>
                      <Image width={215} height={106} src={NavServiceWebDevImg} alt="services" />
                      Web Development & Design
                    </Link>
                  </li>
                  <li>
                    <Link href={'/services/branding'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="95"
                        height="39"
                        viewBox="0 0 95 39"
                        fill="none"
                      >
                        <circle
                          cx="75.5"
                          cy="19.5"
                          r="19"
                          stroke="white"
                          stroke-dasharray="4.15 4.15"
                        />
                        <path
                          d="M77.9906 19.663C78.2335 19.4201 78.2335 19.0262 77.9906 18.7833L74.0318 14.8245C73.7888 14.5816 73.395 14.5816 73.152 14.8245C72.9091 15.0674 72.9091 15.4613 73.152 15.7042L76.671 19.2231L73.152 22.7421C72.9091 22.985 72.9091 23.3789 73.152 23.6218C73.395 23.8647 73.7888 23.8647 74.0318 23.6218L77.9906 19.663ZM0 19.8452H77.5507V18.6011H0V19.8452Z"
                          fill="#FFBB00"
                        />
                      </svg>
                      <Image width={215} height={106} src={NavServiceBrandingImg} alt="services" />
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link href={'/services/creative-design'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="95"
                        height="39"
                        viewBox="0 0 95 39"
                        fill="none"
                      >
                        <circle
                          cx="75.5"
                          cy="19.5"
                          r="19"
                          stroke="white"
                          stroke-dasharray="4.15 4.15"
                        />
                        <path
                          d="M77.9906 19.663C78.2335 19.4201 78.2335 19.0262 77.9906 18.7833L74.0318 14.8245C73.7888 14.5816 73.395 14.5816 73.152 14.8245C72.9091 15.0674 72.9091 15.4613 73.152 15.7042L76.671 19.2231L73.152 22.7421C72.9091 22.985 72.9091 23.3789 73.152 23.6218C73.395 23.8647 73.7888 23.8647 74.0318 23.6218L77.9906 19.663ZM0 19.8452H77.5507V18.6011H0V19.8452Z"
                          fill="#FFBB00"
                        />
                      </svg>
                      <Image width={215} height={106} src={NavServiceCreativeDesignImg} alt="services" />
                      Creative Designing
                    </Link>
                  </li>
                </div>

                <div>
                  <li>
                    <Link href={'/services/seo'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="95"
                        height="39"
                        viewBox="0 0 95 39"
                        fill="none"
                      >
                        <circle
                          cx="75.5"
                          cy="19.5"
                          r="19"
                          stroke="white"
                          stroke-dasharray="4.15 4.15"
                        />
                        <path
                          d="M77.9906 19.663C78.2335 19.4201 78.2335 19.0262 77.9906 18.7833L74.0318 14.8245C73.7888 14.5816 73.395 14.5816 73.152 14.8245C72.9091 15.0674 72.9091 15.4613 73.152 15.7042L76.671 19.2231L73.152 22.7421C72.9091 22.985 72.9091 23.3789 73.152 23.6218C73.395 23.8647 73.7888 23.8647 74.0318 23.6218L77.9906 19.663ZM0 19.8452H77.5507V18.6011H0V19.8452Z"
                          fill="#FFBB00"
                        />
                      </svg>
                      <Image width={215} height={106} src={NavServiceSEOImg} alt="services" />
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href={'/services/social-media-management'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="95"
                        height="39"
                        viewBox="0 0 95 39"
                        fill="none"
                      >
                        <circle
                          cx="75.5"
                          cy="19.5"
                          r="19"
                          stroke="white"
                          stroke-dasharray="4.15 4.15"
                        />
                        <path
                          d="M77.9906 19.663C78.2335 19.4201 78.2335 19.0262 77.9906 18.7833L74.0318 14.8245C73.7888 14.5816 73.395 14.5816 73.152 14.8245C72.9091 15.0674 72.9091 15.4613 73.152 15.7042L76.671 19.2231L73.152 22.7421C72.9091 22.985 72.9091 23.3789 73.152 23.6218C73.395 23.8647 73.7888 23.8647 74.0318 23.6218L77.9906 19.663ZM0 19.8452H77.5507V18.6011H0V19.8452Z"
                          fill="#FFBB00"
                        />
                      </svg>
                      <Image width={215} height={106} src={NavServiceSMMImg} alt="services" />
                      Social Media Management
                    </Link>
                  </li>
                  <li>
                    <Link href={'/services/performance-marketing'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="95"
                        height="39"
                        viewBox="0 0 95 39"
                        fill="none"
                      >
                        <circle
                          cx="75.5"
                          cy="19.5"
                          r="19"
                          stroke="white"
                          stroke-dasharray="4.15 4.15"
                        />
                        <path
                          d="M77.9906 19.663C78.2335 19.4201 78.2335 19.0262 77.9906 18.7833L74.0318 14.8245C73.7888 14.5816 73.395 14.5816 73.152 14.8245C72.9091 15.0674 72.9091 15.4613 73.152 15.7042L76.671 19.2231L73.152 22.7421C72.9091 22.985 72.9091 23.3789 73.152 23.6218C73.395 23.8647 73.7888 23.8647 74.0318 23.6218L77.9906 19.663ZM0 19.8452H77.5507V18.6011H0V19.8452Z"
                          fill="#FFBB00"
                        />
                      </svg>
                      <Image width={215} height={106} src={NavServicePerfMarketingImg} alt="services" />
                      Performance Marketing
                    </Link>
                  </li>
                </div>
                {/* <li>
                  <Link to={internalLinks.services.webDev}>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to={internalLinks.services.webDev}>
                    Web Development
                  </Link>
                </li> */}
              </ul>
            </li>

            <li>
              <Link
                href={'/about'}
                className={
                  currentPath === internalLinks.aboutUs
                    ? "active-link"
                    : "inactive=link"
                }
              >
                About us
              </Link>
            </li>

            {/* <Link to={internalLinks.landingPage}>Landing Page</Link> */}
            {/* <li>Project</li> */}
            <li>
              <Link
                href={'/contact'}
                className={
                  currentPath === internalLinks.contact
                    ? "active-link"
                    : "inactive=link"
                }
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div>
            <Link href={"/StaffAugmentation"}>
              <button className="app-yellow-buttons ">
                Staff Augmentation
              </button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
