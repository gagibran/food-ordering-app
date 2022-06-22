import RestaurantDescription from "./RestaurantDescription";
import Menu from "./Menu";
import contentStyles from "../styles/Content.module.css";

const CARDS_Y_OFFSET_BASE = 100;

const Content = function () {
    return (
        <section className={contentStyles['app-content']}>
            <RestaurantDescription componentYOffset={CARDS_Y_OFFSET_BASE * 2} />
            <Menu componentYOffset={CARDS_Y_OFFSET_BASE} />
        </section>
    );
};

export default Content;
