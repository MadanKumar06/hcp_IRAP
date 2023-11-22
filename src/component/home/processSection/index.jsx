import React from "react";
import "./styles.scss";

import Button from "../../../common/button";
import processImg from "../../../assets/images/homepage/process section/image 3 (1).png";
const ProcessSection = () => {
  const data = [
    {
      title: "Entrances & Access points​",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat. emrue totam aseriam earue illo inventore veritatis architecto beatae.​",
    },
    {
      title: "Review our Report and Recommendations",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat. emrue totam aseriam earue illo inventore veritatis architecto beatae.​",
    },
    {
      title: "Choose your Plan and Enjoy your Freedom",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat. emrue totam aseriam earue illo inventore veritatis architecto beatae.​",
    },
  ];
  return (
    <div className="process-container">
      <div className="image">
        <img src={processImg} alt="process banner" />
      </div>
      <div className="sub-container">
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <span>{index + 1}</span>
                <h3>{item?.title}</h3>
              </div>
              <p>{item?.description}</p>
            </div>
          );
        })}
        <Button>Take our safe home assesment</Button>
      </div>
    </div>
  );
};

export default ProcessSection;
