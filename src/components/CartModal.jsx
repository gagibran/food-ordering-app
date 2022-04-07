import { createPortal } from "react-dom";
import styles from "../styles/CartModal.module.css";
import Cart from "./Cart";

const CartModal = function ({ foodName }) {
    return createPortal(
        <div className={`${styles['cart-modal']}`}>
            <Cart foodName={foodName} />
        </div>,
        document.getElementById('appModals')
    );
};

export default CartModal;
