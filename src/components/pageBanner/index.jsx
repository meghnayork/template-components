import React from "react";
import Slider from "react-slick";
import Badge from "../badge";

const PageBanner = (props) => {
  const {
    imageBanner = true,
    carouselBanner = false,
    image,
    carouselSettings,
    children,
    badge,
    className,
  } = props;

  return (
    <div
      className={`page-banner ${carouselBanner ? "carousel" : ""} ${className}`}
    >
      {imageBanner && (
        <>
          <img src={image} alt="" />
          {badge && <Badge variant={"mid-blue"} text={badge} />}
        </>
      )}

      {carouselBanner && <Slider {...carouselSettings}>{children}</Slider>}
    </div>
  );
};

export default PageBanner;
