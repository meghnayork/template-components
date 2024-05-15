import React from "react";
import RatingStar from "../../ratingStar";
import CTABanner from "../../ctaBanner";
import { Link } from "react-router-dom";

const VerticalProduct = (props) => {
  const {
    title,
    variant,
    img,
    rating,
    ratingCount,
    price,
    originalPrice,
    discount,
    ctaText,
    ctaLink,
  } = props;
  return (
    <div className="slider-card">
      <div className="slider-details">
        <h5 className="title">{title}</h5>
        <p className="variant">{variant}</p>
      </div>

      <div className="slider-img-box">
        <img src={img} alt="" />
      </div>

      <div className="slider-card-rating">
        <RatingStar rating={rating} />
        <p className="rating-count">{ratingCount} Reviews</p>
      </div>

      <div className="slider-price-wrap">
        <div className="price-wrap">
          {originalPrice && <p className="original-price"> {originalPrice} </p>}
          <p className="price">{price}</p>
          <p className="discount-badge"> {discount} </p>
        </div>
      </div>

      <div className="slider-cta">
        <Link to={ctaLink}>{ctaText}</Link>
      </div>
    </div>
  );
};

export default VerticalProduct;
