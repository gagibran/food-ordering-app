import navStyles from "../styles/Nav.module.css";
import Pill from "./Pill";
import pillStyles from "../styles/Pill.module.css";


const Nav = function ({ cartItems }) {
    return (
        <nav className={navStyles['app-nav']}>
            <h1 className={navStyles['app-nav__logo']}>
                Gabriel's Bistro
            </h1>
            <Pill>
                Your Cart
                <Pill
                    customClass={`${pillStyles['pill--red']} ${pillStyles['pill--small']}`}
                >
                    {cartItems || 0}
                </Pill>
            </Pill>
        </nav>
    );
};

export default Nav;
