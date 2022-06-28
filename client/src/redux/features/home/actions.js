import axios from "axios";
import { GET_DATA_ERROR_HOME, GET_DATA_LOADING_HOME, GET_DATA_SUCCESS_CLOTH, GET_DATA_SUCCESS_SHOE } from "./actionTypes";

export const getDataLoadingHome = () => ({ type: GET_DATA_LOADING_HOME });

export const getDataSuccessCloth = (payload) => ({ type: GET_DATA_SUCCESS_CLOTH, payload });

export const getDataSuccessShoe = (payload) => ({ type: GET_DATA_SUCCESS_SHOE, payload });

export const getDataErrorHome = () => ({ type: GET_DATA_ERROR_HOME });


export const getClothData = () => async (dispatch) => {
    try {
        dispatch(getDataLoadingHome());
        let res = await axios.get("/clothData");
        dispatch(getDataSuccessCloth(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getDataErrorHome());
    }
};

export const getShoeData = () => async (dispatch) => {
    try {
        dispatch(getDataLoadingHome());
        let res = await axios.get("/shoeData");
        dispatch(getDataSuccessShoe(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getDataErrorHome());
    }
};