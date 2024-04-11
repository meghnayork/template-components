import React from "react";
import Header from "../../components/header";
import VideoBanner from "../../components/videoBanner";
import CTABanner from "../../components/ctaBanner";

const HomeCta = () => {
  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"}
        brandTitle={"AM Routine with Oars + Alps"}
      />
      {/* header :: end */}

      {/* video banner :: start */}
      <VideoBanner
        video={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd.mp4"
        }
      />
      {/* video banner :: end */}

      {/* cta banner :: start */}
      <CTABanner ctaContent={"Get 15% Off"} />
      {/* cta banner :: end */}
    </div>
  );
};

export default HomeCta;
