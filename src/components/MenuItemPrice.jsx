import { number } from "prop-types";
import menuItemPriceStyles from "../styles/MenuItemPrice.module.css";
import pillStyles from "../styles/Pill.module.css";

const MenuItemPrice = function ({ inputId }) {
    const formHandler = function (e) {
        e.preventDefault();
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
    inputId: number.isRequired
};

export default MenuItemPrice;
