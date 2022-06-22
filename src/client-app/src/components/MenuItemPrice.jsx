import { useContext, useState } from "react";
import { number, string } from "prop-types";
import { CartContext } from "../store/cartContext";
import menuItemPriceStyles from "../styles/MenuItemPrice.module.css";
import pillStyles from "../styles/Pill.module.css";

const MenuItemPrice = function ({ inputId, food, price }) {
    const cartContext = useContext(CartContext);
    const [foodAmount, setFoodAmount] = useState('');

    const addItemToCart = function (previousItems) {
        let previousItemIndex = previousItems.findIndex(previousItem => previousItem.food === food);

        if (previousItemIndex >= 0) {
            previousItems[previousItemIndex].price += +foodAmount * price;
            previousItems[previousItemIndex].foodAmount += +foodAmount;
            return [...previousItems];
        }

        return [
            ...previousItems,
            {
                id: inputId,
                food,
                foodAmount: +foodAmount,
                price: +foodAmount * price
            }
        ]
    };

    const formHandler = function (e) {
        e.preventDefault();

        if (foodAmount === '') {
            return;
        }

        cartContext.setCartItems(addItemToCart);
        setFoodAmount('');
    };

    const inputChangeHandler = function (e) {
        setFoodAmount(e.target.value);
    };

    return (
        <form
            className={menuItemPriceStyles['menu-item-price']}
            onSubmit={formHandler}
        >
            <input
                id={'amount' + inputId}
                type="number"
                max={99}
                min={1}
                placeholder=" "
                onChange={inputChangeHandler}
                value={foodAmount}
            />
            <label
                htmlFor={'amount' + inputId}
            >
                Amount
            </label>
            <button
                className={`${menuItemPriceStyles['menu-item-price__button']} ${pillStyles['pill']} ${pillStyles['pill--red']} ${pillStyles['pill--clickable']}`}
                type="submit"
            >
                Add
            </button>
        </form>
    );
};

MenuItemPrice.propTypes = {
    inputId: number.isRequired,
    food: string.isRequired,
    price: number.isRequired
};

export default MenuItemPrice;
