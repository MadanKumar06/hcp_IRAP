import React from "react";
import "./styles.scss";
import Button from "../../../common/button";

import Image from "../../../assets/images/homepage/safety section/image 3.png";
const HCPMissionSection = () => {
  const data = [
    {
      title: "The HealthCraft Team Mission",
      description:
        "We have made fall prevention in the home our sole focus for over thirty years - we’ve literally written the book on it - and have created multiple award-winning products that have helped millions “age in place” confidently and safely.​​",
    },
  ];
  return (
    <div className="hcp-mission-container">
      <div className="image">
        <img src={Image} alt="hcp misssion" />
      </div>
      {data?.map((item, index) => {
        return (
          <div key={index} className="section">
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
            <Button>Take our safe home assesment</Button>
          </div>
        );
      })}
    </div>
  );
};

export default HCPMissionSection;
