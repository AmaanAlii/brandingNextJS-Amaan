import React from "react";

import "./ServicesMidContent.css";

import ServicesMidLeftBgImg from "../../public/Assets/Services-Web-Dev/ServiesMidLeftBgImg.webp";
import ServicesMidLeftBgBigImg from "../../public/Assets/Services-Creative-Design/ServicesMidLeftBgBigImg.webp";

import { NoBackpackSharp } from "@mui/icons-material";
import Image from "next/image";

function ServicesMidContent({ data }) {
  const servicesMidLeftBgStyle = {
    backgroundImage: `url("/Assets/Services-Web-Dev/ServiesMidLeftBgImg.webp")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const servicesMidLeftBgBigStyle = {
    backgroundImage: `url("/Assets/Services-Creative-Design/ServicesMidLeftBgBigImg.webp")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="services-mid-content-container">
      <div className="services-mid-left">
        <div className="services-mid-left-text-section">
          <h3>{data.heading}</h3>
          {data.text.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {data.type === "paras" ? (
          <div className="services-mid-left-bottom-paras-mobile">
            <div>
              {data.leftContent.map((text, index) => (
                <>
                  <span key={index}>
                    {text.includes(" ") ? (
                      <span style={{ color: "#FEBB00" }}>
                        {text.split(" ")[0]} &nbsp;
                      </span>
                    ) : (
                      <span style={{ color: "#FEBB00" }}>{text}</span>
                    )}
                    {text.includes(" ")
                      ? text.substr(text.indexOf(" ") + 1)
                      : ""}
                  </span>
                  <br></br>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        ) : (
          <div className="services-mid-left-bottom-mobile">
            <div>
              {data.leftContent.map((text, index) => (
                <>
                  <span key={index}>
                    {text.includes(" ") ? (
                      <span style={{ color: "#FEBB00" }}>
                        {text.split(" ")[0]} &nbsp;
                      </span>
                    ) : (
                      <span style={{ color: "#FEBB00" }}>{text}</span>
                    )}
                    {text.includes(" ")
                      ? text.substr(text.indexOf(" ") + 1)
                      : ""}
                  </span>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        )}

        {data.type === "paras" ? (
          <div
            className="services-mid-left-bottom-paras"
            style={servicesMidLeftBgBigStyle}
          >
            <div>
              {data.leftContent.map((text, index) => (
                <>
                  <span key={index}>
                    {text.includes(" ") ? (
                      <span style={{ color: "#FEBB00" }}>
                        {text.split(" ")[0]} &nbsp;
                      </span>
                    ) : (
                      <span style={{ color: "#FEBB00" }}>{text}</span>
                    )}
                    {text.includes(" ")
                      ? text.substr(text.indexOf(" ") + 1)
                      : ""}
                  </span>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="services-mid-left-bottom"
            style={servicesMidLeftBgStyle}
          >
            <div>
              {data.leftContent.map((text, index) => (
                <span key={index}>
                  {text.includes(" ") ? (
                    <span style={{ color: "#FEBB00" }}>
                      {text.split(" ")[0]} &nbsp;
                    </span>
                  ) : (
                    <span style={{ color: "#FEBB00" }}>{text}</span>
                  )}
                  {text.includes(" ") ? text.substr(text.indexOf(" ") + 1) : ""}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="services-mid-right">
        <Image width={0} height={0}
          className="services-div-main-img"
          src={data.mainImg}
          alt="Services"
        />
        <Image width={0} height={0}
          className="services-mid-right-img"
          src={data.rightImg}
          alt="Services"
        />
      </div>
    </div>
  );
}

export default ServicesMidContent;
