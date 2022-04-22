import { useContext } from "react";
import Card from "./Card";
import CartWindowSummary from "./CartWindowSummary";
import CartItem from "./CartItem";
import CartContext from "../store/cartContext";
import cardStyles from "../styles/Card.module.css";
import cartWindowStyles from "../styles/CartWindow.module.css";

const CartWindow = function () {
    const cartContext = useContext(CartContext);

    const submitHandler = function (e) {
        e.preventDefault();
        console.log('POST request simulation:', cartContext.cartItems);
    };

    const defineCartItemsElement = function () {
        if (cartContext.cartItems.length === 0) {
            return <h2>No items in the shopping cart!</h2>
        }

        return (
            <>
                {cartContext.cartItems.map((cartItem, index) => {
                    return (
                        <CartItem
                            key={index}
                            food={cartItem.food}
                            foodAmount={cartItem.foodAmount}
                            price={cartItem.price}
                        />
                    )
                })}
                <CartWindowSummary />
            </>
        );
    };

    return (
        <Card
            isForm={true}
            submitHandler={submitHandler}
            customClass={`${cardStyles['card--absolute']} ${cartWindowStyles['cart-window']} ${cartContext.isCartHidden ? cardStyles['card--hidden'] : ''}`.trim()}
        >
            {defineCartItemsElement()}
        </Card>
    );
};

export default CartWindow;
