import React from "react";
import "./styles.scss";

import Image from "../../../assets/images/homepage/download e-book/image 3 (2).png";
import Button from "../../../common/button";
import InputField from "../../../common/Input";
import { InputLabel, Box } from "@mui/material";

const DownloadEBook = () => {
  return (
    <div className="e-bbok-container">
      <div className="image">
        <img src={Image} alt="e-book" />
      </div>

      <div className="section">
        <h3>HealthCraft Wrote the Book on Fall Prevention - Literally!</h3>
        <span>Download Your Free E-Book ​</span>
        <Box component="form" noValidate>
          <div className="input-fields">
            <InputLabel>Full name</InputLabel>
            <InputField
              placeholder="Enter your full name"
              className="inputfield-box"
            />
          </div>
          <div className="input-fields">
            <InputLabel>Email address</InputLabel>
            <InputField
              placeholder="Enter your email address"
              className="inputfield-box"
            />
          </div>
        </Box>

        <Button>Download E-book (PDF-1.5MB)</Button>
      </div>
    </div>
  );
};

export default DownloadEBook;
