import axios from "axios";
import {
    SET_HEADER,
    SET_FOOTER,
} from '../types';
import Constant from "../../Constant";


// GET Header
export const getheader = (data) => (dispatch) => {
    axios.get(`${Constant.baseUrl()}/header`, data).then((res) => {
        dispatch({
            type: SET_HEADER,
            payload: res?.data?.data,
        });
    });
};

// GET footer
export const getfooter = (data) => (dispatch) => {
    axios.get(`${Constant.baseUrl()}/footer`, data).then((res) => {
        dispatch({
            type: SET_FOOTER,
            payload: res?.data?.data,
        });
    });
};
