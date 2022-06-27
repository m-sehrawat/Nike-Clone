import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages/auth/AuthPage";
import { Cart } from "../pages/cart/Cart";
import { Checkout } from "../pages/checkout/Checkout";
import { Description } from "../pages/description/Description";
import { Favourite } from "../pages/favourite/Favourite";
import { Footer } from "../pages/footer/Footer";
import { Home } from "../pages/home/Home";
import { Navbar } from "../pages/navbar/Navbar";
import { Order } from "../pages/orders/Order";
import { Products } from "../pages/products/Products";
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
                <Route path="/checkout" element={<Private><Checkout /></Private>} />
                <Route path="/orders" element={<Private><Order /></Private>} />
            </Routes>

            <Footer />
        </>
    );
};