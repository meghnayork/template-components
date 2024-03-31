import React from "react";

const Variant = (props) => {
  const { variantImg = [], onSelect = () => {} } = props;

  return (
    <div className="variant-wrap">
      <p className="variant-title">
        Variants Icons or colors: <b>Selection</b>
      </p>

      <div className="variant-img-wrap flex">
        {variantImg.map((item, index) => (
          <div
            key={index}
            className="variant-img"
            onClick={() => onSelect(item)}
          >
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variant;
