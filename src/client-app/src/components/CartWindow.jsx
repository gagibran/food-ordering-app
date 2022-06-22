import { useContext } from "react";
import Card from "./Card";
import CartWindowSummary from "./CartWindowSummary";
import CartItem from "./CartItem";
import { CartContext } from "../store/cartContext";
import cardStyles from "../styles/Card.module.css";
import cartWindowStyles from "../styles/CartWindow.module.css";

const CartWindow= () => {
    const cartContext = useContext(CartContext);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('POST request simulation:', cartContext.cartItems);
    };

    const defineCartItemsElement= () => {
        if (cartContext.cartItems.length === 0) {
            return <h2>No items in the shopping cart!</h2>
        }

        return (
            <>
                {cartContext.cartItems.map(cartItem => {
                    return (
                        <CartItem
                            key={cartItem.id}
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
            customClass={`${cardStyles['card--absolute']} ${cartWindowStyles['cart-window']}`}
        >
            {defineCartItemsElement()}
        </Card>
    );
};

export default CartWindow;
