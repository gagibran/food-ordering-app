import { number, string } from "prop-types";
import styles from "../styles/MenuItemDescription.module.css";

const MenuItemFoodDescription = function ({ food, description, price }) {
    return (
        <div className={styles['menu-item-description']}>
            <h4>{food}</h4>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    );
};

MenuItemFoodDescription.propTypes = {
    food: string.isRequired,
    description: string.isRequired,
    price: number.isRequired,
};

export default MenuItemFoodDescription;
