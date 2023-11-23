import React from "react";
import "./styles.scss";
import Button from "../../../common/button";

const HCPMissionSection = (props) => {
  const { button_text, description, image_1, title } = props;

  return (
    <div className="hcp-mission-container">
      <div className="image">
        <img src={image_1} alt="hcp misssion" />
      </div>

      <div className="section">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <Button>{button_text}</Button>
      </div>
    </div>
  );
};

export default HCPMissionSection;
