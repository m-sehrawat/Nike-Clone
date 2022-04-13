import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, NAME_A_TO_Z, NAME_Z_TO_A, RATING_HIGH_TO_LOW, RATING_LOW_TO_HIGH, SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./actionTypes";

export const getDataLoading = () => ({ type: GET_DATA_LOADING });

export const getDataSuccess = (payload) => ({ type: GET_DATA_SUCCESS, payload });

export const getDataError = () => ({ type: GET_DATA_ERROR });

export const sortLowToHigh = () => ({ type: SORT_LOW_TO_HIGH });

export const sortHighToLow = () => ({ type: SORT_HIGH_TO_LOW });

export const ratingLowToHigh = () => ({ type: RATING_LOW_TO_HIGH });

export const ratingHighToLow = () => ({ type: RATING_HIGH_TO_LOW });

export const nameAtoZ = () => ({ type: NAME_A_TO_Z });

export const nameZtoA = () => ({ type: NAME_Z_TO_A });


//Action Functions
export const getRequest = () => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        let res = await axios.get("/shoes");
        dispatch(getDataSuccess(res.data));
    } catch (err) {
        dispatch(getDataError());
    }
}


