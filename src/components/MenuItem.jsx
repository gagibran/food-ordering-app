import menuItemStyles from "../styles/MenuItem.module.css";
import pillStyles from "../styles/Pill.module.css";

const MenuItem = function ({ food, description, price, inputId }) {
    const formHandler = function (e) {
        e.preventDefault();
    };

    return (
        <form className={menuItemStyles['menu-item']} onSubmit={formHandler}>
            <div className={menuItemStyles['menu-item__food']}>
                <h4>{food}</h4>
                <p>{description}</p>
                <p>${price}</p>
            </div>
            <div className={menuItemStyles['menu-item__price']}>
                <input 
                    id={'amount' + inputId} 
                    type="number"
                    max={99}
                    min={1}
                    placeholder=" "
                />
                <label htmlFor={'amount' + inputId}>Amount</label>
                <button
                    className={`${menuItemStyles['menu-item__button']} ${pillStyles['pill']} ${pillStyles['pill--red']} ${pillStyles['pill--clickable']}`} 
                    type="submit"
                >
                    Add
                </button>
            </div>
            <hr />
        </form>
    );
};

export default MenuItem;
