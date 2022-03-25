import styles from "../styles/Nav.module.css";

const Nav = function () {
    return (
        <nav className={styles['app-nav']}>
            <h1 className={styles['app-nav__logo']}>Gabriel's Bistro</h1>
        </nav>
    );
};

export default Nav;
