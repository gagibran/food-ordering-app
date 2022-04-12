import { useState } from "react";
import { object } from "prop-types";
import Cart from "./Cart";
import CartModal from "./CartModal";
import navStyles from "../styles/Nav.module.css";

const Nav = function ({ cartItems }) {
    const cartItemsCount = cartItems?.length > 99 ? '99+' : '0';
    const [isCartModalHidden, setIsCartModalHidden] = useState(true);

    const toggleCartModal = function () {
        setIsCartModalHidden(!isCartModalHidden);
        document.body.classList.toggle('no-overflow');
    };

    return (
        <nav className={navStyles['app-nav']}>
            <CartModal
                cartItems={cartItems}
                onClick={toggleCartModal}
                showCart={isCartModalHidden}
            />
            <h1 className={navStyles['app-nav__logo']}>
                Gabriel's Bistro
            </h1>
            <Cart
                onClick={toggleCartModal}
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
