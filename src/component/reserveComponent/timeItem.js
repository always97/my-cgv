import React from 'react';
import { Link } from 'react-router-dom';
import styles from './timeItem.module.css';

const TimeItem = () => {
    return (
        <div className={styles.timeBox}>
            <span className={styles.time}>
                <span>"24:10"</span>
                {/* <span>{time}</span> */}
            </span>
            <span className={styles.count}>"152석"</span>
        </div>
    
    );
};

export default TimeItem;