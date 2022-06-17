import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClothSection } from "../../components/home/ClothSection.jsx";
import { ShoeSection } from "../../components/home/ShoeSection.jsx";
import { getClothData, getShoeData } from "../../redux/features/home/actions.js";
import { setNavbarPath } from "../../redux/features/path/actions.js";
import { setItemSession } from "../../utils/sessionStorage.js";


export const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clothData = useSelector((state) => state.homeReducer.clothData);
    const shoeData = useSelector((state) => state.homeReducer.shoeData);


    const handleSection = (gender) => {
        dispatch(setNavbarPath(gender));
        setItemSession("path", gender);
        navigate(`/${gender}`)
    };


    useEffect(() => {
        dispatch(getClothData());
        dispatch(getShoeData());
    }, [dispatch]);


    return (
        <>
            {shoeData.map((e, i) => (
                <ShoeSection handleSection={handleSection} key={i} data={e} />
            ))}

            {clothData.map((e, i) => (
                <ClothSection handleSection={handleSection} key={i} data={e} />
            ))}
        </>
    );
};

