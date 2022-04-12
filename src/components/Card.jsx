import { node, string } from "prop-types";
import styles from "../styles/Card.module.css";

const Card = function ({ children, customClass }) {
    return (
        <div className={`${styles['card']} ${customClass}`.trim()}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: node,
    customClass: string
};

Card.defaultProps = {
    customClass: ''
};

export default Card;
