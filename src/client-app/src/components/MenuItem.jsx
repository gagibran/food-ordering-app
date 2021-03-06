import { number, string } from "prop-types";
import menuItemStyles from "../styles/MenuItem.module.css";
import MenuItemDescription from "./MenuItemDescription";
import MenuItemPrice from "./MenuItemPrice";

const MenuItem = ({ food, description, price, inputId }) => {
    return (
        <div className={menuItemStyles['menu-item']}>
            <MenuItemDescription
                food={food}
                description={description}
                price={price}
            />
            <MenuItemPrice
                inputId={inputId}
                food={food}
                price={price}
            />
            <hr />
        </div>
    );
};

MenuItem.propTypes = {
    food: string.isRequired,
    description: string.isRequired,
    price: number.isRequired,
    inputId: string.isRequired
};

export default MenuItem;
