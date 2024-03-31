import React, { useEffect, useState } from "react";

const QtySelector = (props) => {
  const { qty = 1, minQty = 1, maxQty = 10, onChange = () => {} } = props;
  const [quantity, setQuantity] = useState(qty);

  const handleChange = (qty) => {
    onChange(qty);
    setQuantity(qty);
  };

  const increase = () => {
    if (quantity < maxQty) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > minQty) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    onChange(quantity);
  }, [quantity]);
  return (
    <div className="qty-selector-wrap">
      <p className="qty-title">Quantity Title</p>

      <div className="qty-action-wrap">
        <button className="btn qty-btn" onClick={decrease}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleChange(e.value)}
        />
        <button className="btn qty-btn" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default QtySelector;
