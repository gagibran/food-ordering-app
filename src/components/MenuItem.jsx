import { number, string } from "prop-types";
import menuItemStyles from "../styles/MenuItem.module.css";
import MenuItemDescription from "./MenuItemDescription";
import MenuItemPrice from "./MenuItemPrice";

const MenuItem = function ({ food, description, price, inputId }) {
    return (
        <div
            className={menuItemStyles['menu-item']}
        >
            <MenuItemDescription
                food={food}
                description={description}
                price={price}
            />
            <MenuItemPrice inputId={inputId} />
            <hr />
        </div>
    );
};

MenuItem.propTypes = {
    food: string.isRequired,
    description: string.isRequired,
    price: number.isRequired,
    inputId: number.isRequired
};

export default MenuItem;
