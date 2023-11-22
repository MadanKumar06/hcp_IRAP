import React from "react";
import "./styles.scss";

import Button from "../../../common/button";
function Banner() {
  const backgroundStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 70.84%), url(${require("../../../assets/images/homepage/banner.png")}) lightgray 50% / cover no-repeat`,
  };
  return (
    <div className="home-banner-container" style={backgroundStyle}>
      <div className="section">
        <div>
          <h3>
            Your aging parents can live at home with Diginity & Independence
          </h3>
          <p>
            Healthcraft products help those aging in place live safely in their
            own home.
          </p>
        </div>
        <Button>Take our safe home assesment</Button>
      </div>
    </div>
  );
}

export default Banner;
