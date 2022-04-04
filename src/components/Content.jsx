import Card from "./Card";
import contentStyles from "../styles/Content.module.css";
import cardStyles from "../styles/Card.module.css";
import MenuItem from "./MenuItem";

const Content = function () {
    const CARDS_Y_OFFSET_BASE = 100;
    return (
        <section className={contentStyles['app-content']}>
            <Card customClass={`${cardStyles['card--dark']} ${cardStyles[`card--y-${CARDS_Y_OFFSET_BASE * 2}px-translated`]}`}>
                <h2>Delicious Food!</h2>
                <p>Choose some delicious food and have it delivered at your door in no time!</p>
            </Card>
            <Card customClass={`${cardStyles[`card--y-${CARDS_Y_OFFSET_BASE}px-translated`]} ${cardStyles['card--less-padding']}`}>
                <MenuItem food={'test'} description={'sdsdfsdfsdfsdfsdfsdf'} price={229} />
            </Card>
        </section>
    );
};

export default Content;
