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

export default MenuItemFoodDescription;
