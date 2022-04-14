import { useState } from "react";
import { object } from "prop-types";
import Cart from "./Cart";
import CartModal from "./CartModal";
import navStyles from "../styles/Nav.module.css";

const Nav = function ({ cartItems }) {
    const cartItemsCount = cartItems?.length > 99 ? '99+' : '0';
    const [isCartHidden, setIsCartHidden] = useState(true);

    const toggleCart = function () {
        setIsCartHidden(!isCartHidden);
        document.body.classList.toggle('no-overflow');
    };

    return (
        <nav className={navStyles['app-nav']}>
            <CartModal
                cartItems={cartItems}
                toggleCart={toggleCart}
                isCartHidden={isCartHidden}
            />
            <h1 className={navStyles['app-nav__logo']}>
                Gabriel's Bistro
            </h1>
            <Cart
                toggleCart={toggleCart}
                cartItemsCount={cartItemsCount}
            />
        </nav>
    );
};

Nav.propTypes = {
    cartItems: object
};

Nav.defaultProps = {
    cartItems: null
};

export default Nav;
