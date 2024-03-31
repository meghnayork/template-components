import React from "react";
import Header from "../../components/header";
import OfferCard from "../../components/offerCard";

const OfferListing = () => {
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

      {/* offer body :: start */}
      <div className="offer-body">
        <OfferCard
          img={
            "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png"
          }
          offer={"Get 15% off"}
        />
      </div>
      {/* offer body :: end */}
    </div>
  );
};

export default OfferListing;
