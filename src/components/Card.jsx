import styles from "../styles/Card.module.css";

const Card = function ({ children, customClass }) {
    return (
        <div className={styles['card'] + ' ' + customClass}>
            {children}
        </div>
    );
};

export default Card;
