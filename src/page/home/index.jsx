import React from "react";
import "./styles.scss";

import Banner from "../../component/home/banner";
import FallPrevention from "../../component/home/fallPrevention";
import FallInHome from "../../component/home/fallInHome";
import AgingPlace from "../../component/home/agingPlace";
import SafetySection from "../../component/home/safetySection";
import ProcessSection from "../../component/home/processSection";
import AboutUsAection from "../../component/home/aboutusSection";
import HCPMissionSection from "../../component/home/hcpMissionSection";
import DownloadEBook from "../../component/home/downloadEBook";

const Home = ({ data }) => {
  return (
    <div className="home-container">
      <div className="banner-container">
        <Banner {...data?.banner_section} />
      </div>
      <FallPrevention data={data?.icon_section} />
      <FallInHome {...data?.content_section} />
      <AgingPlace {...data?.white_content_section} />
      <SafetySection {...data?.white_content_section} />
      <ProcessSection {...data?.points_section} />
      <AboutUsAection {...data?.review_section} />
      <HCPMissionSection {...data?.white_content_section_2} />
      <DownloadEBook {...data?.form_section} />
    </div>
  );
};

export default Home;
