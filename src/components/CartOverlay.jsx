import { string, func, bool } from "prop-types";
import styles from "../styles/CartOverlay.module.css";

const CartOverlay = function ({ customClass, onClick, showCart }) {
    return (
        <div
            onClick={onClick}
            className={`${styles['cart-overlay']} ${showCart ? styles['cart-overlay--hidden'] : ''} ${customClass}`.trim()}
        >
        </div>
    );
};

CartOverlay.propTypes = {
    customClass: string,
    clickHandler: func,
    showCart: bool
};

CartOverlay.defaultProps = {
    customClass: '',
    clickHandler: undefined,
    showCart: false
};

export default CartOverlay;
