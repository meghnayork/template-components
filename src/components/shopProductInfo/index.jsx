import React from "react";
import RatingStar from "../ratingStar";
import { Link } from "react-router-dom";

const ShopProductInfo = (props) => {
  const {
    heading,
    title,
    subTitle,
    price,
    originalPrice,
    discount,
    rating,
    totalRating,
    ratingLink = "/",
  } = props;

  return (
    <div className="shop-product-info">
      {heading && <h4 className="product-heading">{heading}</h4>}

      <div className="flex flex-between">
        <h5 className="product-title">{title}</h5>
        {price && (
          <div className="product-price">
            {originalPrice && <span>{originalPrice}</span>} {price}
          </div>
        )}
      </div>

      <div className={`flex ${subTitle ? "flex-between" : "flex-end"}`}>
        {subTitle && <p className="sub-title">{subTitle}</p>}
        {discount && (
          <div className="discount">
            <p>{discount}</p>
          </div>
        )}
      </div>

      {rating && (
        <div className="flex align-center rating-flex">
          <RatingStar rating={rating} />
          {totalRating && (
            <Link to={ratingLink} className="total-rating">
              {`${totalRating} Reviews`}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopProductInfo;
