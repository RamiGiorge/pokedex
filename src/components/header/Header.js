import styles from './Header.module.css'

const Header = ({ title }) => {
    const text = title.toUpperCase().split('')

    return (
        <div className={styles.title}>
            {text.map((letter, i) => <h1 key={i} className={styles.letter}>{letter}</h1>)}
        </div>
    )
}

export default Header
