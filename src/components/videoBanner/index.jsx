import React, { useRef, useState, useEffect } from "react";
import VideoProgressBar from "../videoProgressbar";

const VideoBanner = (props) => {
  const {
    controlPlayer = false,
    muteIcon = true,
    video,
    withProgress = false,
    id,
    loop = true,
    className,
  } = props;

  const [mute, setMute] = useState(true);
  const [play, setPlay] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  const toggleMute = () => {
    setMute((prevMute) => !prevMute);
    videoRef.current.muted = !mute;
  };

  useEffect(() => {
    const video = videoRef.current;
    const handlePlay = () => {
      // perform any action when the video starts playing
    };

    const handleEnded = () => {
      if (controlPlayer) {
        setPlay(false);
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, [controlPlayer]);

  useEffect(() => {
    if (controlPlayer) {
      setPlay(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }, [controlPlayer]);

  return (
    <div className={`video-banner-wrap`} id={id}>
      <video
        playsInline
        ref={videoRef}
        loop={loop}
        muted
        autoPlay
        className={`banner-video ${className}`}
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* mute icon start */}
      {muteIcon ? (
        <div className="mute-wrap" onClick={toggleMute}>
          {mute ? (
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.9999 15.4995C29.9999 17.7118 29.4208 19.835 28.3667 21.6835L26.4291 19.7459C27.0527 18.4393 27.3867 16.9917 27.3867 15.492C27.3867 11.5426 25.0556 7.9643 21.4328 6.35333C20.9577 6.14546 20.6533 5.67034 20.6533 5.16552C20.6533 4.72009 20.8686 4.31178 21.2472 4.06679C21.6184 3.82923 22.0787 3.78469 22.487 3.97028C27.0527 5.98956 30.0073 10.5107 30.0073 15.492L29.9999 15.4995Z"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M24.7141 15.5138C24.7141 16.2636 24.5805 16.9837 24.3281 17.6444L20.6533 13.9697V9.75293C23.0215 10.5918 24.7141 12.8561 24.7141 15.5138Z"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M17.5281 2.44807V10.8444L11.7598 5.0761L16.1101 1.7428C16.6892 1.3048 17.5281 1.71311 17.5281 2.44807Z"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M3.42238 9.1665L17.5276 23.2792V28.7505C17.5276 29.4855 16.6887 29.9012 16.1097 29.4558L6.41418 22.0394H1.85595C0.831467 22.0394 0 21.2079 0 20.1834V11.0225C0 9.99797 0.824044 9.1665 1.85595 9.1665H3.41496H3.42238Z"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M29.9994 31C29.6208 31 29.2496 30.8589 28.9601 30.5694L0.890639 2.49997C0.319006 1.92834 0.319006 1.00036 0.890639 0.428725C1.46227 -0.142908 2.39025 -0.142908 2.96188 0.428725L31.0313 28.4982C31.603 29.0698 31.603 29.9978 31.0313 30.5694C30.7418 30.8589 30.3706 31 29.992 31H29.9994Z"
                fill="black"
                fillOpacity="0.75"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.14844 22.0933H1C0.447266 22.0933 0 21.6455 0 21.0933V10.0933C0 9.54077 0.447266 9.09326 1 9.09326H5.14844C5.2207 8.97681 5.31445 8.87475 5.43164 8.79492L16.4316 1.17944C17.0938 0.720458 18 1.19507 18 2.00171V29.1846C18 29.9912 17.0938 30.4661 16.4316 30.0068L5.43164 22.3914C5.31445 22.3115 5.2207 22.2095 5.14844 22.0933Z"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M21.2227 4.35474C21.2871 4.2915 21.3574 4.23633 21.4336 4.19018C21.7324 4.01001 22.1035 3.96558 22.4531 4.11621C24.4785 4.99048 26.2461 6.38916 27.5625 8.17749C29.1289 10.3025 29.9824 12.8687 30 15.5085C30.0176 18.1482 29.1992 20.7256 27.6621 22.8718C26.3691 24.678 24.623 26.1003 22.6074 27.002C21.9785 27.2842 21.2676 26.9238 21.0488 26.2688C20.832 25.6138 21.1914 24.9131 21.8145 24.6152C23.3301 23.8909 24.6445 22.7927 25.6309 21.416C26.8594 19.6992 27.5156 17.6372 27.5 15.5254C27.4863 13.4136 26.8027 11.3606 25.5508 9.66064C24.5469 8.29736 23.2168 7.21728 21.6914 6.51343C21.0645 6.22412 20.6953 5.52832 20.9043 4.87036C20.9688 4.66772 21.0801 4.49243 21.2227 4.35474Z"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M25 15.5933C25 18.2971 22.8496 20.6157 20.5 21.5952V9.59131C22.8496 10.5708 25 12.8894 25 15.5933Z"
                fill="black"
                fillOpacity="0.75"
              />
            </svg>
          )}
        </div>
      ) : (
        <div className="mute-btn" onClick={toggleMute}>
          <p>{mute ? "Unmute" : "Mute"}</p>
        </div>
      )}
      {/* mute icon end */}

      {/* play icon start */}
      {!controlPlayer ? (
        <div className="mute-overlay" onClick={toggleMute}></div>
      ) : (
        <>
          <div className="play-overlay" onClick={togglePlay}>
            {!play && (
              <div className="play-btn">
                <svg
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4533 10.162C20.7093 10.8872 20.7093 12.7 19.4533 13.4252L3.68529 22.5289C2.42929 23.254 0.859294 22.3476 0.859294 20.8973L0.859295 2.68994C0.859295 1.23963 2.42929 0.333197 3.6853 1.05835L19.4533 10.162Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
          </div>
        </>
      )}
      {/* play icon end */}

      {/* progressbar :: start */}
      {withProgress && <VideoProgressBar videoRef={videoRef} />}
      {/* progressbar :: end */}
    </div>
  );
};

export default VideoBanner;
