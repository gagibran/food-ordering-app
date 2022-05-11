import { useContext } from "react";
import CartButton from "./CartButton";
import Cart from "./Cart";
import { CartContext } from "../store/cartContext";
import navStyles from "../styles/Nav.module.css";

const Nav = function () {
    const cartContext = useContext(CartContext)

    return (
        <nav className={navStyles['app-nav']}>
            {cartContext.isCartHidden || <Cart />}
            <h1 className={navStyles['app-nav__logo']}>
                Gabriel's Bistro
            </h1>
            <CartButton />
        </nav>
    );
};

export default Nav;
