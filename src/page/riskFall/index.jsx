import React from "react";
import "./styles.scss";

import Button from "../../common/button";
import Link from "../../common/Link";
const RiskFall = () => {
  const data = [
    {
      title: "Am I at risk of a fall?​",
      description:
        "Welcome to the HealthCraft Fall Prevention Assessment and Action Tool.​",
      description2:
        " The Assessment portion consists of 16 questions. Set expectation. It should take you about 10 min to complete the assessment portion.",
    },
  ];
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="risk-fall-container">
            <h3>{item?.title}</h3>
            <div>
              <p>{item?.description}</p>
              <p>{item?.description2}</p>
            </div>
            <Link url={"/assessment"}>
              <Button>Start the assessment</Button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default RiskFall;
