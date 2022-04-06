import React from 'react'
import styles from './Fallback.module.css'
import loading from "../../assets/loading.gif";

const LoadingFB = () => {
    return (
        <div className={styles.fallbackContainer}>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default LoadingFB
