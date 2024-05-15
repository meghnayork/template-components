import React from "react";

const RadioButton = (props) => {
  const { options, onChange = () => {}, outlineButton = false, name } = props;

  const handleOptionChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={`radio-btn-wrap ${outlineButton && "outlined"}`}>
      {options.map((option, index) => (
        <label key={index} className="radio-btn">
          <input
            className="radio"
            visibility="hidden"
            type="radio"
            name={name}
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
