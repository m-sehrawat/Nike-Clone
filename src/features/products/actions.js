import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";

export const getDataLoading = (payload) => ({ type: GET_DATA_LOADING, payload });

export const getDataSuccess = (payload) => ({ type: GET_DATA_SUCCESS, payload });

export const getDataError = (payload) => ({ type: GET_DATA_ERROR, payload });

