// GalleryComp.js
import React, { useState, useRef, useEffect } from "react";
import "./GalleryComp.css";
import Image from "next/image";

function GalleryComp({ collage, gallerySwitch, toggleGallerySwitch }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const scrollableImagesRef = useRef(null);

  useEffect(() => {
    if (scrollableImagesRef.current) {
      const selectedImageElement =
        scrollableImagesRef.current.children[selectedImageIndex];
      if (selectedImageElement) {
        selectedImageElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedImageIndex]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % collage.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + collage.length) % collage.length
    );
  };

  return (
    <div className="gallery-comp-section app-container">
      <div className="gallery-container">
        <div className="gallery-cross-icon">
          <svg
            onClick={toggleGallerySwitch}
            width="64px"
            height="64px"
            viewBox="0 0 25.00 25.00"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffbb00"
            stroke="#ffbb00"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>cross</title> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke-width="0.00025"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Icon-Set"
                  transform="translate(-467.000000, -1039.000000)"
                  fill="#ffbb00"
                >
                  {" "}
                  <path
                    d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 L489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 L485.148,1051.48 Z"
                    id="cross"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        <div
          className={`large-image ${
            gallerySwitch ? "button-visible" : "button-hidden"
          }`}
        >
          <button onClick={handlePrevImage}>&lt;</button>
          <Image width={0} height={0}
            src={collage[selectedImageIndex]}
            alt={`Large ${selectedImageIndex}`}
          />
          <button onClick={handleNextImage}>&gt;</button>
        </div>

        <div className="small-images">
          <div className="scrollable-images" ref={scrollableImagesRef}>
            {collage.map((image, index) => (
              <Image width={0} height={0}
                key={index}
                src={image}
                alt={`Small ${index}`}
                className={index === selectedImageIndex ? "selected" : ""}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryComp;
