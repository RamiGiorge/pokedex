import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './Gamepad.module.css'

const Gamepad = () => {
    return (
        <div className={styles.gamepadContainer}>
            <h3>Test your memory with this Pokemon memory game</h3>
            <Link to='/game'>
                <FontAwesomeIcon icon='gamepad' size='2x' className={styles.gamepad} />
            </Link>
        </div>
    )
}

export default Gamepad
