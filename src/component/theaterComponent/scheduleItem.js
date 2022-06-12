import React from 'react';
import { Link } from 'react-router-dom';
import styles from './scheduleItem.module.css';


const ScheduleItem = (props) => {
    
    const {time,seat} = props;
    
    const times = time.split(' ');

    return (
        <Link to="/reserve">
            <div className={styles.box}>
                <div>
                    {/* <span>{time}</span> */}
                    <span className={styles.time}>{times[1]}</span>
                </div>
                <div>
                    {/* <span>{restSeats}석</span> */}
                    <span className={styles.seat}>{seat}석</span>
                </div>
            </div>
        </Link>
    );
};

export default ScheduleItem;