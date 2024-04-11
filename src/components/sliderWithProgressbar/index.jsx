import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const SliderWithProgressBar = (props) => {
  const { settings, slides } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [functionExecuted, setFunctionExecuted] = useState(false);
  const [duration, setDuration] = useState();
  const videoRefs = useRef([]);
  const progressIntervalRef = useRef(null);
  const slickSliderRef = useRef();

  useEffect(() => {
    handleSlideChange(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (functionExecuted) {
      increaseProgress(duration);
    }
  }, [functionExecuted, duration]);

  const increaseProgress = (duration) => {
    let currentValue = 0;
    const targetValue = 100;
    const durationValue = duration * 1000;
    const intervalTime = duration * 10;

    clearInterval(progressIntervalRef.current);

    setProgress(0);

    const incrementAmount = targetValue / (durationValue / intervalTime);

    const interval = setInterval(() => {
      currentValue += incrementAmount;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
        if (slickSliderRef.current) {
          slickSliderRef.current.slickNext();
        }
      }
      setProgress(currentValue);
    }, intervalTime);

    progressIntervalRef.current = interval;
  };

  const stopProgressTimer = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  };

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    setFunctionExecuted(false);

    stopProgressTimer();

    videoRefs.current.forEach((video, idx) => {
      if (idx !== index && video) {
        video.pause();
      } else if (idx === index && video) {
        video.play();
      }
    });

    const activeVideo = videoRefs.current[index];
    if (activeVideo) {
      if (activeVideo.readyState >= 2) {
        const duration = activeVideo.duration;
        if (!isNaN(duration)) {
          setDuration(Math.round(duration));
          setFunctionExecuted(true);
        }
      } else {
        activeVideo.addEventListener("loadedmetadata", () => {
          const duration = activeVideo.duration;
          if (!isNaN(duration)) {
            setDuration(Math.round(duration));
            setFunctionExecuted(true);
          }
        });
      }
    }
  };

  const handleVideoLoaded = (index) => {
    return (video) => {
      if (video) {
        videoRefs.current[index] = video;
      }
    };
  };

  return (
    <Slider
      ref={slickSliderRef}
      {...settings}
      beforeChange={() => stopProgressTimer()}
      afterChange={handleSlideChange}
    >
      {slides.map((slide, index) => (
        <div
          id={`video-slide-${index}`}
          key={index}
          className="position-relative video-carousel-item"
          style={{ width: "100%", marginRight: "7px" }}
        >
          <video
            ref={handleVideoLoaded(index)}
            autoPlay={index === currentIndex}
            muted
            loop
            style={{ width: "100%" }}
          >
            <source src={slide} type="video/mp4" />
          </video>
          {currentIndex === index && (
            <div className="progress-wrap">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default SliderWithProgressBar;
