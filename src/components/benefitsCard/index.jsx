import React from "react";

const BenefitsCard = (props) => {
  const { img, title } = props;

  return (
    <div className="benefit-img-card">
      <img src={img} alt="" />

      <h5 className="benefit-img-title"> {title} </h5>
    </div>
  );
};

export default BenefitsCard;
