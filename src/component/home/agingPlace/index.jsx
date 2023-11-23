import React from "react";
import "./styles.scss";

import Button from "../../../common/button";

const AgingPlace = (props) => {
  const { title, description, button_text } = props;
  return (
    <>
      <div className="aging-place-container">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <Button>{button_text}</Button>
      </div>
    </>
  );
};

export default AgingPlace;
