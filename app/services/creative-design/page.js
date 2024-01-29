import BannerMain from "../../../componets/BannerMain/BannerMain";
import ServicesInfoContainer from "../../../componets/ServicesInfoContainer/ServicesInfoContainer";
import ServicesCardsContainer from "../../../componets/ServicesCardsContainer/ServicesCardsContainer";
import ServicesMidContent from "../../../componets/ServicesMidContent/ServicesMidContent";
import NeedHelpMain from "../../../componets/NeedHelpMain/NeedHelpMain";

import ServicesLatestWork from "../../../componets/ServicesLatestWork/ServicesLatestWork";

import ServicesBannerBgImg from "../../../public/Assets/Services-Creative-Design/CreativeDesignBanerBgImg.webp";
import ServicesInfoImg from "../../../public/Assets/Services-Creative-Design/CreativeDesignInfoImg.png";
import ServicesInfoRightImg from "../../../public/Assets/Services-Creative-Design/CreativeDesignInfoRightImg.webp";
import ServicesMidMainImg from "../../../public/Assets/Services-Creative-Design/CreativeDesignMidMainImg.webp";
import ServicesMidRightImg from "../../../public/Assets/Services-Creative-Design/ServicesMidRightImg.webp";
import MonkeyComp from "../../../componets/MonkeyComp/MonkeyComp";
import ServicesFAQ from "../../../componets/ServicesFAQ/ServicesFAQ";

