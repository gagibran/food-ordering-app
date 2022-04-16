import { number } from "prop-types";
import cartWindowSummaryStyles from "../styles/CartWindowSummary.module.css";
import pillStyles from "../styles/Pill.module.css";

const CartWindowSummary = function ({ cartItemsTotalPrice }) {
    return (
        <div className={cartWindowSummaryStyles['cart-window-summary']}>
            <h2>Total Amount</h2>
            <p>${cartItemsTotalPrice.toFixed(2)}</p>
            <button
                type="submit"
                className={`${pillStyles['pill']} ${pillStyles['pill--red']} ${pillStyles['pill--clickable']} ${cartWindowSummaryStyles['cart-window-summary__submit-button']}`}
            >
                Buy
            </button>
        </div>
    );
};

CartWindowSummary.propTypes = {
    cartItemsTotalPrice: number.isRequired
};

export default CartWindowSummary;
