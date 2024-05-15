import React from "react";

const BannerTitle = (props) => {
  const { titleBefore, highlighted, titleAfter, textAlign } = props;
  return (
    <div className="banner-title" style={{ textAlign: `${textAlign}` }}>
      <h1 className={textAlign !== "center" && "p-0"}>
        {titleBefore} <span>{highlighted}</span> {titleAfter}
      </h1>
    </div>
  );
};

export default BannerTitle;
