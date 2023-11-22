//validation utilities

//email address
export const isEmailAddressValid = (email) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

//password
export const isPasswordValid = (password) =>
  password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,99}$/);

//frist and last name
export const isFirstAndLastNameValid = (firstAndLastName) =>
  firstAndLastName.match(/^[a-zA-Z\s.]*$/);

//designation
export const isDesignationValid = (designation) =>
  designation.match(/^[a-zA-Z ]*$/);

//company
export const isCompanyNameValid = (company) => company.match(/^[0-9]*\d$/);

//role
export const isRolesValid = (roles) =>
  roles.match(
    /^((?=.*[a-zA-Z])[a-zA-Z+.\s+!@#$%^&*'~`+{}"?><,.:;/|()_-]{0,50})$/
  );

//landline number
export const isLandlineValid = (landline) => landline.match(/^[0-9+[+-\s]*$/);

//other brands
export const isOtherBrands = (value) =>
  value.match(/^\d*[0-9 ][0-9-+.+\s.+!@#$%^&*'~`+{}"?><,.:;/|()_-]*$/);

//only special characters allowed
export const isOnlySpecialCharacters = (value) =>
  value.match(/^[!@#$%^&*'~`+{}"?><,.:;/|()_-]+$/);

//number
export const isNumber = (number) => number.match(/^[0-9]*\d$/);
export const isNumberValid = (number) => number.match(/^[1-9]\d*(\.\d+)?$/);
