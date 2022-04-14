import { string, func, bool } from "prop-types";
import styles from "../styles/CartOverlay.module.css";

const CartOverlay = function ({ customClass, toggleCart, isCartHidden }) {
    return (
        <div
            onClick={toggleCart}
            className={`${styles['cart-overlay']} ${isCartHidden ? styles['cart-overlay--hidden'] : ''} ${customClass}`.trim()}
        >
        </div>
    );
};

CartOverlay.propTypes = {
    customClass: string,
    toggleCart: func,
    isCartHidden: bool
};

CartOverlay.defaultProps = {
    customClass: '',
    toggleCart: undefined,
    isCartHidden: false
};

export default CartOverlay;
