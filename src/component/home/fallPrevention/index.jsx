import React from "react";
import "./styles.scss";

import image1 from "../../../assets/images/homepage/fallprevention/icn_fall.svg";
import image2 from "../../../assets/images/homepage/fallprevention/icn_peace.svg";
import image3 from "../../../assets/images/homepage/fallprevention/icn_care.svg";
const FallPrevention = () => {
  const data = [
    {
      image: image1,
      title: "Home fall prevention",
    },
    {
      image: image2,
      title: "Peace of mind",
    },
    {
      image: image3,
      title: "Care - Giver Freedom",
    },
  ];
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
