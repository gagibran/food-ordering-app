import { createPortal } from "react-dom";
import { func, object, bool } from "prop-types";
import CartOverlay from "./CartOverlay";
import CartItems from "./CartItems";

const CartModal = function ({ onClick, cartItems, showCart }) {
    return createPortal(
        <>
            <CartOverlay onClick={onClick} showCart={showCart} />
            <CartItems cartItems={cartItems} showCart={showCart} />
        </>,
        document.getElementById('appModals')
    );
};

CartModal.propTypes = {
    onClick: func,
    cartItems: object,
    showCart: bool
};

CartModal.defaultProps = {
    onClick: undefined,
    cartItems: null,
    showCart: false
};

export default CartModal;
