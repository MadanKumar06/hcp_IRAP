import React from "react";
import "./styles.scss";

import Button from "../../../common/button";

const ProcessSection = (props) => {
  const { button_text, image, content } = props;

  return (
    <div className="process-container">
      <div className="image">
        <img src={image} alt="process banner" />
      </div>
      <div className="sub-container">
        {content?.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <span>{index + 1}</span>
                <h3>{item?.title}</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: item?.description }} />
            </div>
          );
        })}
        <Button>{button_text}t</Button>
      </div>
    </div>
  );
};

export default ProcessSection;
