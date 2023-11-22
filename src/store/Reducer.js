const initialState = {

};

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case "CUSTOMER__INFO":
    //   return { ...state, customerinfo: payload };

    default:
      return state;
  }
};
