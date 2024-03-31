import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const SliderWithProgressBar = (props) => {
  const { settings, slides } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress >= 100) {
          clearInterval(interval);
        }
        return nextProgress;
      });
    }, settings.autoplaySpeed / 100);

    return () => clearInterval(interval);
  }, [settings.autoplaySpeed, currentIndex]); // Added currentIndex as dependency

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    setProgress(0); // Reset progress when slide changes
  };

  const handleSlideStart = () => {
    setProgress(0); // Reset progress when autoplay starts
  };

  return (
    <Slider
      {...settings}
      beforeChange={handleSlideChange}
      onInit={handleSlideStart}
    >
      {slides.map((slide, index) => (
        <div
          id={`video-slide-${index}`}
          key={index}
          className="position-relative"
          style={{ width: "340px", marginRight: "7px" }}
        >
          <div
            className="video-carousel-item position-relative"
            dangerouslySetInnerHTML={{ __html: slide }}
          />
          <div className="progress-wrap">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderWithProgressBar;
