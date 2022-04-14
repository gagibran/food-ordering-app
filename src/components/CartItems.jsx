import { bool, object } from "prop-types";
import Card from "./Card";
import cardStyles from "../styles/Card.module.css";

const CartItems = function ({ cartItems, isCartHidden }) {
    return (
        <Card
            customClass={`${cardStyles['card--absolute']} ${isCartHidden ? cardStyles['card--hidden'] : ''}`.trim()}
        >
            {cartItems?.map(cartItem => {
                return <h3 key={cartItem.id}>{cartItem.itemName}</h3>;
            })}
            <h2>Total Amount</h2>
        </Card>
    );
};

CartItems.propTypes = {
    cartItems: object,
    isCartHidden: bool
};

CartItems.defaultProps = {
    cartItems: null,
    isCartHidden: false
};

export default CartItems;
