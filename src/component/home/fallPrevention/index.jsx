import React from "react";
import "./styles.scss";

const FallPrevention = ({ data }) => {
  return (
    <div className="fall-prevention-container">
      {data?.map((item) => {
        return (
          <div className="sub-container">
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FallPrevention;
