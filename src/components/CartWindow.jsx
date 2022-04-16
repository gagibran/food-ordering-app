import { bool, array, number, func } from "prop-types";
import Card from "./Card";
import CartWindowSummary from "./CartWindowSummary";
import CartItem from "./CartItem";
import cardStyles from "../styles/Card.module.css";
import cartWindowStyles from "../styles/CartWindow.module.css";

const CartWindow = function ({ setCartItems, cartItems, isCartHidden, cartItemsTotalPrice }) {
    const submitHandler = function (e) {
        e.preventDefault();
        console.log('POST request simulation:', cartItems);
    };

    const defineCartItemsElement = function () {
        if (cartItems.length === 0) {
            return <h2>No items in the shopping cart!</h2>
        }

        return (
            <>
                {cartItems.map((cartItem, index) => {
                    return (
                        <CartItem
                            key={index}
                            food={cartItem.food}
                            foodAmount={cartItem.foodAmount}
                            price={cartItem.price}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    )
                })}
                <CartWindowSummary cartItemsTotalPrice={cartItemsTotalPrice} />
            </>
        );
    };

    return (
        <Card
            isForm={true}
            submitHandler={submitHandler}
            customClass={`${cardStyles['card--absolute']} ${cartWindowStyles['cart-window']} ${isCartHidden ? cardStyles['card--hidden'] : ''}`.trim()}
        >
            {defineCartItemsElement()}
        </Card>
    );
};

CartWindow.propTypes = {
    cartItems: array,
    isCartHidden: bool,
    cartItemsTotalPrice: number.isRequired,
    setCartItems: func.isRequired
};

CartWindow.defaultProps = {
    cartItems: null,
    isCartHidden: false
};

export default CartWindow;
