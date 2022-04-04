import styles from "../styles/MenuItem.module.css";

const MenuItem = function ({ food, description, price }) {
    return (
        <div className={styles['menu-item']}>
            <div className={styles['menu-item__food']}>
                <h4>{food}</h4>
                <p>{description}</p>
                <p>{price}</p>
            </div>
            <div className={styles['menu-item__price']}>
                <label htmlFor="amount">Amount</label>
                <input type="number" max={99} min={0} value={0} />
                <button type="button">Add</button>
            </div>
        </div>
    );
};

export default MenuItem;
