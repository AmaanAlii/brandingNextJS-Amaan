'use client'
import BannerMain from "@/componets/BannerMain/BannerMain";
import InfoContainer from "@/componets/InfoContainer/InfoContainer";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import AboutUsBannerBgImg from "../../public/Assets/AboutUs/AboutUsBannerBgImg.jpeg";
import AboutUsFounderImg1 from "../../public/Assets/AboutUs/AboutUsFounderImg1.jpeg";
import AboutUsFounderImg2 from "../../public/Assets/AboutUs/AboutUsFounderImg2.jpeg";
import AboutUsFounderBottomImg1 from "../../public/Assets/AboutUs/AboutUsFounderBottomImg1.jpeg";
import AboutUsFounderBottomImg2 from "../../public/Assets/AboutUs/AboutUsFounderBottomImg2.jpeg";
import AboutUsHowWeDoItImg1 from "../../public/Assets/AboutUs/AboutUsHowWeDoItImg1.webp";
import AboutUsFounderTitleImg from "../../public/Assets/AboutUs/AboutUsFounderTitleImg.webp";
import AboutUsClientsMarqueeImg1 from "../../public/Assets/AboutUs/AboutUsClientsMarqueeImg1.png";
import AboutUsClientsMarqueeImg2 from "../../public/Assets/AboutUs/AboutUsClientsMarqueeImg1.png";
import HomeInfoContImg from "../../public/Assets/Home/HomeInfoContImg.webp";
import ValuesSectionImg from "../../public/Assets/AboutUs/about img.webp";
import AboutUsMonkeyImg from "../../public/Assets/AboutUs/AboutUsMonkeyImg.webp";
import MainLogo from "../../public/Assets/Logos/MainLogo.webp";
import { internalLinks } from "../../componets/internalLinks";
import Link from "next/link";
import Image from "next/image";


