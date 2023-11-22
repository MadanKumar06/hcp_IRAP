import React from "react";
import "./style.scss";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

import { Rating } from "@mui/material";
import { ReactComponent as Icon } from "../../assets/icons/ph_star-fill.svg";
import { ReactComponent as EmptyIcon } from "../../assets/icons/ph_star-light.svg";

const Index = (props) => {
  const { value, ratingValue } = props;
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        ratingValue(newValue);
      }}
      readOnly
      icon={<Icon />}
      emptyIcon={<EmptyIcon />}
    />
  );
};

export default Index;

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
