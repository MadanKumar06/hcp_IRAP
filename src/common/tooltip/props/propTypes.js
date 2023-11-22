import PropTypes from "prop-types";

export const propTypes = {
  lacement: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    "right",
    "top-end",
    "top-start",
    "top",
  ]),
  arrow: PropTypes.bool,
  title: PropTypes.string,
};
