import { createPortal } from "react-dom";
import { func, array, bool, string } from "prop-types";
import CartOverlay from "./CartOverlay";
import CartWindow from "./CartWindow";

const Cart = function ({ toggleCart, cartItems, isCartHidden, cartItemsCount }) {
    return createPortal(
        <>
            <CartOverlay
                toggleCart={toggleCart}
                isCartHidden={isCartHidden}
            />
            <CartWindow
                cartItems={cartItems}
                isCartHidden={isCartHidden}
                cartItemsCount={cartItemsCount}
            />
        </>,
        document.getElementById('appModals')
    );
};

Cart.propTypes = {
    toggleCart: func,
    cartItems: array,
    isCartHidden: bool,
    cartItemsCount: string.isRequired
};

Cart.defaultProps = {
    toggleCart: undefined,
    cartItems: null,
    isCartHidden: false
};

export default Cart;
