import React, { useRef, useState } from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import SliderWithProgressBar from "../../components/sliderWithProgressbar";

const VideoSlider = () => {
  const [autoplaySpeed, setAutoplaySpeed] = useState(6200);

  // carousel settings start
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    swipeToSlide: true,
    pauseOnHover: false,
    beforeChange: (_, next) => {
      const video = document.querySelector(`#video-slide-${next} video`);
      if (video) {
        const duration = video.duration * 1000; // Convert to milliseconds
        setAutoplaySpeed(duration);
      }
    },
  };
  // carousel settings end

  // slides :: start
  const slides = [
    '<video autoPlay muted loop><source src="https://d1unenfz496pdf.cloudfront.net/Assets/Harry-Potter.mp4" type="video/mp4"></video>',
    '<video autoPlay muted loop><source src="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd2.mp4" type="video/mp4"></video>',
    '<video autoPlay muted loop><source src="https://d1unenfz496pdf.cloudfront.net/Assets/Harry-Potter.mp4" type="video/mp4"></video>',
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
        <SliderWithProgressBar settings={settings} slides={slides} />
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
