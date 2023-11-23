import React from "react";
import "./style.scss";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

import { Link } from "react-router-dom";

const Index = (props) => {
  const { children, url } = props;
  return <Link to={`${url}`}>{children}</Link>;
};

export default Index;

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
