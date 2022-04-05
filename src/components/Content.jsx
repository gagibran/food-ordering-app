import Card from "./Card";
import contentStyles from "../styles/Content.module.css";
import cardStyles from "../styles/Card.module.css";
import MenuItem from "./MenuItem";

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
            <Card customClass={`${cardStyles['card--dark']} ${cardStyles[`card--y-${CARDS_Y_OFFSET_BASE * 2}px-translated`]}`}>
                <h2>Delicious Italian Food!</h2>
                <p>Choose the best of the Italian cousine and have it delivered at your door in no time!</p>
            </Card>
            <Card customClass={`${cardStyles[`card--y-${CARDS_Y_OFFSET_BASE}px-translated`]} ${cardStyles['card--less-padding']}`}>
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
        </section>
    );
};

export default Content;
