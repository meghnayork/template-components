import React from "react";

const AnnouncementBar = (props) => {
  const { content, position, className } = props;

  return (
    <div
      className={`announcement-bar ${className}`}
      style={{
        position: `${position}`,
        top: `${position === "relative" && "0"}`,
      }}
    >
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AnnouncementBar;
