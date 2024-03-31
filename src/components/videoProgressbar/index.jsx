import React, { useState, useEffect } from "react";

const VideoProgressBar = (props) => {
  const { videoRef } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const video = videoRef.current;
      if (video) {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
      }
    };

    const intervalId = setInterval(updateProgress, 50);

    return () => clearInterval(intervalId);
  }, [videoRef]);

  return (
    <div className="progress-wrap">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default VideoProgressBar;
