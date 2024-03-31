import React from "react";

const Badge = (props) => {
  const { variant = "dark", text } = props;

  return (
    <div className={`badge ${variant}`}>
      <span className="badge-text">{text}</span>
    </div>
  );
};

export default Badge;
