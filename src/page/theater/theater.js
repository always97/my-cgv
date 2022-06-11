import React from 'react';
import Header from '../../component/homeComponent/header';
import DayItem from '../../component/theaterComponent/dayItem';
import TimeTable from '../../component/theaterComponent/timeTable';
import styles from './theater.module.css';

const Theater = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.main}>
                        <div className={styles.scheduleBox}>
                            <div className={styles.slider}>
                                <ul>
                                    <DayItem/>
                                    <DayItem/>
                                    <DayItem/>
                                    <DayItem/>
                                    <DayItem/>
                                    <DayItem/>
                                    <DayItem/>
                                    <DayItem/>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className={styles.timeTableBox}>
                            <ul>
                                {/* {schedule.map((item)=> <TimeTable key={item.id} item={item}/>)} */}
                                <TimeTable/>
                                <TimeTable/>
                                <TimeTable/>
                            </ul>

                        </div>
                    </div>
                </div>        
            </div>
        </>
    );
};

export default Theater;