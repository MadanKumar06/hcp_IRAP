import React, { useState, useEffect } from "react";
import "./styles.scss";
import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";

import {
  Autocomplete,
  TextField,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import {
  ExpandMore,
  CheckBoxOutlineBlank,
  CheckBox,
} from "@mui/icons-material";

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

const AutoComplete = (props) => {
  const {
    data,
    id,
    className,
    label,
    value,
    name,
    fullWidth,
    onChange,
    placeholder,
    disabled,
    autoHighlight,
    isGroupedby,
    error,
    multiple,
    delayedData,
    delay,
  } = props;

  const [open, setOpen] = useState(false);
  const [optionData, setOptionData] = useState([]);
  const loading = open && optionData?.length === 0;

  //delay added to load the dropdown data
  const sleep = (delay = 0) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  };

  useEffect(() => {
    if (delayedData) {
      let active = true;
      if (!loading) {
        return undefined;
      }

      (async () => {
        await sleep(delay);

        if (active) {
          setOptionData(data);
        }
      })();

      return () => {
        active = false;
      };
    }
  }, [loading]);

  useEffect(() => {
    if (!open && delayedData) {
      setOptionData([]);
    }
  }, [open, delayedData]);

  //dropdown options
  const options =
    isGroupedby &&
    data?.map((option) => {
      const firstLetter = option?.label?.[0]?.toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });

  return (
    <Autocomplete
      id={id}
      className={`autoCompleteDropDown ${className}`}
      value={value}
      name={name}
      fullWidth={fullWidth}
      options={
        isGroupedby
          ? options?.sort(
              (a, b) => -b?.firstLetter?.localeCompare(a?.firstLetter)
            )
          : delayedData
          ? optionData
          : data
      }
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      groupBy={(option) => option?.firstLetter}
      getOptionLabel={(option) => option?.label}
      onChange={onChange}
      autoHighlight={autoHighlight}
      multiple={multiple}
      popupIcon={<ExpandMore />}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          {multiple && (
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 2 }}
              checked={selected}
            />
          )}

          {option?.label}
        </li>
      )}
      loading={delayedData && loading}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {delayedData && loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default AutoComplete;

AutoComplete.defaultProps = defaultProps;
AutoComplete.propTypes = propTypes;
