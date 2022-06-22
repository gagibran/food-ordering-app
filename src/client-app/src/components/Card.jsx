import { node, string, bool, func } from "prop-types";
import styles from "../styles/Card.module.css";

const Card = function ({ children, customClass, isForm, submitHandler }) {
    if (isForm) {
        return (
            <form
                className={`${styles['card']} ${customClass}`.trim()}
                onSubmit={submitHandler}
            >
                {children}
            </form>
        );
    }

    return (
        <div className={`${styles['card']} ${customClass}`.trim()}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: node,
    customClass: string,
    isForm: bool,
    submitHandler: func
};

Card.defaultProps = {
    customClass: '',
    isForm: false,
    submitHandler: undefined
};

export default Card;
