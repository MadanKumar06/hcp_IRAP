import React from "react";
import "./styles.scss";

const FallInHome = () => {
  const data = [
    {
      title:
        "A fall in the home can be devastating, not only for the parents, but for the whole family.",
      sub_title:
        "did you know that the leading cause of injury for seniors is falls in the home?",
      description2: "One in three aged 65 and over will fall in their home",
      description1:
        "One in two aged over 75, and 100% over 80 will fall in their home",
      description3: "Of those hospitalized, one in three will die.",
    },
  ];
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="fallIn-home-container">
            <h3>{item?.title}</h3>
            <h4>{item?.sub_title}</h4>
            <div className="description">
              <p>{item?.description1}</p>
              <p>{item?.description2}</p>
              <p>{item?.description3}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FallInHome;
