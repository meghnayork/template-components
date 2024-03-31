import React from "react";

const RadioButton = (props) => {
  const { options, onChange = () => {} } = props;

  const handleOptionChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="radio-btn-wrap">
      {options.map((option, index) => (
        <label key={index} className="radio-btn">
          <input
            className="radio"
            visibility="hidden"
            type="radio"
            name="radioOptions"
            value={option.value}
            defaultChecked={option.checked}
            onChange={handleOptionChange}
          />
          <div
            className="radio-content"
            dangerouslySetInnerHTML={{ __html: option.element }}
          />
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
