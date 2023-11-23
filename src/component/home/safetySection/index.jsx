import React from "react";
import "./styles.scss";

const SafetySection = (props) => {
  const { image1, sub_content } = props;
  return (
    <div className="safety-container">
      <div className="image-container">
        <img src={image1} alt="safety banner" />
      </div>
      <div className="sub-container">
        {sub_content?.map((item, index) => {
          return (
            <div key={index} className="section">
              <h3>{item?.sub_title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item?.sub_description }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SafetySection;
