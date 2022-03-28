import styles from "../styles/Pill.module.css";

const Pill = function ({ children, customClass }) {
    return (
        <div className={styles['pill'] + ' ' + customClass}>
            {children}
        </div>
    );
};

export default Pill;
