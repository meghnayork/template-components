import React from "react";
import { Link } from "react-router-dom";

const CTABanner = (props) => {
  const {
    withFullBg = false,
    isIcon = true,
    isTextCenter = false,
    ctaContent,
    megaBanner,
    link = "/",
    className = "",
  } = props;

  return (
    <div className={`cta-wrap ${withFullBg ? "bg-full" : ""} ${className}`}>
      <Link
        to={link}
        className={`cta-banner ${megaBanner && "mega-banner"} ${
          !isIcon && isTextCenter ? "text-center" : ""
        }`}
      >
        <p>{ctaContent}</p>
        {isIcon && (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 8.75L15.1925 9.8075L18.6275 13.25L6.5 13.25L6.5 14.75L18.6275 14.75L15.185 18.1925L16.25 19.25L21.5 14L16.25 8.75Z"
              fill="#F3F3F3"
            />
          </svg>
        )}
      </Link>
    </div>
  );
};

export default CTABanner;
