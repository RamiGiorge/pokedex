import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/game/Card'
import Button from '../components/UI/Button'
import styles from '../components/game/Game.module.css'

const images = [
    { "src": "./assets/pikachu.png" },
    { "src": "./assets/butterfree.png" },
    { "src": "./assets/mankey.png" },
    { "src": "./assets/parasect.png" },
    { "src": "./assets/venonat.png" },
    { "src": "./assets/puff.png" }
]

const Game = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [firstChoice, setFirstChoice] = useState(null)
    const [secondChoice, setSecondChoice] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        shuffle()
    }, [])

    useEffect(() => {
        if (firstChoice && secondChoice) {
            setDisabled(true)
            if (firstChoice.src === secondChoice.src) {
                setCards(prevCards => prevCards.map((card) => (
                    card.src === firstChoice.src ? { ...card, matched: true } : card
                )))
            }
            setTimeout(() => {
                reset()
            }, 1000);
        }
    }, [firstChoice, secondChoice])

    const shuffle = () => {
        const shuffledCards = [...images, ...images].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
        setCards(shuffledCards)
        setFirstChoice(null)
        setSecondChoice(null)
        setTurns(0)
    }

    const choiceHandler = (card) => {
        if (!disabled) firstChoice ? setSecondChoice(card) : setFirstChoice(card)
    }

    const reset = () => {
        setFirstChoice(null)
        setSecondChoice(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    return (
        <div className={styles.game}>
            <div className={styles.btnContainer}>
                <Button handleClick={() => navigate('/')}>Home</Button>
                <Button handleClick={shuffle}>New Game</Button>
            </div>
            <p>Attempts - {turns}</p>
            <div className={styles.cardGrid}>
                {cards.map((card) => (
                    <Card card={card} key={card.id}
                        choiceHandler={choiceHandler}
                        flipped={card === firstChoice || card === secondChoice || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    )
}

export default Game
