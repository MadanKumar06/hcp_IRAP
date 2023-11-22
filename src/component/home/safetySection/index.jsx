import React from "react";
import "./styles.scss";

import safetyImg from "../../../assets/images/homepage/safety section/image 3.png";
const SafetySection = () => {
  const data = [
    {
      title: "Bathroom safety​",
      description:
        "Preventing slips and falls: HealthCraft’s grab bars, seats, super-poles and safety rails for toilet, sink, bath and shower often come cleverly disguised as designer-quality towel bars, soap racks and corner shelves.",
    },
    {
      title: "Bedroom safety",
      description:
        "Getting in and out of bed can prove impossible. With HealthCraft’s range of superpoles, assist rails and even a ceiling-mount trapeze to “climb” from lying to sitting, getting to and from a good night’s sleep is back.",
    },
    {
      title: "Living room safety",
      description:
        "From standing to sitting and back up, HealthCraft’s floor-, ceiling- or even wall-mounted poles, rails and trapezes solve living-spaces mobility issues.",
    },
    {
      title: "Entrances & Access points",
      description:
        "Whether it’s that extra push to get from top step to landing, from bottom step to hallway, or for balance in opening and closing doors, the HealthCraft range of grab bars has it covered.",
    },
  ];
  return (
    <div className="safety-container">
      <div className="image-container">
        <img src={safetyImg} alt="safety banner" />
      </div>
      <div className="sub-container">
        {data?.map((item, index) => {
          return (
            <div key={index} className="section">
              <h3>{item?.title}</h3>
              <p>{item?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SafetySection;
