import { useState } from "react";
import { array, func } from "prop-types";
import CartButton from "./CartButton";
import Cart from "./Cart";
import navStyles from "../styles/Nav.module.css";

const Nav = function ({ cartItems, setCartItems }) {
    const [isCartHidden, setIsCartHidden] = useState(true);
    let cartItemsCount = '0';
    const totalItems = cartItems.reduce((acc, cartItem) => acc + cartItem.foodAmount, 0);
    const cartItemsTotalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);
    cartItemsCount = totalItems > 99 ? '99+' : '' + totalItems;

    const toggleCart = function () {
        setIsCartHidden(!isCartHidden);
        document.body.classList.toggle('no-overflow');
    };

    return (
        <nav className={navStyles['app-nav']}>
            <Cart
                setCartItems={setCartItems}
                cartItems={cartItems}
                toggleCart={toggleCart}
                isCartHidden={isCartHidden}
                cartItemsTotalPrice={cartItemsTotalPrice}
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
    setCartItems: func.isRequired
};

export default Nav;
