import { useState } from "react";
import { number, string, func } from "prop-types";
import menuItemPriceStyles from "../styles/MenuItemPrice.module.css";
import pillStyles from "../styles/Pill.module.css";

const MenuItemPrice = function ({ inputId, food, price, setCartItems }) {
    const [foodAmount, setFoodAmount] = useState('');

    const formHandler = function (e) {
        e.preventDefault();

        if (foodAmount === '') {
            return;
        }

        setCartItems(previousItems => {
            let previousItemIndex = previousItems.findIndex(previousItem => previousItem.food === food);

            if (previousItemIndex >= 0) {
                previousItems[previousItemIndex].price += +foodAmount * price;
                previousItems[previousItemIndex].foodAmount += +foodAmount;
                return [...previousItems];
            }
            return [
                ...previousItems,
                {
                    food,
                    foodAmount: +foodAmount,
                    price: +foodAmount * price
                }
            ]
        });
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
    setCartItems: func.isRequired,
    price: number.isRequired
};

export default MenuItemPrice;
