import React from "react";
import "./styles.scss";
import { ReactComponent as Backbtn } from "../../assets/icons/backbtn.svg";

import Question from "./question";
import ProgressBar from "../../common/progressBar";

const Assessment = ({ data }) => {
  return (
    <div className="assessment-container">
      <Backbtn />
      <div className="sub-container">
        <h3>Answer the following questions</h3>
      </div>
      <div className="question-title">
        <span className="text">Question 14 of 16</span>
        <ProgressBar />
      </div>
      <Question />
    </div>
  );
};

export default Assessment;
