import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Products } from "../components/products/Products";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/products" element={<Products />} />
            </Routes>
        </>
    );
};