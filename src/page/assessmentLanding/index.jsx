import React from "react";
import "./styles.scss";

import Button from "../../common/button";
import Link from "../../common/Link";
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
              <Link url={"/assessment/1"}>
                <Button>Myself</Button>
              </Link>
              <Link url={"/assessment/1"}>
                <Button>Someone Else</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AssessmentLanding;
