import CartModal from "./CartModal";
import RestaurantDescription from "./RestaurantDescription";
import Menu from "./Menu";
import contentStyles from "../styles/Content.module.css";

const CARDS_Y_OFFSET_BASE = 100;
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

const Content = function () {
    return (
        <section className={contentStyles['app-content']}>
            <CartModal foodName="test" />
            <RestaurantDescription componentYOffset={CARDS_Y_OFFSET_BASE * 2} />
            <Menu componentYOffset={CARDS_Y_OFFSET_BASE} menuItems={MENU_ITEMS} />
        </section>
    );
};

export default Content;
