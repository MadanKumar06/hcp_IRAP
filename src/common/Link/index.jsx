import React from "react";
import "./style.scss";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

const Index = ({ children }) => {
  return <div>{children}</div>;
};

export default Index;

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
