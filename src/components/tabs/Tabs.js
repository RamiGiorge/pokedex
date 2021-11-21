import React from 'react';
import styles from './Tabs.module.css'

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className={styles.tabs}>
            {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? styles.activeTab : styles.tab}>{tab}</button>)}
        </div>
    )
}

export default React.memo(Tabs)
