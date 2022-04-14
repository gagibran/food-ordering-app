import { bool, array, string } from "prop-types";
import Card from "./Card";
import cardStyles from "../styles/Card.module.css";

const CartWindow = function ({ cartItems, isCartHidden, cartItemsCount }) {
    return (
        <Card
            customClass={`${cardStyles['card--absolute']} ${isCartHidden ? cardStyles['card--hidden'] : ''}`.trim()}
        >
            {cartItems?.map((cartItem, index) => {
                return <h3 key={index}>{cartItem.food}, {cartItem.foodAmount}, {cartItem.price}</h3>;
            })}
            <h2>Total Amount: {cartItemsCount}</h2>
        </Card>
    );
};

CartWindow.propTypes = {
    cartItems: array,
    isCartHidden: bool,
    cartItemsCount: string.isRequired
};

CartWindow.defaultProps = {
    cartItems: null,
    isCartHidden: false
};

export default CartWindow;
