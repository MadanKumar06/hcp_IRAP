import React from "react";
import "./styles.scss";

const FallInHome = (props) => {
  const { answer, question, title } = props;
  return (
    <div className="fallIn-home-container">
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <h4 dangerouslySetInnerHTML={{ __html: question }} />
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

export default FallInHome;
