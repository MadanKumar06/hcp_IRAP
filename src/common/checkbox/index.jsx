import React from "react";
import "./style.scss";

import { defaultProps } from "./props/defaultProps";
import { propTypes } from "./props/propTypes";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";

// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
const Index = (props) => {
  const { data, onChange } = props;
  return (
    <FormGroup>
      {data?.length
        ? data.map((item) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    // icon={<BookmarkBorderIcon />}
                    // checkedIcon={<BookmarkIcon />}
                    onChange={onChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label={item.label}
              />
            );
          })
        : null}
    </FormGroup>
  );
};

export default Index;

Index.defaultProps = defaultProps;
Index.propTypes = propTypes;
