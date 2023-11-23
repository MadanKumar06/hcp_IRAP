import React from "react";
import "./styles.scss";

// import HeaderLogo from "../../assets/images/headerLogo.png";

const Footer = ({ data }) => {
  return (
    <footer className="footer-main-container">
      <div className="footer-section">
        <div className="section-a">
          <div className="image">
            <img src={data?.healthcraft_image} alt="header logo" />
          </div>
          <div>
            <a
              href={`${data?.social_icon_urls?.pinterest_url}`}
              target="_blanks"
              aria-label="pinterest"
            >
              <img src={data?.social_icons?.pinterest_icon} alt="pinterest" />
            </a>
            <a
              href={`${data?.social_icon_urls?.linkedin_url}`}
              target="_blanks"
              aria-label="linkedin"
            >
              <img src={data?.social_icons?.linked_icon} alt="linkedin" />
            </a>
            <a
              href={`${data?.social_icon_urls?.facebook_url}`}
              target="_blanks"
              aria-label="facebook"
            >
              <img src={data?.social_icons?.facebook_icon} alt="facebook" />
            </a>
            <a
              href={`${data?.social_icon_urls?.instagram_url}`}
              target="_blanks"
              aria-label="instagram"
            >
              <img src={data?.social_icons?.instagram_icon} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="section-b">
          <h3>{data?.title}</h3>
          <p>{data?.email}</p>
          <p>{data?.call}</p>
          <p>{data?.toll_free}</p>
          <p>{data?.contact_us}</p>
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
