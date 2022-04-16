import { createPortal } from "react-dom";
import { func, array, bool, number } from "prop-types";
import CartOverlay from "./CartOverlay";
import CartWindow from "./CartWindow";

const Cart = function ({ setCartItems, toggleCart, cartItems, isCartHidden, cartItemsTotalPrice }) {
    return createPortal(
        <>
            <CartOverlay
                toggleCart={toggleCart}
                isCartHidden={isCartHidden}
            />
            <CartWindow
                setCartItems={setCartItems}
                cartItems={cartItems}
                isCartHidden={isCartHidden}
                cartItemsTotalPrice={cartItemsTotalPrice}
            />
        </>,
        document.getElementById('appModals')
    );
};

Cart.propTypes = {
    toggleCart: func,
    cartItems: array,
    isCartHidden: bool,
    cartItemsTotalPrice: number.isRequired,
    setCartItems: func.isRequired
};

Cart.defaultProps = {
    toggleCart: undefined,
    cartItems: null,
    isCartHidden: false
};

export default Cart;
