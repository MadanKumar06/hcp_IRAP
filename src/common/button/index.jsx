import React from "react";
import "./style.scss";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

import { Button } from "@mui/material";

const Index = (props) => {
  const {
    children,
    variant,
    disabled,
    startIcon,
    endIcon,
    color,
    loadingPosition,
    loading,
    onClick,
  } = props;
  return (
    <Button
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      loading={loading}
      loadingPosition={loadingPosition}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Index;

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
