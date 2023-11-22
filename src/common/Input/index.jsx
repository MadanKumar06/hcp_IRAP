import React from "react";
import "./styles.scss";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

import { TextField } from "@mui/material";

const Input = (props) => {
  const {
    id,
    label,
    name,
    fullWidth,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    onChange,
    value,
    className,
    asterisk,
    required,
    disabled,
    error,
    variant,
    shrink,
    multiline,
    maxRows,
    defaultValue,
    rows,
    color,
    focused,
    helperText,
  } = props;
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      variant={variant}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      className={className}
      disabled={disabled}
      error={error}
      value={value}
      onChange={onChange}
      multiline={multiline}
      maxRows={maxRows}
      defaultValue={defaultValue}
      rows={rows}
      color={color}
      focused={focused}
      helperText={helperText}
      InputLabelProps={{
        shrink: { shrink },
        required: required,
        classes: {
          asterisk: asterisk,
        },
      }}
    />
  );
};

export default Input;

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;
