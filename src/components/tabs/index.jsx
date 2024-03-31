import React, { useState } from "react";

const Tabs = (props) => {
  const { tabs = [] } = props;

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
