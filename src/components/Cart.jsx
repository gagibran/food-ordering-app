import { string, func } from "prop-types";
import Pill from "./Pill";
import navStyles from "../styles/Nav.module.css";
import pillStyles from "../styles/Pill.module.css";

const Cart = function ({ cartItemsCount, onClick }) {
    return (
        <Pill
            onClick={onClick}
            customClass={`${pillStyles['pill--clickable']}`}
        >
            <p className={navStyles['app-nav__text']}>Your Cart</p>
            <Pill
                customClass={`${pillStyles['pill--red']} ${pillStyles['pill--small']}`}
            >
                <p>{cartItemsCount}</p>
            </Pill>
        </Pill>
    );
};

Cart.propTypes = {
    cartItemsCount: string.isRequired,
    onClick: func
};

Cart.defaultProps = {
    onClick: undefined
};

export default Cart;
