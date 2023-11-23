import React from "react";
import "./styles.scss";

import Image from "../../../assets/images/homepage/download e-book/image 3 (2).png";
import Button from "../../../common/button";
import InputField from "../../../common/Input";
import { InputLabel, Box } from "@mui/material";

const DownloadEBook = (props) => {
  const {
    button_text,
    description,
    email_field,
    email_input,
    image,
    name_field,
    name_input,
    title,
  } = props;
  return (
    <div className="e-bbok-container">
      <div className="image">
        <img src={image} alt="e-book" />
      </div>

      <div className="section">
        <h3>{title}</h3>
        <span>{description} ​</span>
        <Box component="form" noValidate>
          <div className="input-fields">
            <InputLabel>{name_field}</InputLabel>
            <InputField placeholder={name_input} className="inputfield-box" />
          </div>
          <div className="input-fields">
            <InputLabel>{email_field}</InputLabel>
            <InputField placeholder={email_input} className="inputfield-box" />
          </div>
        </Box>

        <Button>{button_text}</Button>
      </div>
    </div>
  );
};

export default DownloadEBook;
