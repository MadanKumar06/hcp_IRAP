import React from "react";
import "./styles.scss";

import Button from "../../../common/button";

const AgingPlace = () => {
  const data = [
    {
      title: "Aging in place solutions are at hand.​",
      description:
        "At HealthCraft, for over 30 years we have created award-winning products that have helped millions of people “live in place” on their own safely, giving them and their families confidence and peace of mind.​",
    },
  ];
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="aging-place-container">
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
            <Button>Take our safe home assesment</Button>
          </div>
        );
      })}
    </>
  );
};

export default AgingPlace;
