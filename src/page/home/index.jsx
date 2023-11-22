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

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner-container">
        <Banner />
      </div>
      <FallPrevention />
      <FallInHome />
      <AgingPlace />
      <SafetySection />
      <ProcessSection />
      <AboutUsAection />
      <HCPMissionSection />
      <DownloadEBook />
    </div>
  );
};

export default Home;
