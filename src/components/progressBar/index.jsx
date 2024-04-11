import React, { useEffect, useState } from "react";

const ProgressBar = (props) => {
  const { totalAmout = 100, addedAmout = 0, hideText = false } = props;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((addedAmout / totalAmout) * 100);
  }, [addedAmout, totalAmout]);

  return (
    <div className="progress-bar-wrap">
      <div className="progress" style={{ width: `${progress}%` }}>
        {!hideText && (
          <p>
            {totalAmout > addedAmout
              ? `Add $${totalAmout - addedAmout} for free shipping`
              : `You are eligible for free shipping`}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
