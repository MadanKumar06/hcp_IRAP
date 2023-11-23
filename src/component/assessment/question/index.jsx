import React from "react";
import "./styles.scss";

import Button from "../../../common/button";
const Question = ({ data }) => {
  return (
    <div className="question-container">
      <p>14. I am sometimes short of breath when standing or walking.</p>
      <div className="btn">
        <Button>Yes</Button>
        <Button>No</Button>
      </div>
    </div>
  );
};

export default Question;
