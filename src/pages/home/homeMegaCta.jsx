import React from "react";
import Header from "../../components/header";
import VideoBanner from "../../components/videoBanner";
import CTABanner from "../../components/ctaBanner";

const HomeMegaCta = () => {
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
      <CTABanner
        ctaContent={
          "If you buy the thing now <br/> you get the other special thing"
        }
        megaBanner={true}
        link={
          "https://d1ofuudqlu2e8.cloudfront.net/86c5d03e-3bad-4f94-b944-daa590fa0a48#"
        }
      />
      {/* cta banner :: end */}
    </div>
  );
};

export default HomeMegaCta;
