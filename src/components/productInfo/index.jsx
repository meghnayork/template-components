import React from "react";
import RatingStar from "../ratingStar";
import { Link } from "react-router-dom";

const ProductInfo = (props) => {
  const {
    title,
    productImage,
    desc,
    price,
    originalPrice,
    discount,
    rating,
    ctaLink,
    ctaText = "CTA Text",
    position,
  } = props;
  return (
    <div
      className={`product-info-wrap`}
      style={{ position: `${position ? position : "fixed"}` }}
    >
      <div className="product-info-card">
        <div className="product-img-wrap">
          <img src={productImage} alt="" />
        </div>

        <div className="product-details">
          <p className="product-title">{title}</p>
          {desc && <p className="product-desc">{desc}</p>}
          {rating && (
            <div className="rating-wrap">
              <RatingStar rating={rating} />
            </div>
          )}
          <div className="price-wrap">
            <p className="price">{price}</p>
            {originalPrice && (
              <p className="original-price"> ({originalPrice}) </p>
            )}
            <p className="discount-badge"> {discount} </p>
          </div>
          <Link
            to={ctaLink}
            className={`product-card-cta ${!rating && !desc ? "mt-lg" : ""}`}
          >
            {" "}
            {ctaText}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
