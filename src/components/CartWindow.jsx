import { bool, array, number } from "prop-types";
import Card from "./Card";
import CartWindowSummary from "./CartWindowSummary";
import CartItem from "./CartItem";
import cardStyles from "../styles/Card.module.css";
import cartWindowStyles from "../styles/CartWindow.module.css";

const CartWindow = function ({ cartItems, isCartHidden, cartItemsTotalPrice }) {
    let cartItemsElement = null;

    const submitHandler = function (e) {
        e.preventDefault();
    };

    if (cartItems.length === 0) {
        cartItemsElement = <h2>No items in the shopping cart!</h2>
    } else {
        cartItemsElement = (
            <>
                {cartItems?.map((cartItem, index) => {
                    return (
                        <CartItem
                            key={index}
                            food={cartItem.food}
                            foodAmount={cartItem.foodAmount}
                            price={cartItem.price}
                        />
                    )
                })}
                <CartWindowSummary cartItemsTotalPrice={cartItemsTotalPrice} />
            </>
        );
    }

    return (
        <Card
            isForm={true}
            submitHandler={submitHandler}
            customClass={`${cardStyles['card--absolute']} ${cartWindowStyles['cart-window']} ${isCartHidden ? cardStyles['card--hidden'] : ''}`.trim()}
        >
            {cartItemsElement}
        </Card>
    );
};

CartWindow.propTypes = {
    cartItems: array,
    isCartHidden: bool,
    cartItemsTotalPrice: number.isRequired
};

CartWindow.defaultProps = {
    cartItems: null,
    isCartHidden: false
};

export default CartWindow;
