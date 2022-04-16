import { number, string } from "prop-types";
import styles from "../styles/CartItem.module.css";

const CartItem = function ({ food, foodAmount, price }) {
    return (
        <div className={styles['cart-item']}>
            <div className={styles['cart-item__info']}>
                <h4>{food}</h4>
                <p>${price}</p>
            </div>
            <p>x {foodAmount}</p>
            <div className={styles['cart-item__button-group']}>
                <button>-</button>
                <button>+</button>
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
