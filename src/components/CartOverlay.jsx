import { useContext } from "react";
import { string } from "prop-types";
import { CartContext } from "../store/cartContext";
import styles from "../styles/CartOverlay.module.css";

const CartOverlay = function ({ customClass }) {
    const cartContext = useContext(CartContext);

    return (
        <div
            onClick={cartContext.toggleCart}
            className={`${styles['cart-overlay']} ${cartContext.isCartHidden ? styles['cart-overlay--hidden'] : ''} ${customClass}`.trim()}
        >
        </div>
    );
};

CartOverlay.propTypes = {
    customClass: string,
};

CartOverlay.defaultProps = {
    customClass: ''
};

export default CartOverlay;
