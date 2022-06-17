import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const Public = ({children}) => {

    const token = useSelector((state)=>state.authReducer.token);

    return token ? <Navigate to={'/'} /> : children;
};