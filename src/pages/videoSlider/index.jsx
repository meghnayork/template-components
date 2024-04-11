import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import SliderWithProgressBar from "../../components/sliderWithProgressbar";

const VideoSlider = () => {
  // carousel settings start
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25px",
    swipeToSlide: true,
    pauseOnHover: false,
  };
  // carousel settings end

  // slides :: start
  const slides = [
    "https://d1unenfz496pdf.cloudfront.net/Assets/Harry-Potter.mp4",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd2.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/Harry-Potter.mp4",
  ];
  // slides :: end

  return (
    <div className="mobile-slide">
      <div className="video-slider-progress-wrap">
        <Header
          position={"relative"}
          logoCircle={true}
          logoImg={
            "https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"
          }
          brandTitle={"Brand Logo Title"}
          variant="solid"
        />

        {/* video slider :: start */}
        <SliderWithProgressBar
          settings={settings}
          slides={slides}
          slideWidth={340}
        />
        {/* video slider :: end */}

        {/* cta banner :: start */}
        <CTABanner
          ctaContent={"Get 15% Off"}
          className={"position-relative"}
          isIcon={false}
          isTextCenter={true}
        />
        {/* cta banner :: end */}
      </div>
    </div>
  );
};

export default VideoSlider;
