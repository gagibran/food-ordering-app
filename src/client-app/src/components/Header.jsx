import styles from "../styles/Header.module.css";
import italianFood from "../assets/images/italian-food.jpg";

const Header= () => {
    return (
        <header className={styles['app-header']}>
            <img
                src={italianFood}
                alt="Round cooked pizza by Aurélien Lemasson-Théobald Unsplash."
            />
        </header>
    );
};

export default Header;
