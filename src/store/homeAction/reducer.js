import {
    SET_HEADER,
    SET_FOOTER,
    SET_HOME
} from '../types';

const initalState = { loading: false };

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_HEADER:
            return {
                ...state,
                header: action.payload,
            };
        case SET_FOOTER:
            return {
                ...state,
                footer: action.payload,
            };
        case SET_HOME:
            return {
                ...state,
                home: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
