import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Products } from "../components/products/Products";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/allProducts" element={<Products />} />
                <Route path="/men" element={<Products />} />
                <Route path="/women" element={<Products />} />
                <Route path="/kids" element={<Products />} />
            </Routes>
        </>
    );
};