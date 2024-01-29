import React from "react";

import "@/styles/globals.css";

import AboutUsMonkeyImg from "../../public/Assets/AboutUs/AboutUsMonkeyImg.webp";
import Image from "next/image";

function MonkeyComp() {
  return (
    <div className="page-bottom-monkey">
      <Image width={0} height={0} src={AboutUsMonkeyImg} alt="Clever Monkey" />
    </div>
  );
}

export default MonkeyComp;
