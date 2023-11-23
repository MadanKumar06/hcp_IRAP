import React from "react";
import "./styles.scss";

// import HeaderLogo from "../../assets/images/headerLogo.png";

const Footer = ({ data }) => {
  return (
    <footer className="footer-main-container">
      <div className="footer-section">
        <div className="section-a">
          <div>
            <img src={data?.healthcraft_image} alt="header logo" />
          </div>
          <div>
            <div>
              <img src={data?.social_icons?.pinterest_icon} alt="" />
            </div>
            <div>
              <img src={data?.social_icons?.linked_icon} alt="" />
            </div>
            <div>
              <img src={data?.social_icons?.facebook_icon} alt="" />
            </div>
            <div>
              <img src={data?.social_icons?.instagram_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="section-b">
          <h3>Customer Support</h3>
          <p>info@healthcraftproducts.com</p>
          <p>Call Us: 613-822-1885</p>
          <p>Toll Free: 1 (888) 619-9992</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          Copyright © 2022, HealthCraft Group. All Rights Reserved.
          <span className="link">Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
