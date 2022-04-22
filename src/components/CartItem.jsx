import { number, string, } from "prop-types";
import { useContext } from "react";
import CartContext from "../store/cartContext";
import styles from "../styles/CartItem.module.css";

const CartItem = function ({ food, foodAmount, price }) {
    const basePrice = price / foodAmount;
    const cartContext = useContext(CartContext);

    const addItemHandler = function () {
        const selectedFoodIndex = cartContext.cartItems.findIndex(item => item.food === food);

        if (selectedFoodIndex < 0) {
            return;
        }
        cartContext.cartItems[selectedFoodIndex].foodAmount += 1;
        cartContext.cartItems[selectedFoodIndex].price = basePrice * cartContext.cartItems[selectedFoodIndex].foodAmount;

        cartContext.setCartItems([...cartContext.cartItems]);
    };

    const removeItemHandler = function () {
        const selectedFoodIndex = cartContext.cartItems.findIndex(item => item.food === food);

        if (selectedFoodIndex < 0) {
            return;
        }

        cartContext.cartItems[selectedFoodIndex].foodAmount -= 1;
        cartContext.cartItems[selectedFoodIndex].price = basePrice * cartContext.cartItems[selectedFoodIndex].foodAmount;

        if (cartContext.cartItems[selectedFoodIndex].foodAmount < 1) {
            cartContext.cartItems.splice(selectedFoodIndex, 1);
        }

        cartContext.setCartItems([...cartContext.cartItems]);
    };

    return (
        <div className={styles['cart-item']}>
            <div className={styles['cart-item__info']}>
                <h4>{food}</h4>
                <p>${price.toFixed(2)}</p>
            </div>
            <p>x {foodAmount}</p>
            <div className={styles['cart-item__button-group']}>
                <button type="button" onClick={removeItemHandler}>-</button>
                <button type="button" onClick={addItemHandler}>+</button>
            </div>
            <hr />
        </div>
    );
};

CartItem.propTypes = {
    food: string.isRequired,
    foodAmount: number.isRequired,
    price: number.isRequired
};

export default CartItem;
