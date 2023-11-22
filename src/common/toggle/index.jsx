import React from "react";
import "./style.scss";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import CanadaSwitch from "../../assets/images/icn_canflag.svg";
import UnitedStateSwitch from "../../assets/images/icn_usflag.svg";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 25,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    top: "2px",
    transform: "translateX(2px)",
    "& .MuiSwitch-input": {
      left: 0,
      width: "100%",
    },
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(34px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${UnitedStateSwitch})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#ffffff",
        border: "1px solid #D9D9D9",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 18,
    height: 18,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${CanadaSwitch})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    borderRadius: 32 / 2,
    backgroundColor: "#ffffff",
    border: "1px solid #D9D9D9",
  },
}));

const Index = () => {
  return (
    <FormControlLabel
      control={<MaterialUISwitch defaultChecked />}
      label=""
      className="toggle-switch"
    />
  );
};

export default Index;

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
