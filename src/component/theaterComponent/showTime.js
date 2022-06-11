import React from 'react';
import ScheduleItem from './scheduleItem';
import styles from './showTime.module.css';

const ShowTime = () => {

    return (
        <div className={styles.box}>
            <div className={styles.hall}>
                <div className={styles.infoHall}>
                    <ul>
                        <li>?관 ?층 |</li>
                        <li>총 ???석</li>
                    </ul>
                </div>
                <div className={styles.timeTable}>
                    {/* {schecdule.map((item)=> <ScheduleItem key={item.id} item={item} />)} */}
                    <ScheduleItem/>
                </div>
            </div>
        </div>
    );
};

export default ShowTime;