export const metadata = {
  title: ' Best Graphic design company Dubai | Branding 360',
  description: 'Branding 360 is a top graphic design company in Dubai. Providing best graphic design services in Dubai and offer solutions that meet design and printing needs in dubai',
}
const page = () => {
    const infoContainerData = {
        leftGlobeFrontImg: ServicesInfoImg,
        rightSideImg: ServicesInfoRightImg,
        mainHeading:
          "Effective marketing campaigns hinge on pertinent and imaginative graphic design, and it is achievable through the premier graphic design company in Dubai.",
        text: [
          "The talented group of graphic and creative designers in our branding and design agency excels at bringing your brand to life through innovative and imaginative illustrations.",
          "Whether you're in need of imaginative designs for social media campaigns, logo design in the UAE, banner ads, creative content for email campaigns, or brochure design services in the UAE, our graphic design services provide swift delivery and competitive pricing.",
          "We also specialize as a UI/UX Design Services Company, providing innovative and creative designs and layouts for your upcoming business websites.",
          "In contrast to other branding and logo design companies, we invest time in thoroughly understanding your creative brief, projected mediums and channels, and brand design guidelines, target audience, and then strategically plan the process for logo design in the UAE.",
          "In our creative branding and design endeavors, we transcend the conventional promotion of products, services, or brands. Instead, we weave narratives that forge a profound connection with your target audience. Through a seamless integration of design visuals and compelling copy, our final designs stand out as distinctive and impactful, resonating both verbally and visually.",
        ],
      };
    
      const cardsContainerData = {
        bgHeading: "Design",
        mainHeading: "Creative Design Services We Offer!",
        cardsData: [
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                <path
                  d="M55.7982 7.23377C55.7982 6.66261 55.336 6.20044 54.7649 6.20044H7.23255C6.66139 6.20044 6.19922 6.66261 6.19922 7.23377V54.7661C6.19922 55.3373 6.66139 55.7994 7.23255 55.7994H54.7649C55.336 55.7994 55.7982 55.3373 55.7982 54.7661V15.9908L55.7992 15.9858L55.7982 15.9808V7.23377ZM53.7315 8.26711V14.9525H8.26589V8.26711H53.7315ZM8.26589 53.7328V17.0192H53.7315V53.7328H8.26589Z"
                  fill="black"
                />
                <path
                  d="M11.754 13.01H13.4877C14.0589 13.01 14.521 12.5479 14.521 11.9767C14.521 11.4055 14.0589 10.9434 13.4877 10.9434H11.754C11.1829 10.9434 10.7207 11.4055 10.7207 11.9767C10.7207 12.5479 11.1829 13.01 11.754 13.01Z"
                  fill="black"
                />
                <path
                  d="M16.9943 13.01H18.7279C19.2991 13.01 19.7613 12.5479 19.7613 11.9767C19.7613 11.4055 19.2991 10.9434 18.7279 10.9434H16.9943C16.4231 10.9434 15.9609 11.4055 15.9609 11.9767C15.9609 12.5479 16.4231 13.01 16.9943 13.01Z"
                  fill="black"
                />
                <path
                  d="M22.2365 13.01H23.9701C24.5413 13.01 25.0035 12.5479 25.0035 11.9767C25.0035 11.4055 24.5413 10.9434 23.9701 10.9434H22.2365C21.6653 10.9434 21.2031 11.4055 21.2031 11.9767C21.2031 12.5479 21.6653 13.01 22.2365 13.01Z"
                  fill="black"
                />
                <path
                  d="M29.1271 13.01H50.2448C50.816 13.01 51.2782 12.5479 51.2782 11.9767C51.2782 11.4055 50.816 10.9434 50.2448 10.9434H29.1271C28.5559 10.9434 28.0938 11.4055 28.0938 11.9767C28.0938 12.5479 28.5559 13.01 29.1271 13.01Z"
                  fill="black"
                />
                <path
                  d="M49.74 21.9699C49.5563 21.649 49.2142 21.4512 48.8439 21.4512H13.1525C12.7579 21.4512 12.3977 21.6762 12.2241 22.0314C12.0505 22.3856 12.0949 22.8084 12.3371 23.1202L15.976 27.7874L12.3371 32.4535C12.0949 32.7654 12.0505 33.1882 12.2241 33.5424C12.3977 33.8976 12.7579 34.1226 13.1525 34.1226H48.8439C49.2142 34.1226 49.5563 33.9248 49.74 33.6039C49.9246 33.282 49.9226 32.8875 49.7359 32.5676L46.9407 27.7874L49.7359 23.0062C49.9226 22.6863 49.9246 22.2918 49.74 21.9699ZM44.8518 27.2657C44.6631 27.5876 44.6631 27.9872 44.8518 28.3091L47.0426 32.056H15.2686L18.1012 28.4231C18.3918 28.0488 18.3918 27.526 18.1012 27.1517L15.2676 23.5178H47.0426L44.8518 27.2657Z"
                  fill="black"
                />
                <path
                  d="M21.7693 38.1248H13.4865C12.9153 38.1248 12.4531 38.5869 12.4531 39.1581V47.4409C12.4531 48.0121 12.9153 48.4742 13.4865 48.4742H21.7693C22.3404 48.4742 22.8026 48.0121 22.8026 47.4409V39.1581C22.8026 38.5869 22.3404 38.1248 21.7693 38.1248ZM20.7359 46.4076H14.5198V40.1914H20.7359V46.4076Z"
                  fill="black"
                />
                <path
                  d="M35.3064 38.1248H27.0236C26.4524 38.1248 25.9902 38.5869 25.9902 39.1581V47.4409C25.9902 48.0121 26.4524 48.4742 27.0236 48.4742H35.3064C35.8775 48.4742 36.3397 48.0121 36.3397 47.4409V39.1581C36.3397 38.5869 35.8775 38.1248 35.3064 38.1248ZM34.273 46.4076H28.0569V40.1914H34.273V46.4076Z"
                  fill="black"
                />
                <path
                  d="M48.8435 38.1248H40.5607C39.9895 38.1248 39.5273 38.5869 39.5273 39.1581V47.4409C39.5273 48.0121 39.9895 48.4742 40.5607 48.4742H48.8435C49.4146 48.4742 49.8768 48.0121 49.8768 47.4409V39.1581C49.8768 38.5869 49.4146 38.1248 48.8435 38.1248ZM47.8102 46.4076H41.594V40.1914H47.8102V46.4076Z"
                  fill="black"
                />
              </svg>
            ),
            heading: "Poster & Banner Design",
            text: "Our poster and banner design services focus on creating tailor-made designs that reflect the essence of the brand and its message, tailored to suit the specific target audience and goals. As one of the top-notch branding and logo design companies, our proficiency lies in crafting visually captivating posters for diverse brands.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
              >
                <g clip-path="url(#clip0_1040_9239)">
                  <path
                    d="M32.0094 25.2257H32.0188C34.8283 25.2257 37.1141 22.9399 37.1141 20.1304V5.28743C37.1141 2.4778 34.8283 0.192139 32.0094 0.192139C29.1998 0.192139 26.9141 2.4779 26.9141 5.28743V20.1304C26.9141 22.9399 29.1998 25.2257 32.0094 25.2257ZM28.9453 5.28743C28.9453 3.59794 30.3199 2.22339 32.0188 2.22339C33.7083 2.22339 35.0828 3.59794 35.0828 5.28743V20.1304C35.0828 21.8199 33.7083 23.1944 32.0188 23.1944H32.0094C30.3199 23.1944 28.9453 21.8199 28.9453 20.1304V5.28743Z"
                    fill="black"
                  />
                  <path
                    d="M19.9915 26.7744H19.982C17.1725 26.7744 14.8867 29.0602 14.8867 31.8697V46.7127C14.8867 49.5223 17.1725 51.8079 19.9915 51.8079C22.801 51.8079 25.0867 49.5222 25.0867 46.7127V31.8697C25.0867 29.0602 22.801 26.7744 19.9915 26.7744ZM23.0555 46.7127C23.0555 48.4022 21.6809 49.7767 19.982 49.7767C18.2925 49.7767 16.918 48.4022 16.918 46.7127V31.8697C16.918 30.1802 18.2925 28.8057 19.982 28.8057H19.9915C21.6809 28.8057 23.0555 30.1802 23.0555 31.8697V46.7127Z"
                    fill="black"
                  />
                  <path
                    d="M19.9972 14.8635H5.0893C2.28302 14.8635 0 17.1465 0 19.9555C0 22.7617 2.28302 25.0448 5.0893 25.0448H19.9971C22.8034 25.0448 25.0864 22.7617 25.0864 19.9555V19.9528C25.0865 17.1465 22.8034 14.8635 19.9972 14.8635ZM23.0553 19.9555C23.0553 21.6417 21.6834 23.0135 19.9972 23.0135H5.0893C3.40305 23.0135 2.03125 21.6417 2.03125 19.9528C2.03125 18.2666 3.40316 16.8948 5.0893 16.8948H19.9971C21.6834 16.8948 23.0552 18.2666 23.0552 19.9528L23.0553 19.9555Z"
                    fill="black"
                  />
                  <path
                    d="M40.6777 24.987H45.068C48.0432 24.987 50.4638 22.5664 50.4638 19.5912V18.5991C50.4638 15.6239 48.0432 13.2034 45.0579 13.2034C42.0826 13.2034 39.6621 15.6239 39.6621 18.5991V23.9713C39.6621 24.5323 40.1169 24.987 40.6777 24.987ZM41.6934 18.5991C41.6934 16.7438 43.2027 15.2346 45.068 15.2346C46.9232 15.2346 48.4325 16.7439 48.4325 18.5991V19.5912C48.4325 21.4464 46.9232 22.9557 45.068 22.9557H41.6934V18.5991Z"
                    fill="black"
                  />
                  <path
                    d="M11.3212 27.0129H6.93097C3.9557 27.0129 1.53516 29.4335 1.53516 32.4087V33.4008C1.53516 36.376 3.9557 38.7965 6.94102 38.7965C9.9163 38.7965 12.3368 36.376 12.3368 33.4008V28.0286C12.3368 27.4676 11.882 27.0129 11.3212 27.0129ZM10.3056 33.4008C10.3056 35.2561 8.79627 36.7653 6.93097 36.7653C5.07573 36.7653 3.56641 35.256 3.56641 33.4008V32.4087C3.56641 30.5535 5.07573 29.0442 6.93097 29.0442H10.3056V33.4008Z"
                    fill="black"
                  />
                  <path
                    d="M18.9016 12.9039H23.2918C23.8526 12.9039 24.3074 12.4493 24.3074 11.8883V6.51607C24.3074 3.5409 21.8869 1.12036 18.9016 1.12036C15.9264 1.12036 13.5059 3.5409 13.5059 6.51607V7.50824C13.5059 10.4834 15.9264 12.9039 18.9016 12.9039ZM15.5371 6.51607C15.5371 4.66083 17.0463 3.15161 18.9117 3.15161C20.767 3.15161 22.2762 4.66093 22.2762 6.51607V10.8727H18.9016C17.0463 10.8727 15.5371 9.36338 15.5371 7.50824V6.51607Z"
                    fill="black"
                  />
                  <path
                    d="M33.0992 39.0959H28.709C28.1482 39.0959 27.6934 39.5506 27.6934 40.1116V45.4838C27.6934 48.459 30.1139 50.8795 33.0992 50.8795C36.0744 50.8795 38.4949 48.459 38.4949 45.4838V44.4917C38.4949 41.5165 36.0744 39.0959 33.0992 39.0959ZM36.4637 45.4838C36.4637 47.3391 34.9545 48.8483 33.0891 48.8483C31.2338 48.8483 29.7246 47.339 29.7246 45.4838V41.1272H33.0992C34.9545 41.1272 36.4637 42.6365 36.4637 44.4917V45.4838Z"
                    fill="black"
                  />
                  <path
                    d="M46.9113 26.9553H32.0034C29.1971 26.9553 26.9141 29.2383 26.9141 32.0473C26.9141 34.8535 29.1971 37.1366 32.0034 37.1366H35.032C35.5928 37.1366 36.0476 36.6819 36.0476 36.1209C36.0476 35.56 35.5928 35.1053 35.032 35.1053H32.0034C30.3171 35.1053 28.9453 33.7335 28.9453 32.0446C28.9453 30.3584 30.3172 28.9866 32.0034 28.9866H46.9113C48.5976 28.9866 49.9694 30.3584 49.9694 32.0473C49.9694 33.7335 48.5975 35.1053 46.9113 35.1053H44.2146C43.6538 35.1053 43.199 35.56 43.199 36.1209C43.199 36.6819 43.6538 37.1366 44.2146 37.1366H46.9113C49.7176 37.1366 52.0006 34.8535 52.0006 32.0446C52.0006 29.2383 49.7176 26.9553 46.9113 26.9553Z"
                    fill="black"
                  />
                  <path
                    d="M40.2047 35.2766C39.8371 35.0316 39.339 35.056 38.9968 35.3357C38.6772 35.597 38.5477 36.0424 38.6758 36.4343C38.8088 36.8412 39.1928 37.1276 39.6213 37.1358C40.0409 37.1438 40.431 36.8844 40.5857 36.4941C40.7592 36.057 40.6005 35.5352 40.2047 35.2766Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1040_9239">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ),
            heading: "Logo Design in Dubai",
            text: "Break free from commonplace templates and embrace a unique vision! Leave a lasting impression with our brand logo design services, crafting logos that instantly capture attention. We specialize in creating extraordinary company logo design templates that not only visually appealing but also develops a distinctive brand identity for your business.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M65.3661 56.5085H4.63387C2.0914 56.5085 0.0410156 54.4171 0.0410156 51.8746V7.17634C0.0410156 4.63387 2.0914 2.54248 4.63387 2.54248H65.3661C67.9086 2.54248 69.959 4.63387 69.959 7.17634V51.8746C69.959 54.4171 67.9086 56.5085 65.3661 56.5085ZM4.63387 3.93674C2.82953 3.93674 1.39427 5.37201 1.39427 7.17634V51.8746C1.39427 53.679 2.82953 55.1142 4.63387 55.1142H65.3661C67.1295 55.1142 68.6058 53.679 68.6058 51.8746V7.17634C68.6058 5.37201 67.1295 3.93674 65.3661 3.93674H4.63387Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.0137 46.2976H5.98796C5.08579 46.2976 4.34766 45.5595 4.34766 44.6163V8.16056C4.34766 7.21739 5.08579 6.47925 5.98796 6.47925H64.0137C64.9159 6.47925 65.654 7.21739 65.654 8.16056V44.6163C65.654 45.5595 64.9159 46.2976 64.0137 46.2976ZM5.98796 7.87351C5.82393 7.87351 5.70091 7.99653 5.70091 8.16056V44.6163C5.70091 44.7804 5.82393 44.9034 5.98796 44.9034H64.0137C64.1368 44.9034 64.3008 44.7804 64.3008 44.6163V8.16056C64.3008 7.99653 64.1368 7.87351 64.0137 7.87351H5.98796Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.7953 62.7827H26.162C25.7929 62.7827 25.5059 62.4546 25.5059 62.0856V55.8114C25.5059 55.4423 25.7929 55.1143 26.162 55.1143H43.7953C44.2053 55.1143 44.4924 55.4423 44.4924 55.8114V62.0856C44.4924 62.4546 44.2053 62.7827 43.7953 62.7827ZM26.8591 61.4294H43.1391V56.5085H26.8591V61.4294Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.7206 67.4166H16.2397C14.5993 67.4166 13.2461 66.0633 13.2461 64.423C13.2461 62.7827 14.5993 61.4294 16.2397 61.4294H53.7206C55.4019 61.4294 56.7552 62.7827 56.7552 64.423C56.7552 66.0633 55.4019 67.4166 53.7206 67.4166ZM16.2397 62.7827C15.3375 62.7827 14.5993 63.5208 14.5993 64.423C14.5993 65.3252 15.3375 66.0633 16.2397 66.0633H53.7206C54.6228 66.0633 55.3609 65.3252 55.3609 64.423C55.3609 63.5208 54.6228 62.7827 53.7206 62.7827H16.2397Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M69.2619 46.2976H0.697137C0.328069 46.2976 0.0410156 45.9695 0.0410156 45.6004C0.0410156 45.2314 0.328069 44.9033 0.697137 44.9033H69.2619C69.6719 44.9033 69.959 45.2314 69.959 45.6004C69.959 45.9695 69.6719 46.2976 69.2619 46.2976Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.9799 53.843C33.2575 53.843 31.8633 52.4488 31.8633 50.7264C31.8633 48.9631 33.2575 47.5688 34.9799 47.5688C36.7022 47.5688 38.1374 48.9631 38.1374 50.7264C38.1374 52.4488 36.7022 53.843 34.9799 53.843ZM34.9799 48.9221C34.0367 48.9221 33.2165 49.7423 33.2165 50.7264C33.2165 51.6696 34.0367 52.4898 34.9799 52.4898C35.964 52.4898 36.7432 51.6696 36.7432 50.7264C36.7432 49.7423 35.964 48.9221 34.9799 48.9221Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.54606 51.3825H4.06041C3.69134 51.3825 3.36328 51.0955 3.36328 50.7264C3.36328 50.3164 3.69134 50.0293 4.06041 50.0293H7.54606C7.95613 50.0293 8.24319 50.3164 8.24319 50.7264C8.24319 51.0955 7.95613 51.3825 7.54606 51.3825Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7375 51.3825H10.2108C9.84174 51.3825 9.55469 51.0955 9.55469 50.7264C9.55469 50.3164 9.84174 50.0293 10.2108 50.0293H13.7375C14.1065 50.0293 14.3936 50.3164 14.3936 50.7264C14.3936 51.0955 14.1065 51.3825 13.7375 51.3825Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8879 51.3825H16.3612C15.9921 51.3825 15.7051 51.0955 15.7051 50.7264C15.7051 50.3164 15.9921 50.0293 16.3612 50.0293H19.8879C20.2569 50.0293 20.585 50.3164 20.585 50.7264C20.585 51.0955 20.2569 51.3825 19.8879 51.3825Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.0964 27.9263H11.1128C9.84159 27.9263 8.77539 26.8601 8.77539 25.5889V15.542C8.77539 14.2298 9.84159 13.1636 11.1128 13.1636H25.0964C26.4087 13.1636 27.4749 14.2298 27.4749 15.542V25.5889C27.4749 26.8601 26.4087 27.9263 25.0964 27.9263ZM11.1128 14.5578C10.5797 14.5578 10.1286 15.0089 10.1286 15.542V25.5889C10.1286 26.122 10.5797 26.5321 11.1128 26.5321H25.0964C25.6705 26.5321 26.0806 26.122 26.0806 25.5889V15.542C26.0806 15.0089 25.6705 14.5578 25.0964 14.5578H11.1128Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.2128 25.9989C15.1307 25.9989 15.0077 25.9579 14.9257 25.9168C14.6797 25.7938 14.5156 25.5888 14.5156 25.3017V15.788C14.5156 15.5419 14.6797 15.2959 14.9257 15.1728C15.1717 15.0498 15.4588 15.0908 15.6228 15.2549L21.4459 20.0117C21.6099 20.1348 21.692 20.3398 21.692 20.5448C21.692 20.7499 21.6099 20.9549 21.4459 21.0779L15.6228 25.8348C15.4998 25.9579 15.3768 25.9989 15.2128 25.9989ZM15.9099 17.2232V23.8665L19.9286 20.5448L15.9099 17.2232Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M61.3069 15.3779H57.7392C57.3701 15.3779 57.0831 15.0498 57.0831 14.6808C57.0831 14.3117 57.3701 14.0247 57.7392 14.0247H61.3069C61.6759 14.0247 62.004 14.3117 62.004 14.6808C62.004 15.0498 61.6759 15.3779 61.3069 15.3779ZM54.6636 15.3779H39.6959C39.3268 15.3779 38.9987 15.0498 38.9987 14.6808C38.9987 14.3117 39.3268 14.0247 39.6959 14.0247H54.6636C55.0737 14.0247 55.3608 14.3117 55.3608 14.6808C55.3608 15.0498 55.0737 15.3779 54.6636 15.3779ZM36.6203 15.3779H33.1757C32.8066 15.3779 32.5195 15.0498 32.5195 14.6808C32.5195 14.3117 32.8066 14.0247 33.1757 14.0247H36.6203C36.9894 14.0247 37.3174 14.3117 37.3174 14.6808C37.3174 15.0498 36.9894 15.3779 36.6203 15.3779Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M61.3069 21.2419H48.7996C48.3895 21.2419 48.1024 20.9139 48.1024 20.5448C48.1024 20.1757 48.3895 19.8477 48.7996 19.8477H61.3069C61.6759 19.8477 62.004 20.1757 62.004 20.5448C62.004 20.9139 61.6759 21.2419 61.3069 21.2419ZM45.724 21.2419H33.1757C32.8066 21.2419 32.5195 20.9139 32.5195 20.5448C32.5195 20.1757 32.8066 19.8477 33.1757 19.8477H45.724C46.0931 19.8477 46.3801 20.1757 46.3801 20.5448C46.3801 20.9139 46.0931 21.2419 45.724 21.2419Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M61.3069 27.1062H41.1311C40.7621 27.1062 40.434 26.7781 40.434 26.409C40.434 26.04 40.7621 25.7119 41.1311 25.7119H61.3069C61.6759 25.7119 62.004 26.04 62.004 26.409C62.004 26.7781 61.6759 27.1062 61.3069 27.1062ZM38.0556 27.1062H33.1757C32.8066 27.1062 32.5195 26.7781 32.5195 26.409C32.5195 26.04 32.8066 25.7119 33.1757 25.7119H38.0556C38.4246 25.7119 38.7527 26.04 38.7527 26.409C38.7527 26.7781 38.4246 27.1062 38.0556 27.1062Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.1773 18.8636C36.9471 18.8636 35.9219 17.8384 35.9219 16.6492V12.7535C35.9219 11.5232 36.9471 10.5391 38.1773 10.5391C39.4075 10.5391 40.3917 11.5232 40.3917 12.7535V16.6492C40.3917 17.8384 39.4075 18.8636 38.1773 18.8636ZM38.1773 11.8923C37.6852 11.8923 37.3161 12.2614 37.3161 12.7535V16.6492C37.3161 17.1003 37.6852 17.4693 38.1773 17.4693C38.6284 17.4693 38.9974 17.1003 38.9974 16.6492V12.7535C38.9974 12.2614 38.6284 11.8923 38.1773 11.8923Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M56.2203 18.8636C54.99 18.8636 54.0059 17.8384 54.0059 16.6492V12.7535C54.0059 11.5232 54.99 10.5391 56.2203 10.5391C57.4505 10.5391 58.4347 11.5232 58.4347 12.7535V16.6492C58.4347 17.8384 57.4505 18.8636 56.2203 18.8636ZM56.2203 11.8923C55.7282 11.8923 55.3591 12.2614 55.3591 12.7535V16.6492C55.3591 17.1003 55.7282 17.4693 56.2203 17.4693C56.6714 17.4693 57.0814 17.1003 57.0814 16.6492V12.7535C57.0814 12.2614 56.6714 11.8923 56.2203 11.8923Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M47.2398 24.7276C46.0096 24.7276 45.0254 23.7024 45.0254 22.4722V18.6175C45.0254 17.3873 46.0096 16.4031 47.2398 16.4031C48.47 16.4031 49.4542 17.3873 49.4542 18.6175V22.4722C49.4542 23.7024 48.47 24.7276 47.2398 24.7276ZM47.2398 17.7563C46.7887 17.7563 46.3786 18.1254 46.3786 18.6175V22.4722C46.3786 22.9643 46.7887 23.3334 47.2398 23.3334C47.7319 23.3334 48.101 22.9643 48.101 22.4722V18.6175C48.101 18.1254 47.7319 17.7563 47.2398 17.7563Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.5718 30.5509C38.3826 30.5509 37.3574 29.5667 37.3574 28.3365V24.4817C37.3574 23.2515 38.3826 22.2263 39.5718 22.2263C40.8021 22.2263 41.8273 23.2515 41.8273 24.4817V28.3365C41.8273 29.5667 40.8021 30.5509 39.5718 30.5509ZM39.5718 23.6206C39.1207 23.6206 38.7517 23.9896 38.7517 24.4817V28.3365C38.7517 28.8285 39.1207 29.1976 39.5718 29.1976C40.0639 29.1976 40.433 28.8285 40.433 28.3365V24.4817C40.433 23.9896 40.0639 23.6206 39.5718 23.6206Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M57.7383 42.2378H11.0307C9.34934 42.2378 7.99609 40.8846 7.99609 39.2033C7.99609 37.563 9.34934 36.2097 11.0307 36.2097H57.7383C59.4196 36.2097 60.7729 37.563 60.7729 39.2033C60.7729 40.8846 59.4196 42.2378 57.7383 42.2378ZM11.0307 37.563C10.1285 37.563 9.34934 38.3011 9.34934 39.2033C9.34934 40.1464 10.1285 40.8846 11.0307 40.8846H57.7383C58.6405 40.8846 59.4196 40.1464 59.4196 39.2033C59.4196 38.3011 58.6405 37.563 57.7383 37.563H11.0307Z"
                  fill="black"
                />
              </svg>
            ),
            heading: "Video Editing",
            text: "Elevate your content with expert video editing and post-production services that exude sophistication. As one of the prominent branding and logo design companies, we excel in handling diverse levels of video editing, particularly focusing on the creative elements. Explore firsthand our extensive video editing services.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path
                  d="M63.1711 20.3806C63.1711 17.9358 61.1762 15.9461 58.7251 15.9461H51.37C51.6428 15.6733 57.6707 9.6454 57.3318 9.98431C59.219 8.09614 59.219 5.02475 57.3318 3.13756C55.4446 1.25037 52.3711 1.25037 50.4841 3.13756C47.366 6.25564 40.9585 12.6631 37.6755 15.9461H13.2741C10.8232 15.9461 8.82812 17.9358 8.82812 20.3806V65.8432C8.82812 68.288 10.823 70.2777 13.2741 70.2777H58.7253C61.1762 70.2777 63.1712 68.288 63.1712 65.8432V20.3806H63.1711ZM40.249 24.0378C40.132 23.9209 36.194 19.9839 36.4307 20.2205L49.5759 7.07534L53.3942 10.8926L40.249 24.0378ZM35.5154 22.3347C35.6507 22.47 38.3668 25.1853 38.1953 25.0139L34.6439 26.0066L35.5154 22.3347ZM51.9987 4.65237C53.0512 3.59993 54.7647 3.59993 55.817 4.65237C56.8694 5.70481 56.8683 7.4172 55.817 8.46964L54.9121 9.37343L51.0948 5.55617L51.9987 4.65237ZM61.0287 65.8432C61.0287 67.1069 59.9951 68.1353 58.7251 68.1353H13.2741C12.0041 68.1353 10.9705 67.107 10.9705 65.8432V20.3806C10.9705 19.1169 12.0041 18.0885 13.2741 18.0885H35.5331C35.392 18.2299 36.0443 17.5765 34.1531 19.4712C34.0097 19.617 33.8993 19.866 33.874 19.9736L32.1407 27.2806C31.9487 28.085 32.7023 28.7787 33.4713 28.5589L40.5377 26.5838C40.7777 26.5163 40.905 26.3765 41.0128 26.3033L49.2276 18.0885H58.7251C59.9951 18.0885 61.0287 19.1168 61.0287 20.3806V65.8432Z"
                  fill="black"
                />
                <path
                  d="M21.2839 20.9927H14.954C14.3619 20.9927 13.8828 21.4718 13.8828 22.0638V28.1489C13.8828 28.741 14.3619 29.2201 14.954 29.2201H21.2839C21.8759 29.2201 22.355 28.741 22.355 28.1489V22.0638C22.3552 21.4718 21.8761 20.9927 21.2839 20.9927ZM20.2128 27.0778H16.0252V23.1351H20.2128V27.0778Z"
                  fill="black"
                />
                <path
                  d="M21.2839 32.9944H14.954C14.3619 32.9944 13.8828 33.4735 13.8828 34.0655V40.1506C13.8828 40.7427 14.3619 41.2218 14.954 41.2218H21.2839C21.8759 41.2218 22.355 40.7427 22.355 40.1506V34.0655C22.3552 33.4735 21.8761 32.9944 21.2839 32.9944ZM20.2128 39.0795H16.0252V35.1368H20.2128V39.0795Z"
                  fill="black"
                />
                <path
                  d="M21.2839 44.9963H14.954C14.3619 44.9963 13.8828 45.4754 13.8828 46.0675V52.1526C13.8828 52.7446 14.3619 53.2237 14.954 53.2237H21.2839C21.8759 53.2237 22.355 52.7446 22.355 52.1526V46.0675C22.3552 45.4754 21.8761 44.9963 21.2839 44.9963ZM20.2128 51.0815H16.0252V47.1388H20.2128V51.0815Z"
                  fill="black"
                />
                <path
                  d="M21.2839 56.9983H14.954C14.3619 56.9983 13.8828 57.4774 13.8828 58.0694V64.1546C13.8828 64.7466 14.3619 65.2257 14.954 65.2257H21.2839C21.8759 65.2257 22.355 64.7466 22.355 64.1546V58.0696C22.3552 57.4774 21.8761 56.9983 21.2839 56.9983ZM20.2128 63.0836H16.0252V59.1409H20.2128V63.0836Z"
                  fill="black"
                />
                <path
                  d="M57.0456 20.9927H50.7157C50.1236 20.9927 49.6445 21.4718 49.6445 22.0638V28.1489C49.6445 28.741 50.1236 29.2201 50.7157 29.2201H57.0456C57.6377 29.2201 58.1168 28.741 58.1168 28.1489V22.0638C58.1168 21.4718 57.6377 20.9927 57.0456 20.9927ZM55.9743 27.0778H51.7868V23.1351H55.9743V27.0778Z"
                  fill="black"
                />
                <path
                  d="M57.0456 32.9944H50.7157C50.1236 32.9944 49.6445 33.4735 49.6445 34.0655V40.1506C49.6445 40.7427 50.1236 41.2218 50.7157 41.2218H57.0456C57.6377 41.2218 58.1168 40.7427 58.1168 40.1506V34.0655C58.1168 33.4735 57.6377 32.9944 57.0456 32.9944ZM55.9743 39.0795H51.7868V35.1368H55.9743V39.0795Z"
                  fill="black"
                />
                <path
                  d="M57.0456 44.9963H50.7157C50.1236 44.9963 49.6445 45.4754 49.6445 46.0675V52.1526C49.6445 52.7446 50.1236 53.2237 50.7157 53.2237H57.0456C57.6377 53.2237 58.1168 52.7446 58.1168 52.1526V46.0675C58.1168 45.4754 57.6377 44.9963 57.0456 44.9963ZM55.9743 51.0815H51.7868V47.1388H55.9743V51.0815Z"
                  fill="black"
                />
                <path
                  d="M57.0456 56.9983H50.7157C50.1236 56.9983 49.6445 57.4774 49.6445 58.0694V64.1546C49.6445 64.7466 50.1236 65.2257 50.7157 65.2257H57.0456C57.6377 65.2257 58.1168 64.7466 58.1168 64.1546V58.0696C58.1168 57.4774 57.6377 56.9983 57.0456 56.9983ZM55.9743 63.0836H51.7868V59.1409H55.9743V63.0836Z"
                  fill="black"
                />
                <path
                  d="M42.2169 42.2108L30.967 34.7301C30.6375 34.5125 30.216 34.4916 29.8676 34.6778C29.5203 34.8651 29.3027 35.228 29.3027 35.6223V50.5952C29.3027 51.449 30.2548 51.9593 30.9682 51.4865L42.218 43.9943C42.5161 43.7956 42.695 43.4608 42.695 43.103C42.695 42.7443 42.515 42.4095 42.2169 42.2108ZM31.4452 48.5951V37.6215L39.6906 43.1042L31.4452 48.5951Z"
                  fill="black"
                />
              </svg>
            ),
            heading: "Reel Creation",
            text: "Our designers shine in creating customized branding and marketing reels that encapsulate the essence of the brand, tailored to the specific target audience. Our strength lies in developing captivating and lively short-form videos, catering to both individuals and businesses.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
              >
                <path
                  d="M63.5397 4.17707C63.5397 1.87387 61.6658 0 59.3626 0C57.0593 0 55.1855 1.87387 55.1855 4.17707C55.1855 5.98882 56.3453 7.53432 57.9612 8.11161C57.859 11.398 57.0619 14.545 55.5864 17.476C55.2414 18.1613 55.5172 18.9967 56.2027 19.3417C56.4031 19.4426 56.6164 19.4903 56.8264 19.4903C57.3347 19.4903 57.8245 19.2104 58.0685 18.7253C59.7397 15.4055 60.6376 11.8409 60.7417 8.1191C62.369 7.54819 63.5397 5.99728 63.5397 4.17707ZM59.3626 5.5753C58.5916 5.5753 57.9644 4.94809 57.9644 4.17707C57.9644 3.40606 58.5916 2.77885 59.3626 2.77885C60.1336 2.77885 60.7608 3.40606 60.7608 4.17707C60.7608 4.94809 60.1336 5.5753 59.3626 5.5753Z"
                  fill="black"
                />
                <path
                  d="M58.9577 42.506H53.5179L39.673 32.2932C43.1413 31.7162 46.4513 30.4203 49.4114 28.4628C50.0514 28.0396 50.2272 27.1776 49.804 26.5375C49.3807 25.8974 48.5186 25.7214 47.8785 26.1449C44.4408 28.4183 40.4716 29.6883 36.3502 29.8421L21.6657 19.01V14.0902C21.6657 13.3229 21.0436 12.7007 20.2762 12.7007H14.7009C13.9334 12.7007 13.3114 13.3228 13.3114 14.0902V19.6653C13.3114 20.4326 13.9334 21.0548 14.7009 21.0548H19.7564L32.0178 30.0996C20.1005 31.7509 10.8151 41.7491 10.275 53.983C8.63923 54.5495 7.46094 56.1046 7.46094 57.9306C7.46094 60.2338 9.33481 62.1075 11.638 62.1075C13.9414 62.1075 15.8151 60.2337 15.8151 57.9306C15.8151 56.1245 14.6629 54.5829 13.055 54.0013C13.5981 42.8765 22.2685 33.8511 33.2403 32.7506L23.9572 52.1435C23.4438 53.2162 23.3451 54.4354 23.6789 55.5766L25.9725 63.4173V68.2212C25.9725 69.7535 27.2192 71 28.7514 71H42.2487C43.7809 71 45.0276 69.7535 45.0276 68.2212V63.4173L47.3212 55.5766C47.6551 54.4354 47.5562 53.216 47.0429 52.1434L38.9324 35.2002L51.9931 44.8344V49.4708C51.9931 50.238 52.6151 50.8603 53.3825 50.8603H58.9578C59.7253 50.8603 60.3473 50.2382 60.3473 49.4708V43.8956C60.3472 43.1282 59.7251 42.506 58.9577 42.506ZM11.638 59.3287C10.867 59.3287 10.2398 58.7016 10.2398 57.9306C10.2398 57.1596 10.867 56.5324 11.638 56.5324C12.409 56.5324 13.0362 57.1596 13.0362 57.9306C13.0362 58.7016 12.409 59.3287 11.638 59.3287ZM35.5001 48.9606C36.2711 48.9606 36.8983 49.5878 36.8983 50.3587C36.8983 51.1297 36.2711 51.7569 35.5001 51.7569C34.7291 51.7569 34.1019 51.1297 34.1019 50.3587C34.1019 49.5878 34.7291 48.9606 35.5001 48.9606ZM16.0905 15.4797H18.8869V18.276H16.0905V15.4797ZM42.2487 68.2212H28.7514V64.6076H42.2491L42.2504 68.221C42.2505 68.221 42.25 68.2212 42.2487 68.2212ZM44.6541 54.7965L42.5969 61.8288H28.4032L26.346 54.7965C26.2047 54.3135 26.2465 53.7972 26.4638 53.3432L34.1106 37.3686V46.4204C32.4884 46.9944 31.3229 48.5428 31.3229 50.3588C31.3229 52.6622 33.1968 54.5359 35.5 54.5359C37.8032 54.5359 39.677 52.662 39.677 50.3588C39.677 48.5426 38.5115 46.9944 36.8893 46.4204V37.3686L44.536 53.3431C44.7535 53.7971 44.7954 54.3133 44.6541 54.7965ZM57.5684 48.0813H54.7719V45.285H57.5684V48.0813Z"
                  fill="black"
                />
                <path
                  d="M53.2743 24.6078C54.0417 24.6078 54.6638 23.9857 54.6638 23.2184C54.6638 22.451 54.0417 21.8289 53.2743 21.8289C52.5069 21.8289 51.8848 22.451 51.8848 23.2184C51.8848 23.9857 52.5069 24.6078 53.2743 24.6078Z"
                  fill="black"
                />
              </svg>
            ),
            heading: "Illustration",
            text: "Whether you're in need of infographics, editorial illustrations, character illustrations, product illustrations, or any other design requirements, in addition to logo design services in the UAE, our proficiency lies in delivering customized design solutions that seamlessly align with your brand.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M37.9552 49.4062H13.0448C6.73041 49.4062 1.59375 44.2696 1.59375 37.9567V13.0433C1.59375 6.73041 6.73041 1.59375 13.0448 1.59375H37.9567C44.2696 1.59375 49.4062 6.73041 49.4062 13.0433V37.9567C49.4062 44.2696 44.2696 49.4062 37.9552 49.4062ZM13.0448 4.78125C8.48831 4.78125 4.78125 8.48831 4.78125 13.0433V37.9567C4.78125 42.5117 8.48831 46.2188 13.0448 46.2188H37.9567C42.5117 46.2188 46.2188 42.5117 46.2188 37.9567V13.0433C46.2188 8.48831 42.5117 4.78125 37.9552 4.78125H13.0448Z"
                  fill="black"
                />
                <path
                  d="M23.1094 33.4688C19.1553 33.4688 15.9375 29.894 15.9375 25.5V19.125C15.9375 18.25 16.6563 17.5312 17.5312 17.5312C18.4062 17.5312 19.125 18.25 19.125 19.125V25.5C19.125 28.1361 20.9116 30.2812 23.1094 30.2812C25.3072 30.2812 27.0938 28.1361 27.0938 25.5V19.125C27.0938 18.2453 27.8062 17.5312 28.6875 17.5312C29.5688 17.5312 30.2812 18.2453 30.2812 19.125V25.5C30.2812 29.894 27.0635 33.4688 23.1094 33.4688Z"
                  fill="black"
                />
                <path
                  d="M33.4688 33.4688C32.5938 33.4688 31.875 32.75 31.875 31.875V19.125C31.875 18.25 32.5938 17.5312 33.4688 17.5312C34.3437 17.5312 35.0625 18.25 35.0625 19.125V31.875C35.0625 32.75 34.3437 33.4688 33.4688 33.4688Z"
                  fill="black"
                />
              </svg>
            ),
            heading: "UI UX Design",
            text: "If you're aiming to advance your product development with professionals who adhere to a methodical design approach, meet specific deadlines or deliver precise outcomes seamlessly, Branding 360 Neo LLC is the ideal choice. As a UI/UX Design Services Company, we assure an efficient design process that produces strong results within a concise timeframe.",
          },
        ],
      };
    
      const midContentData = {
        heading:
          "Are you aiming to create a memorable initial impact with innovative design services in Dubai?",
        text: [
          "Crafting the perfect blend of shapes, colors, and words is the key to defining your brand. Opt for Branding 360 Neo LLC for flawless creative graphic and logo design services that ensure your brand stands out uniquely.",
        ],
        mainImg: ServicesMidMainImg,
        rightImg: ServicesMidRightImg,
        type: "paras",
        leftContent: [
          "Our dynamic team of designers goes beyond merely creating business cards, visiting cards, or logos in Dubai; they specialize in delivering comprehensive branding and marketing solutions too.",
        ],
      };
    
      const faqData = [
        {
          ques: "How Does a Creative Design Agency in Dubai Can Help Achieve Your Goals?",
          ans: [
            "At Branding 360 Neo, we take a comprehensive approach to fostering growth, seamlessly integrating various online marketing strategies, techniques, and tactics into our graphic design services to maximize effectiveness.",
          ],
        },
        {
          ques: "Do You Want to Build a Brand that Lasts?",
          ans: [
            "In-house, we've crafted a modern approach to creative design marketing, poised to empower your company's success through a meticulously executed growth strategy.",
            "Leveraging our extensive expertise in data analytics, design systems, brand activation, communication design, growth marketing, web design, website development, search engine optimization, paid advertising, email marketing, influencer marketing, lead generation, and graphic design, we're here to propel you forward and help you achieve lasting success.",
          ],
        },
        {
          ques: "What to Expect from Leading Creative Design Agency in Dubai?",
          ans: [
            "Through the support of our creative design marketing agency, your content will not only generate qualified leads but also secure more deals. Our precision-targeted graphic marketing campaigns are designed to effectively engage your desired audience. We implement creative design marketing strategies while carefully mapping your customer journey to ensure that your company's growth is sustainable, repeatable, and scalable.",
            "At Branding 360 Neo, our distinguished graphic/development marketing and management services can boost your business's visibility, facilitating a consistent flow of targeted leads. Our primary goal is to assist you in building a strong brand through creative design marketing campaigns that lead to conversions.",
          ],
        },
        {
          ques: "Why Hire a Leading Creative Design Agency in Dubai?",
          ans: [
            "Companies often grapple with the choice between in-house visual development marketing and partnering with a trusted agency. At Branding 360 Neo, our modern approach relies on data-driven decisions to hyper-target prospects. For entrepreneurs and businesses, here are the key benefits of working with us:",
            "  - Employ advanced creative design strategies to attract specific visitors.",
            "  - Achieve growth goals through our expertise in creative design, social media, SEO, and more.",
            "  - Gain new users and foster brand loyalty.",
            "  - Collaborate with industry experts for a successful design project.",
            "  - Work with seasoned professionals in graphic design management.",
            "  - Let our visual marketing services make you a leader in your industry.",
            "  - Partner with a results-driven and data-oriented agency with a proven track record.",
          ],
        },
        {
          ques: "Who Can Hire our Creative Design Services?",
          ans: [
            "Choose Branding 360 Neo for your creative design needs, whether building an in-house team or partnering with a top agency. We cover everything from corporate branding to web design, logo design, packaging, and more. Beyond a typical agency, we act as your growth partner.",
            "Our dedicated team of professionals collaborates to achieve your growth objectives, enhancing your business's reputation, increasing exposure, and boosting ROI. Opt for Branding 360 Neo as your graphic design outsourcing partner to reach your growth goals.",
          ],
        },
      ];
    
  return (
    <div className="services-main-section app-sections">
    <BannerMain
      bgImage={'/Assets/Services-Creative-Design/CreativeDesignBanerBgImg.webp'}
      currentPage="Graphic Designing Services In Dubai"
    />

    <ServicesInfoContainer
      leftGlobeFrontImg={infoContainerData.leftGlobeFrontImg}
      mainHeading={infoContainerData.mainHeading}
      text={infoContainerData.text}
      rightSideImg={infoContainerData.rightSideImg}
    />
    <ServicesCardsContainer cardsContainerData={cardsContainerData} />

    <ServicesMidContent data={midContentData} />

    <ServicesLatestWork serviceName={"Creative Design"} />

    <ServicesFAQ faqData={faqData} />

    {/* <NeedHelpMain /> */}
    <MonkeyComp />
  </div>
  )
}

export default page