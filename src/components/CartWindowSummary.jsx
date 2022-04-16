import { number } from "prop-types";
import Pill from "./Pill";
import cartWindowSummaryStyles from "../styles/CartWindowSummary.module.css";
import pillStyles from "../styles/Pill.module.css";

const CartWindowSummary = function ({ cartItemsTotalPrice }) {
    return (
        <div className={cartWindowSummaryStyles['cart-window-summary']}>
            <h2>Total Amount</h2>
            <p>${cartItemsTotalPrice.toFixed(2)}</p>
            <Pill
                customClass={`${pillStyles['pill--red']} ${pillStyles['pill--clickable']} ${cartWindowSummaryStyles['cart-window-summary__submit-button']}`}
            >
                Buy
            </Pill>
        </div>
    );
};

CartWindowSummary.propTypes = {
    cartItemsTotalPrice: number.isRequired
};

export default CartWindowSummary;
