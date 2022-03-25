import styles from "../styles/Pill.module.css";

const Pill = function ({ children, customClass }) {
    return (
        <div className={customClass || styles['pill']}>
            {children}
        </div>
    );
};

export default Pill;
