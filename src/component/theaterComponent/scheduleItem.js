import React from 'react';
import styles from './scheduleItem.module.css';


const ScheduleItem = () => {
    
    // const {time,restSeats} = props;
    
    return (
        <div className={styles.box}>
            <div>
                {/* <span>{time}</span> */}
                <span className={styles.time}>"시간 10:00"</span>
            </div>
            <div>
                {/* <span>{restSeats}석</span> */}
                <span className={styles.seat}>"120석"</span>
            </div>
        </div>
    );
};

export default ScheduleItem;