import React from "react";
import RatingStar from "../ratingStar";
import Badge from "../badge";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { productImg, name, rating, price, offer, category, link } = props;

  return (
    <Link to={link} className="product-card">
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
    </Link>
  );
};

export default ProductCard;
