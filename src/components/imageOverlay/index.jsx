import React from "react";

const ImageOverlay = (props) => {
  const { img, text, textSm = false, subText } = props;

  return (
    <div className="img-box">
      <div className="img-overlay">
        <h3 className={`text ${textSm ? "text-sm" : ""}`}>{text}</h3>
        {subText && <p dangerouslySetInnerHTML={{ __html: subText }} />}
      </div>

      <img src={img} alt="" />
    </div>
  );
};

export default ImageOverlay;
