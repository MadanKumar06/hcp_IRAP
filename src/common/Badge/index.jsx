import React from "react";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

import Badge from "@mui/material/Badge";

const Index = (props) => {
  const { children, color, badgeContent, maxCount } = props;
  return (
    <Badge badgeContent={badgeContent} color={color} max={maxCount}>
      {children}
    </Badge>
  );
};

export default Index;

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
