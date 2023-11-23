import React from "react";
import "./styles.scss";

// import ToggleSwitch from "../../common/toggle";
import CartBadge from "../../common/Badge";
import Link from "../../common/Link";

const Header = ({ data }) => {
  return (
    <header className="navbar-main-container">
      <div className="image">
        <Link url={"/"}>
          <img src={data?.logo_image} alt="header logo" />
        </Link>
      </div>
      <div className="section-right">
        <CartBadge>
          <img src={data?.cart_logo_image} alt="cart logo" />
        </CartBadge>
        {/* <div> */}
        {/* <span>CAD($)</span> */}
        {/* <ToggleSwitch /> */}
        {/* <span>USD($)</span> */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
