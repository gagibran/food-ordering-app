import navStyles from "../styles/Nav.module.css";
import Pill from "./Pill";
import pillStyles from "../styles/Pill.module.css";

const Nav = function ({ cartItems }) {
    let normalizedCartItems = '0';
    if (cartItems) {
        normalizedCartItems = cartItems > 99 ? '99+' : '' + cartItems;
    }
    return (
        <nav className={navStyles['app-nav']}>
            <h1 className={navStyles['app-nav__logo']}>
                Gabriel's Bistro
            </h1>
            <Pill customClass={`${pillStyles['pill--clickable']}`}>
                <p className={navStyles['app-nav__text']}>Your Cart</p>
                <Pill
                    customClass={`${pillStyles['pill--red']} ${pillStyles['pill--small']}`}
                >
                    <p>{normalizedCartItems}</p>
                </Pill>
            </Pill>
        </nav>
    );
};

export default Nav;
