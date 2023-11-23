import React from "react";
import "./styles.scss";

import Button from "../../common/button";

const AssessmentLanding = () => {
  const data = [
    {
      title: "Assessment​",
      description:
        "Are you completing this assessment for yourself or someone else?​",
    },
  ];
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="assessment-landing-container">
            <h3>{item?.title}</h3>
            <div className="description">
              <p>{item?.description}</p>
            </div>
            <div className="button-container">
              <Button>Myself</Button>
              <Button>Someone Else</Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AssessmentLanding;
