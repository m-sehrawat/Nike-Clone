import { ADD_TO_FAVOURITE, GET_FAVOURITE_ERROR, GET_FAVOURITE_LOADING, GET_FAVOURITE_SUCCESS } from "./actionTypes";
import { setToast } from "../../../utils/extraFunctions";
import axios from "axios";


export const addToFavourite = (payload) => {
    return { type: ADD_TO_FAVOURITE, payload };
};

export const getFavouriteLoading = () => {
    return { type: GET_FAVOURITE_LOADING };
};

export const getFavouriteSuccess = (payload) => {
    return { type: GET_FAVOURITE_SUCCESS, payload };
};

export const getFavouriteError = () => {
    return { type: GET_FAVOURITE_ERROR };
};


export const addToFavouriteRequest = (data, token, toast) => async () => {
    try {
        delete data._id;
        await axios.post('/favourite', data, { headers: { 'Authorization': `Bearer ${token}` } });
        setToast(toast, 'Item added to the favourites', 'success');
    } catch (err) {
        console.log(err.response.data);
        if (err.response.data.message === "Already present in the Favourite") {
            setToast(toast, err.response.data.message, "info");
        } else {
            setToast(toast, "Something went wrong", "error");
        }
    }
};

export const getFavouriteRequest = (token) => async (dispatch) => {
    try {
        dispatch(getFavouriteLoading());
        let res = await axios.get('/favourite', { headers: { 'Authorization': `Bearer ${token}` } });
        dispatch(getFavouriteSuccess(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getFavouriteError());
    }
};

export const deleteFavouriteRequest = (id, token, toast) => async (dispatch) => {
    try {
        dispatch(getFavouriteLoading());
        await axios.delete(`/favourite/${id}`);
        dispatch(getFavouriteRequest(token));
        setToast(toast, 'Product removed from favourites', 'success');
    } catch (err) {
        console.log(err);
        dispatch(getFavouriteError());
        setToast(toast, 'Something went wrong', 'error');
    }
};