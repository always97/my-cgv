import React from 'react';
import ScheduleItem from './scheduleItem';
import styles from './showTime.module.css';

const ShowTime = (props) => {

    const {item} = props;

    

    return (
        <div className={styles.box}>
            <div className={styles.hall}>
                <div className={styles.infoHall}>
                    <ul>
                        <li>{item[0].theaterName} {item[0].theaterFloor} 층 |</li>
                        <li>총 20 석</li>
                    
                    </ul>
                </div>
                <div className={styles.timeTable}>
                    {item.map((item)=> <ScheduleItem key={item.id} seat={item.remainSeat} time={item.startTime} />)}
                    
                </div>
            </div>
        </div>
    );
};

export default ShowTime;