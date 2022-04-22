import CartButton from "./CartButton";
import Cart from "./Cart";
import navStyles from "../styles/Nav.module.css";

const Nav = function () {
    return (
        <nav className={navStyles['app-nav']}>
            <Cart />
            <h1 className={navStyles['app-nav__logo']}>
                Gabriel's Bistro
            </h1>
            <CartButton />
        </nav>
    );
};

export default Nav;
