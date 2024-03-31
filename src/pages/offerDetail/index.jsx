import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import ImageOverlay from "../../components/imageOverlay";

const OfferDetail = () => {
  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        position={"relative"}
        logoCircle={true}
        logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"}
        brandTitle={"Brand Logo Title"}
        variant="solid"
      />
      {/* header :: end */}

      {/* body :: start */}
      <div className="offer-body">
        <div className="offer-img">
          <ImageOverlay
            img="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png"
            text={"This is headline placeholder "}
          />
        </div>

        {/* offer details :: start */}
        <div className="offer-detail">
          <h5 className="offer-heading">Here’s why you should join:</h5>

          <div className="offers">
            <ul>
              <li>Value Props</li>
              <li>Value Props</li>
              <li>Value Props</li>
            </ul>
          </div>

          <p className="offer-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur et
            a adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        {/* offer details :: end */}
      </div>
      {/* body :: end */}

      {/* cta banner :: start */}
      <CTABanner
        isIcon={false}
        isTextCenter={true}
        ctaContent={"Get 15% Off"}
      />
      {/* cta banner :: end */}
    </div>
  );
};

export default OfferDetail;
