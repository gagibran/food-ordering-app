import { createPortal } from "react-dom";
import { func, object, bool } from "prop-types";
import CartOverlay from "./CartOverlay";
import CartItems from "./CartItems";

const CartModal = function ({ toggleCart, cartItems, isCartHidden }) {
    return createPortal(
        <>
            <CartOverlay toggleCart={toggleCart} isCartHidden={isCartHidden} />
            <CartItems cartItems={cartItems} isCartHidden={isCartHidden} />
        </>,
        document.getElementById('appModals')
    );
};

CartModal.propTypes = {
    toggleCart: func,
    cartItems: object,
    isCartHidden: bool
};

CartModal.defaultProps = {
    toggleCart: undefined,
    cartItems: null,
    isCartHidden: false
};

export default CartModal;
