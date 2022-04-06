import menuItemPriceStyles from "../styles/MenuItemPrice.module.css";
import pillStyles from "../styles/Pill.module.css";

const MenuItemPrice = function ({ inputId }) {
    return (
        <div className={menuItemPriceStyles['menu-item-price']}>
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
        </div>
    );
};

export default MenuItemPrice;
