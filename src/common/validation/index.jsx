import React from "react";

const Validation = ({ fieldName, values }) => {
  switch (fieldName) {
    case "full_name":
      if (values) {
        return "Please enter the full name.";
      }
      break;
    case "email_address":
      if (values) {
        return "Please enter the email address.";
      }
      break;
    case "mobile_number":
      if (values) {
        return "Please enter the mobile number.";
      }
      break;
    case "password":
      if (values) {
        return "Please enter the new password.";
      }
      break;
    case "confirm_password":
      if (values) {
        return "Please enter the confirm password.";
      }
      break;
    default:
      return false;
  }
};

export default Validation;
