import React from 'react'
import styles from './Fallback.module.css'

const LoadingFB = () => {
    return (
        <div className={styles.fallbackContainer}>
            <img src="./assets/loading.gif" alt="loading" />
        </div>
    )
}

export default LoadingFB
