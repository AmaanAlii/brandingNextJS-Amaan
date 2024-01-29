import { Link } from '@mui/material';
import React from 'react'
import { IoMdPaperPlane } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import heroimage from "../../public/Assets/StaffAugmentation/hero img.webp";
import logoImage from "../../public/Assets/Logos/MainLogo.webp";
import bgImage from "../../public/Assets/StaffAugmentation/img bg.webp";
import card1Image from "../../public/Assets/StaffAugmentation/card1.webp";
import card2Image from "../../public/Assets/StaffAugmentation/card2.webp";
import card3Image from "../../public/Assets/StaffAugmentation/card3.webp";
import section3Card1 from "../../public/Assets/StaffAugmentation/img.webp";
import section3Card2 from "../../public/Assets/StaffAugmentation/img(1).webp";
import section3Card3 from "../../public/Assets/StaffAugmentation/img(2).webp";
import section4BGImage from "../../public/Assets/StaffAugmentation/image 16(1).webp";
import section4SideImage from "../../public/Assets/StaffAugmentation/joyful-young-beautiful-girl-doing-call-sign-showing-empty-hand-isolated-orange-space 1.webp";
import Image from 'next/image';
export const metadata = {
  title: "Staff Augmentation Services In Dubai  | Branding 360",
  description:
    "Are you looking for contract staffing services in the UAE? Branding 360 Outsourcing is a trustworthy and reliable name known for providing the best employment solutions.",
};
const page = () => {
  const startsAtComp = (
    <div className="staff-pricing">
      <span>
        Starts at &nbsp;<span className="app-yellow-text">$5/hr</span>
      </span>
    </div>
  );
  return (
    <div className="staff-augmentation-page">
    <div className="staff-augmentation-page_herosection">
      <div className="staff-augmentation-page_herosection-left">
        <h1
          className="staff-augmentation-page_herosection-left_text-1"
          style={{
            color: "black",
            fontWeight: "700",
            fontSize: "30px",
            textAlign: "left",
          }}
        >
          Quick Access to Talented, Focused and Skilled Professionals, as &
          when needed with{" "}
          <span
            className="staff-augmentation-page_herosection-left_spantext"
            style={{ color: "white", backgroundColor: "#FFBB00" }}
          >
            Staff Augmentation
          </span>{" "}
          Services.
        </h1>
        <p
          className="staff-augmentation-page_herosection-left_text-2"
          style={{ textAlign: "left" }}
        >
          Branding 360 Neo assists clients in swiftly accessing a pool of
          skilled talent, providing a highly efficient solution to boost their
          team's capabilities, eliminating the intricacies associated with
          recruitment and training!
        </p>
        <Link
          href={"/contact"}
          className="staff-augmentation-page_herosection-left_button"
          style={{
            backgroundColor: "black",
            borderRadius: "8px",
            border: "none",
            color: "white",
            padding: "10px 25px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            width: "fit-content",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "18px" }}>Contact</span>
          <IoMdPaperPlane className="" style={{ fontSize: "25px" }} />
        </Link>
      </div>
      <div className="staff-augmentation-page_herosection-right">
        <Image width={0} height={0}
          className="staff-augmentation-page_herosection-right-img"
          src={heroimage}
          alt="staff-augmentation-hero-img"
        />
      </div>
    </div>

    <h2 className="" style={{ width: "90%" ,textAlign:'center',fontSize:'22px'}}>
      We’ve helped 250+ clients outsource their software development
    </h2>

    {/* <Marquee
      className='staff-augmentation-page_marquee'
      style={{ width: "80%" }}> */}
    <div className="staff-augmentation-page_marqueesection">
      <div className="staff-augmentation-page_marqueesection-content">
        <TbBulb style={{ fontSize: "22px" }} />
        <h2>Web development</h2>
      </div>
      <div className="staff-augmentation-page_marqueesection-content">
        <TbBulb style={{ fontSize: "22px" }} />
        <h2>Digital Marketing</h2>
      </div>
      <div className="staff-augmentation-page_marqueesection-content">
        <TbBulb style={{ fontSize: "22px" }} />
        <h2>Web design</h2>
      </div>
      <div className="staff-augmentation-page_marqueesection-content">
        <TbBulb style={{ fontSize: "22px" }} />
        <h2>Graphic Design</h2>
      </div>
      <div className="staff-augmentation-page_marqueesection-content">
        <TbBulb style={{ fontSize: "22px" }} />
        <h2>Content Marketing</h2>
      </div>
      <div className="staff-augmentation-page_marqueesection-content">
        <TbBulb style={{ fontSize: "22px" }} />
        <h2>PPC</h2>
      </div>
    </div>
    {/* </Marquee> */}

    <p style={{ fontWeight: "500" }}>A new way to extend your team</p>

    <div className="staff-augmentation-page_secondSection-heading">
      <p>STAFF AUGUMENTATION BY</p>
      <Image width={0} height={0} src={logoImage} alt="logo" />
    </div>

    <div
      className="staff-augmentation-page_secondSection-content"
      style={{
        backgroundImage: `url('/Assets/StaffAugmentation/img bg.webp')`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src={bgImage} alt='bgimg' /> */}
      <div className="staff-augmentation-page_secondSection-content-cards">
        <div className="staff-augmentation-page_secondSection-content-card">
          <h3>Creative Designing</h3>
          <Image width={0} height={0} src={card1Image} alt="card1Image" />
          <div className="staff-augmentation-page_secondSection-content-card-text">
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Social Media Management</p>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>SEO</p>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Performance Marketing</p>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Content Writing</p>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Post Design</p>
            </div>
          </div>
          {startsAtComp}
          <div className="staff-augmentation-page_secondSection-content-card-button">
            <Link
              className="staff-augmentation-page_secondSection-content-card-button-main"
              to={"/contact"}
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="staff-augmentation-page_secondSection-content-card-big staff-webdev-card">
          <h3>Website Development</h3>
          <Image width={0} height={0} src={card2Image} alt="card2Image" />
          <div className="staff-augmentation-page_secondSection-content-card-big-content">
            <div className="staff-augmentation-page_secondSection-content-card-bigtextContent">
              <span>Static</span>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>Bootstrap/PHP</span>
              </div>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>REACT</span>
              </div>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-bigtextContent">
              <span>Dynamic</span>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>Bootstrap/PHP </span>
              </div>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>React/PHP</span>
              </div>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>React / Node JS</span>
              </div>
              {/* <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>HTML / CSS /JS</span>
                <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
              </div> */}
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-bigtextContent">
              <span>Ecommerce</span>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>Bootstrap/PHP</span>
              </div>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>React/PHP</span>
              </div>
              <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>React / Node JS</span>
              </div>
              {/* <div className="staff-augmentation-page_secondSection-content-card-bigsubtextContent">
                <span style={{ color: "white" }}>HTML / CSS /JS</span>
                <span style={{ color: "#FFBB00" }}>$100.00 / H</span>
              </div> */}
            </div>
          </div>
          {startsAtComp}
          <div className="staff-augmentation-page_secondSection-content-bigcard-button">
            <Link
              className="staff-augmentation-page_secondSection-content-bigcard-button-main"
              to={"/contact"}
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="staff-augmentation-page_secondSection-content-card">
          <h3>Branding</h3>
          <Image width={0} height={0} src={card3Image} alt="card3Image" />
          <div className="staff-augmentation-page_secondSection-content-card-text">
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Logo</p>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Visiting card</p>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Intro and outro</p>
            </div>
            <div className="staff-augmentation-page_secondSection-content-card-textContent">
              <p>Company profile</p>
            </div>
          </div>
          {startsAtComp}
          <div className="staff-augmentation-page_secondSection-content-card-button">
            <Link
              className="staff-augmentation-page_secondSection-content-card-button-main"
              to={"/contact"}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="staff-augmentation-page_thirdSection">
      <div className="staff-augmentation-page_thirdSection_card">
        <div className="staff-augmentation-page_thirdSection_card-textContent">
          <h3 style={{ textAlign: "left" }}>
            Outsource Frontend Development
          </h3>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              // gap: "10px",
              fontSize: "16px",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <li style={{ textAlign: "left" }}>Angular Developers</li>
            <li style={{ textAlign: "left" }}>Web Developers</li>
            <li style={{ textAlign: "left" }}>React.js Developers</li>
            <li style={{ textAlign: "left" }}>JavaScript Developers</li>
            <li style={{ textAlign: "left" }}>HTML Developers</li>
            <li style={{ textAlign: "left" }}>CSS Developers</li>
          </ul>
        </div>
        <Image width={0} height={0} src={section3Card1} alt="section3Card1Image" />
      </div>
    </div>
    <div className="staff-augmentation-page_thirdSection">
      <div className="staff-augmentation-page_thirdSection_card">
        <div className="staff-augmentation-page_thirdSection_card-textContent">
          <h3 style={{ textAlign: "left" }}>Outsource Graphic Design</h3>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              // gap: "10px",
              fontSize: "16px",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <li style={{ textAlign: "left" }}>Logo Design</li>
            <li style={{ textAlign: "left" }}>Reels Design</li>
            <li style={{ textAlign: "left" }}>Vista Card Design</li>
            <li style={{ textAlign: "left" }}>Creative Design</li>
            <li style={{ textAlign: "left" }}>Web Design</li>
            <li style={{ textAlign: "left" }}>UI Design</li>
            <li style={{ textAlign: "left" }}>UX Design</li>
          </ul>
        </div>
        <Image width={0} height={0} src={section3Card2} alt="section3Card1Image" />
      </div>
    </div>
    <div className="staff-augmentation-page_thirdSection">
      <div className="staff-augmentation-page_thirdSection_card">
        <div className="staff-augmentation-page_thirdSection_card-textContent">
          <h3 style={{ textAlign: "left" }}>Outsource Backend Development</h3>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              // gap: "10px",
              fontSize: "16px",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <li style={{ textAlign: "left" }}>PHP Developers</li>
            <li style={{ textAlign: "left" }}>MongoDB Developers</li>
            <li style={{ textAlign: "left" }}>Laravel Developers</li>
            <li style={{ textAlign: "left" }}>Node Js Developers</li>
            <li style={{ textAlign: "left" }}>SQL Developers</li>
          </ul>
        </div>
        <Image width={0} height={0} src={section3Card3} alt="section3Card1Image" />
      </div>
    </div>

    <div
      className="staff-augmentation-page_fourthSection"
      style={{
        backgroundImage: `url('/Assets/StaffAugmentation/image 16(1).webp')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="staff-augmentation-page_fourthSection-content">
        <h4>Let’s Collaborate to Discuss Your Project!</h4>
        <span>
          Call Us Now to Know How Our Strategies Can Help Your Brand Grow at
          Record Speed!
        </span>
        <div className="staff-augmentation-page_fourthSection-content-button">
          <a
            href="tel:+919919444434"
            style={{
              backgroundColor: "black",
              borderRadius: "10px",
              padding: "12px 25px",
              border: "1px solid black",
              color: "white",
              textDecoration: "none",
            }}
          >
            Call Us Now
          </a>
          <a
            href="mailto:admin@branding360.in"
            style={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              padding: "12px 25px",
              border: "1px solid black",
              color: "black",
              textDecoration: "none",
            }}
          >
            Email Us
          </a>
        </div>
      </div>
      <div className="staff-augmentation-page_fourthSection-img">
        <Image width={0} height={0} src={section4SideImage} alt="section4SideImage" />
      </div>
    </div>
  </div>
  )
}

export default page