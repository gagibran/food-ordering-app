import { node, string, func } from "prop-types";
import styles from "../styles/Pill.module.css";

const Pill = ({ children, customClass, onClick }) => {
    return (
        <div onClick={onClick} className={`${styles['pill']} ${customClass}`.trim()}>
            {children}
        </div>
    );
};

Pill.propTypes = {
    children: node,
    customClass: string,
    onClick: func
};

Pill.defaultProps = {
    customClass: '',
    onClick: undefined
};

export default Pill;
