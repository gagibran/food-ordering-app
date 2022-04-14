import { string, func } from "prop-types";
import Pill from "./Pill";
import navStyles from "../styles/Nav.module.css";
import pillStyles from "../styles/Pill.module.css";

const Cart = function ({ cartItemsCount, toggleCart }) {
    return (
        <Pill
            onClick={toggleCart}
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
    toggleCart: func
};

Cart.defaultProps = {
    toggleCart: undefined
};

export default Cart;
