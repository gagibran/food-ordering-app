import { number, string, func } from "prop-types";
import styles from "../styles/CartItem.module.css";

const CartItem = function ({ food, foodAmount, price, setCartItems, cartItems }) {
    const basePrice = price / foodAmount;

    const addItemHandler = function () {
        const selectedFoodIndex = cartItems.findIndex(item => item.food === food);

        if (selectedFoodIndex < 0) {
            return;
        }
        cartItems[selectedFoodIndex].foodAmount += 1;
        cartItems[selectedFoodIndex].price = basePrice * cartItems[selectedFoodIndex].foodAmount;

        setCartItems([...cartItems]);
    };

    const removeItemHandler = function () {
        const selectedFoodIndex = cartItems.findIndex(item => item.food === food);

        if (selectedFoodIndex < 0) {
            return;
        }

        cartItems[selectedFoodIndex].foodAmount -= 1;
        cartItems[selectedFoodIndex].price = basePrice * cartItems[selectedFoodIndex].foodAmount;

        if (cartItems[selectedFoodIndex].foodAmount < 1) {
            cartItems.splice(selectedFoodIndex, 1);
        }

        setCartItems([...cartItems]);
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
    price: number.isRequired,
    setCartItems: func.isRequired
};

export default CartItem;
