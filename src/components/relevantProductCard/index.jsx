import React from "react";
import RatingStar from "../ratingStar";

const RelevantProductCard = (props) => {
  const {
    img,
    title,
    rating = 3,
    review = 2,
    originalAmount,
    amount,
    discount,
    addToCart = () => {},
    btnText = "Add to cart",
  } = props;

  return (
    <div className="relevant-product-card-wrap">
      <div className="relevant-product-img-wrap">
        <img src={img} alt="" />
      </div>

      <div className="relevant-product-info-wrap">
        <h6 className="relevant-title">{title}</h6>
        <div className="relevant-rating-wrap">
          <RatingStar rating={rating} />
          <p className="relevant-review-count">{review} Reviews</p>
        </div>

        <div className="relevant-pricing-info">
          {originalAmount && (
            <h5 className="relevant-original-amount"> {originalAmount} </h5>
          )}
          <h5 className="relevant-final-amount">{amount}</h5>
          {discount && (
            <div className="discount-amount-badge"> {discount} </div>
          )}
        </div>

        <button className="btn btn-cart-dark" onClick={addToCart}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default RelevantProductCard;
