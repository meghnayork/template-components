import React, { useState } from "react";

const Accordion = (props) => {
  const { content, withIcon = false } = props;

  const [openIndex, setOpenIndex] = useState(0); // Initially, the first section is open

  const toggleSection = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); // Toggle the index of the section to open/close
  };

  return (
    <div className="accordion">
      {content.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className={`accordion-header ${index === openIndex ? "open" : ""} ${
              withIcon ? "with-icon" : ""
            }`}
            onClick={() => toggleSection(index)}
          >
            {withIcon && (
              <div className="accordion-icon">
                <img src={section.icon} alt="" />
              </div>
            )}
            <h6 className="accordion-title">{section.title}</h6>
          </div>
          {index === openIndex && (
            <div className="accordion-content">
              {section.content}

              {section.img && (
                <div className="accordion-img">
                  <img src={section.img} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
