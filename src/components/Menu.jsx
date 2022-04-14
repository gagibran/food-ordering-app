import { number, array, func } from "prop-types";
import Card from "./Card";
import MenuItem from "./MenuItem";
import cardStyles from "../styles/Card.module.css";

const Menu = function ({ componentYOffset, menuItems, cartItems, setCartItems }) {
    return (
        <Card
            customClass={`${cardStyles[`card--y-${componentYOffset}px-translated`]} ${cardStyles['card--less-padding']}`}
        >
            {menuItems.map(item => {
                return (
                    <MenuItem
                        key={item.id}
                        inputId={item.id}
                        food={item.foodName}
                        description={item.description}
                        price={item.price}
                        setCartItems={setCartItems}
                    />
                );
            })}
        </Card>
    );
};

Menu.propTypes = {
    componentYOffset: number.isRequired,
    menuItems: array.isRequired,
    setCartItems: func.isRequired
};

export default Menu;
