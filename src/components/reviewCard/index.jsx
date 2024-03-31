import React from "react";
import RatingStar from "../ratingStar";

const ReviewCard = (props) => {
  const { title, feedback, rating, name, verified = true } = props;

  return (
    <div className="review-card">
      <h4 className="review-title">{title}</h4>
      <p className="feedback-text"> {feedback} </p>
      <RatingStar rating={rating} />
      <p className="reviewer-name"> {name} </p>

      {verified && (
        <p className="verified">
          Verified Buyer{" "}
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.44482L5.625 13.0698L13.8221 4.87268"
                stroke="#F59300"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
