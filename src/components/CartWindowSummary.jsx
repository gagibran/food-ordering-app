import { useContext } from "react";
import CartContext from "../store/cartContext";
import cartWindowSummaryStyles from "../styles/CartWindowSummary.module.css";
import pillStyles from "../styles/Pill.module.css";

const CartWindowSummary = function () {
    const cartContext = useContext(CartContext);

    return (
        <div className={cartWindowSummaryStyles['cart-window-summary']}>
            <h2>Total Amount</h2>
            <p>${cartContext.cartItemsTotalPrice.toFixed(2)}</p>
            <button
                type="submit"
                className={`${pillStyles['pill']} ${pillStyles['pill--red']} ${pillStyles['pill--clickable']} ${cartWindowSummaryStyles['cart-window-summary__submit-button']}`}
            >
                Buy
            </button>
        </div>
    );
};

export default CartWindowSummary;
