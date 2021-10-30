import styles from './Button.module.css'

const Button = ({ handleClick, children }) => {
    return (
        <div className={styles.btnWrapper}>
            <button onClick={handleClick} className={styles.backBtn}>{children}</button>
        </div>
    )
}

export default Button
