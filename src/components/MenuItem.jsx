import menuItemStyles from "../styles/MenuItem.module.css";
import MenuItemDescription from "./MenuItemDescription";
import MenuItemPrice from "./MenuItemPrice";

const MenuItem = function ({ food, description, price, inputId }) {
    const formHandler = function (e) {
        e.preventDefault();
    };

    return (
        <form
            className={menuItemStyles['menu-item']}
            onSubmit={formHandler}
        >
            <MenuItemDescription
                food={food}
                description={description}
                price={price}
            />
            <MenuItemPrice inputId={inputId} />
            <hr />
        </form>
    );
};

export default MenuItem;
