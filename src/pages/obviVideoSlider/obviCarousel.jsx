import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import SliderWithProgressBar from "../../components/sliderWithProgressbar";

const ObviCarousel = () => {
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
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video1.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video2.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video3.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video4.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video5.mp4",
  ];
  // slides :: end

  return (
    <div className="mobile-slide">
      <div className="video-slider-progress-wrap">
        <Header
          position={"relative"}
          logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/obvi-logo.png"}
          brandTitle={"Hear From Actual Obvi Customers Below"}
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
          ctaContent={"Shop Now"}
          className={"position-relative"}
          isIcon={false}
          isTextCenter={true}
          link={"https://myobvi.com/pages/burn-elite-a"}
        />
        {/* cta banner :: end */}
      </div>
    </div>
  );
};

export default ObviCarousel;
