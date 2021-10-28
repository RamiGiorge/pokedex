import styles from './Button.module.css'

const Button = ({ handleClick }) => {
    return (
        <div className={styles.btnWrapper}>
            <button onClick={handleClick} className={styles.backBtn}>Back</button>
        </div>
    )
}

export default Button
