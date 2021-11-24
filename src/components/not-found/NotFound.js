import React from 'react'
import { Link } from 'react-router-dom'
import LoadingFB from '../fallback/LoadingFB'
import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <LoadingFB />
            <h2>Where are you going?!</h2>
            <h3>Let's take you back <Link to='/'>HOME</Link></h3>
        </div>
    )
}

export default NotFound
