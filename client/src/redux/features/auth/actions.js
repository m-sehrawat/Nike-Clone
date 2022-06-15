import axios from "axios";
import { setToast } from "../../../utils/extraFunctions";
import { setItem } from "../../../utils/localstorage";
import { GET_TOKEN, SHOW_LOGIN_PAGE, SHOW_RESET_PAGE } from "./actionTypes";


export const showLoginPage = () => ({ type: SHOW_LOGIN_PAGE });

export const showResetPage = () => ({ type: SHOW_RESET_PAGE });

export const getToken = (payload) => ({ type: GET_TOKEN, payload });


export const getSignupSuccess = (data, toast) => async (dispatch) => {
    try {
        let res = await axios.post(`/signup`, data);
        res = res.data;
        dispatch(getToken(res));
        setItem('token', res.token);
        setItem('user', res.user);
        setToast(toast, 'Signup successfully', 'success');
    } catch (err) {
        console.log(err);
        setToast(toast, 'Something went wrong', 'error');
    }
};

export const getLoginSuccess = (data, toast) => async (dispatch) => {
    try {
        let res = await axios.post(`/login`, data);
        res = res.data;
        dispatch(getToken(res));
        setItem('token', res.token);
        setItem('user', res.user);
        setToast(toast, 'Login Successfully', 'success');
    } catch (err) {
        console.log(err);
        setToast(toast, 'Something went wrong', 'error');
    }
};