import { useContext } from "react";
import Pill from "./Pill";
import { CartContext } from "../store/cartContext";
import navStyles from "../styles/Nav.module.css";
import pillStyles from "../styles/Pill.module.css";

const CartButton = function () {
    const cartContext = useContext(CartContext);

    const totalItems = cartContext.cartItems.reduce((acc, cartItem) => acc + cartItem.foodAmount, 0);
    let cartItemsCount = '0';
    cartItemsCount = totalItems > 99 ? '99+' : '' + totalItems;

    return (
        <Pill
            onClick={cartContext.toggleCart}
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

export default CartButton;
