import axios from "axios";
import { setToast } from "../../../utils/extraFunctions";
import { setItemSession } from "../../../utils/sessionStorage";
import { ADD_TO_FAVOURITE, GET_FAVOURITE_ERROR, GET_FAVOURITE_LOADING, GET_FAVOURITE_SUCCESS } from "./actionTypes";


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
        console.log('res:', res.data)
        dispatch(getFavouriteSuccess(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getFavouriteError());
    }
}