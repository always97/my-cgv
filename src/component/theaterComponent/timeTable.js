import React from 'react';
import ShowTime from './showTime';
import styles from './timeTable.module.css';

const TimeTable = () => {
    return (
        <div className={styles.cotainer}>
            <div className={styles.times}>
                <div className={styles.infoMovie}>
                    <span className={styles.title}>"영화제목"</span>
                    <span>"장르"</span>
                    <span>"등급"</span>
                    <span>"소요시간"</span>
                    <span>"개봉일 개봉"</span>
                </div>
                {/* {showTimes.map((item)=> <ShowTime key={item.id} item={item} />)} */}
                <ShowTime/>
            </div>
        </div>
    );
};

export default TimeTable;