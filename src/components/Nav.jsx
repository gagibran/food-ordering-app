import { useState } from "react";
import { array } from "prop-types";
import CartButton from "./CartButton";
import Cart from "./Cart";
import navStyles from "../styles/Nav.module.css";

const Nav = function ({ cartItems }) {
    const [isCartHidden, setIsCartHidden] = useState(true);

    let cartItemsCount = '0';
    const totalItems = cartItems.reduce((acc, cartItem) => acc + cartItem.foodAmount, 0);
    cartItemsCount = totalItems > 99 ? '99+' : '' + totalItems;

    const toggleCart = function () {
        setIsCartHidden(!isCartHidden);
        document.body.classList.toggle('no-overflow');
    };

    return (
        <nav className={navStyles['app-nav']}>
            <Cart
                cartItems={cartItems}
                toggleCart={toggleCart}
                isCartHidden={isCartHidden}
                cartItemsCount={cartItemsCount}
            />
            <h1 className={navStyles['app-nav__logo']}>
                Gabriel's Bistro
            </h1>
            <CartButton
                toggleCart={toggleCart}
                cartItemsCount={cartItemsCount}
            />
        </nav>
    );
};

Nav.propTypes = {
    cartItems: array,
};

export default Nav;
