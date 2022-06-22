import { number } from "prop-types";
import Card from "./Card";
import cardStyles from "../styles/Card.module.css";

const RestaurantDescription = function ({ componentYOffset }) {
    return (
        <Card
            customClass={`${cardStyles['card--dark']} ${cardStyles[`card--y-${componentYOffset}px-translated`]}`}
        >
            <h2>Delicious Italian Food!</h2>
            <p>Choose the best of the Italian cousine and have it delivered at your door in no time!</p>
        </Card>
    );
};

RestaurantDescription.propTypes = {
    componentYOffset: number.isRequired
};

export default RestaurantDescription;
