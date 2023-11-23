import React from "react";
import "./styles.scss";

import Button from "../../../common/button";
const Question = ({ data }) => {
  return (
    <div>
      <p>14. I am sometimes short of breath when standing or walking.</p>
      <Button>Yes</Button>
      <Button>No</Button>
    </div>
  );
};

export default Question;
