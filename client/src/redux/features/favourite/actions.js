import axios from "axios";
import { setToast } from "../../../utils/extraFunctions";
import { ADD_TO_FAVOURITE } from "./actionTypes";


export const addToFavourite = (payload) => {
    return { type: ADD_TO_FAVOURITE, payload };
};

export const addToFavouriteRequest = (data, token, toast)=> async()=>{
    try {
        await axios.post('/favourite', data, {headers: {'Authorization': `Bearer ${token}`}});
        setToast(toast, 'Item added to the favourites', 'success');
    } catch (err) {
        console.log(err.response.data);
        if (err.response.data.message === "Already present in the Favourite") {
            notify(toast, err.response.data.message, "info");
        } else {
            notify(toast, "Something went wrong", "error");
        }
    }
};