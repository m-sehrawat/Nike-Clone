import axios from "axios";
import { setToast } from "../../../utils/extraFunctions";
import { removeItem, setItem } from "../../../utils/localstorage";
import { GET_TOKEN, REMOVE_TOKEN, SHOW_LOGIN_PAGE, SHOW_RESET_PAGE } from "./actionTypes";


export const showLoginPage = () => ({ type: SHOW_LOGIN_PAGE });

export const showResetPage = () => ({ type: SHOW_RESET_PAGE });

export const getToken = (payload) => ({ type: GET_TOKEN, payload });

export const removeToken = () => ({ type: REMOVE_TOKEN });


export const getSignupSuccess = (data, toast, navigate) => async (dispatch) => {
    try {
        let res = await axios.post(`/signup`, data);
        res = res.data;
        dispatch(getToken(res));
        setItem('token', res.token);
        setItem('user', res.user);
        setToast(toast, 'Signup successfully', 'success');
        navigate(-1);
    } catch (err) {
        console.log(err);
        setToast(toast, err.response.data.message, 'error');
    }
};

export const getLoginSuccess = (data, toast, navigate) => async (dispatch) => {
    try {
        let res = await axios.post(`/login`, data);
        res = res.data;
        dispatch(getToken(res));
        setItem('token', res.token);
        setItem('user', res.user);
        setToast(toast, 'Login Successfully', 'success');
        navigate(-1);
    } catch (err) {
        console.log(err);
        setToast(toast, err.response.data.message, 'error');
    }
};


export const logoutFromAccount = (toast) => (dispatch) => {
    try {
        removeItem('token');
        removeItem('user');
        dispatch(removeToken());
        setToast(toast, 'Logout Successfully', 'success');
    } catch (err) {
        console.log(err);
        setToast(toast, 'Something went wrong', 'error');
    }
};