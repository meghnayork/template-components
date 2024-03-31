import React from "react";
import CTABanner from "../ctaBanner";

const OfferCard = (props) => {
  const { img, offer, link = "/" } = props;

  return (
    <div className="offer-card">
      <div className="offer-img">
        <img src={img} alt="" />
      </div>

      <CTABanner className="offer-cta" link={link} ctaContent={offer} />
    </div>
  );
};

export default OfferCard;
