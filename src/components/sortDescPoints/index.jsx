import React from "react";

const SortDescPoints = (props) => {
  const { descList = [] } = props;

  return (
    <div className="desc-point-wrap">
      {descList.map((item, index) => (
        <div key={index} className="desc-point flex align-center">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.44482L6.125 13.0698L14.3221 4.87268"
              stroke="#2A2A2A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default SortDescPoints;
