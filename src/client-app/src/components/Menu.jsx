import { number } from "prop-types";
import Card from "./Card";
import MenuItem from "./MenuItem";
import cardStyles from "../styles/Card.module.css";

// In a full-stack application, we would fetch this data from a database.
const MENU_ITEMS = [
    {
        id: 1,
        foodName: 'Risotto alla Milanese',
        description: 'Risotto with Parmesan & Saffron.',
        price: 15.99
    },
    {
        id: 2,
        foodName: 'Pasta alla Norma',
        description: 'Sicilian pasta dish with eggplant, marinara and basil.',
        price: 10.99
    },
    {
        id: 3,
        foodName: 'Pizza Margherita',
        description: 'Tomato sauce, mozzarella and basil.',
        price: 11.99
    },
    {
        id: 4,
        foodName: 'Bistecca alla Fiorentina',
        description: 'Porterhouse steak done Florentine style.',
        price: 25.99
    },
    {
        id: 5,
        foodName: 'Ragù alla Bolognese',
        description: 'Pasta with Bolognese sauce.',
        price: 7.99
    },
];

const Menu = function ({ componentYOffset }) {
    return (
        <Card
            customClass={`${cardStyles[`card--y-${componentYOffset}px-translated`]} ${cardStyles['card--less-padding']}`}
        >
            {MENU_ITEMS.map(item => {
                return (
                    <MenuItem
                        key={item.id}
                        inputId={item.id}
                        food={item.foodName}
                        description={item.description}
                        price={item.price}
                    />
                );
            })}
        </Card>
    );
};

Menu.propTypes = {
    componentYOffset: number.isRequired
};

export default Menu;
