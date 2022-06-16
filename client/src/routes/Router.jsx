import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../components/auth/AuthPage";
import { Cart } from "../components/cart/Cart";
import { Description } from "../components/description/Description";
import { Favourite } from "../components/favourite/Favourite";
import { Footer } from "../components/footer/Footer";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Products } from "../components/products/Products";
import { Private } from "./Private";
import { Public } from "./Public";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allProducts" element={<Products />} />
                <Route path="/men" element={<Products />} />
                <Route path="/women" element={<Products />} />
                <Route path="/kids" element={<Products />} />
                <Route path="/description" element={<Description />} />
                <Route path="/auth" element={<Public><AuthPage /></Public>} />
                <Route path="/favourite" element={<Private><Favourite /></Private>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

            <Footer />
        </>
    );
};