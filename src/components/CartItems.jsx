import { bool, object } from "prop-types";
import Card from "./Card";
import cardStyles from "../styles/Card.module.css";

const CartItems = function ({ cartItems, showCart }) {
    return (
        <Card
            customClass={`${cardStyles['card--absolute']} ${showCart ? cardStyles['card--hidden'] : ''}`.trim()}
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
    showCart: bool
};

CartItems.defaultProps = {
    cartItems: null,
    showCart: false
};

export default CartItems;
