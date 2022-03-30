import styles from "../styles/Header.module.css";

const Header = function () {
    return (
        <header className={styles['app-header']}>
            <img
                src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2040&q=80"
                alt="test"
            />
        </header>
    );
};

export default Header;
