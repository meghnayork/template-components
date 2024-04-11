import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import VideoBanner from "../../components/videoBanner";
import CTABanner from "../../components/ctaBanner";

const GatedOffer = () => {
  const [disabled, setDisabled] = useState(true);
  const [videoId, setVideoId] = useState();

  // dynamic video duration :: start
  useEffect(() => {
    setTimeout(() => {
      var video = document.querySelector("#video-banner video");
      var duration = video.duration * 1000;
      setVideoId(duration);
    }, 300);
  }, []);

  useEffect(() => {
    if (videoId !== undefined) {
      setTimeout(() => {
        setDisabled(false);
        console.log("object is");
      }, videoId);
    }
  }, [videoId]);
  // dynamic video duration :: end

  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"}
        brandTitle={"Brand Logo Title"}
      />
      {/* header :: end */}

      {/* video banner :: start */}
      <VideoBanner
        withProgress={true}
        id={"video-banner"}
        loop={false}
        video={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd.mp4"
        }
      />
      {/* video banner :: end */}

      {/* cta banner :: start */}
      <CTABanner
        ctaContent={"Finish Watching to Unlock Offer"}
        disabled={disabled}
      />
      {/* cta banner :: end */}
    </div>
  );
};

export default GatedOffer;