const page = () => {
  useEffect(() => {
    const logo = document.getElementById("logo");
    const logoSection = document.querySelector(
      ".about-us-who-are-we-logo-section"
    );
    const logoHeight = logo.clientHeight;
    const logoSectionHeight = logoSection.clientHeight;

    const handleScroll = () => {
      const scrollY = window.scrollY + 400;

      if (scrollY >= logoSection.offsetTop) {
        const scrollDistance = scrollY - logoSection.offsetTop;
        const maxScroll = logoSectionHeight - logoHeight;
        const scrollPercentage = Math.min(scrollDistance / maxScroll, 1);
        const translateY = scrollPercentage * maxScroll;

        logo.style.transform = `translateY(${translateY}px)`;
      } else {
        logo.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const valuesData = [
    {
      number: "1",
      name: "Transparency",
    },
    {
      number: "2",
      name: "Data-Driven",
    },
    {
      number: "3",
      name: "Technology",
    },
    {
      number: "4",
      name: "Diversity",
    },
    {
      number: "5",
      name: "Creativity",
    },
    {
      number: "6",
      name: "Innovation",
    },
  ];

  const needHelpRef = useRef();

  const scrollToNeedHelp = () => {
    if (needHelpRef.current) {
      window.scrollTo({
        top: needHelpRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const openWhatsappChat = (phoneNumber) => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  const openLinkedInProfile = (profileUrl) => {
    window.open(profileUrl, "_blank");
  };
  return (
    <div className="about-us">
      <BannerMain currentPage="About Us" bgImage={'/Assets/AboutUs/AboutUsBannerBgImg.jpeg'} />
      <InfoContainer
        image={HomeInfoContImg}
        subheading="// DISCOVER OUR COMPANY"
        heading="Experience Customer-Centric Branding and Marketing Excellence in Dubai with Branding 360 Neo LLC!"
        text="Branding 360 Neo LLC stands out as a premier brand and marketing agency in Dubai. Whether it's crafting marketing strategy, promoting through social media, excelling in performance marketing, handling branding, web designing and development, traditional advertising, or diving into content marketing and beyond, we excel in every facet, customized solutions to meet specific business objectives."
        text2="As a branding agency in Dubai, our focus is on bridging the connection between customers and brands through innovative brand experiences. In the rapidly evolving business landscape, we recognize the need to approach marketing strategy in novel ways. Crafting campaigns and strategies that resonate with customers requires a swift, data-driven, and impactful approach, rooted in a deep understanding of customer preferences. Marketing companies in the UAE leveraging this insightful knowledge to create compelling products are poised for success with customers."
        cardText={[
          "As one of the prominent branding and marketing companies in Dubai, we are dedicated to creating result-driven strategies & campaigns that characterize a brand's unique experience and qualities.",
          "Being recognized as one of the top marketing companies in the UAE, we emphasize collaboration and iteration, ensuring consistent assistance throughout the entire branding & marketing journey.",
          "Whether it's performance marketing, web development or social media presence, our marketing agency places a premium on creating impactful and targeted interactions.",
        ]}
        readMore="false"
      />
      <div className="home-sbout-us-heading about-us-our-story">
        <h2>
          Our Story
          <span>Top Marketing & Branding Agency in Dubai!</span>
        </h2>

        <div className="home-about-us-heading-right">
          <h4>Innovate.</h4>
          <h4>Engage.</h4>
          <h4>Succeed.</h4>
        </div>
      </div>

      <div className="about-us-clients-marquee-section">
        <Marquee direction="left">
          <Image width={0} height={0} src={AboutUsClientsMarqueeImg1} alt="Our Clients" />
        </Marquee>
        <Marquee direction="right">
          <Image width={0} height={0} src={AboutUsClientsMarqueeImg2} alt="Our Clients" />
        </Marquee>
      </div>

      <div className="about-us-who-are-we">
        <div>
          <div className="about-us-who-are-we-logo-section">
            <Image width={0} height={0} src={MainLogo} alt="logo" id="logo" />
          </div>
          <div className="about-us-who-are-we-right">
            <h3>
              We are a Branding and Marketing Agency in Dubai, Elevating Brands
              via Culture, Vision, and Purpose!
            </h3>
            <div className="who-are-we-paras">
              <p>
                Branding 360 Neo LLC stands out as a prominent marketing and
                branding agency in Dubai, offering custom solutions and services
                centered around customers and sales generation.
              </p>
              <p>
                Back in 2017, a team of marketing veterans with years of
                industry experience came together to form a branding and
                marketing agency in the dynamic heart of Dubai. As we broaden
                our presence with offices in India (operations and technical
                department) and Dubai (Sales and Accounts), we've quickly become
                one of the rapidly flourishing all-encompassing marketing and
                branding companies in Dubai.
              </p>
              <p>
                From the beginning, our dedication has been unwavering in
                providing personalized, and unique marketing and branding
                services & solutions to clients. With a growing list of clients,
                we are deeply rooted in the vibrant city of Dubai, staying
                abreast of the latest digital trends and solutions while eagerly
                embracing new challenges.
              </p>
              <p>
                Our commitment to excellence has catapulted our branding agency
                in Dubai to the forefront, allowing us to create a significant
                global presence in the industry. Recognized for our skilled
                application of knowledge, our objective is to seamlessly align
                our clients and consumers.
              </p>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="116"
          height="191"
          viewBox="0 0 116 191"
          fill="none"
        >
          <path
            d="M54.2105 80.9983C54.184 81.2597 43.697 77.9226 30.8793 78.1259C17.8899 78.0022 8.66923 84.5271 8.91922 84.7228C8.36369 84.767 16.5225 75.256 30.8035 75.2308C44.6477 75.0894 54.237 81.3114 54.2105 80.9983Z"
            fill="black"
          />
          <path
            d="M7.91219 85.4224C7.96648 85.4981 6.08012 86.0044 4.58397 87.546C3.07266 89.075 2.76337 91.0282 2.69141 90.979C2.77221 91.0585 2.45907 88.9399 4.1686 87.142C5.90465 85.4097 7.98541 85.5057 7.91219 85.4224Z"
            fill="black"
          />
          <path
            d="M7.32927 84.5738C7.33684 84.6672 5.45807 84.1369 3.38239 84.6925C1.30419 85.2303 0.0353522 86.7517 0 86.6722C0.0277767 86.7808 0.845925 84.8036 3.2322 84.1344C5.60838 83.5359 7.3482 84.6849 7.32927 84.5738Z"
            fill="black"
          />
          <path
            d="M83.4565 46.2848C79.2205 41.1209 73.78 38.2169 68.0934 38.6841C62.4067 39.1525 57.5117 42.9049 54.1772 48.6913C50.8466 54.4764 49.1092 62.2741 49.8036 70.698C50.4526 78.5967 53.1191 85.6079 56.9384 90.7049C60.2628 87.6697 65.5518 84.0069 72.9417 82.3971C79.6473 81.0083 85.5485 81.6446 89.8236 82.6559C91.2238 78.0589 91.8197 72.804 91.3665 67.2802C90.6733 58.8588 87.6886 51.4462 83.4565 46.2848Z"
            fill="white"
          />
          <path
            d="M49.8052 70.698C49.1107 62.2741 50.8481 54.4764 54.1788 48.6913C57.5145 42.9049 62.4095 39.1524 68.0949 38.684C73.7816 38.2169 79.2221 41.1208 83.458 46.2848C87.6902 51.4462 90.6749 58.8588 91.368 67.2802C91.8213 72.8039 91.2266 78.0589 89.8252 82.6559C90.3832 82.7859 90.9122 82.9248 91.4135 83.0624C92.8377 78.2709 93.4273 72.8406 92.9602 67.1514C92.2329 58.3159 89.1067 50.5056 84.5981 45.002C80.0957 39.4997 74.173 36.2952 67.9409 36.8103C61.71 37.3204 56.392 41.449 52.8467 47.6117C49.2963 53.7794 47.4858 61.9963 48.2105 70.8268C48.891 79.0904 51.6713 86.4588 55.7191 91.8816C56.0916 91.5041 56.4969 91.1127 56.9413 90.7048C53.1207 85.6066 50.4541 78.5967 49.8052 70.698Z"
            fill="black"
          />
          <path
            d="M52.667 95.4194C52.6619 95.422 52.6543 95.427 52.6543 95.4245C52.6492 95.4371 52.6543 95.4347 52.667 95.4194Z"
            fill="#666666"
          />
          <path
            d="M73.5554 85.2279C79.535 83.9362 85.1231 83.8618 89.3402 84.1357C89.9336 84.1724 90.4992 84.219 91.0371 84.2683C94.7023 84.6104 96.9648 85.1609 96.9307 85.1458C97.0355 85.1976 94.9713 84.0637 91.4146 83.0625C90.9146 82.9249 90.3855 82.786 89.8262 82.656C85.5511 81.6447 79.6498 81.0083 72.9443 82.3972C65.5557 84.0069 60.2655 87.6697 56.9411 90.7049C56.4979 91.1115 56.0914 91.5042 55.7189 91.8817C53.7935 93.8197 52.7897 95.2894 52.666 95.4207C52.7721 95.3916 54.0687 94.2388 56.3439 92.6834C56.782 92.3854 57.2542 92.0723 57.7617 91.7491C61.4194 89.4196 66.8738 86.6028 73.5554 85.2279Z"
            fill="black"
          />
          <path
            d="M75.9295 61.2411C76.2894 65.6008 73.2818 69.4037 69.2176 69.7383C65.1508 70.0716 61.5639 66.8116 61.2066 62.4519C60.8493 58.0973 63.8542 54.2919 67.9197 53.9586C71.9852 53.6227 75.5709 56.8853 75.9295 61.2411Z"
            fill="black"
          />
          <path
            d="M69.9344 58.8662C70.0834 60.6831 68.7224 62.2765 66.898 62.4267C65.0698 62.577 63.4687 61.2285 63.3198 59.4079C63.1708 57.5948 64.5294 56.0027 66.3563 55.8525C68.1833 55.7022 69.7855 57.0506 69.9344 58.8662Z"
            fill="white"
          />
          <path
            d="M49.6465 8.87343C65.8504 10.0173 83.1617 16.1079 94.1373 27.2426C86.1578 14.3479 70.7063 4.6021 51.784 0L49.6465 8.87343Z"
            fill="black"
          />
          <path
            d="M77.5389 132.897C89.9841 125.546 97.071 115.135 100.469 109.236C99.7022 107.771 98.9636 106.415 98.2591 105.167C84.9401 118.458 67.3676 126.946 48.7736 130.586C48.4339 130.653 48.0918 130.719 47.7509 130.781C46.453 131.019 45.1512 131.236 43.8457 131.432C44.5426 133.099 45.3229 135.16 46.006 137.437C46.3709 138.65 46.6751 139.824 46.934 140.932C48.4074 140.934 50.0866 140.885 51.9363 140.74C52.5107 140.696 53.1067 140.639 53.7115 140.574C60.4511 139.856 69.0013 137.864 77.5389 132.897Z"
            fill="white"
          />
          <path
            d="M100.772 109.81C97.7995 116.131 91.3641 126.976 78.559 134.65C69.6932 139.732 60.9928 141.392 54.1445 141.703C55.3225 144.88 56.3452 148.401 57.0421 152.233C58.4082 159.627 57.8969 166.253 56.8086 171.529C57.3085 171.808 57.8098 172.093 58.3186 172.388C65.2565 176.299 73.1476 181.692 82.675 185.888C87.4021 187.829 92.8476 189.58 98.1264 188.352C103.499 187.218 107.232 182.238 109.424 176.828C118.455 154.092 110.515 131.267 104.375 117.241C103.147 114.531 101.932 112.053 100.772 109.81Z"
            fill="black"
          />
          <path
            d="M66.9375 177.495C71.681 180.333 76.8715 183.329 82.6768 185.888C87.4039 187.829 92.8494 189.58 98.1282 188.352C103.501 187.218 107.234 182.238 109.426 176.828C110 175.382 110.504 173.933 110.947 172.487C97.5853 164.657 77.9245 172.082 66.9375 177.495Z"
            fill="white"
          />
          <path
            d="M114.252 143.422C112.349 132.936 108.766 123.992 105.295 116.814C103.872 113.931 102.476 111.324 101.147 108.996C101.058 108.833 100.965 108.675 100.877 108.52C100.103 107.174 99.3557 105.925 98.6436 104.774C100.425 102.971 102.136 101.092 103.753 99.1151C102.097 101.041 100.354 102.866 98.5426 104.61C98.4126 104.734 98.2863 104.861 98.1575 104.985C84.3916 118.074 66.4617 126.052 47.845 129.1C47.5521 129.149 47.2554 129.191 46.9625 129.235C45.6848 129.435 44.4044 129.613 43.1216 129.763C42.8237 129.797 42.5245 129.837 42.2265 129.869C35.8151 130.576 29.3646 130.71 23.0151 130.273L22.7891 132.532C29.3583 132.82 35.9818 132.517 42.5295 131.627C42.8666 133.438 43.3565 135.655 44.0661 138.019C44.3679 139.025 44.6885 139.989 45.0143 140.896C45.0724 141.059 45.1317 141.222 45.1911 141.38C45.7769 141.452 46.4069 141.52 47.0849 141.574C48.6089 141.703 50.3601 141.779 52.283 141.757C53.3764 145.054 54.3523 148.686 55.0455 152.583C56.3447 159.403 56.2121 165.695 55.5758 170.841C49.8424 167.687 44.8691 165.509 41.0157 164.868C36.5436 163.941 34.122 165.279 34.1473 165.132C34.1245 165.272 36.5941 164.074 40.9538 165.176C44.7883 165.988 49.7199 168.399 55.4482 171.822C55.8283 172.052 56.2096 172.28 56.5984 172.518C56.9949 172.759 57.3977 173.006 57.803 173.26C64.5944 177.371 72.3037 182.968 81.9978 187.457C86.8271 189.516 92.505 191.552 98.5805 190.235C104.832 188.955 109.038 183.25 111.297 177.61C116.082 166.082 116.123 153.816 114.252 143.422ZM51.9383 140.739C50.0886 140.884 48.4093 140.933 46.9359 140.93C46.6771 139.823 46.3728 138.649 46.0079 137.436C45.3249 135.159 44.5446 133.097 43.8476 131.431C45.1532 131.236 46.4549 131.019 47.7528 130.779C48.0937 130.717 48.4346 130.651 48.7755 130.585C67.3708 126.945 84.9433 118.457 98.261 105.165C98.9655 106.413 99.7041 107.77 100.471 109.235C97.0729 115.133 89.9849 125.545 77.5409 132.895C69.0033 137.862 60.4531 139.855 53.7147 140.572C53.1074 140.638 52.5128 140.694 51.9383 140.739ZM109.426 176.828C107.234 182.238 103.501 187.218 98.1285 188.352C92.8484 189.58 87.4042 187.829 82.6771 185.888C73.1496 181.692 65.2585 176.298 58.3206 172.388C57.8118 172.095 57.3093 171.808 56.8106 171.529C57.8977 166.251 58.4103 159.625 57.0442 152.233C56.3472 148.401 55.3257 144.88 54.1465 141.703C60.9947 141.393 69.6939 139.734 78.561 134.65C91.3661 126.976 97.8002 116.131 100.774 109.81C101.934 112.051 103.148 114.53 104.379 117.241C110.517 131.267 118.457 154.092 109.426 176.828Z"
            fill="black"
          />
          <path
            d="M38.2139 50.0107C37.9399 56.9625 31.8329 61.3841 25.578 63.3297C22.433 64.4218 19.1515 65.1453 15.8599 65.9016C12.7136 66.9344 8.88174 66.7626 6.43359 70.1577C9.09006 67.2336 12.7894 67.9899 16.0115 67.4571C19.3498 67.2197 22.7107 67.0177 26.097 66.394C29.4718 65.7652 32.9276 64.8081 36.1901 62.5229C39.4589 60.3601 42.3161 56.0395 43.1456 51.0738L38.2139 50.0107Z"
            fill="black"
          />
        </svg>
      </div>
      <div
        className="about-us-how-we-do-it"
        // style={aboutUsHowWeDoItStyle}
      >
        <div className="about-us-how-we-do-it-left">
          <Image width={0} height={0} src={AboutUsHowWeDoItImg1} alt="How we Do It" />
        </div>
        <div className="about-us-how-we-do-it-right">
          <div className="about-us-how-we-do-it-heading">
            <h3 className="app-yellow-text">
              Best Branding and Marketing Agency Dubai{" "}
            </h3>
            <h2>Our Work Flow!</h2>
          </div>
          <div className="about-us-how-we-do-it-small-headings headings-center">
            <div className="about-us-how-we-do-it-headings-left">
              <h2>1</h2>
            </div>
            <div className="about-us-how-we-do-it-headings-right">
              <h3 className="app-yellow-text">Sales Call</h3>
              <span>
                Participating in sales calls helps us gain a deeper
                understanding of our audience, allowing us to anticipate the
                most effective marketing strategy tailored to business goals and
                requirements.
              </span>
            </div>
          </div>
          <div className="about-us-how-we-do-it-small-headings headings-right">
            <div className="about-us-how-we-do-it-headings-left">
              <h2>2</h2>
            </div>
            <div className="about-us-how-we-do-it-headings-right">
              <h3 className="app-yellow-text">Technical Meeting</h3>
              <span>
                Being among the best marketing agencies in Dubai, we frequently
                organize technical meetings. These sessions provide a platform
                for the brand and agency to synchronize interpretations, address
                any lingering issues, and ensure unity, fostering a cohesive
                team progression.
              </span>
            </div>
          </div>
          <div className="about-us-how-we-do-it-small-headings headings-center">
            <div className="about-us-how-we-do-it-headings-left">
              <h2>3</h2>
            </div>
            <div className="about-us-how-we-do-it-headings-right">
              <h3 className="app-yellow-text">Team Meeting</h3>
              <span>
                Conducting team meetings serves as an effective approach to help
                our team understand the client's objectives, goals, and
                responsibilities.
              </span>
            </div>
          </div>
          <div className="about-us-how-we-do-it-small-headings headings-left">
            <div className="about-us-how-we-do-it-headings-left">
              <h2>4</h2>
            </div>
            <div className="about-us-how-we-do-it-headings-right">
              <h3 className="app-yellow-text">On-Boarding Call</h3>
              <span>
                The customer on-boarding process is crucial for a marketing
                agency in Dubai, as it nurtures mutual understanding and sets
                clear expectations for the relationship.
              </span>
            </div>
          </div>
          <Link href={internalLinks.contact}>
            <button className="app-yellow-buttons">
              Lets Start &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_658_15285)">
                  <path
                    d="M5.5 13L18 5.99999M16.25 23.5H16.5C17.4938 15.8816 19.6891 8.46896 23.004 1.53799L23.26 0.99999L23 0.73999L22.462 0.99599C15.531 4.31096 8.11838 6.50621 0.5 7.49999V7.74999L5.5 12.75V20.5H5.75L7.524 18.81C8.22291 18.1447 8.99952 17.5662 9.837 17.087L16.25 23.5Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_658_15285">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="about-us-founders-section">
        <div className="about-us-founder-container">
          <div className="about-us-founder-left">
            <h2>Rishabh Agrawal</h2>
            <h2>Director & Operations</h2>
            <p>
              Rishabh Agrawal, serving as the Director & Operations at Branding
              360 Neo LLC, entered the dynamic field of Marketing propelled by
              his enthusiasm for mathematics, numbers, analysis, and human
              psychology. In 2017, he embraced entrepreneurship, founding
              Branding 360 Neo LLC, and gained insights into SEO, Inbound
              Marketing, and Advertising through the development and promotion
              of his business website
            </p>
            <p>
              His unwavering pursuit of knowledge led him to delve into various
              digital marketing techniques during his school days. His belief in
              the continuous learning process honed his expertise in SEO, SMO,
              content strategy, graphic design, online business growth, sales
              conversion, website designing, e-commerce solutions, and online
              advertising. As a dedicated enthusiast, he finds satisfaction in
              guiding others into the realm of Digital Marketing and helping
              them initiate their professional journeys. His commitment to
              perpetual learning and aiding others has not only shaped his
              identity as a marketer but also as an individual dedicated to
              ongoing improvement.
            </p>
            <div>
              <svg
                onClick={() => openWhatsappChat("+919022256222")}
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="5.5"
                  fill="white"
                  stroke="#757575"
                />
                <path
                  d="M38.6281 15.3651C37.246 13.976 35.5998 12.8746 33.7854 12.1252C31.971 11.3757 30.0248 10.9933 28.0603 11.0001C19.8291 11.0001 13.1206 17.6751 13.1206 25.865C13.1206 28.49 13.8141 31.04 15.1106 33.29L13 41L20.9146 38.93C23.1005 40.115 25.5578 40.745 28.0603 40.745C36.2915 40.745 43 34.07 43 25.88C43 21.9051 41.4472 18.1701 38.6281 15.3651ZM28.0603 38.225C25.8291 38.225 23.6432 37.625 21.7286 36.5L21.2764 36.23L16.5729 37.46L17.8241 32.9L17.5226 32.435C16.283 30.4655 15.6248 28.1889 15.6231 25.865C15.6231 19.0551 21.201 13.5051 28.0452 13.5051C31.3618 13.5051 34.4824 14.7951 36.8191 17.1351C37.9761 18.281 38.893 19.6441 39.5167 21.1452C40.1403 22.6463 40.4583 24.2557 40.4523 25.88C40.4824 32.69 34.9045 38.225 28.0603 38.225ZM34.8744 28.985C34.4975 28.805 32.6583 27.905 32.3266 27.77C31.9799 27.65 31.7387 27.59 31.4824 27.95C31.2261 28.325 30.5176 29.165 30.3065 29.405C30.0955 29.66 29.8693 29.69 29.4925 29.495C29.1156 29.315 27.9095 28.91 26.4925 27.65C25.3769 26.66 24.6382 25.445 24.4121 25.07C24.201 24.695 24.3819 24.5 24.5779 24.305C24.7437 24.14 24.9548 23.8701 25.1357 23.6601C25.3166 23.4501 25.392 23.2851 25.5126 23.0451C25.6332 22.7901 25.5729 22.5801 25.4824 22.4001C25.392 22.2201 24.6382 20.3901 24.3367 19.6401C24.0352 18.9201 23.7186 19.0101 23.4925 18.9951H22.7688C22.5126 18.9951 22.1206 19.0851 21.7739 19.4601C21.4422 19.8351 20.4774 20.7351 20.4774 22.5651C20.4774 24.3951 21.8191 26.165 22 26.405C22.1809 26.66 24.6382 30.41 28.3769 32.015C29.2663 32.405 29.9598 32.63 30.5025 32.795C31.392 33.08 32.206 33.035 32.8543 32.945C33.5779 32.84 35.0703 32.045 35.3719 31.175C35.6884 30.305 35.6884 29.57 35.5829 29.405C35.4774 29.24 35.2513 29.165 34.8744 28.985Z"
                  fill="black"
                />
              </svg>
              <svg
                onClick={() =>
                  openLinkedInProfile(
                    "https://www.linkedin.com/in/branding360/"
                  )
                }
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="5.5"
                  fill="white"
                  stroke="#757575"
                />
                <path
                  d="M13 15.1488C13 13.9619 13.9862 13 15.2031 13H40.7969C42.0138 13 43 13.9619 43 15.1488V40.8512C43 42.0381 42.0138 43 40.7969 43H15.2031C13.9862 43 13 42.0381 13 40.8512V15.1488ZM22.2681 38.1138V24.5669H17.7663V38.1138H22.2681ZM20.0181 22.7163C21.5875 22.7163 22.5644 21.6775 22.5644 20.3763C22.5363 19.0469 21.5894 18.0363 20.0481 18.0363C18.5069 18.0363 17.5 19.0487 17.5 20.3763C17.5 21.6775 18.4769 22.7163 19.9881 22.7163H20.0181ZM29.2206 38.1138V30.5481C29.2206 30.1431 29.2506 29.7381 29.3706 29.4494C29.695 28.6412 30.4356 27.8031 31.6806 27.8031C33.31 27.8031 33.9606 29.0444 33.9606 30.8669V38.1138H38.4625V30.3438C38.4625 26.1812 36.2425 24.2463 33.28 24.2463C30.8913 24.2463 29.8206 25.5588 29.2206 26.4831V26.53H29.1906C29.2006 26.5143 29.2106 26.4987 29.2206 26.4831V24.5669H24.7206C24.7769 25.8381 24.7206 38.1138 24.7206 38.1138H29.2206Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="about-us-founder-right">
            <div>
              <Image width={0} height={0}
                className="about-us-founder-title-img"
                src={AboutUsFounderTitleImg}
                alt="title"
              />
              <Image width={0} height={0}
                className="about-us-founder-img"
                src={AboutUsFounderImg1}
                alt="founder"
              />
            </div>
            <Image width={0} height={0} src={AboutUsFounderBottomImg1} alt="Business" />
          </div>
        </div>
        <div className="about-us-founder-container about-founder-reverse">
          <div className="about-us-founder-left">
            <h2>Sameer Hasan Minai</h2>
            <h2>Director & Finances</h2>
            <p>
              Sameer Hasan Minai, our Director & Finance, joined Branding 360
              Neo LLC in 2020, injecting the team with expertise, innovation,
              and a results-driven approach. Proficient in crafting impactful
              digital marketing and sales strategies, he oversees digital
              engagement, business development, and sales management. Committed
              to steering strategic relationships toward business goals, he is
              devoted to propelling organizations to new pinnacles.
            </p>
            <p>
              As the marketing and financial leader at Branding 360 Neo LLC,
              Sameer draws from his wealth of experience at the company. A
              graduate in geology from A.M.U, Aligarh, and a post-graduate with
              an M.Tech in Applied Geology, Sameer's journey includes pivotal
              roles at IIT Kanpur, where he coordinated projects involving GPS
              landholding segregation. His technical acumen and client-centric
              approach guarantee a profound understanding of business needs,
              ensuring the success and growth of your ventures under his
              guidance at Branding 360 Neo LLC.
            </p>
            <div>
              <svg
                onClick={() => openWhatsappChat("+919919444434")}
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="5.5"
                  fill="white"
                  stroke="#757575"
                />
                <path
                  d="M38.6281 15.3651C37.246 13.976 35.5998 12.8746 33.7854 12.1252C31.971 11.3757 30.0248 10.9933 28.0603 11.0001C19.8291 11.0001 13.1206 17.6751 13.1206 25.865C13.1206 28.49 13.8141 31.04 15.1106 33.29L13 41L20.9146 38.93C23.1005 40.115 25.5578 40.745 28.0603 40.745C36.2915 40.745 43 34.07 43 25.88C43 21.9051 41.4472 18.1701 38.6281 15.3651ZM28.0603 38.225C25.8291 38.225 23.6432 37.625 21.7286 36.5L21.2764 36.23L16.5729 37.46L17.8241 32.9L17.5226 32.435C16.283 30.4655 15.6248 28.1889 15.6231 25.865C15.6231 19.0551 21.201 13.5051 28.0452 13.5051C31.3618 13.5051 34.4824 14.7951 36.8191 17.1351C37.9761 18.281 38.893 19.6441 39.5167 21.1452C40.1403 22.6463 40.4583 24.2557 40.4523 25.88C40.4824 32.69 34.9045 38.225 28.0603 38.225ZM34.8744 28.985C34.4975 28.805 32.6583 27.905 32.3266 27.77C31.9799 27.65 31.7387 27.59 31.4824 27.95C31.2261 28.325 30.5176 29.165 30.3065 29.405C30.0955 29.66 29.8693 29.69 29.4925 29.495C29.1156 29.315 27.9095 28.91 26.4925 27.65C25.3769 26.66 24.6382 25.445 24.4121 25.07C24.201 24.695 24.3819 24.5 24.5779 24.305C24.7437 24.14 24.9548 23.8701 25.1357 23.6601C25.3166 23.4501 25.392 23.2851 25.5126 23.0451C25.6332 22.7901 25.5729 22.5801 25.4824 22.4001C25.392 22.2201 24.6382 20.3901 24.3367 19.6401C24.0352 18.9201 23.7186 19.0101 23.4925 18.9951H22.7688C22.5126 18.9951 22.1206 19.0851 21.7739 19.4601C21.4422 19.8351 20.4774 20.7351 20.4774 22.5651C20.4774 24.3951 21.8191 26.165 22 26.405C22.1809 26.66 24.6382 30.41 28.3769 32.015C29.2663 32.405 29.9598 32.63 30.5025 32.795C31.392 33.08 32.206 33.035 32.8543 32.945C33.5779 32.84 35.0703 32.045 35.3719 31.175C35.6884 30.305 35.6884 29.57 35.5829 29.405C35.4774 29.24 35.2513 29.165 34.8744 28.985Z"
                  fill="black"
                />
              </svg>
              <svg
                onClick={() =>
                  openLinkedInProfile(
                    "https://www.linkedin.com/in/sameer-minai-1b0050182/"
                  )
                }
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="5.5"
                  fill="white"
                  stroke="#757575"
                />
                <path
                  d="M13 15.1488C13 13.9619 13.9862 13 15.2031 13H40.7969C42.0138 13 43 13.9619 43 15.1488V40.8512C43 42.0381 42.0138 43 40.7969 43H15.2031C13.9862 43 13 42.0381 13 40.8512V15.1488ZM22.2681 38.1138V24.5669H17.7663V38.1138H22.2681ZM20.0181 22.7163C21.5875 22.7163 22.5644 21.6775 22.5644 20.3763C22.5363 19.0469 21.5894 18.0363 20.0481 18.0363C18.5069 18.0363 17.5 19.0487 17.5 20.3763C17.5 21.6775 18.4769 22.7163 19.9881 22.7163H20.0181ZM29.2206 38.1138V30.5481C29.2206 30.1431 29.2506 29.7381 29.3706 29.4494C29.695 28.6412 30.4356 27.8031 31.6806 27.8031C33.31 27.8031 33.9606 29.0444 33.9606 30.8669V38.1138H38.4625V30.3438C38.4625 26.1812 36.2425 24.2463 33.28 24.2463C30.8913 24.2463 29.8206 25.5588 29.2206 26.4831V26.53H29.1906C29.2006 26.5143 29.2106 26.4987 29.2206 26.4831V24.5669H24.7206C24.7769 25.8381 24.7206 38.1138 24.7206 38.1138H29.2206Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="about-us-founder-right">
            <div>
              <Image width={0} height={0}
                className="about-us-founder-title-img"
                src={AboutUsFounderTitleImg}
                alt="title"
              />
              <Image width={0} height={0}
                className="about-us-founder-img"
                src={AboutUsFounderImg2}
                alt="founder"
              />
            </div>
            <Image width={0} height={0}
              className="about-us-founder-bottom-img"
              src={AboutUsFounderBottomImg2}
              alt="Business"
            />
          </div>
        </div>
      </div>

      <div className="about-us-our-core-values">
        <div className="about-core-values-left">
          <div className="about-core-values-heading-section">
            <h3>Our Fundamentals</h3>
            <span>
              Branding 360 Neo LLC showcases its fundamental principles through
              its team’s unwavering dedication and outstanding performance.
            </span>
          </div>
          <div className="about-core-values-content">
            {valuesData.map((value, index) => (
              <span key={index}>
                <h4>{value.number}</h4>
                {value.name}
              </span>
            ))}
          </div>
        </div>
        <div className="about-core-values-right">
          <Image width={0} height={0} src={ValuesSectionImg} alt="Core Values" />
        </div>
      </div>
      {/* <div className="about-need-help-container" ref={needHelpRef}>
        <NeedHelpMain />
      </div> */}
      <div className="page-bottom-monkey">
        <Image width={0} height={0} src={AboutUsMonkeyImg} alt="Clever Monkey" />
      </div>
    </div>
  );
};

export default page;
