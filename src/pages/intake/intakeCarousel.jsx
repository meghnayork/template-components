import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import SliderWithProgressBar from "../../components/sliderWithProgressbar";

const IntakeCarousel = () => {
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
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake1.mp4",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake2.mp4",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake3.mp4",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake4.mp4",
  ];
  // slides :: end

  return (
    <div className="mobile-slide">
      <div className="video-slider-progress-wrap">
        <Header
          // enableCart={true}
          position={"relative"}
          logoImg={
            "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake-logo-new.png"
          }
          brandTitle={"Get Started With Intake"}
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
          ctaContent={"Enjoy 10% Off "}
          className={"position-relative"}
          isIcon={false}
          isTextCenter={true}
          link={"/1caf896f-1318-470f-a22e-f8b0830f86b3"}
        />
        {/* cta banner :: end */}
      </div>
    </div>
  );
};

export default IntakeCarousel;
