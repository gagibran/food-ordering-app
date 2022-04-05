import styles from "../styles/MenuItem.module.css";

const MenuItem = function ({ food, description, price }) {
    const formHandler = function (e) {
        e.preventDefault();
    };

    return (
        <form className={styles['menu-item']} onSubmit={formHandler}>
            <div className={styles['menu-item__food']}>
                <h4>{food}</h4>
                <p>{description}</p>
                <p>{price}</p>
            </div>
            <div className={styles['menu-item__price']}>
                <input id="amount" type="number" max={99} min={0} placeholder=" " />
                <label htmlFor="amount">Amount</label>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default MenuItem;
