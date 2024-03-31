import React, { useRef, useState, useEffect } from "react";
import VideoProgressBar from "../videoProgressbar";

const VideoBanner = (props) => {
  const {
    controlPlayer = false,
    muteIcon = true,
    video,
    withProgress = false,
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
    videoRef.current.muted = !videoRef.current.muted;
    setMute(videoRef.current.muted);
  };

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
    <div className="video-banner-wrap">
      <video ref={videoRef} muted loop={true} className="banner-video">
        <source src={video} type="video/mp4" />
      </video>
      {/* mute icon start */}
      {muteIcon ? (
        <div className="mute-wrap" onClick={toggleMute}>
          {!mute ? (
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
                d="M1.15838 10.9306C0.445373 9.74229 0.445373 8.25771 1.15838 7.06937C1.37596 6.70674 1.73641 6.45272 2.1511 6.36978L3.84413 6.03117C3.94499 6.011 4.03591 5.95691 4.10176 5.87788L6.17085 3.39498C7.3534 1.97592 7.94468 1.26638 8.47234 1.45742C9 1.64846 9 2.57207 9 4.41928L9 13.5807C9 15.4279 9 16.3515 8.47234 16.5426C7.94468 16.7336 7.3534 16.0241 6.17085 14.605L4.10176 12.1221C4.03591 12.0431 3.94499 11.989 3.84413 11.9688L2.1511 11.6302C1.73641 11.5473 1.37596 11.2933 1.15838 10.9306Z"
                fill="#000000BF"
              />
              <path
                d="M11.5355 5.46447C12.4684 6.39732 12.9948 7.66105 13 8.9803C13.0052 10.2996 12.4888 11.5674 11.5633 12.5076"
                stroke="#000000BF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15.6569 3.34314C17.1494 4.83572 17.9916 6.85769 17.9999 8.96848C18.0083 11.0793 17.182 13.1078 15.7012 14.6121"
                stroke="#000000BF"
                strokeWidth="2"
                strokeLinecap="round"
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
          ß
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
