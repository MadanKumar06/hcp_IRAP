import React from "react";
import "./styles.scss";

import Button from "../../../common/button";
import Link from "../../../common/Link";
const Banner = (props) => {
  const { background_image, button_text, description, title } = props;
  const backgroundStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 70.84%), url(${background_image}) lightgray 50% / cover no-repeat`,
  };
  return (
    <div className="home-banner-container" style={backgroundStyle}>
      <div className="section">
        <div>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <Link url={"/risk-fall"}>
          <Button>{button_text}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
