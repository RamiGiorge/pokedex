import styles from './Game.module.css'

const Card = ({ card, choiceHandler, flipped }) => {

    return (
        <div className={styles.memoryCard} >
            <div className={flipped ? styles.flipped : ''}>
                <img src={card.src} alt="front" className={styles.front} />
                <img src="./assets/back.png" alt="back" onClick={() => choiceHandler(card)} className={styles.back} />
            </div>
        </div>
    )
}

export default Card
