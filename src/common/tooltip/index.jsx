import * as React from "react";
import { Tooltip, IconButton } from "@mui/material";
import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

const BasicTooltip = (props) => {
  const { title, placement, arrow } = props;
  return (
    <Tooltip title={title} placement={placement} arrow={arrow}>
      <IconButton>{"Icon"}</IconButton>
    </Tooltip>
  );
};

export default BasicTooltip;

BasicTooltip.defaultProps = defaultProps;
BasicTooltip.propTypes = propTypes;
