import React from "react";

import "./BannerMain.css";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

function BannerMain({ bgImage, currentPage }) {
  const bannerMainStyle = {
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="banner-main" style={bannerMainStyle}>
      <h1>{currentPage}</h1>
      <BreadCrumbs currentPage={currentPage} />
    </div>
  );
}

export default BannerMain;
