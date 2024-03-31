import React from "react";
import RatingStar from "../ratingStar";
import Badge from "../badge";

const ProductCard = (props) => {
  const { productImg, name, rating, price, offer, category } = props;

  return (
    <div className="product-card">
      <div className="product-grid-img-wrap">
        <img src={productImg} alt="" />
      </div>

      <p className="product-name"> {name} </p>

      <RatingStar rating={rating} />

      <p className="product-price"> {price} </p>

      {(offer || category) && (
        <div className="badge-wrap">
          {offer && <Badge variant={"dark-blue"} text={offer} />}
          {category && <Badge variant={"mid-blue"} text={category} />}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
